// @generated by protoc-gen-es v1.5.1
// @generated from file contrib/envoy/extensions/filters/network/generic_proxy/action/v3/action.proto (package envoy.extensions.filters.network.generic_proxy.action.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { Any, BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { WeightedCluster } from "../../../../../../../../envoy/config/route/v3/route_components_pb.js";
import type { Metadata } from "../../../../../../../../envoy/config/core/v3/base_pb.js";

/**
 * Configuration for the route match action.
 * [#next-free-field: 6]
 *
 * @generated from message envoy.extensions.filters.network.generic_proxy.action.v3.RouteAction
 */
export declare class RouteAction extends Message<RouteAction> {
  /**
   * The name of the route action. This should be unique across all route actions.
   *
   * @generated from field: string name = 5;
   */
  name: string;

  /**
   * @generated from oneof envoy.extensions.filters.network.generic_proxy.action.v3.RouteAction.cluster_specifier
   */
  clusterSpecifier: {
    /**
     * Indicates the upstream cluster to which the request should be routed.
     *
     * @generated from field: string cluster = 1;
     */
    value: string;
    case: "cluster";
  } | {
    /**
     * [#not-implemented-hide:]
     * Multiple upstream clusters can be specified for a given route. The request is routed to one
     * of the upstream clusters based on weights assigned to each cluster.
     * Currently ClusterWeight only supports the name and weight fields.
     *
     * @generated from field: envoy.config.route.v3.WeightedCluster weighted_clusters = 2;
     */
    value: WeightedCluster;
    case: "weightedClusters";
  } | { case: undefined; value?: undefined };

  /**
   * Route metadata.
   *
   * @generated from field: envoy.config.core.v3.Metadata metadata = 3;
   */
  metadata?: Metadata;

  /**
   * Route level config for L7 generic filters. The key should be the related :ref:`extension name
   * <envoy_v3_api_field_config.core.v3.TypedExtensionConfig.name>` in the :ref:`generic filters
   * <envoy_v3_api_field_extensions.filters.network.generic_proxy.v3.GenericProxy.filters>`.
   *
   * @generated from field: map<string, google.protobuf.Any> per_filter_config = 4;
   */
  perFilterConfig: { [key: string]: Any };

  constructor(data?: PartialMessage<RouteAction>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.network.generic_proxy.action.v3.RouteAction";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RouteAction;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RouteAction;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RouteAction;

  static equals(a: RouteAction | PlainMessage<RouteAction> | undefined, b: RouteAction | PlainMessage<RouteAction> | undefined): boolean;
}

