// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/access_loggers/grpc/v3/als.proto" (package "envoy.extensions.access_loggers.grpc.v3", syntax proto3)
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
import { CustomTag } from "../../../../type/tracing/v3/custom_tag";
import { RetryPolicy } from "../../../../config/core/v3/base";
import { UInt32Value } from "../../../../../google/protobuf/wrappers";
import { Duration } from "../../../../../google/protobuf/duration";
import { ApiVersion } from "../../../../config/core/v3/config_source";
import { GrpcService } from "../../../../config/core/v3/grpc_service";
// [#protodoc-title: gRPC Access Log Service (ALS)]

/**
 * Configuration for the built-in ``envoy.access_loggers.http_grpc``
 * :ref:`AccessLog <envoy_v3_api_msg_config.accesslog.v3.AccessLog>`. This configuration will
 * populate :ref:`StreamAccessLogsMessage.http_logs
 * <envoy_v3_api_field_service.accesslog.v3.StreamAccessLogsMessage.http_logs>`.
 * [#extension: envoy.access_loggers.http_grpc]
 *
 * @generated from protobuf message envoy.extensions.access_loggers.grpc.v3.HttpGrpcAccessLogConfig
 */
export interface HttpGrpcAccessLogConfig {
    /**
     * @generated from protobuf field: envoy.extensions.access_loggers.grpc.v3.CommonGrpcAccessLogConfig common_config = 1;
     */
    commonConfig?: CommonGrpcAccessLogConfig;
    /**
     * Additional request headers to log in :ref:`HTTPRequestProperties.request_headers
     * <envoy_v3_api_field_data.accesslog.v3.HTTPRequestProperties.request_headers>`.
     *
     * @generated from protobuf field: repeated string additional_request_headers_to_log = 2;
     */
    additionalRequestHeadersToLog: string[];
    /**
     * Additional response headers to log in :ref:`HTTPResponseProperties.response_headers
     * <envoy_v3_api_field_data.accesslog.v3.HTTPResponseProperties.response_headers>`.
     *
     * @generated from protobuf field: repeated string additional_response_headers_to_log = 3;
     */
    additionalResponseHeadersToLog: string[];
    /**
     * Additional response trailers to log in :ref:`HTTPResponseProperties.response_trailers
     * <envoy_v3_api_field_data.accesslog.v3.HTTPResponseProperties.response_trailers>`.
     *
     * @generated from protobuf field: repeated string additional_response_trailers_to_log = 4;
     */
    additionalResponseTrailersToLog: string[];
}
/**
 * Configuration for the built-in ``envoy.access_loggers.tcp_grpc`` type. This configuration will
 * populate ``StreamAccessLogsMessage.tcp_logs``.
 * [#extension: envoy.access_loggers.tcp_grpc]
 *
 * @generated from protobuf message envoy.extensions.access_loggers.grpc.v3.TcpGrpcAccessLogConfig
 */
export interface TcpGrpcAccessLogConfig {
    /**
     * @generated from protobuf field: envoy.extensions.access_loggers.grpc.v3.CommonGrpcAccessLogConfig common_config = 1;
     */
    commonConfig?: CommonGrpcAccessLogConfig;
}
/**
 * Common configuration for gRPC access logs.
 * [#next-free-field: 9]
 *
 * @generated from protobuf message envoy.extensions.access_loggers.grpc.v3.CommonGrpcAccessLogConfig
 */
