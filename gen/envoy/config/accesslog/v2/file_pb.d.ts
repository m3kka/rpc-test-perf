// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/accesslog/v2/file.proto (package envoy.config.accesslog.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Struct } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Custom configuration for an :ref:`AccessLog <envoy_api_msg_config.filter.accesslog.v2.AccessLog>`
 * that writes log entries directly to a file. Configures the built-in *envoy.access_loggers.file*
 * AccessLog.
 *
 * @generated from message envoy.config.accesslog.v2.FileAccessLog
 */
export declare class FileAccessLog extends Message<FileAccessLog> {
  /**
   * A path to a local file to which to write the access log entries.
   *
   * @generated from field: string path = 1;
   */
  path: string;

  /**
   * @generated from oneof envoy.config.accesslog.v2.FileAccessLog.access_log_format
   */
  accessLogFormat: {
    /**
     * Access log :ref:`format string<config_access_log_format_strings>`.
     * Envoy supports :ref:`custom access log formats <config_access_log_format>` as well as a
     * :ref:`default format <config_access_log_default_format>`.
     *
     * @generated from field: string format = 2;
     */
    value: string;
    case: "format";
  } | {
    /**
     * Access log :ref:`format dictionary<config_access_log_format_dictionaries>`. All values
     * are rendered as strings.
     *
     * @generated from field: google.protobuf.Struct json_format = 3;
     */
    value: Struct;
    case: "jsonFormat";
  } | {
    /**
     * Access log :ref:`format dictionary<config_access_log_format_dictionaries>`. Values are
     * rendered as strings, numbers, or boolean values as appropriate. Nested JSON objects may
     * be produced by some command operators (e.g.FILTER_STATE or DYNAMIC_METADATA). See the
     * documentation for a specific command operator for details.
     *
     * @generated from field: google.protobuf.Struct typed_json_format = 4;
     */
    value: Struct;
    case: "typedJsonFormat";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<FileAccessLog>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.accesslog.v2.FileAccessLog";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FileAccessLog;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FileAccessLog;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FileAccessLog;

  static equals(a: FileAccessLog | PlainMessage<FileAccessLog> | undefined, b: FileAccessLog | PlainMessage<FileAccessLog> | undefined): boolean;
}

