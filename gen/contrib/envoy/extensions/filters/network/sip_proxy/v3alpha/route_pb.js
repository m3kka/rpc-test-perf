// @generated by protoc-gen-es v1.5.1
// @generated from file contrib/envoy/extensions/filters/network/sip_proxy/v3alpha/route.proto (package envoy.extensions.filters.network.sip_proxy.v3alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message envoy.extensions.filters.network.sip_proxy.v3alpha.RouteConfiguration
 */
export const RouteConfiguration = proto3.makeMessageType(
  "envoy.extensions.filters.network.sip_proxy.v3alpha.RouteConfiguration",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "routes", kind: "message", T: Route, repeated: true },
  ],
);

/**
 * @generated from message envoy.extensions.filters.network.sip_proxy.v3alpha.Route
 */
export const Route = proto3.makeMessageType(
  "envoy.extensions.filters.network.sip_proxy.v3alpha.Route",
  () => [
    { no: 1, name: "match", kind: "message", T: RouteMatch },
    { no: 2, name: "route", kind: "message", T: RouteAction },
  ],
);

/**
 * @generated from message envoy.extensions.filters.network.sip_proxy.v3alpha.RouteMatch
 */
export const RouteMatch = proto3.makeMessageType(
  "envoy.extensions.filters.network.sip_proxy.v3alpha.RouteMatch",
  () => [
    { no: 1, name: "domain", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "match_specifier" },
    { no: 2, name: "header", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "parameter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message envoy.extensions.filters.network.sip_proxy.v3alpha.RouteAction
 */
export const RouteAction = proto3.makeMessageType(
  "envoy.extensions.filters.network.sip_proxy.v3alpha.RouteAction",
  () => [
    { no: 1, name: "cluster", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "cluster_specifier" },
  ],
);

