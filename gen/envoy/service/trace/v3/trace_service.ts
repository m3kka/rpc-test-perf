// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/service/trace/v3/trace_service.proto" (package "envoy.service.trace.v3", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Node } from "../../../config/core/v3/base";
import { Span } from "../../../../opencensus/proto/trace/v1/trace";
/**
 * @generated from protobuf message envoy.service.trace.v3.StreamTracesResponse
 */
export interface StreamTracesResponse {
}
/**
 * @generated from protobuf message envoy.service.trace.v3.StreamTracesMessage
 */
export interface StreamTracesMessage {
    /**
     * Identifier data effectively is a structured metadata.
     * As a performance optimization this will only be sent in the first message
     * on the stream.
     *
     * @generated from protobuf field: envoy.service.trace.v3.StreamTracesMessage.Identifier identifier = 1;
     */
    identifier?: StreamTracesMessage_Identifier;
    /**
     * A list of Span entries
     *
     * @generated from protobuf field: repeated opencensus.proto.trace.v1.Span spans = 2;
     */
    spans: Span[];
}
/**
 * @generated from protobuf message envoy.service.trace.v3.StreamTracesMessage.Identifier
 */
export interface StreamTracesMessage_Identifier {
    /**
     * The node sending the access log messages over the stream.
     *
     * @generated from protobuf field: envoy.config.core.v3.Node node = 1;
     */
    node?: Node;
}
// @generated message type with reflection information, may provide speed optimized methods
class StreamTracesResponse$Type extends MessageType<StreamTracesResponse> {
    constructor() {
        super("envoy.service.trace.v3.StreamTracesResponse", [], { "udpa.annotations.versioning": { previousMessageType: "envoy.service.trace.v2.StreamTracesResponse" } });
    }
    create(value?: PartialMessage<StreamTracesResponse>): StreamTracesResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<StreamTracesResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StreamTracesResponse): StreamTracesResponse {
        return target ?? this.create();
    }
    internalBinaryWrite(message: StreamTracesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.trace.v3.StreamTracesResponse
 */
export const StreamTracesResponse = new StreamTracesResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StreamTracesMessage$Type extends MessageType<StreamTracesMessage> {
    constructor() {
        super("envoy.service.trace.v3.StreamTracesMessage", [
            { no: 1, name: "identifier", kind: "message", T: () => StreamTracesMessage_Identifier },
            { no: 2, name: "spans", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Span }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.service.trace.v2.StreamTracesMessage" } });
    }
    create(value?: PartialMessage<StreamTracesMessage>): StreamTracesMessage {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.spans = [];
        if (value !== undefined)
            reflectionMergePartial<StreamTracesMessage>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StreamTracesMessage): StreamTracesMessage {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.service.trace.v3.StreamTracesMessage.Identifier identifier */ 1:
                    message.identifier = StreamTracesMessage_Identifier.internalBinaryRead(reader, reader.uint32(), options, message.identifier);
                    break;
                case /* repeated opencensus.proto.trace.v1.Span spans */ 2:
                    message.spans.push(Span.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: StreamTracesMessage, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.service.trace.v3.StreamTracesMessage.Identifier identifier = 1; */
        if (message.identifier)
            StreamTracesMessage_Identifier.internalBinaryWrite(message.identifier, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated opencensus.proto.trace.v1.Span spans = 2; */
        for (let i = 0; i < message.spans.length; i++)
            Span.internalBinaryWrite(message.spans[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.trace.v3.StreamTracesMessage
 */
export const StreamTracesMessage = new StreamTracesMessage$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StreamTracesMessage_Identifier$Type extends MessageType<StreamTracesMessage_Identifier> {
    constructor() {
        super("envoy.service.trace.v3.StreamTracesMessage.Identifier", [
            { no: 1, name: "node", kind: "message", T: () => Node, options: { "validate.rules": { message: { required: true } } } }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.service.trace.v2.StreamTracesMessage.Identifier" } });
    }
    create(value?: PartialMessage<StreamTracesMessage_Identifier>): StreamTracesMessage_Identifier {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<StreamTracesMessage_Identifier>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StreamTracesMessage_Identifier): StreamTracesMessage_Identifier {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.config.core.v3.Node node */ 1:
                    message.node = Node.internalBinaryRead(reader, reader.uint32(), options, message.node);
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
    internalBinaryWrite(message: StreamTracesMessage_Identifier, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.config.core.v3.Node node = 1; */
        if (message.node)
            Node.internalBinaryWrite(message.node, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.trace.v3.StreamTracesMessage.Identifier
 */
export const StreamTracesMessage_Identifier = new StreamTracesMessage_Identifier$Type();
/**
 * @generated ServiceType for protobuf service envoy.service.trace.v3.TraceService
 */
export const TraceService = new ServiceType("envoy.service.trace.v3.TraceService", [
    { name: "StreamTraces", clientStreaming: true, options: {}, I: StreamTracesMessage, O: StreamTracesResponse }
]);
