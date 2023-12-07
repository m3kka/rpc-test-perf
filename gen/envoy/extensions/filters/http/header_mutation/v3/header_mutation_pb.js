// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/http/header_mutation/v3/header_mutation.proto (package envoy.extensions.filters.http.header_mutation.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { HeaderMutation as HeaderMutation$1 } from "../../../../../config/common/mutation_rules/v3/mutation_rules_pb.js";

/**
 * @generated from message envoy.extensions.filters.http.header_mutation.v3.Mutations
 */
export const Mutations = proto3.makeMessageType(
  "envoy.extensions.filters.http.header_mutation.v3.Mutations",
  () => [
    { no: 1, name: "request_mutations", kind: "message", T: HeaderMutation$1, repeated: true },
    { no: 2, name: "response_mutations", kind: "message", T: HeaderMutation$1, repeated: true },
  ],
);

/**
 * Per route configuration for the header mutation filter. If this is configured at multiple levels
 * (route level, virtual host level, and route table level), only the most specific one will be used.
 *
 * @generated from message envoy.extensions.filters.http.header_mutation.v3.HeaderMutationPerRoute
 */
export const HeaderMutationPerRoute = proto3.makeMessageType(
  "envoy.extensions.filters.http.header_mutation.v3.HeaderMutationPerRoute",
  () => [
    { no: 1, name: "mutations", kind: "message", T: Mutations },
  ],
);

/**
 * Configuration for the header mutation filter. The mutation rules in the filter configuration will
 * always be applied first and then the per-route mutation rules, if both are specified.
 *
 * @generated from message envoy.extensions.filters.http.header_mutation.v3.HeaderMutation
 */
export const HeaderMutation = proto3.makeMessageType(
  "envoy.extensions.filters.http.header_mutation.v3.HeaderMutation",
  () => [
    { no: 1, name: "mutations", kind: "message", T: Mutations },
  ],
);

