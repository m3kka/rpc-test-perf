// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/config/filter/network/tcp_proxy/v2/tcp_proxy.proto" (package "envoy.config.filter.network.tcp_proxy.v2", syntax proto3)
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
import { CidrRange } from "../../../../../api/v2/core/address";
import { HashPolicy } from "../../../../../type/hash_policy";
import { UInt32Value } from "../../../../../../google/protobuf/wrappers";
import { AccessLog } from "../../../accesslog/v2/accesslog";
import { Duration } from "../../../../../../google/protobuf/duration";
import { Metadata } from "../../../../../api/v2/core/base";
// [#protodoc-title: TCP Proxy]
// TCP Proxy :ref:`configuration overview <config_network_filters_tcp_proxy>`.
// [#extension: envoy.filters.network.tcp_proxy]

/**
 * [#next-free-field: 13]
 *
 * @generated from protobuf message envoy.config.filter.network.tcp_proxy.v2.TcpProxy
 */
export interface TcpProxy {
    /**
     * The prefix to use when emitting :ref:`statistics
     * <config_network_filters_tcp_proxy_stats>`.
     *
     * @generated from protobuf field: string stat_prefix = 1;
     */
    statPrefix: string;
    /**
     * @generated from protobuf oneof: cluster_specifier
     */
    clusterSpecifier: {
        oneofKind: "cluster";
        /**
         * The upstream cluster to connect to.
         *
         * @generated from protobuf field: string cluster = 2;
         */
        cluster: string;
    } | {
        oneofKind: "weightedClusters";
        /**
         * Multiple upstream clusters can be specified for a given route. The
         * request is routed to one of the upstream clusters based on weights
         * assigned to each cluster.
         *
         * @generated from protobuf field: envoy.config.filter.network.tcp_proxy.v2.TcpProxy.WeightedCluster weighted_clusters = 10;
         */
        weightedClusters: TcpProxy_WeightedCluster;
    } | {
        oneofKind: undefined;
    };
    /**
     * Optional endpoint metadata match criteria. Only endpoints in the upstream
     * cluster with metadata matching that set in metadata_match will be
     * considered. The filter name should be specified as *envoy.lb*.
     *
     * @generated from protobuf field: envoy.api.v2.core.Metadata metadata_match = 9;
     */
    metadataMatch?: Metadata;
    /**
     * The idle timeout for connections managed by the TCP proxy filter. The idle timeout
     * is defined as the period in which there are no bytes sent or received on either
     * the upstream or downstream connection. If not set, the default idle timeout is 1 hour. If set
     * to 0s, the timeout will be disabled.
     *
     * .. warning::
     *   Disabling this timeout has a highly likelihood of yielding connection leaks due to lost TCP
     *   FIN packets, etc.
     *
     * @generated from protobuf field: google.protobuf.Duration idle_timeout = 8;
     */
    idleTimeout?: Duration;
    /**
     * [#not-implemented-hide:] The idle timeout for connections managed by the TCP proxy
     * filter. The idle timeout is defined as the period in which there is no
     * active traffic. If not set, there is no idle timeout. When the idle timeout
     * is reached the connection will be closed. The distinction between
     * downstream_idle_timeout/upstream_idle_timeout provides a means to set
     * timeout based on the last byte sent on the downstream/upstream connection.
     *
     * @generated from protobuf field: google.protobuf.Duration downstream_idle_timeout = 3;
     */
    downstreamIdleTimeout?: Duration;
    /**
     * [#not-implemented-hide:]
     *
     * @generated from protobuf field: google.protobuf.Duration upstream_idle_timeout = 4;
     */
    upstreamIdleTimeout?: Duration;
    /**
     * Configuration for :ref:`access logs <arch_overview_access_logs>`
     * emitted by the this tcp_proxy.
     *
     * @generated from protobuf field: repeated envoy.config.filter.accesslog.v2.AccessLog access_log = 5;
     */
    accessLog: AccessLog[];
    /**
     * [#not-implemented-hide:] Deprecated.
     *
     * @deprecated
     * @generated from protobuf field: envoy.config.filter.network.tcp_proxy.v2.TcpProxy.DeprecatedV1 deprecated_v1 = 6 [deprecated = true];
     */
    deprecatedV1?: TcpProxy_DeprecatedV1;
    /**
     * The maximum number of unsuccessful connection attempts that will be made before
     * giving up. If the parameter is not specified, 1 connection attempt will be made.
     *
     * @generated from protobuf field: google.protobuf.UInt32Value max_connect_attempts = 7;
     */
    maxConnectAttempts?: UInt32Value;
    /**
     * Optional configuration for TCP proxy hash policy. If hash_policy is not set, the hash-based
     * load balancing algorithms will select a host randomly. Currently the number of hash policies is
     * limited to 1.
     *
     * @generated from protobuf field: repeated envoy.type.HashPolicy hash_policy = 11;
     */
    hashPolicy: HashPolicy[];
    /**
     * [#not-implemented-hide:] feature in progress
     * If set, this configures tunneling, e.g. configuration options to tunnel multiple TCP
     * payloads over a shared HTTP/2 tunnel. If this message is absent, the payload
     * will be proxied upstream as per usual.
     *
     * @generated from protobuf field: envoy.config.filter.network.tcp_proxy.v2.TcpProxy.TunnelingConfig tunneling_config = 12;
     */
    tunnelingConfig?: TcpProxy_TunnelingConfig;
}
/**
 * [#not-implemented-hide:] Deprecated.
 * TCP Proxy filter configuration using V1 format.
 *
 * @deprecated
 * @generated from protobuf message envoy.config.filter.network.tcp_proxy.v2.TcpProxy.DeprecatedV1
 */
