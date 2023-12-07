// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/filter/http/health_check/v2/health_check.proto (package envoy.config.filter.http.health_check.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { BoolValue, Duration, proto3 } from "@bufbuild/protobuf";
import { Percent } from "../../../../../type/percent_pb.js";
import { HeaderMatcher } from "../../../../../api/v2/route/route_components_pb.js";

/**
 * [#next-free-field: 6]
 *
 * @generated from message envoy.config.filter.http.health_check.v2.HealthCheck
 */
export const HealthCheck = proto3.makeMessageType(
  "envoy.config.filter.http.health_check.v2.HealthCheck",
  () => [
    { no: 1, name: "pass_through_mode", kind: "message", T: BoolValue },
    { no: 3, name: "cache_time", kind: "message", T: Duration },
    { no: 4, name: "cluster_min_healthy_percentages", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Percent} },
    { no: 5, name: "headers", kind: "message", T: HeaderMatcher, repeated: true },
  ],
);

