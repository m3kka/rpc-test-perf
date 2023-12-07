// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/common/fault/v3/fault.proto (package envoy.extensions.filters.common.fault.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Duration, proto3 } from "@bufbuild/protobuf";
import { FractionalPercent } from "../../../../../type/v3/percent_pb.js";

/**
 * Delay specification is used to inject latency into the
 * HTTP/Mongo operation.
 * [#next-free-field: 6]
 *
 * @generated from message envoy.extensions.filters.common.fault.v3.FaultDelay
 */
export const FaultDelay = proto3.makeMessageType(
  "envoy.extensions.filters.common.fault.v3.FaultDelay",
  () => [
    { no: 3, name: "fixed_delay", kind: "message", T: Duration, oneof: "fault_delay_secifier" },
    { no: 5, name: "header_delay", kind: "message", T: FaultDelay_HeaderDelay, oneof: "fault_delay_secifier" },
    { no: 4, name: "percentage", kind: "message", T: FractionalPercent },
  ],
);

/**
 * @generated from enum envoy.extensions.filters.common.fault.v3.FaultDelay.FaultDelayType
 */
export const FaultDelay_FaultDelayType = proto3.makeEnum(
  "envoy.extensions.filters.common.fault.v3.FaultDelay.FaultDelayType",
  [
    {no: 0, name: "FIXED"},
  ],
);

/**
 * Fault delays are controlled via an HTTP header (if applicable). See the
 * :ref:`HTTP fault filter <config_http_filters_fault_injection_http_header>` documentation for
 * more information.
 *
 * @generated from message envoy.extensions.filters.common.fault.v3.FaultDelay.HeaderDelay
 */
export const FaultDelay_HeaderDelay = proto3.makeMessageType(
  "envoy.extensions.filters.common.fault.v3.FaultDelay.HeaderDelay",
  [],
  {localName: "FaultDelay_HeaderDelay"},
);

/**
 * Describes a rate limit to be applied.
 *
 * @generated from message envoy.extensions.filters.common.fault.v3.FaultRateLimit
 */
export const FaultRateLimit = proto3.makeMessageType(
  "envoy.extensions.filters.common.fault.v3.FaultRateLimit",
  () => [
    { no: 1, name: "fixed_limit", kind: "message", T: FaultRateLimit_FixedLimit, oneof: "limit_type" },
    { no: 3, name: "header_limit", kind: "message", T: FaultRateLimit_HeaderLimit, oneof: "limit_type" },
    { no: 2, name: "percentage", kind: "message", T: FractionalPercent },
  ],
);

/**
 * Describes a fixed/constant rate limit.
 *
 * @generated from message envoy.extensions.filters.common.fault.v3.FaultRateLimit.FixedLimit
 */
export const FaultRateLimit_FixedLimit = proto3.makeMessageType(
  "envoy.extensions.filters.common.fault.v3.FaultRateLimit.FixedLimit",
  () => [
    { no: 1, name: "limit_kbps", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
  {localName: "FaultRateLimit_FixedLimit"},
);

/**
 * Rate limits are controlled via an HTTP header (if applicable). See the
 * :ref:`HTTP fault filter <config_http_filters_fault_injection_http_header>` documentation for
 * more information.
 *
 * @generated from message envoy.extensions.filters.common.fault.v3.FaultRateLimit.HeaderLimit
 */
export const FaultRateLimit_HeaderLimit = proto3.makeMessageType(
  "envoy.extensions.filters.common.fault.v3.FaultRateLimit.HeaderLimit",
  [],
  {localName: "FaultRateLimit_HeaderLimit"},
);

