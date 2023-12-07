// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/api/v2/core/address.proto" (package "envoy.api.v2.core", syntax proto3)
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
import { SocketOption } from "./socket_option";
import { BoolValue } from "../../../../google/protobuf/wrappers";
import { UInt32Value } from "../../../../google/protobuf/wrappers";
// [#protodoc-title: Network addresses]

/**
 * @generated from protobuf message envoy.api.v2.core.Pipe
 */
export interface Pipe {
    /**
     * Unix Domain Socket path. On Linux, paths starting with '@' will use the
     * abstract namespace. The starting '@' is replaced by a null byte by Envoy.
     * Paths starting with '@' will result in an error in environments other than
     * Linux.
     *
     * @generated from protobuf field: string path = 1;
     */
    path: string;
    /**
     * The mode for the Pipe. Not applicable for abstract sockets.
     *
     * @generated from protobuf field: uint32 mode = 2;
     */
    mode: number;
}
/**
 * [#next-free-field: 7]
 *
 * @generated from protobuf message envoy.api.v2.core.SocketAddress
 */
export interface SocketAddress {
    /**
     * @generated from protobuf field: envoy.api.v2.core.SocketAddress.Protocol protocol = 1;
     */
    protocol: SocketAddress_Protocol;
    /**
     * The address for this socket. :ref:`Listeners <config_listeners>` will bind
     * to the address. An empty address is not allowed. Specify ``0.0.0.0`` or ``::``
     * to bind to any address. [#comment:TODO(zuercher) reinstate when implemented:
     * It is possible to distinguish a Listener address via the prefix/suffix matching
     * in :ref:`FilterChainMatch <envoy_api_msg_listener.FilterChainMatch>`.] When used
     * within an upstream :ref:`BindConfig <envoy_api_msg_core.BindConfig>`, the address
     * controls the source address of outbound connections. For :ref:`clusters
     * <envoy_api_msg_Cluster>`, the cluster type determines whether the
     * address must be an IP (*STATIC* or *EDS* clusters) or a hostname resolved by DNS
     * (*STRICT_DNS* or *LOGICAL_DNS* clusters). Address resolution can be customized
     * via :ref:`resolver_name <envoy_api_field_core.SocketAddress.resolver_name>`.
     *
     * @generated from protobuf field: string address = 2;
     */
    address: string;
    /**
     * @generated from protobuf oneof: port_specifier
     */
    portSpecifier: {
        oneofKind: "portValue";
        /**
         * @generated from protobuf field: uint32 port_value = 3;
         */
        portValue: number;
    } | {
        oneofKind: "namedPort";
        /**
         * This is only valid if :ref:`resolver_name
         * <envoy_api_field_core.SocketAddress.resolver_name>` is specified below and the
         * named resolver is capable of named port resolution.
         *
         * @generated from protobuf field: string named_port = 4;
         */
        namedPort: string;
    } | {
        oneofKind: undefined;
    };
    /**
     * The name of the custom resolver. This must have been registered with Envoy. If
     * this is empty, a context dependent default applies. If the address is a concrete
     * IP address, no resolution will occur. If address is a hostname this
     * should be set for resolution other than DNS. Specifying a custom resolver with
     * *STRICT_DNS* or *LOGICAL_DNS* will generate an error at runtime.
     *
     * @generated from protobuf field: string resolver_name = 5;
     */
    resolverName: string;
    /**
     * When binding to an IPv6 address above, this enables `IPv4 compatibility
     * <https://tools.ietf.org/html/rfc3493#page-11>`_. Binding to ``::`` will
     * allow both IPv4 and IPv6 connections, with peer IPv4 addresses mapped into
     * IPv6 space as ``::FFFF:<IPv4-address>``.
     *
     * @generated from protobuf field: bool ipv4_compat = 6;
     */
    ipv4Compat: boolean;
}
/**
 * @generated from protobuf enum envoy.api.v2.core.SocketAddress.Protocol
 */
export enum SocketAddress_Protocol {
    /**
     * @generated from protobuf enum value: TCP = 0;
     */
    TCP = 0,
    /**
     * @generated from protobuf enum value: UDP = 1;
     */
    UDP = 1
}
/**
 * @generated from protobuf message envoy.api.v2.core.TcpKeepalive
 */
