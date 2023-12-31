// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/type/matcher/v3/node.proto" (package "envoy.type.matcher.v3", syntax proto3)
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
import { StructMatcher } from "./struct";
import { StringMatcher } from "./string";
// [#protodoc-title: Node matcher]

/**
 * Specifies the way to match a Node.
 * The match follows AND semantics.
 *
 * @generated from protobuf message envoy.type.matcher.v3.NodeMatcher
 */
export interface NodeMatcher {
    /**
     * Specifies match criteria on the node id.
     *
     * @generated from protobuf field: envoy.type.matcher.v3.StringMatcher node_id = 1;
     */
    nodeId?: StringMatcher;
    /**
     * Specifies match criteria on the node metadata.
     *
     * @generated from protobuf field: repeated envoy.type.matcher.v3.StructMatcher node_metadatas = 2;
     */
    nodeMetadatas: StructMatcher[];
}
// @generated message type with reflection information, may provide speed optimized methods
class NodeMatcher$Type extends MessageType<NodeMatcher> {
    constructor() {
        super("envoy.type.matcher.v3.NodeMatcher", [
            { no: 1, name: "node_id", kind: "message", T: () => StringMatcher },
            { no: 2, name: "node_metadatas", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => StructMatcher }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.type.matcher.NodeMatcher" } });
    }
    create(value?: PartialMessage<NodeMatcher>): NodeMatcher {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.nodeMetadatas = [];
        if (value !== undefined)
            reflectionMergePartial<NodeMatcher>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: NodeMatcher): NodeMatcher {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.type.matcher.v3.StringMatcher node_id */ 1:
                    message.nodeId = StringMatcher.internalBinaryRead(reader, reader.uint32(), options, message.nodeId);
                    break;
                case /* repeated envoy.type.matcher.v3.StructMatcher node_metadatas */ 2:
                    message.nodeMetadatas.push(StructMatcher.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: NodeMatcher, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.type.matcher.v3.StringMatcher node_id = 1; */
        if (message.nodeId)
            StringMatcher.internalBinaryWrite(message.nodeId, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated envoy.type.matcher.v3.StructMatcher node_metadatas = 2; */
        for (let i = 0; i < message.nodeMetadatas.length; i++)
            StructMatcher.internalBinaryWrite(message.nodeMetadatas[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.type.matcher.v3.NodeMatcher
 */
export const NodeMatcher = new NodeMatcher$Type();
