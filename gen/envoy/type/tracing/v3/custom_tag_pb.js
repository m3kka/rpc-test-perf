// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/type/tracing/v3/custom_tag.proto (package envoy.type.tracing.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { MetadataKey, MetadataKind } from "../../metadata/v3/metadata_pb.js";

/**
 * Describes custom tags for the active span.
 * [#next-free-field: 6]
 *
 * @generated from message envoy.type.tracing.v3.CustomTag
 */
export const CustomTag = proto3.makeMessageType(
  "envoy.type.tracing.v3.CustomTag",
  () => [
    { no: 1, name: "tag", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "literal", kind: "message", T: CustomTag_Literal, oneof: "type" },
    { no: 3, name: "environment", kind: "message", T: CustomTag_Environment, oneof: "type" },
    { no: 4, name: "request_header", kind: "message", T: CustomTag_Header, oneof: "type" },
    { no: 5, name: "metadata", kind: "message", T: CustomTag_Metadata, oneof: "type" },
  ],
);

/**
 * Literal type custom tag with static value for the tag value.
 *
 * @generated from message envoy.type.tracing.v3.CustomTag.Literal
 */
export const CustomTag_Literal = proto3.makeMessageType(
  "envoy.type.tracing.v3.CustomTag.Literal",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "CustomTag_Literal"},
);

/**
 * Environment type custom tag with environment name and default value.
 *
 * @generated from message envoy.type.tracing.v3.CustomTag.Environment
 */
export const CustomTag_Environment = proto3.makeMessageType(
  "envoy.type.tracing.v3.CustomTag.Environment",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "default_value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "CustomTag_Environment"},
);

/**
 * Header type custom tag with header name and default value.
 *
 * @generated from message envoy.type.tracing.v3.CustomTag.Header
 */
export const CustomTag_Header = proto3.makeMessageType(
  "envoy.type.tracing.v3.CustomTag.Header",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "default_value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "CustomTag_Header"},
);

/**
 * Metadata type custom tag using
 * :ref:`MetadataKey <envoy_v3_api_msg_type.metadata.v3.MetadataKey>` to retrieve the protobuf value
 * from :ref:`Metadata <envoy_v3_api_msg_config.core.v3.Metadata>`, and populate the tag value with
 * `the canonical JSON <https://developers.google.com/protocol-buffers/docs/proto3#json>`_
 * representation of it.
 *
 * @generated from message envoy.type.tracing.v3.CustomTag.Metadata
 */
export const CustomTag_Metadata = proto3.makeMessageType(
  "envoy.type.tracing.v3.CustomTag.Metadata",
  () => [
    { no: 1, name: "kind", kind: "message", T: MetadataKind },
    { no: 2, name: "metadata_key", kind: "message", T: MetadataKey },
    { no: 3, name: "default_value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "CustomTag_Metadata"},
);
