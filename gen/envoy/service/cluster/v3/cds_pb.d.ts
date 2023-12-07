// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/service/cluster/v3/cds.proto (package envoy.service.cluster.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * [#not-implemented-hide:] Not configuration. Workaround c++ protobuf issue with importing
 * services: https://github.com/google/protobuf/issues/4221 and protoxform to upgrade the file.
 *
 * @generated from message envoy.service.cluster.v3.CdsDummy
 */
export declare class CdsDummy extends Message<CdsDummy> {
  constructor(data?: PartialMessage<CdsDummy>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.cluster.v3.CdsDummy";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CdsDummy;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CdsDummy;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CdsDummy;

  static equals(a: CdsDummy | PlainMessage<CdsDummy> | undefined, b: CdsDummy | PlainMessage<CdsDummy> | undefined): boolean;
}

