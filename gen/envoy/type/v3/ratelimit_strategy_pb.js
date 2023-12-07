// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/type/v3/ratelimit_strategy.proto (package envoy.type.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { TokenBucket } from "./token_bucket_pb.js";
import { RateLimitUnit } from "./ratelimit_unit_pb.js";

/**
 * @generated from message envoy.type.v3.RateLimitStrategy
 */
export const RateLimitStrategy = proto3.makeMessageType(
  "envoy.type.v3.RateLimitStrategy",
  () => [
    { no: 1, name: "blanket_rule", kind: "enum", T: proto3.getEnumType(RateLimitStrategy_BlanketRule), oneof: "strategy" },
    { no: 2, name: "requests_per_time_unit", kind: "message", T: RateLimitStrategy_RequestsPerTimeUnit, oneof: "strategy" },
    { no: 3, name: "token_bucket", kind: "message", T: TokenBucket, oneof: "strategy" },
  ],
);

/**
 * Choose between allow all and deny all.
 *
 * @generated from enum envoy.type.v3.RateLimitStrategy.BlanketRule
 */
export const RateLimitStrategy_BlanketRule = proto3.makeEnum(
  "envoy.type.v3.RateLimitStrategy.BlanketRule",
  [
    {no: 0, name: "ALLOW_ALL"},
    {no: 1, name: "DENY_ALL"},
  ],
);

/**
 * Best-effort limit of the number of requests per time unit.
 *
 * Allows to specify the desired requests per second (RPS, QPS), requests per minute (QPM, RPM),
 * etc., without specifying a rate limiting algorithm implementation.
 *
 * ``RequestsPerTimeUnit`` strategy does not demand any specific rate limiting algorithm to be
 * used (in contrast to the :ref:`TokenBucket <envoy_v3_api_msg_type.v3.TokenBucket>`,
 * for example). It implies that the implementation details of rate limiting algorithm are
 * irrelevant as long as the configured number of "requests per time unit" is achieved.
 *
 * Note that the ``TokenBucket`` is still a valid implementation of the ``RequestsPerTimeUnit``
 * strategy, and may be chosen to enforce the rate limit. However, there's no guarantee it will be
 * the ``TokenBucket`` in particular, and not the Leaky Bucket, the Sliding Window, or any other
 * rate limiting algorithm that fulfills the requirements.
 *
 * @generated from message envoy.type.v3.RateLimitStrategy.RequestsPerTimeUnit
 */
export const RateLimitStrategy_RequestsPerTimeUnit = proto3.makeMessageType(
  "envoy.type.v3.RateLimitStrategy.RequestsPerTimeUnit",
  () => [
    { no: 1, name: "requests_per_time_unit", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "time_unit", kind: "enum", T: proto3.getEnumType(RateLimitUnit) },
  ],
  {localName: "RateLimitStrategy_RequestsPerTimeUnit"},
);
