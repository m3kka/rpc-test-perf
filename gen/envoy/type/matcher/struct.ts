// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/type/matcher/struct.proto" (package "envoy.type.matcher", syntax proto3)
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
import { ValueMatcher } from "./value";
// [#protodoc-title: Struct matcher]

/**
 * StructMatcher provides a general interface to check if a given value is matched in
 * google.protobuf.Struct. It uses `path` to retrieve the value
 * from the struct and then check if it's matched to the specified value.
 *
 * For example, for the following Struct:
 *
 * .. code-block:: yaml
 *
 *        fields:
 *          a:
 *            struct_value:
 *              fields:
 *                b:
 *                  struct_value:
 *                    fields:
 *                      c:
 *                        string_value: pro
 *                t:
 *                  list_value:
 *                    values:
 *                      - string_value: m
 *                      - string_value: n
 *
 * The following MetadataMatcher is matched as the path [a, b, c] will retrieve a string value "pro"
 * from the Metadata which is matched to the specified prefix match.
 *
 * .. code-block:: yaml
 *
 *    path:
 *    - key: a
 *    - key: b
 *    - key: c
 *    value:
 *      string_match:
 *        prefix: pr
 *
 * The following StructMatcher is matched as the code will match one of the string values in the
 * list at the path [a, t].
 *
 * .. code-block:: yaml
 *
 *    path:
 *    - key: a
 *    - key: t
 *    value:
 *      list_match:
 *        one_of:
 *          string_match:
 *            exact: m
 *
 * An example use of StructMatcher is to match metadata in envoy.v*.core.Node.
 *
 * @generated from protobuf message envoy.type.matcher.StructMatcher
 */
export interface StructMatcher {
    /**
     * The path to retrieve the Value from the Struct.
     *
     * @generated from protobuf field: repeated envoy.type.matcher.StructMatcher.PathSegment path = 2;
     */
    path: StructMatcher_PathSegment[];
    /**
     * The StructMatcher is matched if the value retrieved by path is matched to this value.
     *
     * @generated from protobuf field: envoy.type.matcher.ValueMatcher value = 3;
     */
    value?: ValueMatcher;
}
/**
 * Specifies the segment in a path to retrieve value from Struct.
 *
 * @generated from protobuf message envoy.type.matcher.StructMatcher.PathSegment
 */
export interface StructMatcher_PathSegment {
    /**
     * @generated from protobuf oneof: segment
     */
    segment: {
        oneofKind: "key";
        /**
         * If specified, use the key to retrieve the value in a Struct.
         *
         * @generated from protobuf field: string key = 1;
         */
        key: string;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class StructMatcher$Type extends MessageType<StructMatcher> {
    constructor() {
        super("envoy.type.matcher.StructMatcher", [
            { no: 2, name: "path", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => StructMatcher_PathSegment, options: { "validate.rules": { repeated: { minItems: "1" } } } },
            { no: 3, name: "value", kind: "message", T: () => ValueMatcher, options: { "validate.rules": { message: { required: true } } } }
        ]);
    }
    create(value?: PartialMessage<StructMatcher>): StructMatcher {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.path = [];
        if (value !== undefined)
            reflectionMergePartial<StructMatcher>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StructMatcher): StructMatcher {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated envoy.type.matcher.StructMatcher.PathSegment path */ 2:
                    message.path.push(StructMatcher_PathSegment.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* envoy.type.matcher.ValueMatcher value */ 3:
                    message.value = ValueMatcher.internalBinaryRead(reader, reader.uint32(), options, message.value);
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
    internalBinaryWrite(message: StructMatcher, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated envoy.type.matcher.StructMatcher.PathSegment path = 2; */
        for (let i = 0; i < message.path.length; i++)
            StructMatcher_PathSegment.internalBinaryWrite(message.path[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* envoy.type.matcher.ValueMatcher value = 3; */
        if (message.value)
            ValueMatcher.internalBinaryWrite(message.value, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.type.matcher.StructMatcher
 */
export const StructMatcher = new StructMatcher$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StructMatcher_PathSegment$Type extends MessageType<StructMatcher_PathSegment> {
    constructor() {
        super("envoy.type.matcher.StructMatcher.PathSegment", [
            { no: 1, name: "key", kind: "scalar", oneof: "segment", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } }
        ]);
    }
    create(value?: PartialMessage<StructMatcher_PathSegment>): StructMatcher_PathSegment {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.segment = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<StructMatcher_PathSegment>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StructMatcher_PathSegment): StructMatcher_PathSegment {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string key */ 1:
                    message.segment = {
                        oneofKind: "key",
                        key: reader.string()
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
    internalBinaryWrite(message: StructMatcher_PathSegment, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string key = 1; */
        if (message.segment.oneofKind === "key")
            writer.tag(1, WireType.LengthDelimited).string(message.segment.key);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.type.matcher.StructMatcher.PathSegment
 */
export const StructMatcher_PathSegment = new StructMatcher_PathSegment$Type();
