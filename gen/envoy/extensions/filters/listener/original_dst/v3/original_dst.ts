// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/filters/listener/original_dst/v3/original_dst.proto" (package "envoy.extensions.filters.listener.original_dst.v3", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// [#protodoc-title: Original Dst Filter]
// Use the Original destination address on downstream connections.
// [#extension: envoy.filters.listener.original_dst]

/**
 * @generated from protobuf message envoy.extensions.filters.listener.original_dst.v3.OriginalDst
 */
export interface OriginalDst {
}
// @generated message type with reflection information, may provide speed optimized methods
class OriginalDst$Type extends MessageType<OriginalDst> {
    constructor() {
        super("envoy.extensions.filters.listener.original_dst.v3.OriginalDst", [], { "udpa.annotations.versioning": { previousMessageType: "envoy.config.filter.listener.original_dst.v2.OriginalDst" } });
    }
    create(value?: PartialMessage<OriginalDst>): OriginalDst {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<OriginalDst>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OriginalDst): OriginalDst {
        return target ?? this.create();
    }
    internalBinaryWrite(message: OriginalDst, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.listener.original_dst.v3.OriginalDst
 */
export const OriginalDst = new OriginalDst$Type();
