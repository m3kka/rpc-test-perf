// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/formatter/cel/v3/cel.proto (package envoy.extensions.formatter.cel.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Configuration for the CEL formatter.
 *
 * @generated from message envoy.extensions.formatter.cel.v3.Cel
 */
export declare class Cel extends Message<Cel> {
  constructor(data?: PartialMessage<Cel>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.formatter.cel.v3.Cel";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Cel;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Cel;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Cel;

  static equals(a: Cel | PlainMessage<Cel> | undefined, b: Cel | PlainMessage<Cel> | undefined): boolean;
}

