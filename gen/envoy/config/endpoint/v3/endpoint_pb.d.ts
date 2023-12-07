// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/endpoint/v3/endpoint.proto (package envoy.config.endpoint.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, Duration, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Endpoint, LocalityLbEndpoints } from "./endpoint_components_pb.js";
import type { FractionalPercent } from "../../../type/v3/percent_pb.js";

/**
 * Each route from RDS will map to a single cluster or traffic split across
 * clusters using weights expressed in the RDS WeightedCluster.
 *
 * With EDS, each cluster is treated independently from a LB perspective, with
 * LB taking place between the Localities within a cluster and at a finer
 * granularity between the hosts within a locality. The percentage of traffic
 * for each endpoint is determined by both its load_balancing_weight, and the
 * load_balancing_weight of its locality. First, a locality will be selected,
 * then an endpoint within that locality will be chose based on its weight.
 * [#next-free-field: 6]
 *
 * @generated from message envoy.config.endpoint.v3.ClusterLoadAssignment
 */
export declare class ClusterLoadAssignment extends Message<ClusterLoadAssignment> {
  /**
   * Name of the cluster. This will be the :ref:`service_name
   * <envoy_v3_api_field_config.cluster.v3.Cluster.EdsClusterConfig.service_name>` value if specified
   * in the cluster :ref:`EdsClusterConfig
   * <envoy_v3_api_msg_config.cluster.v3.Cluster.EdsClusterConfig>`.
   *
   * @generated from field: string cluster_name = 1;
   */
  clusterName: string;

  /**
   * List of endpoints to load balance to.
   *
   * @generated from field: repeated envoy.config.endpoint.v3.LocalityLbEndpoints endpoints = 2;
   */
  endpoints: LocalityLbEndpoints[];

  /**
   * Map of named endpoints that can be referenced in LocalityLbEndpoints.
   * [#not-implemented-hide:]
   *
   * @generated from field: map<string, envoy.config.endpoint.v3.Endpoint> named_endpoints = 5;
   */
  namedEndpoints: { [key: string]: Endpoint };

  /**
   * Load balancing policy settings.
   *
   * @generated from field: envoy.config.endpoint.v3.ClusterLoadAssignment.Policy policy = 4;
   */
  policy?: ClusterLoadAssignment_Policy;

  constructor(data?: PartialMessage<ClusterLoadAssignment>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.endpoint.v3.ClusterLoadAssignment";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterLoadAssignment;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterLoadAssignment;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterLoadAssignment;

  static equals(a: ClusterLoadAssignment | PlainMessage<ClusterLoadAssignment> | undefined, b: ClusterLoadAssignment | PlainMessage<ClusterLoadAssignment> | undefined): boolean;
}

/**
 * Load balancing policy settings.
 * [#next-free-field: 7]
 *
 * @generated from message envoy.config.endpoint.v3.ClusterLoadAssignment.Policy
 */
export declare class ClusterLoadAssignment_Policy extends Message<ClusterLoadAssignment_Policy> {
  /**
   * Action to trim the overall incoming traffic to protect the upstream
   * hosts. This action allows protection in case the hosts are unable to
   * recover from an outage, or unable to autoscale or unable to handle
   * incoming traffic volume for any reason.
   *
   * At the client each category is applied one after the other to generate
   * the 'actual' drop percentage on all outgoing traffic. For example:
   *
   * .. code-block:: json
   *
   *  { "drop_overloads": [
   *      { "category": "throttle", "drop_percentage": 60 }
   *      { "category": "lb", "drop_percentage": 50 }
   *  ]}
   *
   * The actual drop percentages applied to the traffic at the clients will be
   *    "throttle"_drop = 60%
   *    "lb"_drop = 20%  // 50% of the remaining 'actual' load, which is 40%.
   *    actual_outgoing_load = 20% // remaining after applying all categories.
   * [#not-implemented-hide:]
   *
   * @generated from field: repeated envoy.config.endpoint.v3.ClusterLoadAssignment.Policy.DropOverload drop_overloads = 2;
   */
  dropOverloads: ClusterLoadAssignment_Policy_DropOverload[];

