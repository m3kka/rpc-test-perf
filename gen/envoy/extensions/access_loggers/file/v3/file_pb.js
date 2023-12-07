// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/access_loggers/file/v3/file.proto (package envoy.extensions.access_loggers.file.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Struct } from "@bufbuild/protobuf";
import { SubstitutionFormatString } from "../../../../config/core/v3/substitution_format_string_pb.js";

/**
 * Custom configuration for an :ref:`AccessLog <envoy_v3_api_msg_config.accesslog.v3.AccessLog>`
 * that writes log entries directly to a file. Configures the built-in ``envoy.access_loggers.file``
 * AccessLog.
 * [#next-free-field: 6]
 *
 * @generated from message envoy.extensions.access_loggers.file.v3.FileAccessLog
 */
export const FileAccessLog = proto3.makeMessageType(
  "envoy.extensions.access_loggers.file.v3.FileAccessLog",
  () => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "format", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "access_log_format" },
    { no: 3, name: "json_format", kind: "message", T: Struct, oneof: "access_log_format" },
    { no: 4, name: "typed_json_format", kind: "message", T: Struct, oneof: "access_log_format" },
    { no: 5, name: "log_format", kind: "message", T: SubstitutionFormatString, oneof: "access_log_format" },
  ],
);
