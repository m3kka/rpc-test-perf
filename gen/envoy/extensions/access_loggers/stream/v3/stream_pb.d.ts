// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/access_loggers/stream/v3/stream.proto (package envoy.extensions.access_loggers.stream.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { SubstitutionFormatString } from "../../../../config/core/v3/substitution_format_string_pb.js";

/**
 * Custom configuration for an :ref:`AccessLog <envoy_v3_api_msg_config.accesslog.v3.AccessLog>`
 * that writes log entries directly to the operating system's standard output.
 * [#extension: envoy.access_loggers.stdout]
 *
 * @generated from message envoy.extensions.access_loggers.stream.v3.StdoutAccessLog
 */
export declare class StdoutAccessLog extends Message<StdoutAccessLog> {
  /**
   * @generated from oneof envoy.extensions.access_loggers.stream.v3.StdoutAccessLog.access_log_format
   */
  accessLogFormat: {
    /**
     * Configuration to form access log data and format.
     * If not specified, use :ref:`default format <config_access_log_default_format>`.
     *
     * @generated from field: envoy.config.core.v3.SubstitutionFormatString log_format = 1;
     */
    value: SubstitutionFormatString;
    case: "logFormat";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<StdoutAccessLog>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.access_loggers.stream.v3.StdoutAccessLog";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StdoutAccessLog;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StdoutAccessLog;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StdoutAccessLog;

  static equals(a: StdoutAccessLog | PlainMessage<StdoutAccessLog> | undefined, b: StdoutAccessLog | PlainMessage<StdoutAccessLog> | undefined): boolean;
}

/**
 * Custom configuration for an :ref:`AccessLog <envoy_v3_api_msg_config.accesslog.v3.AccessLog>`
 * that writes log entries directly to the operating system's standard error.
 * [#extension: envoy.access_loggers.stderr]
 *
 * @generated from message envoy.extensions.access_loggers.stream.v3.StderrAccessLog
 */
export declare class StderrAccessLog extends Message<StderrAccessLog> {
  /**
   * @generated from oneof envoy.extensions.access_loggers.stream.v3.StderrAccessLog.access_log_format
   */
  accessLogFormat: {
    /**
     * Configuration to form access log data and format.
     * If not specified, use :ref:`default format <config_access_log_default_format>`.
     *
     * @generated from field: envoy.config.core.v3.SubstitutionFormatString log_format = 1;
     */
    value: SubstitutionFormatString;
    case: "logFormat";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<StderrAccessLog>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.access_loggers.stream.v3.StderrAccessLog";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StderrAccessLog;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StderrAccessLog;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StderrAccessLog;

  static equals(a: StderrAccessLog | PlainMessage<StderrAccessLog> | undefined, b: StderrAccessLog | PlainMessage<StderrAccessLog> | undefined): boolean;
}
