// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/api/v2/listener.proto" (package "envoy.api.v2", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { AccessLog } from "../../config/filter/accesslog/v2/accesslog";
import { ApiListener } from "../../config/listener/v2/api_listener";
import { UdpListenerConfig } from "./listener/udp_listener_config";
import { TrafficDirection } from "./core/base";
import { SocketOption } from "./core/socket_option";
import { Duration } from "../../../google/protobuf/duration";
import { ListenerFilter } from "./listener/listener_components";
import { Metadata } from "./core/base";
import { UInt32Value } from "../../../google/protobuf/wrappers";
import { BoolValue } from "../../../google/protobuf/wrappers";
import { FilterChain } from "./listener/listener_components";
import { Address } from "./core/address";
// [#protodoc-title: Listener configuration]
// Listener :ref:`configuration overview <config_listeners>`

/**
 * [#next-free-field: 23]
 *
 * @generated from protobuf message envoy.api.v2.Listener
 */
export interface Listener {
    /**
     * The unique name by which this listener is known. If no name is provided,
     * Envoy will allocate an internal UUID for the listener. If the listener is to be dynamically
     * updated or removed via :ref:`LDS <config_listeners_lds>` a unique name must be provided.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * The address that the listener should listen on. In general, the address must be unique, though
     * that is governed by the bind rules of the OS. E.g., multiple listeners can listen on port 0 on
     * Linux as the actual port will be allocated by the OS.
     *
     * @generated from protobuf field: envoy.api.v2.core.Address address = 2;
     */
    address?: Address;
    /**
     * A list of filter chains to consider for this listener. The
     * :ref:`FilterChain <envoy_api_msg_listener.FilterChain>` with the most specific
     * :ref:`FilterChainMatch <envoy_api_msg_listener.FilterChainMatch>` criteria is used on a
     * connection.
     *
     * Example using SNI for filter chain selection can be found in the
     * :ref:`FAQ entry <faq_how_to_setup_sni>`.
     *
     * @generated from protobuf field: repeated envoy.api.v2.listener.FilterChain filter_chains = 3;
     */
    filterChains: FilterChain[];
    /**
     * If a connection is redirected using *iptables*, the port on which the proxy
     * receives it might be different from the original destination address. When this flag is set to
     * true, the listener hands off redirected connections to the listener associated with the
     * original destination address. If there is no listener associated with the original destination
     * address, the connection is handled by the listener that receives it. Defaults to false.
     *
     * .. attention::
     *
     *   This field is deprecated. Use :ref:`an original_dst <config_listener_filters_original_dst>`
     *   :ref:`listener filter <envoy_api_field_Listener.listener_filters>` instead.
     *
     *   Note that hand off to another listener is *NOT* performed without this flag. Once
     *   :ref:`FilterChainMatch <envoy_api_msg_listener.FilterChainMatch>` is implemented this flag
     *   will be removed, as filter chain matching can be used to select a filter chain based on the
     *   restored destination address.
     *
     * @deprecated
     * @generated from protobuf field: google.protobuf.BoolValue use_original_dst = 4 [deprecated = true];
     */
    useOriginalDst?: BoolValue;
    /**
     * Soft limit on size of the listener’s new connection read and write buffers.
     * If unspecified, an implementation defined default is applied (1MiB).
     *
     * @generated from protobuf field: google.protobuf.UInt32Value per_connection_buffer_limit_bytes = 5;
     */
    perConnectionBufferLimitBytes?: UInt32Value;
    /**
     * Listener metadata.
     *
     * @generated from protobuf field: envoy.api.v2.core.Metadata metadata = 6;
     */
    metadata?: Metadata;
    /**
     * [#not-implemented-hide:]
     *
     * @generated from protobuf field: envoy.api.v2.Listener.DeprecatedV1 deprecated_v1 = 7;
     */
    deprecatedV1?: Listener_DeprecatedV1;
    /**
     * The type of draining to perform at a listener-wide level.
     *
     * @generated from protobuf field: envoy.api.v2.Listener.DrainType drain_type = 8;
     */
    drainType: Listener_DrainType;
    /**
     * Listener filters have the opportunity to manipulate and augment the connection metadata that
     * is used in connection filter chain matching, for example. These filters are run before any in
     * :ref:`filter_chains <envoy_api_field_Listener.filter_chains>`. Order matters as the
     * filters are processed sequentially right after a socket has been accepted by the listener, and
     * before a connection is created.
     * UDP Listener filters can be specified when the protocol in the listener socket address in
     * :ref:`protocol <envoy_api_field_core.SocketAddress.protocol>` is :ref:`UDP
     * <envoy_api_enum_value_core.SocketAddress.Protocol.UDP>`.
     * UDP listeners currently support a single filter.
     *
     * @generated from protobuf field: repeated envoy.api.v2.listener.ListenerFilter listener_filters = 9;
     */
    listenerFilters: ListenerFilter[];
    /**
     * The timeout to wait for all listener filters to complete operation. If the timeout is reached,
     * the accepted socket is closed without a connection being created unless
     * `continue_on_listener_filters_timeout` is set to true. Specify 0 to disable the
     * timeout. If not specified, a default timeout of 15s is used.
     *
     * @generated from protobuf field: google.protobuf.Duration listener_filters_timeout = 15;
     */
    listenerFiltersTimeout?: Duration;
    /**
     * Whether a connection should be created when listener filters timeout. Default is false.
     *
     * .. attention::
     *
     *   Some listener filters, such as :ref:`Proxy Protocol filter
     *   <config_listener_filters_proxy_protocol>`, should not be used with this option. It will cause
     *   unexpected behavior when a connection is created.
     *
     * @generated from protobuf field: bool continue_on_listener_filters_timeout = 17;
     */
    continueOnListenerFiltersTimeout: boolean;
    /**
     * Whether the listener should be set as a transparent socket.
     * When this flag is set to true, connections can be redirected to the listener using an
     * *iptables* *TPROXY* target, in which case the original source and destination addresses and
     * ports are preserved on accepted connections. This flag should be used in combination with
     * :ref:`an original_dst <config_listener_filters_original_dst>` :ref:`listener filter
     * <envoy_api_field_Listener.listener_filters>` to mark the connections' local addresses as
     * "restored." This can be used to hand off each redirected connection to another listener
     * associated with the connection's destination address. Direct connections to the socket without
     * using *TPROXY* cannot be distinguished from connections redirected using *TPROXY* and are
     * therefore treated as if they were redirected.
     * When this flag is set to false, the listener's socket is explicitly reset as non-transparent.
     * Setting this flag requires Envoy to run with the *CAP_NET_ADMIN* capability.
     * When this flag is not set (default), the socket is not modified, i.e. the transparent option
     * is neither set nor reset.
     *
     * @generated from protobuf field: google.protobuf.BoolValue transparent = 10;
     */
    transparent?: BoolValue;
    /**
     * Whether the listener should set the *IP_FREEBIND* socket option. When this
     * flag is set to true, listeners can be bound to an IP address that is not
     * configured on the system running Envoy. When this flag is set to false, the
     * option *IP_FREEBIND* is disabled on the socket. When this flag is not set
     * (default), the socket is not modified, i.e. the option is neither enabled
     * nor disabled.
     *
     * @generated from protobuf field: google.protobuf.BoolValue freebind = 11;
     */
    freebind?: BoolValue;
    /**
     * Additional socket options that may not be present in Envoy source code or
     * precompiled binaries.
     *
     * @generated from protobuf field: repeated envoy.api.v2.core.SocketOption socket_options = 13;
     */
    socketOptions: SocketOption[];
    /**
     * Whether the listener should accept TCP Fast Open (TFO) connections.
     * When this flag is set to a value greater than 0, the option TCP_FASTOPEN is enabled on
     * the socket, with a queue length of the specified size
     * (see `details in RFC7413 <https://tools.ietf.org/html/rfc7413#section-5.1>`_).
     * When this flag is set to 0, the option TCP_FASTOPEN is disabled on the socket.
     * When this flag is not set (default), the socket is not modified,
     * i.e. the option is neither enabled nor disabled.
     *
     * On Linux, the net.ipv4.tcp_fastopen kernel parameter must include flag 0x2 to enable
     * TCP_FASTOPEN.
     * See `ip-sysctl.txt <https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt>`_.
     *
     * On macOS, only values of 0, 1, and unset are valid; other values may result in an error.
     * To set the queue length on macOS, set the net.inet.tcp.fastopen_backlog kernel parameter.
     *
     * @generated from protobuf field: google.protobuf.UInt32Value tcp_fast_open_queue_length = 12;
     */
    tcpFastOpenQueueLength?: UInt32Value;
    /**
     * Specifies the intended direction of the traffic relative to the local Envoy.
     * This property is required on Windows for listeners using the original destination filter,
     * see :ref:`Original Destination <config_listener_filters_original_dst>`.
     *
     * @generated from protobuf field: envoy.api.v2.core.TrafficDirection traffic_direction = 16;
     */
    trafficDirection: TrafficDirection;
    /**
     * If the protocol in the listener socket address in :ref:`protocol
     * <envoy_api_field_core.SocketAddress.protocol>` is :ref:`UDP
     * <envoy_api_enum_value_core.SocketAddress.Protocol.UDP>`, this field specifies the actual udp
     * listener to create, i.e. :ref:`udp_listener_name
     * <envoy_api_field_listener.UdpListenerConfig.udp_listener_name>` = "raw_udp_listener" for
     * creating a packet-oriented UDP listener. If not present, treat it as "raw_udp_listener".
     *
     * @generated from protobuf field: envoy.api.v2.listener.UdpListenerConfig udp_listener_config = 18;
     */
    udpListenerConfig?: UdpListenerConfig;
    /**
     * Used to represent an API listener, which is used in non-proxy clients. The type of API
     * exposed to the non-proxy application depends on the type of API listener.
     * When this field is set, no other field except for :ref:`name<envoy_api_field_Listener.name>`
     * should be set.
     *
     * .. note::
     *
     *  Currently only one ApiListener can be installed; and it can only be done via bootstrap config,
     *  not LDS.
     *
     * [#next-major-version: In the v3 API, instead of this messy approach where the socket
     * listener fields are directly in the top-level Listener message and the API listener types
     * are in the ApiListener message, the socket listener messages should be in their own message,
     * and the top-level Listener should essentially be a oneof that selects between the
     * socket listener and the various types of API listener. That way, a given Listener message
     * can structurally only contain the fields of the relevant type.]
     *
     * @generated from protobuf field: envoy.config.listener.v2.ApiListener api_listener = 19;
     */
    apiListener?: ApiListener;
    /**
     * The listener's connection balancer configuration, currently only applicable to TCP listeners.
     * If no configuration is specified, Envoy will not attempt to balance active connections between
     * worker threads.
     *
     * @generated from protobuf field: envoy.api.v2.Listener.ConnectionBalanceConfig connection_balance_config = 20;
     */
    connectionBalanceConfig?: Listener_ConnectionBalanceConfig;
    /**
     * When this flag is set to true, listeners set the *SO_REUSEPORT* socket option and
     * create one socket for each worker thread. This makes inbound connections
     * distribute among worker threads roughly evenly in cases where there are a high number
     * of connections. When this flag is set to false, all worker threads share one socket.
     *
     * Before Linux v4.19-rc1, new TCP connections may be rejected during hot restart
     * (see `3rd paragraph in 'soreuseport' commit message
     * <https://github.com/torvalds/linux/commit/c617f398edd4db2b8567a28e89>`_).
     * This issue was fixed by `tcp: Avoid TCP syncookie rejected by SO_REUSEPORT socket
     * <https://github.com/torvalds/linux/commit/40a1227ea845a37ab197dd1caffb60b047fa36b1>`_.
     *
     * @generated from protobuf field: bool reuse_port = 21;
     */
    reusePort: boolean;
    /**
     * Configuration for :ref:`access logs <arch_overview_access_logs>`
     * emitted by this listener.
     *
     * @generated from protobuf field: repeated envoy.config.filter.accesslog.v2.AccessLog access_log = 22;
     */
    accessLog: AccessLog[];
}
/**
 * [#not-implemented-hide:]
 *
 * @generated from protobuf message envoy.api.v2.Listener.DeprecatedV1
 */
