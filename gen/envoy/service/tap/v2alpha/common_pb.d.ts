// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/service/tap/v2alpha/common.proto (package envoy.service.tap.v2alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { RuntimeFractionalPercent } from "../../../api/v2/core/base_pb.js";
import type { HeaderMatcher } from "../../../api/v2/route/route_components_pb.js";
import type { GrpcService } from "../../../api/v2/core/grpc_service_pb.js";

/**
 * Tap configuration.
 *
 * [#comment:TODO(mattklein123): Rate limiting]
 *
 * @generated from message envoy.service.tap.v2alpha.TapConfig
 */
export declare class TapConfig extends Message<TapConfig> {
  /**
   * The match configuration. If the configuration matches the data source being tapped, a tap will
   * occur, with the result written to the configured output.
   *
   * @generated from field: envoy.service.tap.v2alpha.MatchPredicate match_config = 1;
   */
  matchConfig?: MatchPredicate;

  /**
   * The tap output configuration. If a match configuration matches a data source being tapped,
   * a tap will occur and the data will be written to the configured output.
   *
   * @generated from field: envoy.service.tap.v2alpha.OutputConfig output_config = 2;
   */
  outputConfig?: OutputConfig;

  /**
   * [#not-implemented-hide:] Specify if Tap matching is enabled. The % of requests\connections for
   * which the tap matching is enabled. When not enabled, the request\connection will not be
   * recorded.
   *
   * .. note::
   *
   *   This field defaults to 100/:ref:`HUNDRED
   *   <envoy_api_enum_type.FractionalPercent.DenominatorType>`.
   *
   * @generated from field: envoy.api.v2.core.RuntimeFractionalPercent tap_enabled = 3;
   */
  tapEnabled?: RuntimeFractionalPercent;

  constructor(data?: PartialMessage<TapConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.tap.v2alpha.TapConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TapConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TapConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TapConfig;

  static equals(a: TapConfig | PlainMessage<TapConfig> | undefined, b: TapConfig | PlainMessage<TapConfig> | undefined): boolean;
}

/**
 * Tap match configuration. This is a recursive structure which allows complex nested match
 * configurations to be built using various logical operators.
 * [#next-free-field: 9]
 *
 * @generated from message envoy.service.tap.v2alpha.MatchPredicate
 */
export declare class MatchPredicate extends Message<MatchPredicate> {
  /**
   * @generated from oneof envoy.service.tap.v2alpha.MatchPredicate.rule
   */
  rule: {
    /**
     * A set that describes a logical OR. If any member of the set matches, the match configuration
     * matches.
     *
     * @generated from field: envoy.service.tap.v2alpha.MatchPredicate.MatchSet or_match = 1;
     */
    value: MatchPredicate_MatchSet;
    case: "orMatch";
  } | {
    /**
     * A set that describes a logical AND. If all members of the set match, the match configuration
     * matches.
     *
     * @generated from field: envoy.service.tap.v2alpha.MatchPredicate.MatchSet and_match = 2;
     */
    value: MatchPredicate_MatchSet;
    case: "andMatch";
  } | {
    /**
     * A negation match. The match configuration will match if the negated match condition matches.
     *
     * @generated from field: envoy.service.tap.v2alpha.MatchPredicate not_match = 3;
     */
    value: MatchPredicate;
    case: "notMatch";
  } | {
    /**
     * The match configuration will always match.
     *
     * @generated from field: bool any_match = 4;
     */
    value: boolean;
    case: "anyMatch";
  } | {
    /**
     * HTTP request headers match configuration.
     *
     * @generated from field: envoy.service.tap.v2alpha.HttpHeadersMatch http_request_headers_match = 5;
     */
    value: HttpHeadersMatch;
    case: "httpRequestHeadersMatch";
  } | {
    /**
     * HTTP request trailers match configuration.
     *
     * @generated from field: envoy.service.tap.v2alpha.HttpHeadersMatch http_request_trailers_match = 6;
     */
    value: HttpHeadersMatch;
    case: "httpRequestTrailersMatch";
  } | {
    /**
     * HTTP response headers match configuration.
     *
     * @generated from field: envoy.service.tap.v2alpha.HttpHeadersMatch http_response_headers_match = 7;
     */
    value: HttpHeadersMatch;
    case: "httpResponseHeadersMatch";
  } | {
    /**
     * HTTP response trailers match configuration.
     *
     * @generated from field: envoy.service.tap.v2alpha.HttpHeadersMatch http_response_trailers_match = 8;
     */
    value: HttpHeadersMatch;
    case: "httpResponseTrailersMatch";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<MatchPredicate>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.tap.v2alpha.MatchPredicate";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MatchPredicate;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MatchPredicate;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MatchPredicate;

  static equals(a: MatchPredicate | PlainMessage<MatchPredicate> | undefined, b: MatchPredicate | PlainMessage<MatchPredicate> | undefined): boolean;
}

/**
 * A set of match configurations used for logical operations.
 *
 * @generated from message envoy.service.tap.v2alpha.MatchPredicate.MatchSet
 */
export declare class MatchPredicate_MatchSet extends Message<MatchPredicate_MatchSet> {
  /**
   * The list of rules that make up the set.
   *
   * @generated from field: repeated envoy.service.tap.v2alpha.MatchPredicate rules = 1;
   */
  rules: MatchPredicate[];

