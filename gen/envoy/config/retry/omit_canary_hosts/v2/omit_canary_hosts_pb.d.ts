// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/retry/omit_canary_hosts/v2/omit_canary_hosts.proto (package envoy.config.retry.omit_canary_hosts.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message envoy.config.retry.omit_canary_hosts.v2.OmitCanaryHostsPredicate
 */
export declare class OmitCanaryHostsPredicate extends Message<OmitCanaryHostsPredicate> {
  constructor(data?: PartialMessage<OmitCanaryHostsPredicate>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.retry.omit_canary_hosts.v2.OmitCanaryHostsPredicate";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OmitCanaryHostsPredicate;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OmitCanaryHostsPredicate;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OmitCanaryHostsPredicate;

  static equals(a: OmitCanaryHostsPredicate | PlainMessage<OmitCanaryHostsPredicate> | undefined, b: OmitCanaryHostsPredicate | PlainMessage<OmitCanaryHostsPredicate> | undefined): boolean;
}
