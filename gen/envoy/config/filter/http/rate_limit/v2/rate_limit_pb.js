// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/filter/http/rate_limit/v2/rate_limit.proto (package envoy.config.filter.http.rate_limit.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Duration, proto3 } from "@bufbuild/protobuf";
import { RateLimitServiceConfig } from "../../../../ratelimit/v2/rls_pb.js";

/**
 * [#next-free-field: 8]
 *
 * @generated from message envoy.config.filter.http.rate_limit.v2.RateLimit
 */
export const RateLimit = proto3.makeMessageType(
  "envoy.config.filter.http.rate_limit.v2.RateLimit",
  () => [
    { no: 1, name: "domain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "stage", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "request_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "timeout", kind: "message", T: Duration },
    { no: 5, name: "failure_mode_deny", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "rate_limited_as_resource_exhausted", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "rate_limit_service", kind: "message", T: RateLimitServiceConfig },
  ],
);