export interface TcpProxy_DeprecatedV1 {
    /**
     * The route table for the filter. All filter instances must have a route
     * table, even if it is empty.
     *
     * @generated from protobuf field: repeated envoy.config.filter.network.tcp_proxy.v2.TcpProxy.DeprecatedV1.TCPRoute routes = 1;
     */
    routes: TcpProxy_DeprecatedV1_TCPRoute[];
}
/**
 * A TCP proxy route consists of a set of optional L4 criteria and the
 * name of a cluster. If a downstream connection matches all the
 * specified criteria, the cluster in the route is used for the
 * corresponding upstream connection. Routes are tried in the order
 * specified until a match is found. If no match is found, the connection
 * is closed. A route with no criteria is valid and always produces a
 * match.
 * [#next-free-field: 6]
 *
 * @generated from protobuf message envoy.config.filter.network.tcp_proxy.v2.TcpProxy.DeprecatedV1.TCPRoute
 */
export interface TcpProxy_DeprecatedV1_TCPRoute {
    /**
     * The cluster to connect to when a the downstream network connection
     * matches the specified criteria.
     *
     * @generated from protobuf field: string cluster = 1;
     */
    cluster: string;
    /**
     * An optional list of IP address subnets in the form
     * “ip_address/xx”. The criteria is satisfied if the destination IP
     * address of the downstream connection is contained in at least one of
     * the specified subnets. If the parameter is not specified or the list
     * is empty, the destination IP address is ignored. The destination IP
     * address of the downstream connection might be different from the
     * addresses on which the proxy is listening if the connection has been
     * redirected.
     *
     * @generated from protobuf field: repeated envoy.api.v2.core.CidrRange destination_ip_list = 2;
     */
    destinationIpList: CidrRange[];
    /**
     * An optional string containing a comma-separated list of port numbers
     * or ranges. The criteria is satisfied if the destination port of the
     * downstream connection is contained in at least one of the specified
     * ranges. If the parameter is not specified, the destination port is
     * ignored. The destination port address of the downstream connection
     * might be different from the port on which the proxy is listening if
     * the connection has been redirected.
     *
     * @generated from protobuf field: string destination_ports = 3;
     */
    destinationPorts: string;
    /**
     * An optional list of IP address subnets in the form
     * “ip_address/xx”. The criteria is satisfied if the source IP address
     * of the downstream connection is contained in at least one of the
     * specified subnets. If the parameter is not specified or the list is
     * empty, the source IP address is ignored.
     *
     * @generated from protobuf field: repeated envoy.api.v2.core.CidrRange source_ip_list = 4;
     */
    sourceIpList: CidrRange[];
    /**
     * An optional string containing a comma-separated list of port numbers
     * or ranges. The criteria is satisfied if the source port of the
     * downstream connection is contained in at least one of the specified
     * ranges. If the parameter is not specified, the source port is
     * ignored.
     *
     * @generated from protobuf field: string source_ports = 5;
     */
    sourcePorts: string;
}
/**
 * Allows for specification of multiple upstream clusters along with weights
 * that indicate the percentage of traffic to be forwarded to each cluster.
 * The router selects an upstream cluster based on these weights.
 *
 * @generated from protobuf message envoy.config.filter.network.tcp_proxy.v2.TcpProxy.WeightedCluster
 */
