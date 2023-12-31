// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/admin/v2alpha/tap.proto" (package "envoy.admin.v2alpha", syntax proto3)
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
import { TapConfig } from "../../service/tap/v2alpha/common";
// [#protodoc-title: Tap]

/**
 * The /tap admin request body that is used to configure an active tap session.
 *
 * @generated from protobuf message envoy.admin.v2alpha.TapRequest
 */
export interface TapRequest {
    /**
     * The opaque configuration ID used to match the configuration to a loaded extension.
     * A tap extension configures a similar opaque ID that is used to match.
     *
     * @generated from protobuf field: string config_id = 1;
     */
    configId: string;
    /**
     * The tap configuration to load.
     *
     * @generated from protobuf field: envoy.service.tap.v2alpha.TapConfig tap_config = 2;
     */
    tapConfig?: TapConfig;
}
// @generated message type with reflection information, may provide speed optimized methods
class TapRequest$Type extends MessageType<TapRequest> {
    constructor() {
        super("envoy.admin.v2alpha.TapRequest", [
            { no: 1, name: "config_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minBytes: "1" } } } },
            { no: 2, name: "tap_config", kind: "message", T: () => TapConfig, options: { "validate.rules": { message: { required: true } } } }
        ]);
    }
    create(value?: PartialMessage<TapRequest>): TapRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.configId = "";
        if (value !== undefined)
            reflectionMergePartial<TapRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TapRequest): TapRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string config_id */ 1:
                    message.configId = reader.string();
                    break;
                case /* envoy.service.tap.v2alpha.TapConfig tap_config */ 2:
                    message.tapConfig = TapConfig.internalBinaryRead(reader, reader.uint32(), options, message.tapConfig);
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
    internalBinaryWrite(message: TapRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string config_id = 1; */
        if (message.configId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.configId);
        /* envoy.service.tap.v2alpha.TapConfig tap_config = 2; */
        if (message.tapConfig)
            TapConfig.internalBinaryWrite(message.tapConfig, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.admin.v2alpha.TapRequest
 */
export const TapRequest = new TapRequest$Type();
