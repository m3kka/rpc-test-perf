// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/network/thrift_proxy/filters/payload_to_metadata/v3/payload_to_metadata.proto (package envoy.extensions.filters.network.thrift_proxy.filters.payload_to_metadata.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { RegexMatchAndSubstitute } from "../../../../../../../type/matcher/v3/regex_pb.js";

/**
 * @generated from message envoy.extensions.filters.network.thrift_proxy.filters.payload_to_metadata.v3.PayloadToMetadata
 */
export const PayloadToMetadata = proto3.makeMessageType(
  "envoy.extensions.filters.network.thrift_proxy.filters.payload_to_metadata.v3.PayloadToMetadata",
  () => [
    { no: 1, name: "request_rules", kind: "message", T: PayloadToMetadata_Rule, repeated: true },
  ],
);

/**
 * @generated from enum envoy.extensions.filters.network.thrift_proxy.filters.payload_to_metadata.v3.PayloadToMetadata.ValueType
 */
export const PayloadToMetadata_ValueType = proto3.makeEnum(
  "envoy.extensions.filters.network.thrift_proxy.filters.payload_to_metadata.v3.PayloadToMetadata.ValueType",
  [
    {no: 0, name: "STRING"},
    {no: 1, name: "NUMBER"},
  ],
);

/**
 * [#next-free-field: 6]
 *
 * @generated from message envoy.extensions.filters.network.thrift_proxy.filters.payload_to_metadata.v3.PayloadToMetadata.KeyValuePair
 */
export const PayloadToMetadata_KeyValuePair = proto3.makeMessageType(
  "envoy.extensions.filters.network.thrift_proxy.filters.payload_to_metadata.v3.PayloadToMetadata.KeyValuePair",
  () => [
    { no: 1, name: "metadata_namespace", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "value_type" },
    { no: 4, name: "regex_value_rewrite", kind: "message", T: RegexMatchAndSubstitute, oneof: "value_type" },
    { no: 5, name: "type", kind: "enum", T: proto3.getEnumType(PayloadToMetadata_ValueType) },
  ],
  {localName: "PayloadToMetadata_KeyValuePair"},
);

/**
 * A Rule defines what metadata to apply when a field is present or missing.
 * [#next-free-field: 6]
 *
 * @generated from message envoy.extensions.filters.network.thrift_proxy.filters.payload_to_metadata.v3.PayloadToMetadata.Rule
 */
export const PayloadToMetadata_Rule = proto3.makeMessageType(
  "envoy.extensions.filters.network.thrift_proxy.filters.payload_to_metadata.v3.PayloadToMetadata.Rule",
  () => [
    { no: 1, name: "method_name", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "match_specifier" },
    { no: 2, name: "service_name", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "match_specifier" },
    { no: 3, name: "field_selector", kind: "message", T: PayloadToMetadata_FieldSelector },
    { no: 4, name: "on_present", kind: "message", T: PayloadToMetadata_KeyValuePair },
    { no: 5, name: "on_missing", kind: "message", T: PayloadToMetadata_KeyValuePair },
  ],
  {localName: "PayloadToMetadata_Rule"},
);

/**
 * @generated from message envoy.extensions.filters.network.thrift_proxy.filters.payload_to_metadata.v3.PayloadToMetadata.FieldSelector
 */
export const PayloadToMetadata_FieldSelector = proto3.makeMessageType(
  "envoy.extensions.filters.network.thrift_proxy.filters.payload_to_metadata.v3.PayloadToMetadata.FieldSelector",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "child", kind: "message", T: PayloadToMetadata_FieldSelector },
  ],
  {localName: "PayloadToMetadata_FieldSelector"},
);

