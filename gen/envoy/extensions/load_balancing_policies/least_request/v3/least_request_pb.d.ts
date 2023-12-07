// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/load_balancing_policies/least_request/v3/least_request.proto (package envoy.extensions.load_balancing_policies.least_request.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { RuntimeDouble } from "../../../../config/core/v3/base_pb.js";
import type { LocalityLbConfig, SlowStartConfig } from "../../common/v3/common_pb.js";

/**
 * This configuration allows the built-in LEAST_REQUEST LB policy to be configured via the LB policy
 * extension point. See the :ref:`load balancing architecture overview
 * <arch_overview_load_balancing_types>` for more information.
 *
 * @generated from message envoy.extensions.load_balancing_policies.least_request.v3.LeastRequest
 */
export declare class LeastRequest extends Message<LeastRequest> {
  /**
   * The number of random healthy hosts from which the host with the fewest active requests will
   * be chosen. Defaults to 2 so that we perform two-choice selection if the field is not set.
   *
   * @generated from field: google.protobuf.UInt32Value choice_count = 1;
   */
  choiceCount?: number;

  /**
   * The following formula is used to calculate the dynamic weights when hosts have different load
   * balancing weights:
   *
   * `weight = load_balancing_weight / (active_requests + 1)^active_request_bias`
   *
   * The larger the active request bias is, the more aggressively active requests will lower the
   * effective weight when all host weights are not equal.
   *
   * `active_request_bias` must be greater than or equal to 0.0.
   *
   * When `active_request_bias == 0.0` the Least Request Load Balancer doesn't consider the number
   * of active requests at the time it picks a host and behaves like the Round Robin Load
   * Balancer.
   *
   * When `active_request_bias > 0.0` the Least Request Load Balancer scales the load balancing
   * weight by the number of active requests at the time it does a pick.
   *
   * The value is cached for performance reasons and refreshed whenever one of the Load Balancer's
   * host sets changes, e.g., whenever there is a host membership update or a host load balancing
   * weight change.
   *
   * .. note::
   *   This setting only takes effect if all host weights are not equal.
   *
   * @generated from field: envoy.config.core.v3.RuntimeDouble active_request_bias = 2;
   */
  activeRequestBias?: RuntimeDouble;

  /**
   * Configuration for slow start mode.
   * If this configuration is not set, slow start will not be not enabled.
   *
   * @generated from field: envoy.extensions.load_balancing_policies.common.v3.SlowStartConfig slow_start_config = 3;
   */
  slowStartConfig?: SlowStartConfig;

  /**
   * Configuration for local zone aware load balancing or locality weighted load balancing.
   *
   * @generated from field: envoy.extensions.load_balancing_policies.common.v3.LocalityLbConfig locality_lb_config = 4;
   */
  localityLbConfig?: LocalityLbConfig;

  constructor(data?: PartialMessage<LeastRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.load_balancing_policies.least_request.v3.LeastRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeastRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeastRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeastRequest;

  static equals(a: LeastRequest | PlainMessage<LeastRequest> | undefined, b: LeastRequest | PlainMessage<LeastRequest> | undefined): boolean;
}

