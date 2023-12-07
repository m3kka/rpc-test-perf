// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/type/matcher/number.proto (package envoy.type.matcher, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { DoubleRange } from "../range_pb.js";

/**
 * Specifies the way to match a double value.
 *
 * @generated from message envoy.type.matcher.DoubleMatcher
 */
export const DoubleMatcher = proto3.makeMessageType(
  "envoy.type.matcher.DoubleMatcher",
  () => [
    { no: 1, name: "range", kind: "message", T: DoubleRange, oneof: "match_pattern" },
    { no: 2, name: "exact", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, oneof: "match_pattern" },
  ],
);
