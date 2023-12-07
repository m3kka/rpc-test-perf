// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/data/tap/v3/transport.proto (package envoy.data.tap.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Address } from "../../../config/core/v3/address_pb.js";
import type { Body } from "./common_pb.js";

/**
 * Connection properties.
 *
 * @generated from message envoy.data.tap.v3.Connection
 */
export declare class Connection extends Message<Connection> {
  /**
   * Local address.
   *
   * @generated from field: envoy.config.core.v3.Address local_address = 2;
   */
  localAddress?: Address;

  /**
   * Remote address.
   *
   * @generated from field: envoy.config.core.v3.Address remote_address = 3;
   */
  remoteAddress?: Address;

  constructor(data?: PartialMessage<Connection>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.data.tap.v3.Connection";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Connection;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Connection;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Connection;

  static equals(a: Connection | PlainMessage<Connection> | undefined, b: Connection | PlainMessage<Connection> | undefined): boolean;
}

/**
 * Event in a socket trace.
 *
 * @generated from message envoy.data.tap.v3.SocketEvent
 */
export declare class SocketEvent extends Message<SocketEvent> {
  /**
   * Timestamp for event.
   *
   * @generated from field: google.protobuf.Timestamp timestamp = 1;
   */
  timestamp?: Timestamp;

  /**
   * Read or write with content as bytes string.
   *
   * @generated from oneof envoy.data.tap.v3.SocketEvent.event_selector
   */
  eventSelector: {
    /**
     * @generated from field: envoy.data.tap.v3.SocketEvent.Read read = 2;
     */
    value: SocketEvent_Read;
    case: "read";
  } | {
    /**
     * @generated from field: envoy.data.tap.v3.SocketEvent.Write write = 3;
     */
    value: SocketEvent_Write;
    case: "write";
  } | {
    /**
     * @generated from field: envoy.data.tap.v3.SocketEvent.Closed closed = 4;
     */
    value: SocketEvent_Closed;
    case: "closed";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<SocketEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.data.tap.v3.SocketEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SocketEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SocketEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SocketEvent;

  static equals(a: SocketEvent | PlainMessage<SocketEvent> | undefined, b: SocketEvent | PlainMessage<SocketEvent> | undefined): boolean;
}

/**
 * Data read by Envoy from the transport socket.
 *
 * TODO(htuch): Half-close for reads.
 *
 * @generated from message envoy.data.tap.v3.SocketEvent.Read
 */
export declare class SocketEvent_Read extends Message<SocketEvent_Read> {
  /**
   * Binary data read.
   *
   * @generated from field: envoy.data.tap.v3.Body data = 1;
   */
  data?: Body;

  constructor(data?: PartialMessage<SocketEvent_Read>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.data.tap.v3.SocketEvent.Read";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SocketEvent_Read;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SocketEvent_Read;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SocketEvent_Read;

  static equals(a: SocketEvent_Read | PlainMessage<SocketEvent_Read> | undefined, b: SocketEvent_Read | PlainMessage<SocketEvent_Read> | undefined): boolean;
}

/**
 * Data written by Envoy to the transport socket.
 *
 * @generated from message envoy.data.tap.v3.SocketEvent.Write
 */
export declare class SocketEvent_Write extends Message<SocketEvent_Write> {
  /**
   * Binary data written.
   *
   * @generated from field: envoy.data.tap.v3.Body data = 1;
   */
  data?: Body;

  /**
   * Stream was half closed after this write.
   *
   * @generated from field: bool end_stream = 2;
   */
  endStream: boolean;

