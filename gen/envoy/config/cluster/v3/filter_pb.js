// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/cluster/v3/filter.proto (package envoy.config.cluster.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Any, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message envoy.config.cluster.v3.Filter
 */
export const Filter = proto3.makeMessageType(
  "envoy.config.cluster.v3.Filter",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "typed_config", kind: "message", T: Any },
  ],
);

