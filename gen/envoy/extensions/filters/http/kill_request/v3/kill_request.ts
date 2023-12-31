// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/filters/http/kill_request/v3/kill_request.proto" (package "envoy.extensions.filters.http.kill_request.v3", syntax proto3)
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
import { FractionalPercent } from "../../../../../type/v3/percent";
// [#protodoc-title: Kill Request]
// Kill Request :ref:`configuration overview <config_http_filters_kill_request>`.
// [#extension: envoy.filters.http.kill_request]

/**
 * Configuration for KillRequest filter.
 *
 * @generated from protobuf message envoy.extensions.filters.http.kill_request.v3.KillRequest
 */
export interface KillRequest {
    /**
     * The probability that a Kill request will be triggered.
     *
     * @generated from protobuf field: envoy.type.v3.FractionalPercent probability = 1;
     */
    probability?: FractionalPercent;
    /**
     * The name of the kill request header. If this field is not empty, it will override the :ref:`default header <config_http_filters_kill_request_http_header>` name. Otherwise the default header name will be used.
     *
     * @generated from protobuf field: string kill_request_header = 2;
     */
    killRequestHeader: string;
    /**
     * @generated from protobuf field: envoy.extensions.filters.http.kill_request.v3.KillRequest.Direction direction = 3;
     */
    direction: KillRequest_Direction;
}
/**
 * On which direction should the filter check for the ``kill_request_header``.
 * Default to ``REQUEST`` if unspecified.
 *
 * @generated from protobuf enum envoy.extensions.filters.http.kill_request.v3.KillRequest.Direction
 */
export enum KillRequest_Direction {
    /**
     * @generated from protobuf enum value: REQUEST = 0;
     */
    REQUEST = 0,
    /**
     * @generated from protobuf enum value: RESPONSE = 1;
     */
    RESPONSE = 1
}
// @generated message type with reflection information, may provide speed optimized methods
class KillRequest$Type extends MessageType<KillRequest> {
    constructor() {
        super("envoy.extensions.filters.http.kill_request.v3.KillRequest", [
            { no: 1, name: "probability", kind: "message", T: () => FractionalPercent },
            { no: 2, name: "kill_request_header", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { wellKnownRegex: "HTTP_HEADER_VALUE", strict: false } } } },
            { no: 3, name: "direction", kind: "enum", T: () => ["envoy.extensions.filters.http.kill_request.v3.KillRequest.Direction", KillRequest_Direction], options: { "validate.rules": { enum: { definedOnly: true } } } }
        ]);
    }
    create(value?: PartialMessage<KillRequest>): KillRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.killRequestHeader = "";
        message.direction = 0;
        if (value !== undefined)
            reflectionMergePartial<KillRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: KillRequest): KillRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.type.v3.FractionalPercent probability */ 1:
                    message.probability = FractionalPercent.internalBinaryRead(reader, reader.uint32(), options, message.probability);
                    break;
                case /* string kill_request_header */ 2:
                    message.killRequestHeader = reader.string();
                    break;
                case /* envoy.extensions.filters.http.kill_request.v3.KillRequest.Direction direction */ 3:
                    message.direction = reader.int32();
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
    internalBinaryWrite(message: KillRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.type.v3.FractionalPercent probability = 1; */
        if (message.probability)
            FractionalPercent.internalBinaryWrite(message.probability, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string kill_request_header = 2; */
        if (message.killRequestHeader !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.killRequestHeader);
        /* envoy.extensions.filters.http.kill_request.v3.KillRequest.Direction direction = 3; */
        if (message.direction !== 0)
            writer.tag(3, WireType.Varint).int32(message.direction);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.http.kill_request.v3.KillRequest
 */
export const KillRequest = new KillRequest$Type();
