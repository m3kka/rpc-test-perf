// @generated by protoc-gen-connect-es v1.1.4
// @generated from file envoy/service/rate_limit_quota/v3/rlqs.proto (package envoy.service.rate_limit_quota.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { RateLimitQuotaResponse, RateLimitQuotaUsageReports } from "./rlqs_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Defines the Rate Limit Quota Service (RLQS).
 *
 * @generated from service envoy.service.rate_limit_quota.v3.RateLimitQuotaService
 */
export declare const RateLimitQuotaService: {
  readonly typeName: "envoy.service.rate_limit_quota.v3.RateLimitQuotaService",
  readonly methods: {
    /**
     * Main communication channel: the data plane sends usage reports to the RLQS server,
     * and the server asynchronously responding with the assignments.
     *
     * @generated from rpc envoy.service.rate_limit_quota.v3.RateLimitQuotaService.StreamRateLimitQuotas
     */
    readonly streamRateLimitQuotas: {
      readonly name: "StreamRateLimitQuotas",
      readonly I: typeof RateLimitQuotaUsageReports,
      readonly O: typeof RateLimitQuotaResponse,
      readonly kind: MethodKind.BiDiStreaming,
    },
  }
};

