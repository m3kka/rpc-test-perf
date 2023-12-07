// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/retry/previous_hosts/v2/previous_hosts.proto (package envoy.config.retry.previous_hosts.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message envoy.config.retry.previous_hosts.v2.PreviousHostsPredicate
 */
export declare class PreviousHostsPredicate extends Message<PreviousHostsPredicate> {
  constructor(data?: PartialMessage<PreviousHostsPredicate>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.retry.previous_hosts.v2.PreviousHostsPredicate";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PreviousHostsPredicate;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PreviousHostsPredicate;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PreviousHostsPredicate;

  static equals(a: PreviousHostsPredicate | PlainMessage<PreviousHostsPredicate> | undefined, b: PreviousHostsPredicate | PlainMessage<PreviousHostsPredicate> | undefined): boolean;
}
