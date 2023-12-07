// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/api/v2/ratelimit/ratelimit.proto (package envoy.api.v2.ratelimit, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * A RateLimitDescriptor is a list of hierarchical entries that are used by the service to
 * determine the final rate limit key and overall allowed limit. Here are some examples of how
 * they might be used for the domain "envoy".
 *
 * .. code-block:: cpp
 *
 *   ["authenticated": "false"], ["remote_address": "10.0.0.1"]
 *
 * What it does: Limits all unauthenticated traffic for the IP address 10.0.0.1. The
 * configuration supplies a default limit for the *remote_address* key. If there is a desire to
 * raise the limit for 10.0.0.1 or block it entirely it can be specified directly in the
 * configuration.
 *
 * .. code-block:: cpp
 *
 *   ["authenticated": "false"], ["path": "/foo/bar"]
 *
 * What it does: Limits all unauthenticated traffic globally for a specific path (or prefix if
 * configured that way in the service).
 *
 * .. code-block:: cpp
 *
 *   ["authenticated": "false"], ["path": "/foo/bar"], ["remote_address": "10.0.0.1"]
 *
 * What it does: Limits unauthenticated traffic to a specific path for a specific IP address.
 * Like (1) we can raise/block specific IP addresses if we want with an override configuration.
 *
 * .. code-block:: cpp
 *
 *   ["authenticated": "true"], ["client_id": "foo"]
 *
 * What it does: Limits all traffic for an authenticated client "foo"
 *
 * .. code-block:: cpp
 *
 *   ["authenticated": "true"], ["client_id": "foo"], ["path": "/foo/bar"]
 *
 * What it does: Limits traffic to a specific path for an authenticated client "foo"
 *
 * The idea behind the API is that (1)/(2)/(3) and (4)/(5) can be sent in 1 request if desired.
 * This enables building complex application scenarios with a generic backend.
 *
 * @generated from message envoy.api.v2.ratelimit.RateLimitDescriptor
 */
export declare class RateLimitDescriptor extends Message<RateLimitDescriptor> {
  /**
   * Descriptor entries.
   *
   * @generated from field: repeated envoy.api.v2.ratelimit.RateLimitDescriptor.Entry entries = 1;
   */
  entries: RateLimitDescriptor_Entry[];

  constructor(data?: PartialMessage<RateLimitDescriptor>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.api.v2.ratelimit.RateLimitDescriptor";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RateLimitDescriptor;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RateLimitDescriptor;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RateLimitDescriptor;

  static equals(a: RateLimitDescriptor | PlainMessage<RateLimitDescriptor> | undefined, b: RateLimitDescriptor | PlainMessage<RateLimitDescriptor> | undefined): boolean;
}

/**
 * @generated from message envoy.api.v2.ratelimit.RateLimitDescriptor.Entry
 */
export declare class RateLimitDescriptor_Entry extends Message<RateLimitDescriptor_Entry> {
  /**
   * Descriptor key.
   *
   * @generated from field: string key = 1;
   */
  key: string;

  /**
   * Descriptor value.
   *
   * @generated from field: string value = 2;
   */
  value: string;

  constructor(data?: PartialMessage<RateLimitDescriptor_Entry>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.api.v2.ratelimit.RateLimitDescriptor.Entry";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RateLimitDescriptor_Entry;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RateLimitDescriptor_Entry;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RateLimitDescriptor_Entry;

  static equals(a: RateLimitDescriptor_Entry | PlainMessage<RateLimitDescriptor_Entry> | undefined, b: RateLimitDescriptor_Entry | PlainMessage<RateLimitDescriptor_Entry> | undefined): boolean;
}

