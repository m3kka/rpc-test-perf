// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/listener/local_ratelimit/v3/local_ratelimit.proto (package envoy.extensions.filters.listener.local_ratelimit.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { TokenBucket } from "../../../../../type/v3/token_bucket_pb.js";
import type { RuntimeFeatureFlag } from "../../../../../config/core/v3/base_pb.js";

/**
 * @generated from message envoy.extensions.filters.listener.local_ratelimit.v3.LocalRateLimit
 */
export declare class LocalRateLimit extends Message<LocalRateLimit> {
  /**
   * The prefix to use when emitting :ref:`statistics
   * <config_listener_filters_local_rate_limit_stats>`.
   *
   * @generated from field: string stat_prefix = 1;
   */
  statPrefix: string;

  /**
   * The token bucket configuration to use for rate limiting all incoming sockets. If the token is available,
   * the socket will be allowed. If no tokens are available, the socket will be immediately closed.
   *
   * .. note::
   *   In the current implementation the token bucket's :ref:`fill_interval
   *   <envoy_v3_api_field_type.v3.TokenBucket.fill_interval>` must be >= 50ms to avoid too aggressive
   *   refills.
   *
   * @generated from field: envoy.type.v3.TokenBucket token_bucket = 2;
   */
  tokenBucket?: TokenBucket;

  /**
   * Runtime flag that controls whether the filter is enabled or not. If not specified, defaults
   * to enabled.
   *
   * @generated from field: envoy.config.core.v3.RuntimeFeatureFlag runtime_enabled = 3;
   */
  runtimeEnabled?: RuntimeFeatureFlag;

  constructor(data?: PartialMessage<LocalRateLimit>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.listener.local_ratelimit.v3.LocalRateLimit";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocalRateLimit;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocalRateLimit;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocalRateLimit;

  static equals(a: LocalRateLimit | PlainMessage<LocalRateLimit> | undefined, b: LocalRateLimit | PlainMessage<LocalRateLimit> | undefined): boolean;
}

