// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/service/tap/v2alpha/tap.proto (package envoy.service.tap.v2alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { TraceWrapper } from "../../../data/tap/v2alpha/wrapper_pb.js";
import type { Node } from "../../../api/v2/core/base_pb.js";

/**
 * [#not-implemented-hide:] Stream message for the Tap API. Envoy will open a stream to the server
 * and stream taps without ever expecting a response.
 *
 * @generated from message envoy.service.tap.v2alpha.StreamTapsRequest
 */
export declare class StreamTapsRequest extends Message<StreamTapsRequest> {
  /**
   * Identifier data effectively is a structured metadata. As a performance optimization this will
   * only be sent in the first message on the stream.
   *
   * @generated from field: envoy.service.tap.v2alpha.StreamTapsRequest.Identifier identifier = 1;
   */
  identifier?: StreamTapsRequest_Identifier;

  /**
   * The trace id. this can be used to merge together a streaming trace. Note that the trace_id
   * is not guaranteed to be spatially or temporally unique.
   *
   * @generated from field: uint64 trace_id = 2;
   */
  traceId: bigint;

  /**
   * The trace data.
   *
   * @generated from field: envoy.data.tap.v2alpha.TraceWrapper trace = 3;
   */
  trace?: TraceWrapper;

  constructor(data?: PartialMessage<StreamTapsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.tap.v2alpha.StreamTapsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamTapsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamTapsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamTapsRequest;

  static equals(a: StreamTapsRequest | PlainMessage<StreamTapsRequest> | undefined, b: StreamTapsRequest | PlainMessage<StreamTapsRequest> | undefined): boolean;
}

/**
 * @generated from message envoy.service.tap.v2alpha.StreamTapsRequest.Identifier
 */
export declare class StreamTapsRequest_Identifier extends Message<StreamTapsRequest_Identifier> {
  /**
   * The node sending taps over the stream.
   *
   * @generated from field: envoy.api.v2.core.Node node = 1;
   */
  node?: Node;

  /**
   * The opaque identifier that was set in the :ref:`output config
   * <envoy_api_field_service.tap.v2alpha.StreamingGrpcSink.tap_id>`.
   *
   * @generated from field: string tap_id = 2;
   */
  tapId: string;

  constructor(data?: PartialMessage<StreamTapsRequest_Identifier>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.tap.v2alpha.StreamTapsRequest.Identifier";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamTapsRequest_Identifier;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamTapsRequest_Identifier;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamTapsRequest_Identifier;

  static equals(a: StreamTapsRequest_Identifier | PlainMessage<StreamTapsRequest_Identifier> | undefined, b: StreamTapsRequest_Identifier | PlainMessage<StreamTapsRequest_Identifier> | undefined): boolean;
}

/**
 * [#not-implemented-hide:]
 *
 * @generated from message envoy.service.tap.v2alpha.StreamTapsResponse
 */
export declare class StreamTapsResponse extends Message<StreamTapsResponse> {
  constructor(data?: PartialMessage<StreamTapsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.tap.v2alpha.StreamTapsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamTapsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamTapsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamTapsResponse;

  static equals(a: StreamTapsResponse | PlainMessage<StreamTapsResponse> | undefined, b: StreamTapsResponse | PlainMessage<StreamTapsResponse> | undefined): boolean;
}
