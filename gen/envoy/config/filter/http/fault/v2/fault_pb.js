// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/filter/http/fault/v2/fault.proto (package envoy.config.filter.http.fault.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, UInt32Value } from "@bufbuild/protobuf";
import { FractionalPercent } from "../../../../../type/percent_pb.js";
import { FaultDelay, FaultRateLimit } from "../../../fault/v2/fault_pb.js";
import { HeaderMatcher } from "../../../../../api/v2/route/route_components_pb.js";

/**
 * @generated from message envoy.config.filter.http.fault.v2.FaultAbort
 */
export const FaultAbort = proto3.makeMessageType(
  "envoy.config.filter.http.fault.v2.FaultAbort",
  () => [
    { no: 2, name: "http_status", kind: "scalar", T: 13 /* ScalarType.UINT32 */, oneof: "error_type" },
    { no: 4, name: "header_abort", kind: "message", T: FaultAbort_HeaderAbort, oneof: "error_type" },
    { no: 3, name: "percentage", kind: "message", T: FractionalPercent },
  ],
);

/**
 * Fault aborts are controlled via an HTTP header (if applicable). See the
 * :ref:`HTTP fault filter <config_http_filters_fault_injection_http_header>` documentation for
 * more information.
 *
 * @generated from message envoy.config.filter.http.fault.v2.FaultAbort.HeaderAbort
 */
export const FaultAbort_HeaderAbort = proto3.makeMessageType(
  "envoy.config.filter.http.fault.v2.FaultAbort.HeaderAbort",
  [],
  {localName: "FaultAbort_HeaderAbort"},
);

/**
 * [#next-free-field: 14]
 *
 * @generated from message envoy.config.filter.http.fault.v2.HTTPFault
 */
export const HTTPFault = proto3.makeMessageType(
  "envoy.config.filter.http.fault.v2.HTTPFault",
  () => [
    { no: 1, name: "delay", kind: "message", T: FaultDelay },
    { no: 2, name: "abort", kind: "message", T: FaultAbort },
    { no: 3, name: "upstream_cluster", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "headers", kind: "message", T: HeaderMatcher, repeated: true },
    { no: 5, name: "downstream_nodes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 6, name: "max_active_faults", kind: "message", T: UInt32Value },
    { no: 7, name: "response_rate_limit", kind: "message", T: FaultRateLimit },
    { no: 8, name: "delay_percent_runtime", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "abort_percent_runtime", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "delay_duration_runtime", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "abort_http_status_runtime", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "max_active_faults_runtime", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "response_rate_limit_percent_runtime", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);
