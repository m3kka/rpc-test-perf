// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/network/local_ratelimit/v3/local_rate_limit.proto (package envoy.extensions.filters.network.local_ratelimit.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { TokenBucket } from "../../../../../type/v3/token_bucket_pb.js";
import { RuntimeFeatureFlag } from "../../../../../config/core/v3/base_pb.js";

/**
 * @generated from message envoy.extensions.filters.network.local_ratelimit.v3.LocalRateLimit
 */
export const LocalRateLimit = proto3.makeMessageType(
  "envoy.extensions.filters.network.local_ratelimit.v3.LocalRateLimit",
  () => [
    { no: 1, name: "stat_prefix", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "token_bucket", kind: "message", T: TokenBucket },
    { no: 3, name: "runtime_enabled", kind: "message", T: RuntimeFeatureFlag },
    { no: 4, name: "share_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

