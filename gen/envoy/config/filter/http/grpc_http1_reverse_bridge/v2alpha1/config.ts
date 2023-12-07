// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/config/filter/http/grpc_http1_reverse_bridge/v2alpha1/config.proto" (package "envoy.config.filter.http.grpc_http1_reverse_bridge.v2alpha1", syntax proto3)
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
// [#protodoc-title: gRPC HTTP/1.1 Reverse Bridge]
// gRPC HTTP/1.1 Reverse Bridge :ref:`configuration overview
// <config_http_filters_grpc_http1_reverse_bridge>`.
// [#extension: envoy.filters.http.grpc_http1_reverse_bridge]

/**
 * gRPC reverse bridge filter configuration
 *
 * @generated from protobuf message envoy.config.filter.http.grpc_http1_reverse_bridge.v2alpha1.FilterConfig
 */
export interface FilterConfig {
    /**
     * The content-type to pass to the upstream when the gRPC bridge filter is applied.
     * The filter will also validate that the upstream responds with the same content type.
     *
     * @generated from protobuf field: string content_type = 1;
     */
    contentType: string;
    /**
     * If true, Envoy will assume that the upstream doesn't understand gRPC frames and
     * strip the gRPC frame from the request, and add it back in to the response. This will
     * hide the gRPC semantics from the upstream, allowing it to receive and respond with a
     * simple binary encoded protobuf.
     *
     * @generated from protobuf field: bool withhold_grpc_frames = 2;
     */
    withholdGrpcFrames: boolean;
}
/**
 * gRPC reverse bridge filter configuration per virtualhost/route/weighted-cluster level.
 *
 * @generated from protobuf message envoy.config.filter.http.grpc_http1_reverse_bridge.v2alpha1.FilterConfigPerRoute
 */
export interface FilterConfigPerRoute {
    /**
     * If true, disables gRPC reverse bridge filter for this particular vhost or route.
     * If disabled is specified in multiple per-filter-configs, the most specific one will be used.
     *
     * @generated from protobuf field: bool disabled = 1;
     */
    disabled: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class FilterConfig$Type extends MessageType<FilterConfig> {
    constructor() {
        super("envoy.config.filter.http.grpc_http1_reverse_bridge.v2alpha1.FilterConfig", [
            { no: 1, name: "content_type", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minBytes: "1" } } } },
            { no: 2, name: "withhold_grpc_frames", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<FilterConfig>): FilterConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.contentType = "";
        message.withholdGrpcFrames = false;
        if (value !== undefined)
            reflectionMergePartial<FilterConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FilterConfig): FilterConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string content_type */ 1:
                    message.contentType = reader.string();
                    break;
                case /* bool withhold_grpc_frames */ 2:
                    message.withholdGrpcFrames = reader.bool();
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
    internalBinaryWrite(message: FilterConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string content_type = 1; */
        if (message.contentType !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.contentType);
        /* bool withhold_grpc_frames = 2; */
        if (message.withholdGrpcFrames !== false)
            writer.tag(2, WireType.Varint).bool(message.withholdGrpcFrames);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.config.filter.http.grpc_http1_reverse_bridge.v2alpha1.FilterConfig
 */
export const FilterConfig = new FilterConfig$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FilterConfigPerRoute$Type extends MessageType<FilterConfigPerRoute> {
    constructor() {
        super("envoy.config.filter.http.grpc_http1_reverse_bridge.v2alpha1.FilterConfigPerRoute", [
            { no: 1, name: "disabled", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<FilterConfigPerRoute>): FilterConfigPerRoute {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.disabled = false;
        if (value !== undefined)
            reflectionMergePartial<FilterConfigPerRoute>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FilterConfigPerRoute): FilterConfigPerRoute {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool disabled */ 1:
                    message.disabled = reader.bool();
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
    internalBinaryWrite(message: FilterConfigPerRoute, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool disabled = 1; */
        if (message.disabled !== false)
            writer.tag(1, WireType.Varint).bool(message.disabled);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.config.filter.http.grpc_http1_reverse_bridge.v2alpha1.FilterConfigPerRoute
 */
export const FilterConfigPerRoute = new FilterConfigPerRoute$Type();