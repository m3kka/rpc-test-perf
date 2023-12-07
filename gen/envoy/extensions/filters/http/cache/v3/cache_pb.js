// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/http/cache/v3/cache.proto (package envoy.extensions.filters.http.cache.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Any, BoolValue, proto3 } from "@bufbuild/protobuf";
import { StringMatcher } from "../../../../../type/matcher/v3/string_pb.js";
import { QueryParameterMatcher } from "../../../../../config/route/v3/route_components_pb.js";

/**
 * [#extension: envoy.filters.http.cache]
 * [#next-free-field: 6]
 *
 * @generated from message envoy.extensions.filters.http.cache.v3.CacheConfig
 */
export const CacheConfig = proto3.makeMessageType(
  "envoy.extensions.filters.http.cache.v3.CacheConfig",
  () => [
    { no: 1, name: "typed_config", kind: "message", T: Any },
    { no: 5, name: "disabled", kind: "message", T: BoolValue },
    { no: 2, name: "allowed_vary_headers", kind: "message", T: StringMatcher, repeated: true },
    { no: 3, name: "key_creator_params", kind: "message", T: CacheConfig_KeyCreatorParams },
    { no: 4, name: "max_body_bytes", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * [#not-implemented-hide:]
 * Modifies cache key creation by restricting which parts of the URL are included.
 *
 * @generated from message envoy.extensions.filters.http.cache.v3.CacheConfig.KeyCreatorParams
 */
export const CacheConfig_KeyCreatorParams = proto3.makeMessageType(
  "envoy.extensions.filters.http.cache.v3.CacheConfig.KeyCreatorParams",
  () => [
    { no: 1, name: "exclude_scheme", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "exclude_host", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "query_parameters_included", kind: "message", T: QueryParameterMatcher, repeated: true },
    { no: 4, name: "query_parameters_excluded", kind: "message", T: QueryParameterMatcher, repeated: true },
  ],
  {localName: "CacheConfig_KeyCreatorParams"},
);
