// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/config/trace/v3/opentelemetry.proto" (package "envoy.config.trace.v3", syntax proto3)
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
import { GrpcService } from "../../core/v3/grpc_service";
// [#protodoc-title: OpenTelemetry tracer]

/**
 * Configuration for the OpenTelemetry tracer.
 *  [#extension: envoy.tracers.opentelemetry]
 *
 * @generated from protobuf message envoy.config.trace.v3.OpenTelemetryConfig
 */
export interface OpenTelemetryConfig {
    /**
     * The upstream gRPC cluster that will receive OTLP traces.
     * Note that the tracer drops traces if the server does not read data fast enough.
     * This field can be left empty to disable reporting traces to the collector.
     *
     * @generated from protobuf field: envoy.config.core.v3.GrpcService grpc_service = 1;
     */
    grpcService?: GrpcService;
    /**
     * The name for the service. This will be populated in the ResourceSpan Resource attributes.
     * If it is not provided, it will default to "unknown_service:envoy".
     *
     * @generated from protobuf field: string service_name = 2;
     */
    serviceName: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class OpenTelemetryConfig$Type extends MessageType<OpenTelemetryConfig> {
    constructor() {
        super("envoy.config.trace.v3.OpenTelemetryConfig", [
            { no: 1, name: "grpc_service", kind: "message", T: () => GrpcService },
            { no: 2, name: "service_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<OpenTelemetryConfig>): OpenTelemetryConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.serviceName = "";
        if (value !== undefined)
            reflectionMergePartial<OpenTelemetryConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OpenTelemetryConfig): OpenTelemetryConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.config.core.v3.GrpcService grpc_service */ 1:
                    message.grpcService = GrpcService.internalBinaryRead(reader, reader.uint32(), options, message.grpcService);
                    break;
                case /* string service_name */ 2:
                    message.serviceName = reader.string();
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
    internalBinaryWrite(message: OpenTelemetryConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.config.core.v3.GrpcService grpc_service = 1; */
        if (message.grpcService)
            GrpcService.internalBinaryWrite(message.grpcService, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string service_name = 2; */
        if (message.serviceName !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.serviceName);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.config.trace.v3.OpenTelemetryConfig
 */
export const OpenTelemetryConfig = new OpenTelemetryConfig$Type();
