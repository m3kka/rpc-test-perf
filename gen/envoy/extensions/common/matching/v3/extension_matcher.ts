// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/common/matching/v3/extension_matcher.proto" (package "envoy.extensions.common.matching.v3", syntax proto3)
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
import { TypedExtensionConfig } from "../../../../config/core/v3/extension";
import { Matcher as Matcher$ } from "../../../../../xds/type/matcher/v3/matcher";
import { Matcher } from "../../../../config/common/matcher/v3/matcher";
// [#protodoc-title: Extension matcher]

/**
 * Wrapper around an existing extension that provides an associated matcher. This allows
 * decorating an existing extension with a matcher, which can be used to match against
 * relevant protocol data.
 *
 * @generated from protobuf message envoy.extensions.common.matching.v3.ExtensionWithMatcher
 */
export interface ExtensionWithMatcher {
    /**
     * The associated matcher. This is deprecated in favor of xds_matcher.
     *
     * @deprecated
     * @generated from protobuf field: envoy.config.common.matcher.v3.Matcher matcher = 1 [deprecated = true];
     */
    matcher?: Matcher;
    /**
     * The associated matcher.
     *
     * @generated from protobuf field: xds.type.matcher.v3.Matcher xds_matcher = 3;
     */
    xdsMatcher?: Matcher$;
    /**
     * The underlying extension config.
     *
     * @generated from protobuf field: envoy.config.core.v3.TypedExtensionConfig extension_config = 2;
     */
    extensionConfig?: TypedExtensionConfig;
}
/**
 * Extra settings on a per virtualhost/route/weighted-cluster level.
 *
 * @generated from protobuf message envoy.extensions.common.matching.v3.ExtensionWithMatcherPerRoute
 */
export interface ExtensionWithMatcherPerRoute {
    /**
     * Matcher override.
     *
     * @generated from protobuf field: xds.type.matcher.v3.Matcher xds_matcher = 1;
     */
    xdsMatcher?: Matcher$;
}
// @generated message type with reflection information, may provide speed optimized methods
class ExtensionWithMatcher$Type extends MessageType<ExtensionWithMatcher> {
    constructor() {
        super("envoy.extensions.common.matching.v3.ExtensionWithMatcher", [
            { no: 1, name: "matcher", kind: "message", T: () => Matcher, options: { "envoy.annotations.deprecated_at_minor_version": "3.0" } },
            { no: 3, name: "xds_matcher", kind: "message", T: () => Matcher$ },
            { no: 2, name: "extension_config", kind: "message", T: () => TypedExtensionConfig, options: { "validate.rules": { message: { required: true } } } }
        ], { "xds.annotations.v3.message_status": { workInProgress: true } });
    }
    create(value?: PartialMessage<ExtensionWithMatcher>): ExtensionWithMatcher {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<ExtensionWithMatcher>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExtensionWithMatcher): ExtensionWithMatcher {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.config.common.matcher.v3.Matcher matcher = 1 [deprecated = true];*/ 1:
                    message.matcher = Matcher.internalBinaryRead(reader, reader.uint32(), options, message.matcher);
                    break;
                case /* xds.type.matcher.v3.Matcher xds_matcher */ 3:
                    message.xdsMatcher = Matcher$.internalBinaryRead(reader, reader.uint32(), options, message.xdsMatcher);
                    break;
                case /* envoy.config.core.v3.TypedExtensionConfig extension_config */ 2:
                    message.extensionConfig = TypedExtensionConfig.internalBinaryRead(reader, reader.uint32(), options, message.extensionConfig);
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
    internalBinaryWrite(message: ExtensionWithMatcher, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.config.common.matcher.v3.Matcher matcher = 1 [deprecated = true]; */
        if (message.matcher)
            Matcher.internalBinaryWrite(message.matcher, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* xds.type.matcher.v3.Matcher xds_matcher = 3; */
        if (message.xdsMatcher)
            Matcher$.internalBinaryWrite(message.xdsMatcher, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* envoy.config.core.v3.TypedExtensionConfig extension_config = 2; */
        if (message.extensionConfig)
            TypedExtensionConfig.internalBinaryWrite(message.extensionConfig, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.common.matching.v3.ExtensionWithMatcher
 */
export const ExtensionWithMatcher = new ExtensionWithMatcher$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExtensionWithMatcherPerRoute$Type extends MessageType<ExtensionWithMatcherPerRoute> {
    constructor() {
        super("envoy.extensions.common.matching.v3.ExtensionWithMatcherPerRoute", [
            { no: 1, name: "xds_matcher", kind: "message", T: () => Matcher$ }
        ]);
    }
    create(value?: PartialMessage<ExtensionWithMatcherPerRoute>): ExtensionWithMatcherPerRoute {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<ExtensionWithMatcherPerRoute>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExtensionWithMatcherPerRoute): ExtensionWithMatcherPerRoute {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* xds.type.matcher.v3.Matcher xds_matcher */ 1:
                    message.xdsMatcher = Matcher$.internalBinaryRead(reader, reader.uint32(), options, message.xdsMatcher);
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
    internalBinaryWrite(message: ExtensionWithMatcherPerRoute, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* xds.type.matcher.v3.Matcher xds_matcher = 1; */
        if (message.xdsMatcher)
            Matcher$.internalBinaryWrite(message.xdsMatcher, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.common.matching.v3.ExtensionWithMatcherPerRoute
 */
export const ExtensionWithMatcherPerRoute = new ExtensionWithMatcherPerRoute$Type();