export interface CommonGrpcAccessLogConfig {
    /**
     * The friendly name of the access log to be returned in :ref:`StreamAccessLogsMessage.Identifier
     * <envoy_v3_api_msg_service.accesslog.v3.StreamAccessLogsMessage.Identifier>`. This allows the
     * access log server to differentiate between different access logs coming from the same Envoy.
     *
     * @generated from protobuf field: string log_name = 1;
     */
    logName: string;
    /**
     * The gRPC service for the access log service.
     *
     * @generated from protobuf field: envoy.config.core.v3.GrpcService grpc_service = 2;
     */
    grpcService?: GrpcService;
    /**
     * API version for access logs service transport protocol. This describes the access logs service
     * gRPC endpoint and version of messages used on the wire.
     *
     * @generated from protobuf field: envoy.config.core.v3.ApiVersion transport_api_version = 6;
     */
    transportApiVersion: ApiVersion;
    /**
     * Interval for flushing access logs to the gRPC stream. Logger will flush requests every time
     * this interval is elapsed, or when batch size limit is hit, whichever comes first. Defaults to
     * 1 second.
     *
     * @generated from protobuf field: google.protobuf.Duration buffer_flush_interval = 3;
     */
    bufferFlushInterval?: Duration;
    /**
     * Soft size limit in bytes for access log entries buffer. Logger will buffer requests until
     * this limit it hit, or every time flush interval is elapsed, whichever comes first. Setting it
     * to zero effectively disables the batching. Defaults to 16384.
     *
     * @generated from protobuf field: google.protobuf.UInt32Value buffer_size_bytes = 4;
     */
    bufferSizeBytes?: UInt32Value;
    /**
     * Additional filter state objects to log in :ref:`filter_state_objects
     * <envoy_v3_api_field_data.accesslog.v3.AccessLogCommon.filter_state_objects>`.
     * Logger will call ``FilterState::Object::serializeAsProto`` to serialize the filter state object.
     *
     * @generated from protobuf field: repeated string filter_state_objects_to_log = 5;
     */
    filterStateObjectsToLog: string[];
    /**
     * Sets the retry policy when the establishment of a gRPC stream fails.
     * If the stream succeeds at least once in establishing itself,
     * no retry will be performed no matter what gRPC status is received.
     * Note that only :ref:`num_retries <envoy_v3_api_field_config.core.v3.RetryPolicy.num_retries>`
     * will be used in this configuration. This feature is used only when you are using
     * :ref:`Envoy gRPC client <envoy_v3_api_field_config.core.v3.GrpcService.envoy_grpc>`.
     *
     * @generated from protobuf field: envoy.config.core.v3.RetryPolicy grpc_stream_retry_policy = 7;
     */
    grpcStreamRetryPolicy?: RetryPolicy;
    /**
     * A list of custom tags with unique tag name to create tags for the logs.
     *
     * @generated from protobuf field: repeated envoy.type.tracing.v3.CustomTag custom_tags = 8;
     */
    customTags: CustomTag[];
}
// @generated message type with reflection information, may provide speed optimized methods
class HttpGrpcAccessLogConfig$Type extends MessageType<HttpGrpcAccessLogConfig> {
    constructor() {
        super("envoy.extensions.access_loggers.grpc.v3.HttpGrpcAccessLogConfig", [
            { no: 1, name: "common_config", kind: "message", T: () => CommonGrpcAccessLogConfig, options: { "validate.rules": { message: { required: true } } } },
            { no: 2, name: "additional_request_headers_to_log", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "additional_response_headers_to_log", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "additional_response_trailers_to_log", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.config.accesslog.v2.HttpGrpcAccessLogConfig" } });
    }
    create(value?: PartialMessage<HttpGrpcAccessLogConfig>): HttpGrpcAccessLogConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.additionalRequestHeadersToLog = [];
        message.additionalResponseHeadersToLog = [];
        message.additionalResponseTrailersToLog = [];
        if (value !== undefined)
            reflectionMergePartial<HttpGrpcAccessLogConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HttpGrpcAccessLogConfig): HttpGrpcAccessLogConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.extensions.access_loggers.grpc.v3.CommonGrpcAccessLogConfig common_config */ 1:
                    message.commonConfig = CommonGrpcAccessLogConfig.internalBinaryRead(reader, reader.uint32(), options, message.commonConfig);
                    break;
                case /* repeated string additional_request_headers_to_log */ 2:
                    message.additionalRequestHeadersToLog.push(reader.string());
                    break;
                case /* repeated string additional_response_headers_to_log */ 3:
                    message.additionalResponseHeadersToLog.push(reader.string());
                    break;
                case /* repeated string additional_response_trailers_to_log */ 4:
                    message.additionalResponseTrailersToLog.push(reader.string());
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
    internalBinaryWrite(message: HttpGrpcAccessLogConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.extensions.access_loggers.grpc.v3.CommonGrpcAccessLogConfig common_config = 1; */
        if (message.commonConfig)
            CommonGrpcAccessLogConfig.internalBinaryWrite(message.commonConfig, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated string additional_request_headers_to_log = 2; */
        for (let i = 0; i < message.additionalRequestHeadersToLog.length; i++)
            writer.tag(2, WireType.LengthDelimited).string(message.additionalRequestHeadersToLog[i]);
        /* repeated string additional_response_headers_to_log = 3; */
        for (let i = 0; i < message.additionalResponseHeadersToLog.length; i++)
            writer.tag(3, WireType.LengthDelimited).string(message.additionalResponseHeadersToLog[i]);
        /* repeated string additional_response_trailers_to_log = 4; */
        for (let i = 0; i < message.additionalResponseTrailersToLog.length; i++)
            writer.tag(4, WireType.LengthDelimited).string(message.additionalResponseTrailersToLog[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.access_loggers.grpc.v3.HttpGrpcAccessLogConfig
 */
export const HttpGrpcAccessLogConfig = new HttpGrpcAccessLogConfig$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TcpGrpcAccessLogConfig$Type extends MessageType<TcpGrpcAccessLogConfig> {
    constructor() {
        super("envoy.extensions.access_loggers.grpc.v3.TcpGrpcAccessLogConfig", [
            { no: 1, name: "common_config", kind: "message", T: () => CommonGrpcAccessLogConfig, options: { "validate.rules": { message: { required: true } } } }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.config.accesslog.v2.TcpGrpcAccessLogConfig" } });
    }
    create(value?: PartialMessage<TcpGrpcAccessLogConfig>): TcpGrpcAccessLogConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<TcpGrpcAccessLogConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TcpGrpcAccessLogConfig): TcpGrpcAccessLogConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.extensions.access_loggers.grpc.v3.CommonGrpcAccessLogConfig common_config */ 1:
                    message.commonConfig = CommonGrpcAccessLogConfig.internalBinaryRead(reader, reader.uint32(), options, message.commonConfig);
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
    internalBinaryWrite(message: TcpGrpcAccessLogConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.extensions.access_loggers.grpc.v3.CommonGrpcAccessLogConfig common_config = 1; */
        if (message.commonConfig)
            CommonGrpcAccessLogConfig.internalBinaryWrite(message.commonConfig, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.access_loggers.grpc.v3.TcpGrpcAccessLogConfig
 */
export const TcpGrpcAccessLogConfig = new TcpGrpcAccessLogConfig$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CommonGrpcAccessLogConfig$Type extends MessageType<CommonGrpcAccessLogConfig> {
    constructor() {
        super("envoy.extensions.access_loggers.grpc.v3.CommonGrpcAccessLogConfig", [
            { no: 1, name: "log_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } },
            { no: 2, name: "grpc_service", kind: "message", T: () => GrpcService, options: { "validate.rules": { message: { required: true } } } },
            { no: 6, name: "transport_api_version", kind: "enum", T: () => ["envoy.config.core.v3.ApiVersion", ApiVersion], options: { "validate.rules": { enum: { definedOnly: true } } } },
            { no: 3, name: "buffer_flush_interval", kind: "message", T: () => Duration, options: { "validate.rules": { duration: { gt: {} } } } },
            { no: 4, name: "buffer_size_bytes", kind: "message", T: () => UInt32Value },
            { no: 5, name: "filter_state_objects_to_log", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "grpc_stream_retry_policy", kind: "message", T: () => RetryPolicy },
            { no: 8, name: "custom_tags", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CustomTag }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.config.accesslog.v2.CommonGrpcAccessLogConfig" } });
    }
    create(value?: PartialMessage<CommonGrpcAccessLogConfig>): CommonGrpcAccessLogConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.logName = "";
        message.transportApiVersion = 0;
        message.filterStateObjectsToLog = [];
        message.customTags = [];
        if (value !== undefined)
            reflectionMergePartial<CommonGrpcAccessLogConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CommonGrpcAccessLogConfig): CommonGrpcAccessLogConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string log_name */ 1:
                    message.logName = reader.string();
                    break;
                case /* envoy.config.core.v3.GrpcService grpc_service */ 2:
                    message.grpcService = GrpcService.internalBinaryRead(reader, reader.uint32(), options, message.grpcService);
                    break;
                case /* envoy.config.core.v3.ApiVersion transport_api_version */ 6:
                    message.transportApiVersion = reader.int32();
                    break;
                case /* google.protobuf.Duration buffer_flush_interval */ 3:
                    message.bufferFlushInterval = Duration.internalBinaryRead(reader, reader.uint32(), options, message.bufferFlushInterval);
                    break;
                case /* google.protobuf.UInt32Value buffer_size_bytes */ 4:
                    message.bufferSizeBytes = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.bufferSizeBytes);
                    break;
                case /* repeated string filter_state_objects_to_log */ 5:
                    message.filterStateObjectsToLog.push(reader.string());
                    break;
                case /* envoy.config.core.v3.RetryPolicy grpc_stream_retry_policy */ 7:
                    message.grpcStreamRetryPolicy = RetryPolicy.internalBinaryRead(reader, reader.uint32(), options, message.grpcStreamRetryPolicy);
                    break;
                case /* repeated envoy.type.tracing.v3.CustomTag custom_tags */ 8:
                    message.customTags.push(CustomTag.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: CommonGrpcAccessLogConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string log_name = 1; */
        if (message.logName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.logName);
        /* envoy.config.core.v3.GrpcService grpc_service = 2; */
        if (message.grpcService)
            GrpcService.internalBinaryWrite(message.grpcService, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* envoy.config.core.v3.ApiVersion transport_api_version = 6; */
        if (message.transportApiVersion !== 0)
            writer.tag(6, WireType.Varint).int32(message.transportApiVersion);
        /* google.protobuf.Duration buffer_flush_interval = 3; */
        if (message.bufferFlushInterval)
            Duration.internalBinaryWrite(message.bufferFlushInterval, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value buffer_size_bytes = 4; */
        if (message.bufferSizeBytes)
            UInt32Value.internalBinaryWrite(message.bufferSizeBytes, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* repeated string filter_state_objects_to_log = 5; */
        for (let i = 0; i < message.filterStateObjectsToLog.length; i++)
            writer.tag(5, WireType.LengthDelimited).string(message.filterStateObjectsToLog[i]);
        /* envoy.config.core.v3.RetryPolicy grpc_stream_retry_policy = 7; */
        if (message.grpcStreamRetryPolicy)
            RetryPolicy.internalBinaryWrite(message.grpcStreamRetryPolicy, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* repeated envoy.type.tracing.v3.CustomTag custom_tags = 8; */
        for (let i = 0; i < message.customTags.length; i++)
            CustomTag.internalBinaryWrite(message.customTags[i], writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.access_loggers.grpc.v3.CommonGrpcAccessLogConfig
 */
export const CommonGrpcAccessLogConfig = new CommonGrpcAccessLogConfig$Type();