  constructor(data?: PartialMessage<MatchPredicate_MatchSet>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.tap.v2alpha.MatchPredicate.MatchSet";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MatchPredicate_MatchSet;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MatchPredicate_MatchSet;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MatchPredicate_MatchSet;

  static equals(a: MatchPredicate_MatchSet | PlainMessage<MatchPredicate_MatchSet> | undefined, b: MatchPredicate_MatchSet | PlainMessage<MatchPredicate_MatchSet> | undefined): boolean;
}

/**
 * HTTP headers match configuration.
 *
 * @generated from message envoy.service.tap.v2alpha.HttpHeadersMatch
 */
export declare class HttpHeadersMatch extends Message<HttpHeadersMatch> {
  /**
   * HTTP headers to match.
   *
   * @generated from field: repeated envoy.api.v2.route.HeaderMatcher headers = 1;
   */
  headers: HeaderMatcher[];

  constructor(data?: PartialMessage<HttpHeadersMatch>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.tap.v2alpha.HttpHeadersMatch";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HttpHeadersMatch;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HttpHeadersMatch;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HttpHeadersMatch;

  static equals(a: HttpHeadersMatch | PlainMessage<HttpHeadersMatch> | undefined, b: HttpHeadersMatch | PlainMessage<HttpHeadersMatch> | undefined): boolean;
}

/**
 * Tap output configuration.
 *
 * @generated from message envoy.service.tap.v2alpha.OutputConfig
 */
export declare class OutputConfig extends Message<OutputConfig> {
  /**
   * Output sinks for tap data. Currently a single sink is allowed in the list. Once multiple
   * sink types are supported this constraint will be relaxed.
   *
   * @generated from field: repeated envoy.service.tap.v2alpha.OutputSink sinks = 1;
   */
  sinks: OutputSink[];

  /**
   * For buffered tapping, the maximum amount of received body that will be buffered prior to
   * truncation. If truncation occurs, the :ref:`truncated
   * <envoy_api_field_data.tap.v2alpha.Body.truncated>` field will be set. If not specified, the
   * default is 1KiB.
   *
   * @generated from field: google.protobuf.UInt32Value max_buffered_rx_bytes = 2;
   */
  maxBufferedRxBytes?: number;

  /**
   * For buffered tapping, the maximum amount of transmitted body that will be buffered prior to
   * truncation. If truncation occurs, the :ref:`truncated
   * <envoy_api_field_data.tap.v2alpha.Body.truncated>` field will be set. If not specified, the
   * default is 1KiB.
   *
   * @generated from field: google.protobuf.UInt32Value max_buffered_tx_bytes = 3;
   */
  maxBufferedTxBytes?: number;

