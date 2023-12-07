// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/transport_sockets/tap/v3/tap.proto" (package "envoy.extensions.transport_sockets.tap.v3", syntax proto3)
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
import { CommonExtensionConfig } from "../../../common/tap/v3/common";
// [#protodoc-title: Tap]
// [#extension: envoy.transport_sockets.tap]

/**
 * Configuration for tap transport socket. This wraps another transport socket, providing the
 * ability to interpose and record in plain text any traffic that is surfaced to Envoy.
 *
 * @generated from protobuf message envoy.extensions.transport_sockets.tap.v3.Tap
 */
export interface Tap {
    /**
     * Common configuration for the tap transport socket.
     *
     * @generated from protobuf field: envoy.extensions.common.tap.v3.CommonExtensionConfig common_config = 1;
     */
    commonConfig?: CommonExtensionConfig;
    /**
     * The underlying transport socket being wrapped.
     *
     * @generated from protobuf field: envoy.config.core.v3.TransportSocket transport_socket = 2;
     */
    transportSocket?: TransportSocket;
}
// @generated message type with reflection information, may provide speed optimized methods
class Tap$Type extends MessageType<Tap> {
    constructor() {
        super("envoy.extensions.transport_sockets.tap.v3.Tap", [
            { no: 1, name: "common_config", kind: "message", T: () => CommonExtensionConfig, options: { "validate.rules": { message: { required: true } } } },
            { no: 2, name: "transport_socket", kind: "message", T: () => TransportSocket, options: { "validate.rules": { message: { required: true } } } }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.config.transport_socket.tap.v2alpha.Tap" } });
    }
    create(value?: PartialMessage<Tap>): Tap {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<Tap>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Tap): Tap {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.extensions.common.tap.v3.CommonExtensionConfig common_config */ 1:
                    message.commonConfig = CommonExtensionConfig.internalBinaryRead(reader, reader.uint32(), options, message.commonConfig);
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
    internalBinaryWrite(message: Tap, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.extensions.common.tap.v3.CommonExtensionConfig common_config = 1; */
        if (message.commonConfig)
            CommonExtensionConfig.internalBinaryWrite(message.commonConfig, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message envoy.extensions.transport_sockets.tap.v3.Tap
 */
export const Tap = new Tap$Type();
