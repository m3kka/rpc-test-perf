// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/stat_sinks/open_telemetry/v3/open_telemetry.proto" (package "envoy.extensions.stat_sinks.open_telemetry.v3", syntax proto3)
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
import { BoolValue } from "../../../../../google/protobuf/wrappers";
import { GrpcService } from "../../../../config/core/v3/grpc_service";
// [#protodoc-title: Open Telemetry Stats Sink]
// Stats configuration proto schema for ``envoy.stat_sinks.open_telemetry`` sink.
// [#extension: envoy.stat_sinks.open_telemetry]

/**
 * [#next-free-field: 6]
 *
 * @generated from protobuf message envoy.extensions.stat_sinks.open_telemetry.v3.SinkConfig
 */
export interface SinkConfig {
    /**
     * @generated from protobuf oneof: protocol_specifier
     */
    protocolSpecifier: {
        oneofKind: "grpcService";
        /**
         * The upstream gRPC cluster that implements the OTLP/gRPC collector.
         *
         * @generated from protobuf field: envoy.config.core.v3.GrpcService grpc_service = 1;
         */
        grpcService: GrpcService;
    } | {
        oneofKind: undefined;
    };
    /**
     * If set to true, counters will be emitted as deltas, and the OTLP message will have
     * ``AGGREGATION_TEMPORALITY_DELTA`` set as AggregationTemporality.
     *
     * @generated from protobuf field: bool report_counters_as_deltas = 2;
     */
    reportCountersAsDeltas: boolean;
    /**
     * If set to true, histograms will be emitted as deltas, and the OTLP message will have
     * ``AGGREGATION_TEMPORALITY_DELTA`` set as AggregationTemporality.
     *
     * @generated from protobuf field: bool report_histograms_as_deltas = 3;
     */
    reportHistogramsAsDeltas: boolean;
    /**
     * If set to true, metrics will have their tags emitted as OTLP attributes, which may
     * contain values used by the tag extractor or additional tags added during stats creation.
     * Otherwise, no attributes will be associated with the export message. Default value is true.
     *
     * @generated from protobuf field: google.protobuf.BoolValue emit_tags_as_attributes = 4;
     */
    emitTagsAsAttributes?: BoolValue;
    /**
     * If set to true, metric names will be represented as the tag extracted name instead
     * of the full metric name. Default value is true.
     *
     * @generated from protobuf field: google.protobuf.BoolValue use_tag_extracted_name = 5;
     */
    useTagExtractedName?: BoolValue;
}
// @generated message type with reflection information, may provide speed optimized methods
class SinkConfig$Type extends MessageType<SinkConfig> {
    constructor() {
        super("envoy.extensions.stat_sinks.open_telemetry.v3.SinkConfig", [
            { no: 1, name: "grpc_service", kind: "message", oneof: "protocolSpecifier", T: () => GrpcService, options: { "validate.rules": { message: { required: true } } } },
            { no: 2, name: "report_counters_as_deltas", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "report_histograms_as_deltas", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "emit_tags_as_attributes", kind: "message", T: () => BoolValue },
            { no: 5, name: "use_tag_extracted_name", kind: "message", T: () => BoolValue }
        ]);
    }
    create(value?: PartialMessage<SinkConfig>): SinkConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.protocolSpecifier = { oneofKind: undefined };
        message.reportCountersAsDeltas = false;
        message.reportHistogramsAsDeltas = false;
        if (value !== undefined)
            reflectionMergePartial<SinkConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SinkConfig): SinkConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.config.core.v3.GrpcService grpc_service */ 1:
                    message.protocolSpecifier = {
                        oneofKind: "grpcService",
                        grpcService: GrpcService.internalBinaryRead(reader, reader.uint32(), options, (message.protocolSpecifier as any).grpcService)
                    };
                    break;
                case /* bool report_counters_as_deltas */ 2:
                    message.reportCountersAsDeltas = reader.bool();
                    break;
                case /* bool report_histograms_as_deltas */ 3:
                    message.reportHistogramsAsDeltas = reader.bool();
                    break;
                case /* google.protobuf.BoolValue emit_tags_as_attributes */ 4:
                    message.emitTagsAsAttributes = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.emitTagsAsAttributes);
                    break;
                case /* google.protobuf.BoolValue use_tag_extracted_name */ 5:
                    message.useTagExtractedName = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.useTagExtractedName);
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
    internalBinaryWrite(message: SinkConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.config.core.v3.GrpcService grpc_service = 1; */
        if (message.protocolSpecifier.oneofKind === "grpcService")
            GrpcService.internalBinaryWrite(message.protocolSpecifier.grpcService, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* bool report_counters_as_deltas = 2; */
        if (message.reportCountersAsDeltas !== false)
            writer.tag(2, WireType.Varint).bool(message.reportCountersAsDeltas);
        /* bool report_histograms_as_deltas = 3; */
        if (message.reportHistogramsAsDeltas !== false)
            writer.tag(3, WireType.Varint).bool(message.reportHistogramsAsDeltas);
        /* google.protobuf.BoolValue emit_tags_as_attributes = 4; */
        if (message.emitTagsAsAttributes)
            BoolValue.internalBinaryWrite(message.emitTagsAsAttributes, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.BoolValue use_tag_extracted_name = 5; */
        if (message.useTagExtractedName)
            BoolValue.internalBinaryWrite(message.useTagExtractedName, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.stat_sinks.open_telemetry.v3.SinkConfig
 */
export const SinkConfig = new SinkConfig$Type();
