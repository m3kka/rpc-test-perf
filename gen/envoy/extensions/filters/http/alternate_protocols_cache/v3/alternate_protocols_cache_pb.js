// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/http/alternate_protocols_cache/v3/alternate_protocols_cache.proto (package envoy.extensions.filters.http.alternate_protocols_cache.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { AlternateProtocolsCacheOptions } from "../../../../../config/core/v3/protocol_pb.js";

/**
 * Configuration for the alternate protocols cache HTTP filter.
 * [#extension: envoy.filters.http.alternate_protocols_cache]
 *
 * @generated from message envoy.extensions.filters.http.alternate_protocols_cache.v3.FilterConfig
 */
export const FilterConfig = proto3.makeMessageType(
  "envoy.extensions.filters.http.alternate_protocols_cache.v3.FilterConfig",
  () => [
    { no: 1, name: "alternate_protocols_cache_options", kind: "message", T: AlternateProtocolsCacheOptions },
  ],
);