export interface TcpKeepalive {
    /**
     * Maximum number of keepalive probes to send without response before deciding
     * the connection is dead. Default is to use the OS level configuration (unless
     * overridden, Linux defaults to 9.)
     *
     * @generated from protobuf field: google.protobuf.UInt32Value keepalive_probes = 1;
     */
    keepaliveProbes?: UInt32Value;
    /**
     * The number of seconds a connection needs to be idle before keep-alive probes
     * start being sent. Default is to use the OS level configuration (unless
     * overridden, Linux defaults to 7200s (i.e., 2 hours.)
     *
     * @generated from protobuf field: google.protobuf.UInt32Value keepalive_time = 2;
     */
    keepaliveTime?: UInt32Value;
    /**
     * The number of seconds between keep-alive probes. Default is to use the OS
     * level configuration (unless overridden, Linux defaults to 75s.)
     *
     * @generated from protobuf field: google.protobuf.UInt32Value keepalive_interval = 3;
     */
    keepaliveInterval?: UInt32Value;
}
/**
 * @generated from protobuf message envoy.api.v2.core.BindConfig
 */
export interface BindConfig {
    /**
     * The address to bind to when creating a socket.
     *
     * @generated from protobuf field: envoy.api.v2.core.SocketAddress source_address = 1;
     */
    sourceAddress?: SocketAddress;
    /**
     * Whether to set the *IP_FREEBIND* option when creating the socket. When this
     * flag is set to true, allows the :ref:`source_address
     * <envoy_api_field_UpstreamBindConfig.source_address>` to be an IP address
     * that is not configured on the system running Envoy. When this flag is set
     * to false, the option *IP_FREEBIND* is disabled on the socket. When this
     * flag is not set (default), the socket is not modified, i.e. the option is
     * neither enabled nor disabled.
     *
     * @generated from protobuf field: google.protobuf.BoolValue freebind = 2;
     */
    freebind?: BoolValue;
    /**
     * Additional socket options that may not be present in Envoy source code or
     * precompiled binaries.
     *
     * @generated from protobuf field: repeated envoy.api.v2.core.SocketOption socket_options = 3;
     */
    socketOptions: SocketOption[];
}
/**
 * Addresses specify either a logical or physical address and port, which are
 * used to tell Envoy where to bind/listen, connect to upstream and find
 * management servers.
 *
 * @generated from protobuf message envoy.api.v2.core.Address
 */
export interface Address {
    /**
     * @generated from protobuf oneof: address
     */
    address: {
        oneofKind: "socketAddress";
        /**
         * @generated from protobuf field: envoy.api.v2.core.SocketAddress socket_address = 1;
         */
        socketAddress: SocketAddress;
    } | {
        oneofKind: "pipe";
        /**
         * @generated from protobuf field: envoy.api.v2.core.Pipe pipe = 2;
         */
        pipe: Pipe;
    } | {
        oneofKind: undefined;
    };
}
/**
 * CidrRange specifies an IP Address and a prefix length to construct
 * the subnet mask for a `CIDR <https://tools.ietf.org/html/rfc4632>`_ range.
 *
 * @generated from protobuf message envoy.api.v2.core.CidrRange
 */
