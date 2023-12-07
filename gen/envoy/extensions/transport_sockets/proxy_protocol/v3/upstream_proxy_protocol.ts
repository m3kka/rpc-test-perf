// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/transport_sockets/proxy_protocol/v3/upstream_proxy_protocol.proto" (package "envoy.extensions.transport_sockets.proxy_protocol.v3", syntax proto3)
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
import { TransportSocket } from "../../../../config/core/v3/base";
import { ProxyProtocolConfig } from "../../../../config/core/v3/proxy_protocol";
// [#protodoc-title: Upstream Proxy Protocol]
// [#extension: envoy.transport_sockets.upstream_proxy_protocol]

/**
 * Configuration for PROXY protocol socket
 *
 * @generated from protobuf message envoy.extensions.transport_sockets.proxy_protocol.v3.ProxyProtocolUpstreamTransport
 */
export interface ProxyProtocolUpstreamTransport {
    /**
     * The PROXY protocol settings
     *
     * @generated from protobuf field: envoy.config.core.v3.ProxyProtocolConfig config = 1;
     */
    config?: ProxyProtocolConfig;
    /**
     * The underlying transport socket being wrapped.
     *
     * @generated from protobuf field: envoy.config.core.v3.TransportSocket transport_socket = 2;
     */
    transportSocket?: TransportSocket;
}
// @generated message type with reflection information, may provide speed optimized methods
class ProxyProtocolUpstreamTransport$Type extends MessageType<ProxyProtocolUpstreamTransport> {
    constructor() {
        super("envoy.extensions.transport_sockets.proxy_protocol.v3.ProxyProtocolUpstreamTransport", [
            { no: 1, name: "config", kind: "message", T: () => ProxyProtocolConfig },
            { no: 2, name: "transport_socket", kind: "message", T: () => TransportSocket, options: { "validate.rules": { message: { required: true } } } }
        ]);
    }
    create(value?: PartialMessage<ProxyProtocolUpstreamTransport>): ProxyProtocolUpstreamTransport {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<ProxyProtocolUpstreamTransport>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProxyProtocolUpstreamTransport): ProxyProtocolUpstreamTransport {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.config.core.v3.ProxyProtocolConfig config */ 1:
                    message.config = ProxyProtocolConfig.internalBinaryRead(reader, reader.uint32(), options, message.config);
                    break;
                case /* envoy.config.core.v3.TransportSocket transport_socket */ 2:
                    message.transportSocket = TransportSocket.internalBinaryRead(reader, reader.uint32(), options, message.transportSocket);
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
    internalBinaryWrite(message: ProxyProtocolUpstreamTransport, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.config.core.v3.ProxyProtocolConfig config = 1; */
        if (message.config)
            ProxyProtocolConfig.internalBinaryWrite(message.config, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* envoy.config.core.v3.TransportSocket transport_socket = 2; */
        if (message.transportSocket)
            TransportSocket.internalBinaryWrite(message.transportSocket, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.transport_sockets.proxy_protocol.v3.ProxyProtocolUpstreamTransport
 */
export const ProxyProtocolUpstreamTransport = new ProxyProtocolUpstreamTransport$Type();