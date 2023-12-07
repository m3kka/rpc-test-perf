// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/api/v2/core/protocol.proto (package envoy.api.v2.core, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { BoolValue, Duration, proto3, UInt32Value } from "@bufbuild/protobuf";

/**
 * [#not-implemented-hide:]
 *
 * @generated from message envoy.api.v2.core.TcpProtocolOptions
 */
export const TcpProtocolOptions = proto3.makeMessageType(
  "envoy.api.v2.core.TcpProtocolOptions",
  [],
);

/**
 * @generated from message envoy.api.v2.core.UpstreamHttpProtocolOptions
 */
export const UpstreamHttpProtocolOptions = proto3.makeMessageType(
  "envoy.api.v2.core.UpstreamHttpProtocolOptions",
  () => [
    { no: 1, name: "auto_sni", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "auto_san_validation", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * [#next-free-field: 6]
 *
 * @generated from message envoy.api.v2.core.HttpProtocolOptions
 */
export const HttpProtocolOptions = proto3.makeMessageType(
  "envoy.api.v2.core.HttpProtocolOptions",
  () => [
    { no: 1, name: "idle_timeout", kind: "message", T: Duration },
    { no: 3, name: "max_connection_duration", kind: "message", T: Duration },
    { no: 2, name: "max_headers_count", kind: "message", T: UInt32Value },
    { no: 4, name: "max_stream_duration", kind: "message", T: Duration },
    { no: 5, name: "headers_with_underscores_action", kind: "enum", T: proto3.getEnumType(HttpProtocolOptions_HeadersWithUnderscoresAction) },
  ],
);

/**
 * Action to take when Envoy receives client request with header names containing underscore
 * characters.
 * Underscore character is allowed in header names by the RFC-7230 and this behavior is implemented
 * as a security measure due to systems that treat '_' and '-' as interchangeable. Envoy by default allows client request headers with underscore
 * characters.
 *
 * @generated from enum envoy.api.v2.core.HttpProtocolOptions.HeadersWithUnderscoresAction
 */
export const HttpProtocolOptions_HeadersWithUnderscoresAction = proto3.makeEnum(
  "envoy.api.v2.core.HttpProtocolOptions.HeadersWithUnderscoresAction",
  [
    {no: 0, name: "ALLOW"},
    {no: 1, name: "REJECT_REQUEST"},
    {no: 2, name: "DROP_HEADER"},
  ],
);

/**
 * [#next-free-field: 6]
 *
 * @generated from message envoy.api.v2.core.Http1ProtocolOptions
 */
export const Http1ProtocolOptions = proto3.makeMessageType(
  "envoy.api.v2.core.Http1ProtocolOptions",
  () => [
    { no: 1, name: "allow_absolute_url", kind: "message", T: BoolValue },
    { no: 2, name: "accept_http_10", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "default_host_for_http_10", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "header_key_format", kind: "message", T: Http1ProtocolOptions_HeaderKeyFormat },
    { no: 5, name: "enable_trailers", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message envoy.api.v2.core.Http1ProtocolOptions.HeaderKeyFormat
 */
export const Http1ProtocolOptions_HeaderKeyFormat = proto3.makeMessageType(
  "envoy.api.v2.core.Http1ProtocolOptions.HeaderKeyFormat",
  () => [
    { no: 1, name: "proper_case_words", kind: "message", T: Http1ProtocolOptions_HeaderKeyFormat_ProperCaseWords, oneof: "header_format" },
  ],
  {localName: "Http1ProtocolOptions_HeaderKeyFormat"},
);

/**
 * @generated from message envoy.api.v2.core.Http1ProtocolOptions.HeaderKeyFormat.ProperCaseWords
 */
export const Http1ProtocolOptions_HeaderKeyFormat_ProperCaseWords = proto3.makeMessageType(
  "envoy.api.v2.core.Http1ProtocolOptions.HeaderKeyFormat.ProperCaseWords",
  [],
  {localName: "Http1ProtocolOptions_HeaderKeyFormat_ProperCaseWords"},
);

/**
 * [#next-free-field: 14]
 *
 * @generated from message envoy.api.v2.core.Http2ProtocolOptions
 */
export const Http2ProtocolOptions = proto3.makeMessageType(
  "envoy.api.v2.core.Http2ProtocolOptions",
  () => [
    { no: 1, name: "hpack_table_size", kind: "message", T: UInt32Value },
    { no: 2, name: "max_concurrent_streams", kind: "message", T: UInt32Value },
    { no: 3, name: "initial_stream_window_size", kind: "message", T: UInt32Value },
    { no: 4, name: "initial_connection_window_size", kind: "message", T: UInt32Value },
    { no: 5, name: "allow_connect", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "allow_metadata", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "max_outbound_frames", kind: "message", T: UInt32Value },
    { no: 8, name: "max_outbound_control_frames", kind: "message", T: UInt32Value },
    { no: 9, name: "max_consecutive_inbound_frames_with_empty_payload", kind: "message", T: UInt32Value },
    { no: 10, name: "max_inbound_priority_frames_per_stream", kind: "message", T: UInt32Value },
    { no: 11, name: "max_inbound_window_update_frames_per_data_frame_sent", kind: "message", T: UInt32Value },
    { no: 12, name: "stream_error_on_invalid_http_messaging", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 13, name: "custom_settings_parameters", kind: "message", T: Http2ProtocolOptions_SettingsParameter, repeated: true },
  ],
);

/**
 * Defines a parameter to be sent in the SETTINGS frame.
 * See `RFC7540, sec. 6.5.1 <https://tools.ietf.org/html/rfc7540#section-6.5.1>`_ for details.
 *
 * @generated from message envoy.api.v2.core.Http2ProtocolOptions.SettingsParameter
 */
export const Http2ProtocolOptions_SettingsParameter = proto3.makeMessageType(
  "envoy.api.v2.core.Http2ProtocolOptions.SettingsParameter",
  () => [
    { no: 1, name: "identifier", kind: "message", T: UInt32Value },
    { no: 2, name: "value", kind: "message", T: UInt32Value },
  ],
  {localName: "Http2ProtocolOptions_SettingsParameter"},
);

/**
 * [#not-implemented-hide:]
 *
 * @generated from message envoy.api.v2.core.GrpcProtocolOptions
 */
export const GrpcProtocolOptions = proto3.makeMessageType(
  "envoy.api.v2.core.GrpcProtocolOptions",
  () => [
    { no: 1, name: "http2_protocol_options", kind: "message", T: Http2ProtocolOptions },
  ],
);

