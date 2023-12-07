// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/network/ratelimit/v3/rate_limit.proto (package envoy.extensions.filters.network.ratelimit.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Duration, proto3 } from "@bufbuild/protobuf";
import { RateLimitDescriptor } from "../../../../common/ratelimit/v3/ratelimit_pb.js";
import { RateLimitServiceConfig } from "../../../../../config/ratelimit/v3/rls_pb.js";

/**
 * [#next-free-field: 7]
 *
 * @generated from message envoy.extensions.filters.network.ratelimit.v3.RateLimit
 */
export const RateLimit = proto3.makeMessageType(
  "envoy.extensions.filters.network.ratelimit.v3.RateLimit",
  () => [
    { no: 1, name: "stat_prefix", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "domain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "descriptors", kind: "message", T: RateLimitDescriptor, repeated: true },
    { no: 4, name: "timeout", kind: "message", T: Duration },
    { no: 5, name: "failure_mode_deny", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "rate_limit_service", kind: "message", T: RateLimitServiceConfig },
  ],
);

