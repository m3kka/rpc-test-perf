// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/http/original_ip_detection/custom_header/v3/custom_header.proto (package envoy.extensions.http.original_ip_detection.custom_header.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { HttpStatus } from "../../../../../type/v3/http_status_pb.js";

/**
 * This extension allows for the original downstream remote IP to be detected
 * by reading the value from a configured header name. If the value is successfully parsed
 * as an IP, it'll be treated as the effective downstream remote address and seen as such
 * by all filters. See :ref:`original_ip_detection_extensions
 * <envoy_v3_api_field_extensions.filters.network.http_connection_manager.v3.HttpConnectionManager.original_ip_detection_extensions>`
 * for an overview of how extensions operate and what happens when an extension fails
 * to detect the remote IP.
 *
 * [#extension: envoy.http.original_ip_detection.custom_header]
 *
 * @generated from message envoy.extensions.http.original_ip_detection.custom_header.v3.CustomHeaderConfig
 */
export const CustomHeaderConfig = proto3.makeMessageType(
  "envoy.extensions.http.original_ip_detection.custom_header.v3.CustomHeaderConfig",
  () => [
    { no: 1, name: "header_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "allow_extension_to_set_address_as_trusted", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "reject_with_status", kind: "message", T: HttpStatus },
  ],
);
