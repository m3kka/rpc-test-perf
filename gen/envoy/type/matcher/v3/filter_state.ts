// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/type/matcher/v3/filter_state.proto" (package "envoy.type.matcher.v3", syntax proto3)
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
// [#protodoc-title: Filter state matcher]

/**
 * FilterStateMatcher provides a general interface for matching the filter state objects.
 *
 * @generated from protobuf message envoy.type.matcher.v3.FilterStateMatcher
 */
export interface FilterStateMatcher {
    /**
     * The filter state key to retrieve the object.
     *
     * @generated from protobuf field: string key = 1;
     */
    key: string;
    /**
     * @generated from protobuf oneof: matcher
     */
    matcher: {
        oneofKind: "stringMatch";
        /**
         * Matches the filter state object as a string value.
         *
         * @generated from protobuf field: envoy.type.matcher.v3.StringMatcher string_match = 2;
         */
        stringMatch: StringMatcher;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class FilterStateMatcher$Type extends MessageType<FilterStateMatcher> {
    constructor() {
        super("envoy.type.matcher.v3.FilterStateMatcher", [
            { no: 1, name: "key", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } },
            { no: 2, name: "string_match", kind: "message", oneof: "matcher", T: () => StringMatcher }
        ]);
    }
    create(value?: PartialMessage<FilterStateMatcher>): FilterStateMatcher {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.key = "";
        message.matcher = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<FilterStateMatcher>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FilterStateMatcher): FilterStateMatcher {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string key */ 1:
                    message.key = reader.string();
                    break;
                case /* envoy.type.matcher.v3.StringMatcher string_match */ 2:
                    message.matcher = {
                        oneofKind: "stringMatch",
                        stringMatch: StringMatcher.internalBinaryRead(reader, reader.uint32(), options, (message.matcher as any).stringMatch)
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
    internalBinaryWrite(message: FilterStateMatcher, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string key = 1; */
        if (message.key !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.key);
        /* envoy.type.matcher.v3.StringMatcher string_match = 2; */
        if (message.matcher.oneofKind === "stringMatch")
            StringMatcher.internalBinaryWrite(message.matcher.stringMatch, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.type.matcher.v3.FilterStateMatcher
 */
export const FilterStateMatcher = new FilterStateMatcher$Type();
