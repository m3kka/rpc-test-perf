// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/network/direct_response/v3/config.proto (package envoy.extensions.filters.network.direct_response.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { DataSource } from "../../../../../config/core/v3/base_pb.js";

/**
 * @generated from message envoy.extensions.filters.network.direct_response.v3.Config
 */
export const Config = proto3.makeMessageType(
  "envoy.extensions.filters.network.direct_response.v3.Config",
  () => [
    { no: 1, name: "response", kind: "message", T: DataSource },
  ],
);
