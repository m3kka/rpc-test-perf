// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/service/load_stats/v2/lrs.proto (package envoy.service.load_stats.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, Duration, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Node } from "../../../api/v2/core/base_pb.js";
import type { ClusterStats } from "../../../api/v2/endpoint/load_report_pb.js";

/**
 * A load report Envoy sends to the management server.
 * [#not-implemented-hide:] Not configuration. TBD how to doc proto APIs.
 *
 * @generated from message envoy.service.load_stats.v2.LoadStatsRequest
 */
export declare class LoadStatsRequest extends Message<LoadStatsRequest> {
  /**
   * Node identifier for Envoy instance.
   *
   * @generated from field: envoy.api.v2.core.Node node = 1;
   */
  node?: Node;

  /**
   * A list of load stats to report.
   *
   * @generated from field: repeated envoy.api.v2.endpoint.ClusterStats cluster_stats = 2;
   */
  clusterStats: ClusterStats[];

  constructor(data?: PartialMessage<LoadStatsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.load_stats.v2.LoadStatsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoadStatsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoadStatsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoadStatsRequest;

  static equals(a: LoadStatsRequest | PlainMessage<LoadStatsRequest> | undefined, b: LoadStatsRequest | PlainMessage<LoadStatsRequest> | undefined): boolean;
}

/**
 * The management server sends envoy a LoadStatsResponse with all clusters it
 * is interested in learning load stats about.
 * [#not-implemented-hide:] Not configuration. TBD how to doc proto APIs.
 *
 * @generated from message envoy.service.load_stats.v2.LoadStatsResponse
 */
export declare class LoadStatsResponse extends Message<LoadStatsResponse> {
  /**
   * Clusters to report stats for.
   * Not populated if *send_all_clusters* is true.
   *
   * @generated from field: repeated string clusters = 1;
   */
  clusters: string[];

  /**
   * If true, the client should send all clusters it knows about.
   * Only clients that advertise the "envoy.lrs.supports_send_all_clusters" capability in their
   * :ref:`client_features<envoy_api_field_core.Node.client_features>` field will honor this field.
   *
   * @generated from field: bool send_all_clusters = 4;
   */
  sendAllClusters: boolean;

  /**
   * The minimum interval of time to collect stats over. This is only a minimum for two reasons:
   * 1. There may be some delay from when the timer fires until stats sampling occurs.
   * 2. For clusters that were already feature in the previous *LoadStatsResponse*, any traffic
   *    that is observed in between the corresponding previous *LoadStatsRequest* and this
   *    *LoadStatsResponse* will also be accumulated and billed to the cluster. This avoids a period
   *    of inobservability that might otherwise exists between the messages. New clusters are not
   *    subject to this consideration.
   *
   * @generated from field: google.protobuf.Duration load_reporting_interval = 2;
   */
  loadReportingInterval?: Duration;

  /**
   * Set to *true* if the management server supports endpoint granularity
   * report.
   *
   * @generated from field: bool report_endpoint_granularity = 3;
   */
  reportEndpointGranularity: boolean;

  constructor(data?: PartialMessage<LoadStatsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.load_stats.v2.LoadStatsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoadStatsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoadStatsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoadStatsResponse;

  static equals(a: LoadStatsResponse | PlainMessage<LoadStatsResponse> | undefined, b: LoadStatsResponse | PlainMessage<LoadStatsResponse> | undefined): boolean;
}

