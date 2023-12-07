// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/service/extension/v3/config_discovery.proto (package envoy.service.extension.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * [#not-implemented-hide:] Not configuration. Workaround c++ protobuf issue
 * with importing services: https://github.com/google/protobuf/issues/4221 and
 * protoxform to upgrade the file.
 *
 * @generated from message envoy.service.extension.v3.EcdsDummy
 */
export declare class EcdsDummy extends Message<EcdsDummy> {
  constructor(data?: PartialMessage<EcdsDummy>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.extension.v3.EcdsDummy";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EcdsDummy;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EcdsDummy;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EcdsDummy;

  static equals(a: EcdsDummy | PlainMessage<EcdsDummy> | undefined, b: EcdsDummy | PlainMessage<EcdsDummy> | undefined): boolean;
}