export interface Listener_DeprecatedV1 {
    /**
     * Whether the listener should bind to the port. A listener that doesn't
     * bind can only receive connections redirected from other listeners that
     * set use_original_dst parameter to true. Default is true.
     *
     * This is deprecated in v2, all Listeners will bind to their port. An
     * additional filter chain must be created for every original destination
     * port this listener may redirect to in v2, with the original port
     * specified in the FilterChainMatch destination_port field.
     *
     * [#comment:TODO(PiotrSikora): Remove this once verified that we no longer need it.]
     *
     * @generated from protobuf field: google.protobuf.BoolValue bind_to_port = 1;
     */
    bindToPort?: BoolValue;
}
/**
 * Configuration for listener connection balancing.
 *
 * @generated from protobuf message envoy.api.v2.Listener.ConnectionBalanceConfig
 */
export interface Listener_ConnectionBalanceConfig {
    /**
     * @generated from protobuf oneof: balance_type
     */
    balanceType: {
        oneofKind: "exactBalance";
        /**
         * If specified, the listener will use the exact connection balancer.
         *
         * @generated from protobuf field: envoy.api.v2.Listener.ConnectionBalanceConfig.ExactBalance exact_balance = 1;
         */
        exactBalance: Listener_ConnectionBalanceConfig_ExactBalance;
    } | {
        oneofKind: undefined;
    };
}
/**
 * A connection balancer implementation that does exact balancing. This means that a lock is
 * held during balancing so that connection counts are nearly exactly balanced between worker
 * threads. This is "nearly" exact in the sense that a connection might close in parallel thus
 * making the counts incorrect, but this should be rectified on the next accept. This balancer
 * sacrifices accept throughput for accuracy and should be used when there are a small number of
 * connections that rarely cycle (e.g., service mesh gRPC egress).
 *
 * @generated from protobuf message envoy.api.v2.Listener.ConnectionBalanceConfig.ExactBalance
 */
