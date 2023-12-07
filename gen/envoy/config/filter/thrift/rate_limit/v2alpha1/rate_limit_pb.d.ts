// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/filter/thrift/rate_limit/v2alpha1/rate_limit.proto (package envoy.config.filter.thrift.rate_limit.v2alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, Duration, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { RateLimitServiceConfig } from "../../../../ratelimit/v2/rls_pb.js";

/**
 * [#next-free-field: 6]
 *
 * @generated from message envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit
 */
export declare class RateLimit extends Message<RateLimit> {
  /**
   * The rate limit domain to use in the rate limit service request.
   *
   * @generated from field: string domain = 1;
   */
  domain: string;

  /**
   * Specifies the rate limit configuration stage. Each configured rate limit filter performs a
   * rate limit check using descriptors configured in the
   * :ref:`envoy_api_msg_config.filter.network.thrift_proxy.v2alpha1.RouteAction` for the request.
   * Only those entries with a matching stage number are used for a given filter. If not set, the
   * default stage number is 0.
   *
   * .. note::
   *
   *  The filter supports a range of 0 - 10 inclusively for stage numbers.
   *
   * @generated from field: uint32 stage = 2;
   */
  stage: number;

  /**
   * The timeout in milliseconds for the rate limit service RPC. If not
   * set, this defaults to 20ms.
   *
   * @generated from field: google.protobuf.Duration timeout = 3;
   */
  timeout?: Duration;

  /**
   * The filter's behaviour in case the rate limiting service does
   * not respond back. When it is set to true, Envoy will not allow traffic in case of
   * communication failure between rate limiting service and the proxy.
   * Defaults to false.
   *
   * @generated from field: bool failure_mode_deny = 4;
   */
  failureModeDeny: boolean;

  /**
   * Configuration for an external rate limit service provider. If not
   * specified, any calls to the rate limit service will immediately return
   * success.
   *
   * @generated from field: envoy.config.ratelimit.v2.RateLimitServiceConfig rate_limit_service = 5;
   */
  rateLimitService?: RateLimitServiceConfig;

  constructor(data?: PartialMessage<RateLimit>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RateLimit;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RateLimit;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RateLimit;

  static equals(a: RateLimit | PlainMessage<RateLimit> | undefined, b: RateLimit | PlainMessage<RateLimit> | undefined): boolean;
}
