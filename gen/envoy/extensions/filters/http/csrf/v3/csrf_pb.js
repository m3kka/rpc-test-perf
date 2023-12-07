// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/http/csrf/v3/csrf.proto (package envoy.extensions.filters.http.csrf.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { RuntimeFractionalPercent } from "../../../../../config/core/v3/base_pb.js";
import { StringMatcher } from "../../../../../type/matcher/v3/string_pb.js";

/**
 * CSRF filter config.
 *
 * @generated from message envoy.extensions.filters.http.csrf.v3.CsrfPolicy
 */
export const CsrfPolicy = proto3.makeMessageType(
  "envoy.extensions.filters.http.csrf.v3.CsrfPolicy",
  () => [
    { no: 1, name: "filter_enabled", kind: "message", T: RuntimeFractionalPercent },
    { no: 2, name: "shadow_enabled", kind: "message", T: RuntimeFractionalPercent },
    { no: 3, name: "additional_origins", kind: "message", T: StringMatcher, repeated: true },
  ],
);
