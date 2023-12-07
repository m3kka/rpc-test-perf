// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/service/accesslog/v3/als.proto (package envoy.service.accesslog.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Node } from "../../../config/core/v3/base_pb.js";
import { HTTPAccessLogEntry, TCPAccessLogEntry } from "../../../data/accesslog/v3/accesslog_pb.js";

/**
 * Empty response for the StreamAccessLogs API. Will never be sent. See below.
 *
 * @generated from message envoy.service.accesslog.v3.StreamAccessLogsResponse
 */
export const StreamAccessLogsResponse = proto3.makeMessageType(
  "envoy.service.accesslog.v3.StreamAccessLogsResponse",
  [],
);

/**
 * Stream message for the StreamAccessLogs API. Envoy will open a stream to the server and stream
 * access logs without ever expecting a response.
 *
 * @generated from message envoy.service.accesslog.v3.StreamAccessLogsMessage
 */
export const StreamAccessLogsMessage = proto3.makeMessageType(
  "envoy.service.accesslog.v3.StreamAccessLogsMessage",
  () => [
    { no: 1, name: "identifier", kind: "message", T: StreamAccessLogsMessage_Identifier },
    { no: 2, name: "http_logs", kind: "message", T: StreamAccessLogsMessage_HTTPAccessLogEntries, oneof: "log_entries" },
    { no: 3, name: "tcp_logs", kind: "message", T: StreamAccessLogsMessage_TCPAccessLogEntries, oneof: "log_entries" },
  ],
);

/**
 * @generated from message envoy.service.accesslog.v3.StreamAccessLogsMessage.Identifier
 */
export const StreamAccessLogsMessage_Identifier = proto3.makeMessageType(
  "envoy.service.accesslog.v3.StreamAccessLogsMessage.Identifier",
  () => [
    { no: 1, name: "node", kind: "message", T: Node },
    { no: 2, name: "log_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "StreamAccessLogsMessage_Identifier"},
);

/**
 * Wrapper for batches of HTTP access log entries.
 *
 * @generated from message envoy.service.accesslog.v3.StreamAccessLogsMessage.HTTPAccessLogEntries
 */
export const StreamAccessLogsMessage_HTTPAccessLogEntries = proto3.makeMessageType(
  "envoy.service.accesslog.v3.StreamAccessLogsMessage.HTTPAccessLogEntries",
  () => [
    { no: 1, name: "log_entry", kind: "message", T: HTTPAccessLogEntry, repeated: true },
  ],
  {localName: "StreamAccessLogsMessage_HTTPAccessLogEntries"},
);

/**
 * Wrapper for batches of TCP access log entries.
 *
 * @generated from message envoy.service.accesslog.v3.StreamAccessLogsMessage.TCPAccessLogEntries
 */
export const StreamAccessLogsMessage_TCPAccessLogEntries = proto3.makeMessageType(
  "envoy.service.accesslog.v3.StreamAccessLogsMessage.TCPAccessLogEntries",
  () => [
    { no: 1, name: "log_entry", kind: "message", T: TCPAccessLogEntry, repeated: true },
  ],
  {localName: "StreamAccessLogsMessage_TCPAccessLogEntries"},
);
