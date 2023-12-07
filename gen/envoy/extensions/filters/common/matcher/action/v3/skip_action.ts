// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/filters/common/matcher/action/v3/skip_action.proto" (package "envoy.extensions.filters.common.matcher.action.v3", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// [#protodoc-title: Common match actions]

/**
 * Configuration for the SkipFilter match action. When matching results in this action, the
 * associated filter will be ignored for all filter callbacks (e.g. ``encodeHeaders``, ``encodeData``,
 * etc. for HTTP filters) after the matcher arrives at the match, including the callback that
 * caused the match result. For example, when used with a HTTP filter and the match result was
 * resolved after receiving the HTTP response headers, the HTTP filter will *not* receive the
 * response header callback.
 *
 * As a result, if this match action is resolved before the first filter callback (e.g. HTTP request
 * headers), the filter will be completely skipped.
 *
 * @generated from protobuf message envoy.extensions.filters.common.matcher.action.v3.SkipFilter
 */
export interface SkipFilter {
}
// @generated message type with reflection information, may provide speed optimized methods
class SkipFilter$Type extends MessageType<SkipFilter> {
    constructor() {
        super("envoy.extensions.filters.common.matcher.action.v3.SkipFilter", []);
    }
    create(value?: PartialMessage<SkipFilter>): SkipFilter {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<SkipFilter>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SkipFilter): SkipFilter {
        return target ?? this.create();
    }
    internalBinaryWrite(message: SkipFilter, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.common.matcher.action.v3.SkipFilter
 */
export const SkipFilter = new SkipFilter$Type();