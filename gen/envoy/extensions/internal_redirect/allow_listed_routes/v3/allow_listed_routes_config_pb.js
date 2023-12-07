// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/internal_redirect/allow_listed_routes/v3/allow_listed_routes_config.proto (package envoy.extensions.internal_redirect.allow_listed_routes.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * An internal redirect predicate that accepts only explicitly allowed target routes.
 * [#extension: envoy.internal_redirect_predicates.allow_listed_routes]
 *
 * @generated from message envoy.extensions.internal_redirect.allow_listed_routes.v3.AllowListedRoutesConfig
 */
export const AllowListedRoutesConfig = proto3.makeMessageType(
  "envoy.extensions.internal_redirect.allow_listed_routes.v3.AllowListedRoutesConfig",
  () => [
    { no: 1, name: "allowed_route_names", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