  /**
   * Priority levels and localities are considered overprovisioned with this
   * factor (in percentage). This means that we don't consider a priority
   * level or locality unhealthy until the fraction of healthy hosts
   * multiplied by the overprovisioning factor drops below 100.
   * With the default value 140(1.4), Envoy doesn't consider a priority level
   * or a locality unhealthy until their percentage of healthy hosts drops
   * below 72%. For example:
   *
   * .. code-block:: json
   *
   *  { "overprovisioning_factor": 100 }
   *
   * Read more at :ref:`priority levels <arch_overview_load_balancing_priority_levels>` and
   * :ref:`localities <arch_overview_load_balancing_locality_weighted_lb>`.
   *
   * @generated from field: google.protobuf.UInt32Value overprovisioning_factor = 3;
   */
  overprovisioningFactor?: number;

  /**
   * The max time until which the endpoints from this assignment can be used.
   * If no new assignments are received before this time expires the endpoints
   * are considered stale and should be marked unhealthy.
   * Defaults to 0 which means endpoints never go stale.
   *
   * @generated from field: google.protobuf.Duration endpoint_stale_after = 4;
   */
  endpointStaleAfter?: Duration;

  /**
   * If true, use the :ref:`load balancing weight
   * <envoy_v3_api_field_config.endpoint.v3.LbEndpoint.load_balancing_weight>` of healthy and unhealthy
   * hosts to determine the health of the priority level. If false, use the number of healthy and unhealthy hosts
   * to determine the health of the priority level, or in other words assume each host has a weight of 1 for
   * this calculation.
   *
   * Note: this is not currently implemented for
   * :ref:`locality weighted load balancing <arch_overview_load_balancing_locality_weighted_lb>`.
   *
   * @generated from field: bool weighted_priority_health = 6;
   */
  weightedPriorityHealth: boolean;

  constructor(data?: PartialMessage<ClusterLoadAssignment_Policy>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.endpoint.v3.ClusterLoadAssignment.Policy";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterLoadAssignment_Policy;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterLoadAssignment_Policy;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterLoadAssignment_Policy;

  static equals(a: ClusterLoadAssignment_Policy | PlainMessage<ClusterLoadAssignment_Policy> | undefined, b: ClusterLoadAssignment_Policy | PlainMessage<ClusterLoadAssignment_Policy> | undefined): boolean;
}

/**
 * [#not-implemented-hide:]
 *
 * @generated from message envoy.config.endpoint.v3.ClusterLoadAssignment.Policy.DropOverload
 */
export declare class ClusterLoadAssignment_Policy_DropOverload extends Message<ClusterLoadAssignment_Policy_DropOverload> {
  /**
   * Identifier for the policy specifying the drop.
   *
   * @generated from field: string category = 1;
   */
  category: string;

  /**
   * Percentage of traffic that should be dropped for the category.
   *
   * @generated from field: envoy.type.v3.FractionalPercent drop_percentage = 2;
   */
  dropPercentage?: FractionalPercent;

  constructor(data?: PartialMessage<ClusterLoadAssignment_Policy_DropOverload>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.endpoint.v3.ClusterLoadAssignment.Policy.DropOverload";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterLoadAssignment_Policy_DropOverload;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterLoadAssignment_Policy_DropOverload;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterLoadAssignment_Policy_DropOverload;

  static equals(a: ClusterLoadAssignment_Policy_DropOverload | PlainMessage<ClusterLoadAssignment_Policy_DropOverload> | undefined, b: ClusterLoadAssignment_Policy_DropOverload | PlainMessage<ClusterLoadAssignment_Policy_DropOverload> | undefined): boolean;
}
