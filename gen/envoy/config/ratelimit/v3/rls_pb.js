// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/ratelimit/v3/rls.proto (package envoy.config.ratelimit.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { GrpcService } from "../../core/v3/grpc_service_pb.js";
import { ApiVersion } from "../../core/v3/config_source_pb.js";

/**
 * Rate limit :ref:`configuration overview <config_rate_limit_service>`.
 *
 * @generated from message envoy.config.ratelimit.v3.RateLimitServiceConfig
 */
export const RateLimitServiceConfig = proto3.makeMessageType(
  "envoy.config.ratelimit.v3.RateLimitServiceConfig",
  () => [
    { no: 2, name: "grpc_service", kind: "message", T: GrpcService },
    { no: 4, name: "transport_api_version", kind: "enum", T: proto3.getEnumType(ApiVersion) },
  ],
);
