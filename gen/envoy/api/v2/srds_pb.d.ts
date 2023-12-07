// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/api/v2/srds.proto (package envoy.api.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * [#not-implemented-hide:] Not configuration. Workaround c++ protobuf issue with importing
 * services: https://github.com/google/protobuf/issues/4221 and protoxform to upgrade the file.
 *
 * @generated from message envoy.api.v2.SrdsDummy
 */
export declare class SrdsDummy extends Message<SrdsDummy> {
  constructor(data?: PartialMessage<SrdsDummy>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.api.v2.SrdsDummy";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SrdsDummy;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SrdsDummy;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SrdsDummy;

  static equals(a: SrdsDummy | PlainMessage<SrdsDummy> | undefined, b: SrdsDummy | PlainMessage<SrdsDummy> | undefined): boolean;
}

