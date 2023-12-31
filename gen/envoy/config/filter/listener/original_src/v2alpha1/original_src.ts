// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/config/filter/listener/original_src/v2alpha1/original_src.proto" (package "envoy.config.filter.listener.original_src.v2alpha1", syntax proto3)
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
// [#protodoc-title: Original Src Filter]
// Use the Original source address on upstream connections.
// [#extension: envoy.filters.listener.original_src]

/**
 * The Original Src filter binds upstream connections to the original source address determined
 * for the connection. This address could come from something like the Proxy Protocol filter, or it
 * could come from trusted http headers.
 *
 * @generated from protobuf message envoy.config.filter.listener.original_src.v2alpha1.OriginalSrc
 */
export interface OriginalSrc {
    /**
     * Whether to bind the port to the one used in the original downstream connection.
     * [#not-implemented-hide:]
     *
     * @generated from protobuf field: bool bind_port = 1;
     */
    bindPort: boolean;
    /**
     * Sets the SO_MARK option on the upstream connection's socket to the provided value. Used to
     * ensure that non-local addresses may be routed back through envoy when binding to the original
     * source address. The option will not be applied if the mark is 0.
     *
     * @generated from protobuf field: uint32 mark = 2;
     */
    mark: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class OriginalSrc$Type extends MessageType<OriginalSrc> {
    constructor() {
        super("envoy.config.filter.listener.original_src.v2alpha1.OriginalSrc", [
            { no: 1, name: "bind_port", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "mark", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<OriginalSrc>): OriginalSrc {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.bindPort = false;
        message.mark = 0;
        if (value !== undefined)
            reflectionMergePartial<OriginalSrc>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OriginalSrc): OriginalSrc {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool bind_port */ 1:
                    message.bindPort = reader.bool();
                    break;
                case /* uint32 mark */ 2:
                    message.mark = reader.uint32();
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
    internalBinaryWrite(message: OriginalSrc, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool bind_port = 1; */
        if (message.bindPort !== false)
            writer.tag(1, WireType.Varint).bool(message.bindPort);
        /* uint32 mark = 2; */
        if (message.mark !== 0)
            writer.tag(2, WireType.Varint).uint32(message.mark);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.config.filter.listener.original_src.v2alpha1.OriginalSrc
 */
export const OriginalSrc = new OriginalSrc$Type();