  /**
   * Indicates whether taps produce a single buffered message per tap, or multiple streamed
   * messages per tap in the emitted :ref:`TraceWrapper
   * <envoy_api_msg_data.tap.v2alpha.TraceWrapper>` messages. Note that streamed tapping does not
   * mean that no buffering takes place. Buffering may be required if data is processed before a
   * match can be determined. See the HTTP tap filter :ref:`streaming
   * <config_http_filters_tap_streaming>` documentation for more information.
   *
   * @generated from field: bool streaming = 4;
   */
  streaming: boolean;

  constructor(data?: PartialMessage<OutputConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.tap.v2alpha.OutputConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutputConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutputConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutputConfig;

  static equals(a: OutputConfig | PlainMessage<OutputConfig> | undefined, b: OutputConfig | PlainMessage<OutputConfig> | undefined): boolean;
}

/**
 * Tap output sink configuration.
 *
 * @generated from message envoy.service.tap.v2alpha.OutputSink
 */
export declare class OutputSink extends Message<OutputSink> {
  /**
   * Sink output format.
   *
   * @generated from field: envoy.service.tap.v2alpha.OutputSink.Format format = 1;
   */
  format: OutputSink_Format;

  /**
   * @generated from oneof envoy.service.tap.v2alpha.OutputSink.output_sink_type
   */
  outputSinkType: {
    /**
     * Tap output will be streamed out the :http:post:`/tap` admin endpoint.
     *
     * .. attention::
     *
     *   It is only allowed to specify the streaming admin output sink if the tap is being
     *   configured from the :http:post:`/tap` admin endpoint. Thus, if an extension has
     *   been configured to receive tap configuration from some other source (e.g., static
     *   file, XDS, etc.) configuring the streaming admin output type will fail.
     *
     * @generated from field: envoy.service.tap.v2alpha.StreamingAdminSink streaming_admin = 2;
     */
    value: StreamingAdminSink;
    case: "streamingAdmin";
  } | {
    /**
     * Tap output will be written to a file per tap sink.
     *
     * @generated from field: envoy.service.tap.v2alpha.FilePerTapSink file_per_tap = 3;
     */
    value: FilePerTapSink;
    case: "filePerTap";
  } | {
    /**
     * [#not-implemented-hide:]
     * GrpcService to stream data to. The format argument must be PROTO_BINARY.
     *
     * @generated from field: envoy.service.tap.v2alpha.StreamingGrpcSink streaming_grpc = 4;
     */
    value: StreamingGrpcSink;
    case: "streamingGrpc";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<OutputSink>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.tap.v2alpha.OutputSink";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutputSink;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutputSink;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutputSink;

  static equals(a: OutputSink | PlainMessage<OutputSink> | undefined, b: OutputSink | PlainMessage<OutputSink> | undefined): boolean;
}

/**
 * Output format. All output is in the form of one or more :ref:`TraceWrapper
 * <envoy_api_msg_data.tap.v2alpha.TraceWrapper>` messages. This enumeration indicates
 * how those messages are written. Note that not all sinks support all output formats. See
 * individual sink documentation for more information.
 *
 * @generated from enum envoy.service.tap.v2alpha.OutputSink.Format
 */
export declare enum OutputSink_Format {
  /**
   * Each message will be written as JSON. Any :ref:`body <envoy_api_msg_data.tap.v2alpha.Body>`
   * data will be present in the :ref:`as_bytes
   * <envoy_api_field_data.tap.v2alpha.Body.as_bytes>` field. This means that body data will be
   * base64 encoded as per the `proto3 JSON mappings
   * <https://developers.google.com/protocol-buffers/docs/proto3#json>`_.
   *
   * @generated from enum value: JSON_BODY_AS_BYTES = 0;
   */
  JSON_BODY_AS_BYTES = 0,