  constructor(data?: PartialMessage<SocketEvent_Write>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.data.tap.v3.SocketEvent.Write";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SocketEvent_Write;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SocketEvent_Write;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SocketEvent_Write;

  static equals(a: SocketEvent_Write | PlainMessage<SocketEvent_Write> | undefined, b: SocketEvent_Write | PlainMessage<SocketEvent_Write> | undefined): boolean;
}

/**
 * The connection was closed.
 *
 * TODO(mattklein123): Close event type.
 *
 * @generated from message envoy.data.tap.v3.SocketEvent.Closed
 */
export declare class SocketEvent_Closed extends Message<SocketEvent_Closed> {
  constructor(data?: PartialMessage<SocketEvent_Closed>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.data.tap.v3.SocketEvent.Closed";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SocketEvent_Closed;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SocketEvent_Closed;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SocketEvent_Closed;

  static equals(a: SocketEvent_Closed | PlainMessage<SocketEvent_Closed> | undefined, b: SocketEvent_Closed | PlainMessage<SocketEvent_Closed> | undefined): boolean;
}

/**
 * Sequence of read/write events that constitute a buffered trace on a socket.
 * [#next-free-field: 6]
 *
 * @generated from message envoy.data.tap.v3.SocketBufferedTrace
 */
export declare class SocketBufferedTrace extends Message<SocketBufferedTrace> {
  /**
   * Trace ID unique to the originating Envoy only. Trace IDs can repeat and should not be used
   * for long term stable uniqueness. Matches connection IDs used in Envoy logs.
   *
   * @generated from field: uint64 trace_id = 1;
   */
  traceId: bigint;

  /**
   * Connection properties.
   *
   * @generated from field: envoy.data.tap.v3.Connection connection = 2;
   */
  connection?: Connection;

  /**
   * Sequence of observed events.
   *
   * @generated from field: repeated envoy.data.tap.v3.SocketEvent events = 3;
   */
  events: SocketEvent[];

  /**
   * Set to true if read events were truncated due to the :ref:`max_buffered_rx_bytes
   * <envoy_v3_api_field_config.tap.v3.OutputConfig.max_buffered_rx_bytes>` setting.
   *
   * @generated from field: bool read_truncated = 4;
   */
  readTruncated: boolean;

  /**
   * Set to true if write events were truncated due to the :ref:`max_buffered_tx_bytes
   * <envoy_v3_api_field_config.tap.v3.OutputConfig.max_buffered_tx_bytes>` setting.
   *
   * @generated from field: bool write_truncated = 5;
   */
  writeTruncated: boolean;

  constructor(data?: PartialMessage<SocketBufferedTrace>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.data.tap.v3.SocketBufferedTrace";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SocketBufferedTrace;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SocketBufferedTrace;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SocketBufferedTrace;

  static equals(a: SocketBufferedTrace | PlainMessage<SocketBufferedTrace> | undefined, b: SocketBufferedTrace | PlainMessage<SocketBufferedTrace> | undefined): boolean;
}

/**
 * A streamed socket trace segment. Multiple segments make up a full trace.
 *
 * @generated from message envoy.data.tap.v3.SocketStreamedTraceSegment
 */
export declare class SocketStreamedTraceSegment extends Message<SocketStreamedTraceSegment> {
  /**
   * Trace ID unique to the originating Envoy only. Trace IDs can repeat and should not be used
   * for long term stable uniqueness. Matches connection IDs used in Envoy logs.
   *
   * @generated from field: uint64 trace_id = 1;
   */
  traceId: bigint;

  /**
   * @generated from oneof envoy.data.tap.v3.SocketStreamedTraceSegment.message_piece
   */
  messagePiece: {
    /**
     * Connection properties.
     *
     * @generated from field: envoy.data.tap.v3.Connection connection = 2;
     */
    value: Connection;
    case: "connection";
  } | {
    /**
     * Socket event.
     *
     * @generated from field: envoy.data.tap.v3.SocketEvent event = 3;
     */
    value: SocketEvent;
    case: "event";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<SocketStreamedTraceSegment>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.data.tap.v3.SocketStreamedTraceSegment";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SocketStreamedTraceSegment;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SocketStreamedTraceSegment;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SocketStreamedTraceSegment;

  static equals(a: SocketStreamedTraceSegment | PlainMessage<SocketStreamedTraceSegment> | undefined, b: SocketStreamedTraceSegment | PlainMessage<SocketStreamedTraceSegment> | undefined): boolean;
}

