// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/common/ratelimit/v3/ratelimit.proto (package envoy.extensions.common.ratelimit.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { RateLimitUnit } from "../../../../type/v3/ratelimit_unit_pb.js";
import { TokenBucket } from "../../../../type/v3/token_bucket_pb.js";

/**
 * Defines the version of the standard to use for X-RateLimit headers.
 *
 * @generated from enum envoy.extensions.common.ratelimit.v3.XRateLimitHeadersRFCVersion
 */
export const XRateLimitHeadersRFCVersion = proto3.makeEnum(
  "envoy.extensions.common.ratelimit.v3.XRateLimitHeadersRFCVersion",
  [
    {no: 0, name: "OFF"},
    {no: 1, name: "DRAFT_VERSION_03"},
  ],
);

/**
 * @generated from enum envoy.extensions.common.ratelimit.v3.VhRateLimitsOptions
 */
export const VhRateLimitsOptions = proto3.makeEnum(
  "envoy.extensions.common.ratelimit.v3.VhRateLimitsOptions",
  [
    {no: 0, name: "OVERRIDE"},
    {no: 1, name: "INCLUDE"},
    {no: 2, name: "IGNORE"},
  ],
);

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
 * Optionally the descriptor can contain a limit override under a "limit" key, that specifies
 * the number of requests per unit to use instead of the number configured in the
 * rate limiting service.
 *
 * @generated from message envoy.extensions.common.ratelimit.v3.RateLimitDescriptor
 */
export const RateLimitDescriptor = proto3.makeMessageType(
  "envoy.extensions.common.ratelimit.v3.RateLimitDescriptor",
  () => [
    { no: 1, name: "entries", kind: "message", T: RateLimitDescriptor_Entry, repeated: true },
    { no: 2, name: "limit", kind: "message", T: RateLimitDescriptor_RateLimitOverride },
  ],
);

/**
 * @generated from message envoy.extensions.common.ratelimit.v3.RateLimitDescriptor.Entry
 */
export const RateLimitDescriptor_Entry = proto3.makeMessageType(
  "envoy.extensions.common.ratelimit.v3.RateLimitDescriptor.Entry",
  () => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "RateLimitDescriptor_Entry"},
);

/**
 * Override rate limit to apply to this descriptor instead of the limit
 * configured in the rate limit service. See :ref:`rate limit override
 * <config_http_filters_rate_limit_rate_limit_override>` for more information.
 *
 * @generated from message envoy.extensions.common.ratelimit.v3.RateLimitDescriptor.RateLimitOverride
 */
export const RateLimitDescriptor_RateLimitOverride = proto3.makeMessageType(
  "envoy.extensions.common.ratelimit.v3.RateLimitDescriptor.RateLimitOverride",
  () => [
    { no: 1, name: "requests_per_unit", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "unit", kind: "enum", T: proto3.getEnumType(RateLimitUnit) },
  ],
  {localName: "RateLimitDescriptor_RateLimitOverride"},
);

/**
 * @generated from message envoy.extensions.common.ratelimit.v3.LocalRateLimitDescriptor
 */
export const LocalRateLimitDescriptor = proto3.makeMessageType(
  "envoy.extensions.common.ratelimit.v3.LocalRateLimitDescriptor",
  () => [
    { no: 1, name: "entries", kind: "message", T: RateLimitDescriptor_Entry, repeated: true },
    { no: 2, name: "token_bucket", kind: "message", T: TokenBucket },
  ],
);
