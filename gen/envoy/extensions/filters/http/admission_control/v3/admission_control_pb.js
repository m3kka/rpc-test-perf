// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/http/admission_control/v3/admission_control.proto (package envoy.extensions.filters.http.admission_control.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Duration, proto3 } from "@bufbuild/protobuf";
import { RuntimeDouble, RuntimeFeatureFlag, RuntimePercent, RuntimeUInt32 } from "../../../../../config/core/v3/base_pb.js";
import { Int32Range } from "../../../../../type/v3/range_pb.js";

/**
 * [#next-free-field: 8]
 *
 * @generated from message envoy.extensions.filters.http.admission_control.v3.AdmissionControl
 */
export const AdmissionControl = proto3.makeMessageType(
  "envoy.extensions.filters.http.admission_control.v3.AdmissionControl",
  () => [
    { no: 1, name: "enabled", kind: "message", T: RuntimeFeatureFlag },
    { no: 2, name: "success_criteria", kind: "message", T: AdmissionControl_SuccessCriteria, oneof: "evaluation_criteria" },
    { no: 3, name: "sampling_window", kind: "message", T: Duration },
    { no: 4, name: "aggression", kind: "message", T: RuntimeDouble },
    { no: 5, name: "sr_threshold", kind: "message", T: RuntimePercent },
    { no: 6, name: "rps_threshold", kind: "message", T: RuntimeUInt32 },
    { no: 7, name: "max_rejection_probability", kind: "message", T: RuntimePercent },
  ],
);

/**
 * Default method of specifying what constitutes a successful request. All status codes that
 * indicate a successful request must be explicitly specified if not relying on the default
 * values.
 *
 * @generated from message envoy.extensions.filters.http.admission_control.v3.AdmissionControl.SuccessCriteria
 */
export const AdmissionControl_SuccessCriteria = proto3.makeMessageType(
  "envoy.extensions.filters.http.admission_control.v3.AdmissionControl.SuccessCriteria",
  () => [
    { no: 1, name: "http_criteria", kind: "message", T: AdmissionControl_SuccessCriteria_HttpCriteria },
    { no: 2, name: "grpc_criteria", kind: "message", T: AdmissionControl_SuccessCriteria_GrpcCriteria },
  ],
  {localName: "AdmissionControl_SuccessCriteria"},
);

/**
 * @generated from message envoy.extensions.filters.http.admission_control.v3.AdmissionControl.SuccessCriteria.HttpCriteria
 */
export const AdmissionControl_SuccessCriteria_HttpCriteria = proto3.makeMessageType(
  "envoy.extensions.filters.http.admission_control.v3.AdmissionControl.SuccessCriteria.HttpCriteria",
  () => [
    { no: 1, name: "http_success_status", kind: "message", T: Int32Range, repeated: true },
  ],
  {localName: "AdmissionControl_SuccessCriteria_HttpCriteria"},
);

/**
 * @generated from message envoy.extensions.filters.http.admission_control.v3.AdmissionControl.SuccessCriteria.GrpcCriteria
 */
export const AdmissionControl_SuccessCriteria_GrpcCriteria = proto3.makeMessageType(
  "envoy.extensions.filters.http.admission_control.v3.AdmissionControl.SuccessCriteria.GrpcCriteria",
  () => [
    { no: 1, name: "grpc_success_status", kind: "scalar", T: 13 /* ScalarType.UINT32 */, repeated: true },
  ],
  {localName: "AdmissionControl_SuccessCriteria_GrpcCriteria"},
);