export interface TcpProxy_WeightedCluster {
    /**
     * Specifies one or more upstream clusters associated with the route.
     *
     * @generated from protobuf field: repeated envoy.config.filter.network.tcp_proxy.v2.TcpProxy.WeightedCluster.ClusterWeight clusters = 1;
     */
    clusters: TcpProxy_WeightedCluster_ClusterWeight[];
}
/**
 * @generated from protobuf message envoy.config.filter.network.tcp_proxy.v2.TcpProxy.WeightedCluster.ClusterWeight
 */
export interface TcpProxy_WeightedCluster_ClusterWeight {
    /**
     * Name of the upstream cluster.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * When a request matches the route, the choice of an upstream cluster is
     * determined by its weight. The sum of weights across all entries in the
     * clusters array determines the total weight.
     *
     * @generated from protobuf field: uint32 weight = 2;
     */
    weight: number;
    /**
     * Optional endpoint metadata match criteria used by the subset load balancer. Only endpoints
     * in the upstream cluster with metadata matching what is set in this field will be considered
     * for load balancing. Note that this will be merged with what's provided in
     * :ref:`TcpProxy.metadata_match
     * <envoy_api_field_config.filter.network.tcp_proxy.v2.TcpProxy.metadata_match>`, with values
     * here taking precedence. The filter name should be specified as *envoy.lb*.
     *
     * @generated from protobuf field: envoy.api.v2.core.Metadata metadata_match = 3;
     */
    metadataMatch?: Metadata;
}
/**
 * Configuration for tunneling TCP over other transports or application layers.
 * Currently, only HTTP/2 is supported. When other options exist, HTTP/2 will
 * remain the default.
 *
 * @generated from protobuf message envoy.config.filter.network.tcp_proxy.v2.TcpProxy.TunnelingConfig
 */
