// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/filter/http/dynamo/v2/dynamo.proto (package envoy.config.filter.http.dynamo.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Dynamo filter config.
 *
 * @generated from message envoy.config.filter.http.dynamo.v2.Dynamo
 */
export declare class Dynamo extends Message<Dynamo> {
  constructor(data?: PartialMessage<Dynamo>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.filter.http.dynamo.v2.Dynamo";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Dynamo;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Dynamo;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Dynamo;

  static equals(a: Dynamo | PlainMessage<Dynamo> | undefined, b: Dynamo | PlainMessage<Dynamo> | undefined): boolean;
}
