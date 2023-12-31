// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/type/matcher/v3/path.proto" (package "envoy.type.matcher.v3", syntax proto3)
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
import { StringMatcher } from "./string";
// [#protodoc-title: Path matcher]

/**
 * Specifies the way to match a path on HTTP request.
 *
 * @generated from protobuf message envoy.type.matcher.v3.PathMatcher
 */
export interface PathMatcher {
    /**
     * @generated from protobuf oneof: rule
     */
    rule: {
        oneofKind: "path";
        /**
         * The ``path`` must match the URL path portion of the :path header. The query and fragment
         * string (if present) are removed in the URL path portion.
         * For example, the path ``/data`` will match the ``:path`` header ``/data#fragment?param=value``.
         *
         * @generated from protobuf field: envoy.type.matcher.v3.StringMatcher path = 1;
         */
        path: StringMatcher;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class PathMatcher$Type extends MessageType<PathMatcher> {
    constructor() {
        super("envoy.type.matcher.v3.PathMatcher", [
            { no: 1, name: "path", kind: "message", oneof: "rule", T: () => StringMatcher, options: { "validate.rules": { message: { required: true } } } }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.type.matcher.PathMatcher" } });
    }
    create(value?: PartialMessage<PathMatcher>): PathMatcher {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.rule = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<PathMatcher>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PathMatcher): PathMatcher {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.type.matcher.v3.StringMatcher path */ 1:
                    message.rule = {
                        oneofKind: "path",
                        path: StringMatcher.internalBinaryRead(reader, reader.uint32(), options, (message.rule as any).path)
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
    internalBinaryWrite(message: PathMatcher, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.type.matcher.v3.StringMatcher path = 1; */
        if (message.rule.oneofKind === "path")
            StringMatcher.internalBinaryWrite(message.rule.path, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.type.matcher.v3.PathMatcher
 */
export const PathMatcher = new PathMatcher$Type();