export interface Listener_ConnectionBalanceConfig_ExactBalance {
}
/**
 * @generated from protobuf enum envoy.api.v2.Listener.DrainType
 */
export enum Listener_DrainType {
    /**
     * Drain in response to calling /healthcheck/fail admin endpoint (along with the health check
     * filter), listener removal/modification, and hot restart.
     *
     * @generated from protobuf enum value: DEFAULT = 0;
     */
    DEFAULT = 0,
    /**
     * Drain in response to listener removal/modification and hot restart. This setting does not
     * include /healthcheck/fail. This setting may be desirable if Envoy is hosting both ingress
     * and egress listeners.
     *
     * @generated from protobuf enum value: MODIFY_ONLY = 1;
     */
    MODIFY_ONLY = 1
}
// @generated message type with reflection information, may provide speed optimized methods
class Listener$Type extends MessageType<Listener> {
    constructor() {
        super("envoy.api.v2.Listener", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "address", kind: "message", T: () => Address, options: { "validate.rules": { message: { required: true } } } },
            { no: 3, name: "filter_chains", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FilterChain },
            { no: 4, name: "use_original_dst", kind: "message", T: () => BoolValue },
            { no: 5, name: "per_connection_buffer_limit_bytes", kind: "message", T: () => UInt32Value },
            { no: 6, name: "metadata", kind: "message", T: () => Metadata },
            { no: 7, name: "deprecated_v1", kind: "message", T: () => Listener_DeprecatedV1 },
            { no: 8, name: "drain_type", kind: "enum", T: () => ["envoy.api.v2.Listener.DrainType", Listener_DrainType] },
            { no: 9, name: "listener_filters", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ListenerFilter },
            { no: 15, name: "listener_filters_timeout", kind: "message", T: () => Duration },
            { no: 17, name: "continue_on_listener_filters_timeout", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "transparent", kind: "message", T: () => BoolValue },
            { no: 11, name: "freebind", kind: "message", T: () => BoolValue },
            { no: 13, name: "socket_options", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SocketOption },
            { no: 12, name: "tcp_fast_open_queue_length", kind: "message", T: () => UInt32Value },
            { no: 16, name: "traffic_direction", kind: "enum", T: () => ["envoy.api.v2.core.TrafficDirection", TrafficDirection] },
            { no: 18, name: "udp_listener_config", kind: "message", T: () => UdpListenerConfig },
            { no: 19, name: "api_listener", kind: "message", T: () => ApiListener },
            { no: 20, name: "connection_balance_config", kind: "message", T: () => Listener_ConnectionBalanceConfig },
            { no: 21, name: "reuse_port", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 22, name: "access_log", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AccessLog }
        ]);
    }
    create(value?: PartialMessage<Listener>): Listener {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.name = "";
        message.filterChains = [];
        message.drainType = 0;
        message.listenerFilters = [];
        message.continueOnListenerFiltersTimeout = false;
        message.socketOptions = [];
        message.trafficDirection = 0;
        message.reusePort = false;
        message.accessLog = [];
        if (value !== undefined)
            reflectionMergePartial<Listener>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Listener): Listener {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* envoy.api.v2.core.Address address */ 2:
                    message.address = Address.internalBinaryRead(reader, reader.uint32(), options, message.address);
                    break;
                case /* repeated envoy.api.v2.listener.FilterChain filter_chains */ 3:
                    message.filterChains.push(FilterChain.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* google.protobuf.BoolValue use_original_dst = 4 [deprecated = true];*/ 4:
                    message.useOriginalDst = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.useOriginalDst);
                    break;
                case /* google.protobuf.UInt32Value per_connection_buffer_limit_bytes */ 5:
                    message.perConnectionBufferLimitBytes = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.perConnectionBufferLimitBytes);
                    break;
                case /* envoy.api.v2.core.Metadata metadata */ 6:
                    message.metadata = Metadata.internalBinaryRead(reader, reader.uint32(), options, message.metadata);
                    break;
                case /* envoy.api.v2.Listener.DeprecatedV1 deprecated_v1 */ 7:
                    message.deprecatedV1 = Listener_DeprecatedV1.internalBinaryRead(reader, reader.uint32(), options, message.deprecatedV1);
                    break;
                case /* envoy.api.v2.Listener.DrainType drain_type */ 8:
                    message.drainType = reader.int32();
                    break;
                case /* repeated envoy.api.v2.listener.ListenerFilter listener_filters */ 9:
                    message.listenerFilters.push(ListenerFilter.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* google.protobuf.Duration listener_filters_timeout */ 15:
                    message.listenerFiltersTimeout = Duration.internalBinaryRead(reader, reader.uint32(), options, message.listenerFiltersTimeout);
                    break;
                case /* bool continue_on_listener_filters_timeout */ 17:
                    message.continueOnListenerFiltersTimeout = reader.bool();
                    break;
                case /* google.protobuf.BoolValue transparent */ 10:
                    message.transparent = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.transparent);
                    break;
                case /* google.protobuf.BoolValue freebind */ 11:
                    message.freebind = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.freebind);
                    break;
                case /* repeated envoy.api.v2.core.SocketOption socket_options */ 13:
                    message.socketOptions.push(SocketOption.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* google.protobuf.UInt32Value tcp_fast_open_queue_length */ 12:
                    message.tcpFastOpenQueueLength = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.tcpFastOpenQueueLength);
                    break;
                case /* envoy.api.v2.core.TrafficDirection traffic_direction */ 16:
                    message.trafficDirection = reader.int32();
                    break;
                case /* envoy.api.v2.listener.UdpListenerConfig udp_listener_config */ 18:
                    message.udpListenerConfig = UdpListenerConfig.internalBinaryRead(reader, reader.uint32(), options, message.udpListenerConfig);
                    break;
                case /* envoy.config.listener.v2.ApiListener api_listener */ 19:
                    message.apiListener = ApiListener.internalBinaryRead(reader, reader.uint32(), options, message.apiListener);
                    break;
                case /* envoy.api.v2.Listener.ConnectionBalanceConfig connection_balance_config */ 20:
                    message.connectionBalanceConfig = Listener_ConnectionBalanceConfig.internalBinaryRead(reader, reader.uint32(), options, message.connectionBalanceConfig);
                    break;
                case /* bool reuse_port */ 21:
                    message.reusePort = reader.bool();
                    break;
                case /* repeated envoy.config.filter.accesslog.v2.AccessLog access_log */ 22:
                    message.accessLog.push(AccessLog.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Listener, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* envoy.api.v2.core.Address address = 2; */
        if (message.address)
            Address.internalBinaryWrite(message.address, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* repeated envoy.api.v2.listener.FilterChain filter_chains = 3; */
        for (let i = 0; i < message.filterChains.length; i++)
            FilterChain.internalBinaryWrite(message.filterChains[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.BoolValue use_original_dst = 4 [deprecated = true]; */
        if (message.useOriginalDst)
            BoolValue.internalBinaryWrite(message.useOriginalDst, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value per_connection_buffer_limit_bytes = 5; */
        if (message.perConnectionBufferLimitBytes)
            UInt32Value.internalBinaryWrite(message.perConnectionBufferLimitBytes, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* envoy.api.v2.core.Metadata metadata = 6; */
        if (message.metadata)
            Metadata.internalBinaryWrite(message.metadata, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* envoy.api.v2.Listener.DeprecatedV1 deprecated_v1 = 7; */
        if (message.deprecatedV1)
            Listener_DeprecatedV1.internalBinaryWrite(message.deprecatedV1, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* envoy.api.v2.Listener.DrainType drain_type = 8; */
        if (message.drainType !== 0)
            writer.tag(8, WireType.Varint).int32(message.drainType);
        /* repeated envoy.api.v2.listener.ListenerFilter listener_filters = 9; */
        for (let i = 0; i < message.listenerFilters.length; i++)
            ListenerFilter.internalBinaryWrite(message.listenerFilters[i], writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration listener_filters_timeout = 15; */
        if (message.listenerFiltersTimeout)
            Duration.internalBinaryWrite(message.listenerFiltersTimeout, writer.tag(15, WireType.LengthDelimited).fork(), options).join();
        /* bool continue_on_listener_filters_timeout = 17; */
        if (message.continueOnListenerFiltersTimeout !== false)
            writer.tag(17, WireType.Varint).bool(message.continueOnListenerFiltersTimeout);
        /* google.protobuf.BoolValue transparent = 10; */
        if (message.transparent)
            BoolValue.internalBinaryWrite(message.transparent, writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.BoolValue freebind = 11; */
        if (message.freebind)
            BoolValue.internalBinaryWrite(message.freebind, writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* repeated envoy.api.v2.core.SocketOption socket_options = 13; */
        for (let i = 0; i < message.socketOptions.length; i++)
            SocketOption.internalBinaryWrite(message.socketOptions[i], writer.tag(13, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value tcp_fast_open_queue_length = 12; */
        if (message.tcpFastOpenQueueLength)
            UInt32Value.internalBinaryWrite(message.tcpFastOpenQueueLength, writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        /* envoy.api.v2.core.TrafficDirection traffic_direction = 16; */
        if (message.trafficDirection !== 0)
            writer.tag(16, WireType.Varint).int32(message.trafficDirection);
        /* envoy.api.v2.listener.UdpListenerConfig udp_listener_config = 18; */
        if (message.udpListenerConfig)
            UdpListenerConfig.internalBinaryWrite(message.udpListenerConfig, writer.tag(18, WireType.LengthDelimited).fork(), options).join();
        /* envoy.config.listener.v2.ApiListener api_listener = 19; */
        if (message.apiListener)
            ApiListener.internalBinaryWrite(message.apiListener, writer.tag(19, WireType.LengthDelimited).fork(), options).join();
        /* envoy.api.v2.Listener.ConnectionBalanceConfig connection_balance_config = 20; */
        if (message.connectionBalanceConfig)
            Listener_ConnectionBalanceConfig.internalBinaryWrite(message.connectionBalanceConfig, writer.tag(20, WireType.LengthDelimited).fork(), options).join();
        /* bool reuse_port = 21; */
        if (message.reusePort !== false)
            writer.tag(21, WireType.Varint).bool(message.reusePort);
        /* repeated envoy.config.filter.accesslog.v2.AccessLog access_log = 22; */
        for (let i = 0; i < message.accessLog.length; i++)
            AccessLog.internalBinaryWrite(message.accessLog[i], writer.tag(22, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.api.v2.Listener
 */
export const Listener = new Listener$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Listener_DeprecatedV1$Type extends MessageType<Listener_DeprecatedV1> {
    constructor() {
        super("envoy.api.v2.Listener.DeprecatedV1", [
            { no: 1, name: "bind_to_port", kind: "message", T: () => BoolValue }
        ]);
    }
    create(value?: PartialMessage<Listener_DeprecatedV1>): Listener_DeprecatedV1 {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<Listener_DeprecatedV1>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Listener_DeprecatedV1): Listener_DeprecatedV1 {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.BoolValue bind_to_port */ 1:
                    message.bindToPort = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.bindToPort);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Listener_DeprecatedV1, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.BoolValue bind_to_port = 1; */
        if (message.bindToPort)
            BoolValue.internalBinaryWrite(message.bindToPort, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.api.v2.Listener.DeprecatedV1
 */
export const Listener_DeprecatedV1 = new Listener_DeprecatedV1$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Listener_ConnectionBalanceConfig$Type extends MessageType<Listener_ConnectionBalanceConfig> {
    constructor() {
        super("envoy.api.v2.Listener.ConnectionBalanceConfig", [
            { no: 1, name: "exact_balance", kind: "message", oneof: "balanceType", T: () => Listener_ConnectionBalanceConfig_ExactBalance }
        ]);
    }
    create(value?: PartialMessage<Listener_ConnectionBalanceConfig>): Listener_ConnectionBalanceConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.balanceType = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<Listener_ConnectionBalanceConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Listener_ConnectionBalanceConfig): Listener_ConnectionBalanceConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.api.v2.Listener.ConnectionBalanceConfig.ExactBalance exact_balance */ 1:
                    message.balanceType = {
                        oneofKind: "exactBalance",
                        exactBalance: Listener_ConnectionBalanceConfig_ExactBalance.internalBinaryRead(reader, reader.uint32(), options, (message.balanceType as any).exactBalance)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Listener_ConnectionBalanceConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.api.v2.Listener.ConnectionBalanceConfig.ExactBalance exact_balance = 1; */
        if (message.balanceType.oneofKind === "exactBalance")
            Listener_ConnectionBalanceConfig_ExactBalance.internalBinaryWrite(message.balanceType.exactBalance, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.api.v2.Listener.ConnectionBalanceConfig
 */
export const Listener_ConnectionBalanceConfig = new Listener_ConnectionBalanceConfig$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Listener_ConnectionBalanceConfig_ExactBalance$Type extends MessageType<Listener_ConnectionBalanceConfig_ExactBalance> {
    constructor() {
        super("envoy.api.v2.Listener.ConnectionBalanceConfig.ExactBalance", []);
    }
    create(value?: PartialMessage<Listener_ConnectionBalanceConfig_ExactBalance>): Listener_ConnectionBalanceConfig_ExactBalance {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<Listener_ConnectionBalanceConfig_ExactBalance>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Listener_ConnectionBalanceConfig_ExactBalance): Listener_ConnectionBalanceConfig_ExactBalance {
        return target ?? this.create();
    }
    internalBinaryWrite(message: Listener_ConnectionBalanceConfig_ExactBalance, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.api.v2.Listener.ConnectionBalanceConfig.ExactBalance
 */
export const Listener_ConnectionBalanceConfig_ExactBalance = new Listener_ConnectionBalanceConfig_ExactBalance$Type();
