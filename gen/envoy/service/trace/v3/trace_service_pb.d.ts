// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/service/trace/v3/trace_service.proto (package envoy.service.trace.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Span } from "../../../../opencensus/proto/trace/v1/trace_pb.js";
import type { Node } from "../../../config/core/v3/base_pb.js";

/**
 * @generated from message envoy.service.trace.v3.StreamTracesResponse
 */
export declare class StreamTracesResponse extends Message<StreamTracesResponse> {
  constructor(data?: PartialMessage<StreamTracesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.trace.v3.StreamTracesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamTracesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamTracesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamTracesResponse;

  static equals(a: StreamTracesResponse | PlainMessage<StreamTracesResponse> | undefined, b: StreamTracesResponse | PlainMessage<StreamTracesResponse> | undefined): boolean;
}

/**
 * @generated from message envoy.service.trace.v3.StreamTracesMessage
 */
export declare class StreamTracesMessage extends Message<StreamTracesMessage> {
  /**
   * Identifier data effectively is a structured metadata.
   * As a performance optimization this will only be sent in the first message
   * on the stream.
   *
   * @generated from field: envoy.service.trace.v3.StreamTracesMessage.Identifier identifier = 1;
   */
  identifier?: StreamTracesMessage_Identifier;

  /**
   * A list of Span entries
   *
   * @generated from field: repeated opencensus.proto.trace.v1.Span spans = 2;
   */
  spans: Span[];

  constructor(data?: PartialMessage<StreamTracesMessage>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.trace.v3.StreamTracesMessage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamTracesMessage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamTracesMessage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamTracesMessage;

  static equals(a: StreamTracesMessage | PlainMessage<StreamTracesMessage> | undefined, b: StreamTracesMessage | PlainMessage<StreamTracesMessage> | undefined): boolean;
}

/**
 * @generated from message envoy.service.trace.v3.StreamTracesMessage.Identifier
 */
export declare class StreamTracesMessage_Identifier extends Message<StreamTracesMessage_Identifier> {
  /**
   * The node sending the access log messages over the stream.
   *
   * @generated from field: envoy.config.core.v3.Node node = 1;
   */
  node?: Node;

  constructor(data?: PartialMessage<StreamTracesMessage_Identifier>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.trace.v3.StreamTracesMessage.Identifier";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamTracesMessage_Identifier;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamTracesMessage_Identifier;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamTracesMessage_Identifier;

  static equals(a: StreamTracesMessage_Identifier | PlainMessage<StreamTracesMessage_Identifier> | undefined, b: StreamTracesMessage_Identifier | PlainMessage<StreamTracesMessage_Identifier> | undefined): boolean;
}
