// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/http/geoip/v3/geoip.proto (package envoy.extensions.filters.http.geoip.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { TypedExtensionConfig } from "../../../../../config/core/v3/extension_pb.js";

/**
 * @generated from message envoy.extensions.filters.http.geoip.v3.Geoip
 */
export const Geoip = proto3.makeMessageType(
  "envoy.extensions.filters.http.geoip.v3.Geoip",
  () => [
    { no: 1, name: "xff_config", kind: "message", T: Geoip_XffConfig },
    { no: 2, name: "geo_headers_to_add", kind: "message", T: Geoip_GeolocationHeadersToAdd },
    { no: 3, name: "provider", kind: "message", T: TypedExtensionConfig },
  ],
);

/**
 * The set of geolocation headers to add to request. If any of the configured headers is present
 * in the incoming request, it will be overridden by Geoip filter.
 * [#next-free-field: 10]
 *
 * @generated from message envoy.extensions.filters.http.geoip.v3.Geoip.GeolocationHeadersToAdd
 */
export const Geoip_GeolocationHeadersToAdd = proto3.makeMessageType(
  "envoy.extensions.filters.http.geoip.v3.Geoip.GeolocationHeadersToAdd",
  () => [
    { no: 1, name: "country", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "city", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "region", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "asn", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "is_anon", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "anon_vpn", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "anon_hosting", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "anon_tor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "anon_proxy", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "Geoip_GeolocationHeadersToAdd"},
);

/**
 * @generated from message envoy.extensions.filters.http.geoip.v3.Geoip.XffConfig
 */
export const Geoip_XffConfig = proto3.makeMessageType(
  "envoy.extensions.filters.http.geoip.v3.Geoip.XffConfig",
  () => [
    { no: 1, name: "xff_num_trusted_hops", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
  {localName: "Geoip_XffConfig"},
);
