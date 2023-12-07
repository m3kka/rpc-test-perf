// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/matching/common_inputs/ssl/v3/ssl_inputs.proto (package envoy.extensions.matching.common_inputs.ssl.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * List of comma-delimited URIs in the SAN field of the peer certificate for a downstream.
 * [#extension: envoy.matching.inputs.uri_san]
 *
 * @generated from message envoy.extensions.matching.common_inputs.ssl.v3.UriSanInput
 */
export const UriSanInput = proto3.makeMessageType(
  "envoy.extensions.matching.common_inputs.ssl.v3.UriSanInput",
  [],
);

/**
 * List of comma-delimited DNS entries in the SAN field of the peer certificate for a downstream.
 * [#extension: envoy.matching.inputs.dns_san]
 *
 * @generated from message envoy.extensions.matching.common_inputs.ssl.v3.DnsSanInput
 */
export const DnsSanInput = proto3.makeMessageType(
  "envoy.extensions.matching.common_inputs.ssl.v3.DnsSanInput",
  [],
);

/**
 * Input that matches the subject field of the peer certificate in RFC 2253 format for a
 * downstream.
 * [#extension: envoy.matching.inputs.subject]
 *
 * @generated from message envoy.extensions.matching.common_inputs.ssl.v3.SubjectInput
 */
export const SubjectInput = proto3.makeMessageType(
  "envoy.extensions.matching.common_inputs.ssl.v3.SubjectInput",
  [],
);
