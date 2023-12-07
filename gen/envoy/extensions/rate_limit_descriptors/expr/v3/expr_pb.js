// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/rate_limit_descriptors/expr/v3/expr.proto (package envoy.extensions.rate_limit_descriptors.expr.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Expr } from "../../../../../google/api/expr/v1alpha1/syntax_pb.js";

/**
 * The following descriptor entry is appended with a value computed
 * from a symbolic Common Expression Language expression.
 * See :ref:`attributes <arch_overview_attributes>` for the set of
 * available attributes.
 *
 * .. code-block:: cpp
 *
 *   ("<descriptor_key>", "<expression_value>")
 *
 * @generated from message envoy.extensions.rate_limit_descriptors.expr.v3.Descriptor
 */
export const Descriptor = proto3.makeMessageType(
  "envoy.extensions.rate_limit_descriptors.expr.v3.Descriptor",
  () => [
    { no: 1, name: "descriptor_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "skip_if_error", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "expr_specifier" },
    { no: 4, name: "parsed", kind: "message", T: Expr, oneof: "expr_specifier" },
  ],
);