export interface CidrRange {
    /**
     * IPv4 or IPv6 address, e.g. ``192.0.0.0`` or ``2001:db8::``.
     *
     * @generated from protobuf field: string address_prefix = 1;
     */
    addressPrefix: string;
    /**
     * Length of prefix, e.g. 0, 32. Defaults to 0 when unset.
     *
     * @generated from protobuf field: google.protobuf.UInt32Value prefix_len = 2;
     */
    prefixLen?: UInt32Value;
}
// @generated message type with reflection information, may provide speed optimized methods
class Pipe$Type extends MessageType<Pipe> {
    constructor() {
        super("envoy.api.v2.core.Pipe", [
            { no: 1, name: "path", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minBytes: "1" } } } },
            { no: 2, name: "mode", kind: "scalar", T: 13 /*ScalarType.UINT32*/, options: { "validate.rules": { uint32: { lte: 511 } } } }
        ]);
    }
    create(value?: PartialMessage<Pipe>): Pipe {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.path = "";
        message.mode = 0;
        if (value !== undefined)
            reflectionMergePartial<Pipe>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Pipe): Pipe {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string path */ 1:
                    message.path = reader.string();
                    break;
                case /* uint32 mode */ 2:
                    message.mode = reader.uint32();
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
    internalBinaryWrite(message: Pipe, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string path = 1; */
        if (message.path !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.path);
        /* uint32 mode = 2; */
        if (message.mode !== 0)
            writer.tag(2, WireType.Varint).uint32(message.mode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.api.v2.core.Pipe
 */
export const Pipe = new Pipe$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SocketAddress$Type extends MessageType<SocketAddress> {
    constructor() {
        super("envoy.api.v2.core.SocketAddress", [
            { no: 1, name: "protocol", kind: "enum", T: () => ["envoy.api.v2.core.SocketAddress.Protocol", SocketAddress_Protocol], options: { "validate.rules": { enum: { definedOnly: true } } } },
            { no: 2, name: "address", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minBytes: "1" } } } },
            { no: 3, name: "port_value", kind: "scalar", oneof: "portSpecifier", T: 13 /*ScalarType.UINT32*/, options: { "validate.rules": { uint32: { lte: 65535 } } } },
            { no: 4, name: "named_port", kind: "scalar", oneof: "portSpecifier", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "resolver_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "ipv4_compat", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<SocketAddress>): SocketAddress {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.protocol = 0;
        message.address = "";
        message.portSpecifier = { oneofKind: undefined };
        message.resolverName = "";
        message.ipv4Compat = false;
        if (value !== undefined)
            reflectionMergePartial<SocketAddress>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SocketAddress): SocketAddress {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.api.v2.core.SocketAddress.Protocol protocol */ 1:
                    message.protocol = reader.int32();
                    break;
                case /* string address */ 2:
                    message.address = reader.string();
                    break;
                case /* uint32 port_value */ 3:
                    message.portSpecifier = {
                        oneofKind: "portValue",
                        portValue: reader.uint32()
                    };
                    break;
                case /* string named_port */ 4:
                    message.portSpecifier = {
                        oneofKind: "namedPort",
                        namedPort: reader.string()
                    };
                    break;
                case /* string resolver_name */ 5:
                    message.resolverName = reader.string();
                    break;
                case /* bool ipv4_compat */ 6:
                    message.ipv4Compat = reader.bool();
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
    internalBinaryWrite(message: SocketAddress, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.api.v2.core.SocketAddress.Protocol protocol = 1; */
        if (message.protocol !== 0)
            writer.tag(1, WireType.Varint).int32(message.protocol);
        /* string address = 2; */
        if (message.address !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.address);
        /* uint32 port_value = 3; */
        if (message.portSpecifier.oneofKind === "portValue")
            writer.tag(3, WireType.Varint).uint32(message.portSpecifier.portValue);
        /* string named_port = 4; */
        if (message.portSpecifier.oneofKind === "namedPort")
            writer.tag(4, WireType.LengthDelimited).string(message.portSpecifier.namedPort);
        /* string resolver_name = 5; */
        if (message.resolverName !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.resolverName);
        /* bool ipv4_compat = 6; */
        if (message.ipv4Compat !== false)
            writer.tag(6, WireType.Varint).bool(message.ipv4Compat);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.api.v2.core.SocketAddress
 */
export const SocketAddress = new SocketAddress$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TcpKeepalive$Type extends MessageType<TcpKeepalive> {
    constructor() {
        super("envoy.api.v2.core.TcpKeepalive", [
            { no: 1, name: "keepalive_probes", kind: "message", T: () => UInt32Value },
            { no: 2, name: "keepalive_time", kind: "message", T: () => UInt32Value },
            { no: 3, name: "keepalive_interval", kind: "message", T: () => UInt32Value }
        ]);
    }
    create(value?: PartialMessage<TcpKeepalive>): TcpKeepalive {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<TcpKeepalive>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TcpKeepalive): TcpKeepalive {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.UInt32Value keepalive_probes */ 1:
                    message.keepaliveProbes = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.keepaliveProbes);
                    break;
                case /* google.protobuf.UInt32Value keepalive_time */ 2:
                    message.keepaliveTime = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.keepaliveTime);
                    break;
                case /* google.protobuf.UInt32Value keepalive_interval */ 3:
                    message.keepaliveInterval = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.keepaliveInterval);
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
    internalBinaryWrite(message: TcpKeepalive, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.UInt32Value keepalive_probes = 1; */
        if (message.keepaliveProbes)
            UInt32Value.internalBinaryWrite(message.keepaliveProbes, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value keepalive_time = 2; */
        if (message.keepaliveTime)
            UInt32Value.internalBinaryWrite(message.keepaliveTime, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value keepalive_interval = 3; */
        if (message.keepaliveInterval)
            UInt32Value.internalBinaryWrite(message.keepaliveInterval, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.api.v2.core.TcpKeepalive
 */
export const TcpKeepalive = new TcpKeepalive$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BindConfig$Type extends MessageType<BindConfig> {
    constructor() {
        super("envoy.api.v2.core.BindConfig", [
            { no: 1, name: "source_address", kind: "message", T: () => SocketAddress, options: { "validate.rules": { message: { required: true } } } },
            { no: 2, name: "freebind", kind: "message", T: () => BoolValue },
            { no: 3, name: "socket_options", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SocketOption }
        ]);
    }
    create(value?: PartialMessage<BindConfig>): BindConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.socketOptions = [];
        if (value !== undefined)
            reflectionMergePartial<BindConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BindConfig): BindConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.api.v2.core.SocketAddress source_address */ 1:
                    message.sourceAddress = SocketAddress.internalBinaryRead(reader, reader.uint32(), options, message.sourceAddress);
                    break;
                case /* google.protobuf.BoolValue freebind */ 2:
                    message.freebind = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.freebind);
                    break;
                case /* repeated envoy.api.v2.core.SocketOption socket_options */ 3:
                    message.socketOptions.push(SocketOption.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: BindConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.api.v2.core.SocketAddress source_address = 1; */
        if (message.sourceAddress)
            SocketAddress.internalBinaryWrite(message.sourceAddress, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.BoolValue freebind = 2; */
        if (message.freebind)
            BoolValue.internalBinaryWrite(message.freebind, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* repeated envoy.api.v2.core.SocketOption socket_options = 3; */
        for (let i = 0; i < message.socketOptions.length; i++)
            SocketOption.internalBinaryWrite(message.socketOptions[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.api.v2.core.BindConfig
 */
export const BindConfig = new BindConfig$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Address$Type extends MessageType<Address> {
    constructor() {
        super("envoy.api.v2.core.Address", [
            { no: 1, name: "socket_address", kind: "message", oneof: "address", T: () => SocketAddress },
            { no: 2, name: "pipe", kind: "message", oneof: "address", T: () => Pipe }
        ]);
    }
    create(value?: PartialMessage<Address>): Address {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.address = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<Address>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Address): Address {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.api.v2.core.SocketAddress socket_address */ 1:
                    message.address = {
                        oneofKind: "socketAddress",
                        socketAddress: SocketAddress.internalBinaryRead(reader, reader.uint32(), options, (message.address as any).socketAddress)
                    };
                    break;
                case /* envoy.api.v2.core.Pipe pipe */ 2:
                    message.address = {
                        oneofKind: "pipe",
                        pipe: Pipe.internalBinaryRead(reader, reader.uint32(), options, (message.address as any).pipe)
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
    internalBinaryWrite(message: Address, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.api.v2.core.SocketAddress socket_address = 1; */
        if (message.address.oneofKind === "socketAddress")
            SocketAddress.internalBinaryWrite(message.address.socketAddress, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* envoy.api.v2.core.Pipe pipe = 2; */
        if (message.address.oneofKind === "pipe")
            Pipe.internalBinaryWrite(message.address.pipe, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.api.v2.core.Address
 */
export const Address = new Address$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CidrRange$Type extends MessageType<CidrRange> {
    constructor() {
        super("envoy.api.v2.core.CidrRange", [
            { no: 1, name: "address_prefix", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minBytes: "1" } } } },
            { no: 2, name: "prefix_len", kind: "message", T: () => UInt32Value, options: { "validate.rules": { uint32: { lte: 128 } } } }
        ]);
    }
    create(value?: PartialMessage<CidrRange>): CidrRange {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.addressPrefix = "";
        if (value !== undefined)
            reflectionMergePartial<CidrRange>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CidrRange): CidrRange {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string address_prefix */ 1:
                    message.addressPrefix = reader.string();
                    break;
                case /* google.protobuf.UInt32Value prefix_len */ 2:
                    message.prefixLen = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.prefixLen);
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
    internalBinaryWrite(message: CidrRange, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string address_prefix = 1; */
        if (message.addressPrefix !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.addressPrefix);
        /* google.protobuf.UInt32Value prefix_len = 2; */
        if (message.prefixLen)
            UInt32Value.internalBinaryWrite(message.prefixLen, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.api.v2.core.CidrRange
 */
export const CidrRange = new CidrRange$Type();
