// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/network/mongo_proxy/v3/mongo_proxy.proto (package envoy.extensions.filters.network.mongo_proxy.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { FaultDelay } from "../../../common/fault/v3/fault_pb.js";

/**
 * [#next-free-field: 6]
 *
 * @generated from message envoy.extensions.filters.network.mongo_proxy.v3.MongoProxy
 */
export const MongoProxy = proto3.makeMessageType(
  "envoy.extensions.filters.network.mongo_proxy.v3.MongoProxy",
  () => [
    { no: 1, name: "stat_prefix", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "access_log", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "delay", kind: "message", T: FaultDelay },
    { no: 4, name: "emit_dynamic_metadata", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "commands", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);
