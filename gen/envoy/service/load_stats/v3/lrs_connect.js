// @generated by protoc-gen-connect-es v1.1.4
// @generated from file envoy/service/load_stats/v3/lrs.proto (package envoy.service.load_stats.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { LoadStatsRequest, LoadStatsResponse } from "./lrs_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service envoy.service.load_stats.v3.LoadReportingService
 */
export const LoadReportingService = {
  typeName: "envoy.service.load_stats.v3.LoadReportingService",
  methods: {
    /**
     * Advanced API to allow for multi-dimensional load balancing by remote
     * server. For receiving LB assignments, the steps are:
     * 1, The management server is configured with per cluster/zone/load metric
     *    capacity configuration. The capacity configuration definition is
     *    outside of the scope of this document.
     * 2. Envoy issues a standard {Stream,Fetch}Endpoints request for the clusters
     *    to balance.
     *
     * Independently, Envoy will initiate a StreamLoadStats bidi stream with a
     * management server:
     * 1. Once a connection establishes, the management server publishes a
     *    LoadStatsResponse for all clusters it is interested in learning load
     *    stats about.
     * 2. For each cluster, Envoy load balances incoming traffic to upstream hosts
     *    based on per-zone weights and/or per-instance weights (if specified)
     *    based on intra-zone LbPolicy. This information comes from the above
     *    {Stream,Fetch}Endpoints.
     * 3. When upstream hosts reply, they optionally add header <define header
     *    name> with ASCII representation of EndpointLoadMetricStats.
     * 4. Envoy aggregates load reports over the period of time given to it in
     *    LoadStatsResponse.load_reporting_interval. This includes aggregation
     *    stats Envoy maintains by itself (total_requests, rpc_errors etc.) as
     *    well as load metrics from upstream hosts.
     * 5. When the timer of load_reporting_interval expires, Envoy sends new
     *    LoadStatsRequest filled with load reports for each cluster.
     * 6. The management server uses the load reports from all reported Envoys
     *    from around the world, computes global assignment and prepares traffic
     *    assignment destined for each zone Envoys are located in. Goto 2.
     *
     * @generated from rpc envoy.service.load_stats.v3.LoadReportingService.StreamLoadStats
     */
    streamLoadStats: {
      name: "StreamLoadStats",
      I: LoadStatsRequest,
      O: LoadStatsResponse,
      kind: MethodKind.BiDiStreaming,
    },
  }
};

