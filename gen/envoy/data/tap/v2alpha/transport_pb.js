// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/data/tap/v2alpha/transport.proto (package envoy.data.tap.v2alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { Address } from "../../../api/v2/core/address_pb.js";
import { Body } from "./common_pb.js";

/**
 * Connection properties.
 *
 * @generated from message envoy.data.tap.v2alpha.Connection
 */
export const Connection = proto3.makeMessageType(
  "envoy.data.tap.v2alpha.Connection",
  () => [
    { no: 2, name: "local_address", kind: "message", T: Address },
    { no: 3, name: "remote_address", kind: "message", T: Address },
  ],
);

/**
 * Event in a socket trace.
 *
 * @generated from message envoy.data.tap.v2alpha.SocketEvent
 */
export const SocketEvent = proto3.makeMessageType(
  "envoy.data.tap.v2alpha.SocketEvent",
  () => [
    { no: 1, name: "timestamp", kind: "message", T: Timestamp },
    { no: 2, name: "read", kind: "message", T: SocketEvent_Read, oneof: "event_selector" },
    { no: 3, name: "write", kind: "message", T: SocketEvent_Write, oneof: "event_selector" },
    { no: 4, name: "closed", kind: "message", T: SocketEvent_Closed, oneof: "event_selector" },
  ],
);

/**
 * Data read by Envoy from the transport socket.
 *
 * TODO(htuch): Half-close for reads.
 *
 * @generated from message envoy.data.tap.v2alpha.SocketEvent.Read
 */
export const SocketEvent_Read = proto3.makeMessageType(
  "envoy.data.tap.v2alpha.SocketEvent.Read",
  () => [
    { no: 1, name: "data", kind: "message", T: Body },
  ],
  {localName: "SocketEvent_Read"},
);

/**
 * Data written by Envoy to the transport socket.
 *
 * @generated from message envoy.data.tap.v2alpha.SocketEvent.Write
 */
export const SocketEvent_Write = proto3.makeMessageType(
  "envoy.data.tap.v2alpha.SocketEvent.Write",
  () => [
    { no: 1, name: "data", kind: "message", T: Body },
    { no: 2, name: "end_stream", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
  {localName: "SocketEvent_Write"},
);

/**
 * The connection was closed.
 *
 * TODO(mattklein123): Close event type.
 *
 * @generated from message envoy.data.tap.v2alpha.SocketEvent.Closed
 */
export const SocketEvent_Closed = proto3.makeMessageType(
  "envoy.data.tap.v2alpha.SocketEvent.Closed",
  [],
  {localName: "SocketEvent_Closed"},
);

/**
 * Sequence of read/write events that constitute a buffered trace on a socket.
 * [#next-free-field: 6]
 *
 * @generated from message envoy.data.tap.v2alpha.SocketBufferedTrace
 */
export const SocketBufferedTrace = proto3.makeMessageType(
  "envoy.data.tap.v2alpha.SocketBufferedTrace",
  () => [
    { no: 1, name: "trace_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "connection", kind: "message", T: Connection },
    { no: 3, name: "events", kind: "message", T: SocketEvent, repeated: true },
    { no: 4, name: "read_truncated", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "write_truncated", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * A streamed socket trace segment. Multiple segments make up a full trace.
 *
 * @generated from message envoy.data.tap.v2alpha.SocketStreamedTraceSegment
 */
export const SocketStreamedTraceSegment = proto3.makeMessageType(
  "envoy.data.tap.v2alpha.SocketStreamedTraceSegment",
  () => [
    { no: 1, name: "trace_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "connection", kind: "message", T: Connection, oneof: "message_piece" },
    { no: 3, name: "event", kind: "message", T: SocketEvent, oneof: "message_piece" },
  ],
);