export interface TcpProxy_TunnelingConfig {
    /**
     * The hostname to send in the synthesized CONNECT headers to the upstream proxy.
     *
     * @generated from protobuf field: string hostname = 1;
     */
    hostname: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class TcpProxy$Type extends MessageType<TcpProxy> {
    constructor() {
        super("envoy.config.filter.network.tcp_proxy.v2.TcpProxy", [
            { no: 1, name: "stat_prefix", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minBytes: "1" } } } },
            { no: 2, name: "cluster", kind: "scalar", oneof: "clusterSpecifier", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "weighted_clusters", kind: "message", oneof: "clusterSpecifier", T: () => TcpProxy_WeightedCluster },
            { no: 9, name: "metadata_match", kind: "message", T: () => Metadata },
            { no: 8, name: "idle_timeout", kind: "message", T: () => Duration },
            { no: 3, name: "downstream_idle_timeout", kind: "message", T: () => Duration },
            { no: 4, name: "upstream_idle_timeout", kind: "message", T: () => Duration },
            { no: 5, name: "access_log", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AccessLog },
            { no: 6, name: "deprecated_v1", kind: "message", T: () => TcpProxy_DeprecatedV1 },
            { no: 7, name: "max_connect_attempts", kind: "message", T: () => UInt32Value, options: { "validate.rules": { uint32: { gte: 1 } } } },
            { no: 11, name: "hash_policy", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HashPolicy, options: { "validate.rules": { repeated: { maxItems: "1" } } } },
            { no: 12, name: "tunneling_config", kind: "message", T: () => TcpProxy_TunnelingConfig }
        ]);
    }
    create(value?: PartialMessage<TcpProxy>): TcpProxy {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.statPrefix = "";
        message.clusterSpecifier = { oneofKind: undefined };
        message.accessLog = [];
        message.hashPolicy = [];
        if (value !== undefined)
            reflectionMergePartial<TcpProxy>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TcpProxy): TcpProxy {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string stat_prefix */ 1:
                    message.statPrefix = reader.string();
                    break;
                case /* string cluster */ 2:
                    message.clusterSpecifier = {
                        oneofKind: "cluster",
                        cluster: reader.string()
                    };
                    break;
                case /* envoy.config.filter.network.tcp_proxy.v2.TcpProxy.WeightedCluster weighted_clusters */ 10:
                    message.clusterSpecifier = {
                        oneofKind: "weightedClusters",
                        weightedClusters: TcpProxy_WeightedCluster.internalBinaryRead(reader, reader.uint32(), options, (message.clusterSpecifier as any).weightedClusters)
                    };
                    break;
                case /* envoy.api.v2.core.Metadata metadata_match */ 9:
                    message.metadataMatch = Metadata.internalBinaryRead(reader, reader.uint32(), options, message.metadataMatch);
                    break;
                case /* google.protobuf.Duration idle_timeout */ 8:
                    message.idleTimeout = Duration.internalBinaryRead(reader, reader.uint32(), options, message.idleTimeout);
                    break;
                case /* google.protobuf.Duration downstream_idle_timeout */ 3:
                    message.downstreamIdleTimeout = Duration.internalBinaryRead(reader, reader.uint32(), options, message.downstreamIdleTimeout);
                    break;
                case /* google.protobuf.Duration upstream_idle_timeout */ 4:
                    message.upstreamIdleTimeout = Duration.internalBinaryRead(reader, reader.uint32(), options, message.upstreamIdleTimeout);
                    break;
                case /* repeated envoy.config.filter.accesslog.v2.AccessLog access_log */ 5:
                    message.accessLog.push(AccessLog.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* envoy.config.filter.network.tcp_proxy.v2.TcpProxy.DeprecatedV1 deprecated_v1 = 6 [deprecated = true];*/ 6:
                    message.deprecatedV1 = TcpProxy_DeprecatedV1.internalBinaryRead(reader, reader.uint32(), options, message.deprecatedV1);
                    break;
                case /* google.protobuf.UInt32Value max_connect_attempts */ 7:
                    message.maxConnectAttempts = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.maxConnectAttempts);
                    break;
                case /* repeated envoy.type.HashPolicy hash_policy */ 11:
                    message.hashPolicy.push(HashPolicy.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* envoy.config.filter.network.tcp_proxy.v2.TcpProxy.TunnelingConfig tunneling_config */ 12:
                    message.tunnelingConfig = TcpProxy_TunnelingConfig.internalBinaryRead(reader, reader.uint32(), options, message.tunnelingConfig);
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
    internalBinaryWrite(message: TcpProxy, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string stat_prefix = 1; */
        if (message.statPrefix !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.statPrefix);
        /* string cluster = 2; */
        if (message.clusterSpecifier.oneofKind === "cluster")
            writer.tag(2, WireType.LengthDelimited).string(message.clusterSpecifier.cluster);
        /* envoy.config.filter.network.tcp_proxy.v2.TcpProxy.WeightedCluster weighted_clusters = 10; */
        if (message.clusterSpecifier.oneofKind === "weightedClusters")
            TcpProxy_WeightedCluster.internalBinaryWrite(message.clusterSpecifier.weightedClusters, writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        /* envoy.api.v2.core.Metadata metadata_match = 9; */
        if (message.metadataMatch)
            Metadata.internalBinaryWrite(message.metadataMatch, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration idle_timeout = 8; */
        if (message.idleTimeout)
            Duration.internalBinaryWrite(message.idleTimeout, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration downstream_idle_timeout = 3; */
        if (message.downstreamIdleTimeout)
            Duration.internalBinaryWrite(message.downstreamIdleTimeout, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration upstream_idle_timeout = 4; */
        if (message.upstreamIdleTimeout)
            Duration.internalBinaryWrite(message.upstreamIdleTimeout, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* repeated envoy.config.filter.accesslog.v2.AccessLog access_log = 5; */
        for (let i = 0; i < message.accessLog.length; i++)
            AccessLog.internalBinaryWrite(message.accessLog[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* envoy.config.filter.network.tcp_proxy.v2.TcpProxy.DeprecatedV1 deprecated_v1 = 6 [deprecated = true]; */
        if (message.deprecatedV1)
            TcpProxy_DeprecatedV1.internalBinaryWrite(message.deprecatedV1, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value max_connect_attempts = 7; */
        if (message.maxConnectAttempts)
            UInt32Value.internalBinaryWrite(message.maxConnectAttempts, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* repeated envoy.type.HashPolicy hash_policy = 11; */
        for (let i = 0; i < message.hashPolicy.length; i++)
            HashPolicy.internalBinaryWrite(message.hashPolicy[i], writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* envoy.config.filter.network.tcp_proxy.v2.TcpProxy.TunnelingConfig tunneling_config = 12; */
        if (message.tunnelingConfig)
            TcpProxy_TunnelingConfig.internalBinaryWrite(message.tunnelingConfig, writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.config.filter.network.tcp_proxy.v2.TcpProxy
 */
export const TcpProxy = new TcpProxy$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TcpProxy_DeprecatedV1$Type extends MessageType<TcpProxy_DeprecatedV1> {
    constructor() {
        super("envoy.config.filter.network.tcp_proxy.v2.TcpProxy.DeprecatedV1", [
            { no: 1, name: "routes", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => TcpProxy_DeprecatedV1_TCPRoute, options: { "validate.rules": { repeated: { minItems: "1" } } } }
        ]);
    }
    create(value?: PartialMessage<TcpProxy_DeprecatedV1>): TcpProxy_DeprecatedV1 {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.routes = [];
        if (value !== undefined)
            reflectionMergePartial<TcpProxy_DeprecatedV1>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TcpProxy_DeprecatedV1): TcpProxy_DeprecatedV1 {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated envoy.config.filter.network.tcp_proxy.v2.TcpProxy.DeprecatedV1.TCPRoute routes */ 1:
                    message.routes.push(TcpProxy_DeprecatedV1_TCPRoute.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: TcpProxy_DeprecatedV1, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated envoy.config.filter.network.tcp_proxy.v2.TcpProxy.DeprecatedV1.TCPRoute routes = 1; */
        for (let i = 0; i < message.routes.length; i++)
            TcpProxy_DeprecatedV1_TCPRoute.internalBinaryWrite(message.routes[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @deprecated
 * @generated MessageType for protobuf message envoy.config.filter.network.tcp_proxy.v2.TcpProxy.DeprecatedV1
 */
export const TcpProxy_DeprecatedV1 = new TcpProxy_DeprecatedV1$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TcpProxy_DeprecatedV1_TCPRoute$Type extends MessageType<TcpProxy_DeprecatedV1_TCPRoute> {
    constructor() {
        super("envoy.config.filter.network.tcp_proxy.v2.TcpProxy.DeprecatedV1.TCPRoute", [
            { no: 1, name: "cluster", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minBytes: "1" } } } },
            { no: 2, name: "destination_ip_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CidrRange },
            { no: 3, name: "destination_ports", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "source_ip_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CidrRange },
            { no: 5, name: "source_ports", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<TcpProxy_DeprecatedV1_TCPRoute>): TcpProxy_DeprecatedV1_TCPRoute {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.cluster = "";
        message.destinationIpList = [];
        message.destinationPorts = "";
        message.sourceIpList = [];
        message.sourcePorts = "";
        if (value !== undefined)
            reflectionMergePartial<TcpProxy_DeprecatedV1_TCPRoute>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TcpProxy_DeprecatedV1_TCPRoute): TcpProxy_DeprecatedV1_TCPRoute {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string cluster */ 1:
                    message.cluster = reader.string();
                    break;
                case /* repeated envoy.api.v2.core.CidrRange destination_ip_list */ 2:
                    message.destinationIpList.push(CidrRange.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* string destination_ports */ 3:
                    message.destinationPorts = reader.string();
                    break;
                case /* repeated envoy.api.v2.core.CidrRange source_ip_list */ 4:
                    message.sourceIpList.push(CidrRange.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* string source_ports */ 5:
                    message.sourcePorts = reader.string();
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
    internalBinaryWrite(message: TcpProxy_DeprecatedV1_TCPRoute, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string cluster = 1; */
        if (message.cluster !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.cluster);
        /* repeated envoy.api.v2.core.CidrRange destination_ip_list = 2; */
        for (let i = 0; i < message.destinationIpList.length; i++)
            CidrRange.internalBinaryWrite(message.destinationIpList[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* string destination_ports = 3; */
        if (message.destinationPorts !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.destinationPorts);
        /* repeated envoy.api.v2.core.CidrRange source_ip_list = 4; */
        for (let i = 0; i < message.sourceIpList.length; i++)
            CidrRange.internalBinaryWrite(message.sourceIpList[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* string source_ports = 5; */
        if (message.sourcePorts !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.sourcePorts);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.config.filter.network.tcp_proxy.v2.TcpProxy.DeprecatedV1.TCPRoute
 */
export const TcpProxy_DeprecatedV1_TCPRoute = new TcpProxy_DeprecatedV1_TCPRoute$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TcpProxy_WeightedCluster$Type extends MessageType<TcpProxy_WeightedCluster> {
    constructor() {
        super("envoy.config.filter.network.tcp_proxy.v2.TcpProxy.WeightedCluster", [
            { no: 1, name: "clusters", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => TcpProxy_WeightedCluster_ClusterWeight, options: { "validate.rules": { repeated: { minItems: "1" } } } }
        ]);
    }
    create(value?: PartialMessage<TcpProxy_WeightedCluster>): TcpProxy_WeightedCluster {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.clusters = [];
        if (value !== undefined)
            reflectionMergePartial<TcpProxy_WeightedCluster>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TcpProxy_WeightedCluster): TcpProxy_WeightedCluster {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated envoy.config.filter.network.tcp_proxy.v2.TcpProxy.WeightedCluster.ClusterWeight clusters */ 1:
                    message.clusters.push(TcpProxy_WeightedCluster_ClusterWeight.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: TcpProxy_WeightedCluster, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated envoy.config.filter.network.tcp_proxy.v2.TcpProxy.WeightedCluster.ClusterWeight clusters = 1; */
        for (let i = 0; i < message.clusters.length; i++)
            TcpProxy_WeightedCluster_ClusterWeight.internalBinaryWrite(message.clusters[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.config.filter.network.tcp_proxy.v2.TcpProxy.WeightedCluster
 */
export const TcpProxy_WeightedCluster = new TcpProxy_WeightedCluster$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TcpProxy_WeightedCluster_ClusterWeight$Type extends MessageType<TcpProxy_WeightedCluster_ClusterWeight> {
    constructor() {
        super("envoy.config.filter.network.tcp_proxy.v2.TcpProxy.WeightedCluster.ClusterWeight", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minBytes: "1" } } } },
            { no: 2, name: "weight", kind: "scalar", T: 13 /*ScalarType.UINT32*/, options: { "validate.rules": { uint32: { gte: 1 } } } },
            { no: 3, name: "metadata_match", kind: "message", T: () => Metadata }
        ]);
    }
    create(value?: PartialMessage<TcpProxy_WeightedCluster_ClusterWeight>): TcpProxy_WeightedCluster_ClusterWeight {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.name = "";
        message.weight = 0;
        if (value !== undefined)
            reflectionMergePartial<TcpProxy_WeightedCluster_ClusterWeight>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TcpProxy_WeightedCluster_ClusterWeight): TcpProxy_WeightedCluster_ClusterWeight {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* uint32 weight */ 2:
                    message.weight = reader.uint32();
                    break;
                case /* envoy.api.v2.core.Metadata metadata_match */ 3:
                    message.metadataMatch = Metadata.internalBinaryRead(reader, reader.uint32(), options, message.metadataMatch);
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
    internalBinaryWrite(message: TcpProxy_WeightedCluster_ClusterWeight, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* uint32 weight = 2; */
        if (message.weight !== 0)
            writer.tag(2, WireType.Varint).uint32(message.weight);
        /* envoy.api.v2.core.Metadata metadata_match = 3; */
        if (message.metadataMatch)
            Metadata.internalBinaryWrite(message.metadataMatch, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.config.filter.network.tcp_proxy.v2.TcpProxy.WeightedCluster.ClusterWeight
 */
export const TcpProxy_WeightedCluster_ClusterWeight = new TcpProxy_WeightedCluster_ClusterWeight$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TcpProxy_TunnelingConfig$Type extends MessageType<TcpProxy_TunnelingConfig> {
    constructor() {
        super("envoy.config.filter.network.tcp_proxy.v2.TcpProxy.TunnelingConfig", [
            { no: 1, name: "hostname", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minBytes: "1" } } } }
        ]);
    }
    create(value?: PartialMessage<TcpProxy_TunnelingConfig>): TcpProxy_TunnelingConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.hostname = "";
        if (value !== undefined)
            reflectionMergePartial<TcpProxy_TunnelingConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TcpProxy_TunnelingConfig): TcpProxy_TunnelingConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string hostname */ 1:
                    message.hostname = reader.string();
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
    internalBinaryWrite(message: TcpProxy_TunnelingConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string hostname = 1; */
        if (message.hostname !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.hostname);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.config.filter.network.tcp_proxy.v2.TcpProxy.TunnelingConfig
 */
export const TcpProxy_TunnelingConfig = new TcpProxy_TunnelingConfig$Type();