  /**
   * Each message will be written as JSON. Any :ref:`body <envoy_api_msg_data.tap.v2alpha.Body>`
   * data will be present in the :ref:`as_string
   * <envoy_api_field_data.tap.v2alpha.Body.as_string>` field. This means that body data will be
   * string encoded as per the `proto3 JSON mappings
   * <https://developers.google.com/protocol-buffers/docs/proto3#json>`_. This format type is
   * useful when it is known that that body is human readable (e.g., JSON over HTTP) and the
   * user wishes to view it directly without being forced to base64 decode the body.
   *
   * @generated from enum value: JSON_BODY_AS_STRING = 1;
   */
  JSON_BODY_AS_STRING = 1,

  /**
   * Binary proto format. Note that binary proto is not self-delimiting. If a sink writes
   * multiple binary messages without any length information the data stream will not be
   * useful. However, for certain sinks that are self-delimiting (e.g., one message per file)
   * this output format makes consumption simpler.
   *
   * @generated from enum value: PROTO_BINARY = 2;
   */
  PROTO_BINARY = 2,

  /**
   * Messages are written as a sequence tuples, where each tuple is the message length encoded
   * as a `protobuf 32-bit varint
   * <https://developers.google.com/protocol-buffers/docs/reference/cpp/google.protobuf.io.coded_stream>`_
   * followed by the binary message. The messages can be read back using the language specific
   * protobuf coded stream implementation to obtain the message length and the message.
   *
   * @generated from enum value: PROTO_BINARY_LENGTH_DELIMITED = 3;
   */
  PROTO_BINARY_LENGTH_DELIMITED = 3,

  /**
   * Text proto format.
   *
   * @generated from enum value: PROTO_TEXT = 4;
   */
  PROTO_TEXT = 4,
}

/**
 * Streaming admin sink configuration.
 *
 * @generated from message envoy.service.tap.v2alpha.StreamingAdminSink
 */
export declare class StreamingAdminSink extends Message<StreamingAdminSink> {
  constructor(data?: PartialMessage<StreamingAdminSink>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.tap.v2alpha.StreamingAdminSink";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamingAdminSink;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamingAdminSink;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamingAdminSink;

  static equals(a: StreamingAdminSink | PlainMessage<StreamingAdminSink> | undefined, b: StreamingAdminSink | PlainMessage<StreamingAdminSink> | undefined): boolean;
}

/**
 * The file per tap sink outputs a discrete file for every tapped stream.
 *
 * @generated from message envoy.service.tap.v2alpha.FilePerTapSink
 */
export declare class FilePerTapSink extends Message<FilePerTapSink> {
  /**
   * Path prefix. The output file will be of the form <path_prefix>_<id>.pb, where <id> is an
   * identifier distinguishing the recorded trace for stream instances (the Envoy
   * connection ID, HTTP stream ID, etc.).
   *
   * @generated from field: string path_prefix = 1;
   */
  pathPrefix: string;

  constructor(data?: PartialMessage<FilePerTapSink>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.tap.v2alpha.FilePerTapSink";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FilePerTapSink;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FilePerTapSink;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FilePerTapSink;

  static equals(a: FilePerTapSink | PlainMessage<FilePerTapSink> | undefined, b: FilePerTapSink | PlainMessage<FilePerTapSink> | undefined): boolean;
}

/**
 * [#not-implemented-hide:] Streaming gRPC sink configuration sends the taps to an external gRPC
 * server.
 *
 * @generated from message envoy.service.tap.v2alpha.StreamingGrpcSink
 */
export declare class StreamingGrpcSink extends Message<StreamingGrpcSink> {
  /**
   * Opaque identifier, that will be sent back to the streaming grpc server.
   *
   * @generated from field: string tap_id = 1;
   */
  tapId: string;

  /**
   * The gRPC server that hosts the Tap Sink Service.
   *
   * @generated from field: envoy.api.v2.core.GrpcService grpc_service = 2;
   */
  grpcService?: GrpcService;

  constructor(data?: PartialMessage<StreamingGrpcSink>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.tap.v2alpha.StreamingGrpcSink";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamingGrpcSink;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamingGrpcSink;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamingGrpcSink;

  static equals(a: StreamingGrpcSink | PlainMessage<StreamingGrpcSink> | undefined, b: StreamingGrpcSink | PlainMessage<StreamingGrpcSink> | undefined): boolean;
}

