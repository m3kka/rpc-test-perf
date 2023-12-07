// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/service/endpoint/v3/eds.proto (package envoy.service.endpoint.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * [#not-implemented-hide:] Not configuration. Workaround c++ protobuf issue with importing
 * services: https://github.com/google/protobuf/issues/4221 and protoxform to upgrade the file.
 *
 * @generated from message envoy.service.endpoint.v3.EdsDummy
 */
export declare class EdsDummy extends Message<EdsDummy> {
  constructor(data?: PartialMessage<EdsDummy>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.endpoint.v3.EdsDummy";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EdsDummy;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EdsDummy;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EdsDummy;

  static equals(a: EdsDummy | PlainMessage<EdsDummy> | undefined, b: EdsDummy | PlainMessage<EdsDummy> | undefined): boolean;
}

