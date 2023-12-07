// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/http/adaptive_concurrency/v3/adaptive_concurrency.proto (package envoy.extensions.filters.http.adaptive_concurrency.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Duration, proto3, UInt32Value } from "@bufbuild/protobuf";
import { Percent } from "../../../../../type/v3/percent_pb.js";
import { RuntimeFeatureFlag } from "../../../../../config/core/v3/base_pb.js";
import { HttpStatus } from "../../../../../type/v3/http_status_pb.js";

/**
 * Configuration parameters for the gradient controller.
 *
 * @generated from message envoy.extensions.filters.http.adaptive_concurrency.v3.GradientControllerConfig
 */
export const GradientControllerConfig = proto3.makeMessageType(
  "envoy.extensions.filters.http.adaptive_concurrency.v3.GradientControllerConfig",
  () => [
    { no: 1, name: "sample_aggregate_percentile", kind: "message", T: Percent },
    { no: 2, name: "concurrency_limit_params", kind: "message", T: GradientControllerConfig_ConcurrencyLimitCalculationParams },
    { no: 3, name: "min_rtt_calc_params", kind: "message", T: GradientControllerConfig_MinimumRTTCalculationParams },
  ],
);

/**
 * Parameters controlling the periodic recalculation of the concurrency limit from sampled request
 * latencies.
 *
 * @generated from message envoy.extensions.filters.http.adaptive_concurrency.v3.GradientControllerConfig.ConcurrencyLimitCalculationParams
 */
export const GradientControllerConfig_ConcurrencyLimitCalculationParams = proto3.makeMessageType(
  "envoy.extensions.filters.http.adaptive_concurrency.v3.GradientControllerConfig.ConcurrencyLimitCalculationParams",
  () => [
    { no: 2, name: "max_concurrency_limit", kind: "message", T: UInt32Value },
    { no: 3, name: "concurrency_update_interval", kind: "message", T: Duration },
  ],
  {localName: "GradientControllerConfig_ConcurrencyLimitCalculationParams"},
);

/**
 * Parameters controlling the periodic minRTT recalculation.
 * [#next-free-field: 6]
 *
 * @generated from message envoy.extensions.filters.http.adaptive_concurrency.v3.GradientControllerConfig.MinimumRTTCalculationParams
 */
export const GradientControllerConfig_MinimumRTTCalculationParams = proto3.makeMessageType(
  "envoy.extensions.filters.http.adaptive_concurrency.v3.GradientControllerConfig.MinimumRTTCalculationParams",
  () => [
    { no: 1, name: "interval", kind: "message", T: Duration },
    { no: 2, name: "request_count", kind: "message", T: UInt32Value },
    { no: 3, name: "jitter", kind: "message", T: Percent },
    { no: 4, name: "min_concurrency", kind: "message", T: UInt32Value },
    { no: 5, name: "buffer", kind: "message", T: Percent },
  ],
  {localName: "GradientControllerConfig_MinimumRTTCalculationParams"},
);

/**
 * @generated from message envoy.extensions.filters.http.adaptive_concurrency.v3.AdaptiveConcurrency
 */
export const AdaptiveConcurrency = proto3.makeMessageType(
  "envoy.extensions.filters.http.adaptive_concurrency.v3.AdaptiveConcurrency",
  () => [
    { no: 1, name: "gradient_controller_config", kind: "message", T: GradientControllerConfig, oneof: "concurrency_controller_config" },
    { no: 2, name: "enabled", kind: "message", T: RuntimeFeatureFlag },
    { no: 3, name: "concurrency_limit_exceeded_status", kind: "message", T: HttpStatus },
  ],
);

