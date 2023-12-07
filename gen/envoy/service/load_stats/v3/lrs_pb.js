// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/service/load_stats/v3/lrs.proto (package envoy.service.load_stats.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Duration, proto3 } from "@bufbuild/protobuf";
import { Node } from "../../../config/core/v3/base_pb.js";
import { ClusterStats } from "../../../config/endpoint/v3/load_report_pb.js";

/**
 * A load report Envoy sends to the management server.
 *
 * @generated from message envoy.service.load_stats.v3.LoadStatsRequest
 */
export const LoadStatsRequest = proto3.makeMessageType(
  "envoy.service.load_stats.v3.LoadStatsRequest",
  () => [
    { no: 1, name: "node", kind: "message", T: Node },
    { no: 2, name: "cluster_stats", kind: "message", T: ClusterStats, repeated: true },
  ],
);

/**
 * The management server sends envoy a LoadStatsResponse with all clusters it
 * is interested in learning load stats about.
 *
 * @generated from message envoy.service.load_stats.v3.LoadStatsResponse
 */
export const LoadStatsResponse = proto3.makeMessageType(
  "envoy.service.load_stats.v3.LoadStatsResponse",
  () => [
    { no: 1, name: "clusters", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "send_all_clusters", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "load_reporting_interval", kind: "message", T: Duration },
    { no: 3, name: "report_endpoint_granularity", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);
