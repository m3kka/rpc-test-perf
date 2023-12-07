// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/http/health_check/v3/health_check.proto (package envoy.extensions.filters.http.health_check.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, Duration, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Percent } from "../../../../../type/v3/percent_pb.js";
import type { HeaderMatcher } from "../../../../../config/route/v3/route_components_pb.js";

/**
 * [#next-free-field: 6]
 *
 * @generated from message envoy.extensions.filters.http.health_check.v3.HealthCheck
 */
export declare class HealthCheck extends Message<HealthCheck> {
  /**
   * Specifies whether the filter operates in pass through mode or not.
   *
   * @generated from field: google.protobuf.BoolValue pass_through_mode = 1;
   */
  passThroughMode?: boolean;

  /**
   * If operating in pass through mode, the amount of time in milliseconds
   * that the filter should cache the upstream response.
   *
   * @generated from field: google.protobuf.Duration cache_time = 3;
   */
  cacheTime?: Duration;

  /**
   * If operating in non-pass-through mode, specifies a set of upstream cluster
   * names and the minimum percentage of servers in each of those clusters that
   * must be healthy or degraded in order for the filter to return a 200.
   *
   * .. note::
   *
   *    This value is interpreted as an integer by truncating, so 12.50% will be calculated
   *    as if it were 12%.
   *
   * @generated from field: map<string, envoy.type.v3.Percent> cluster_min_healthy_percentages = 4;
   */
  clusterMinHealthyPercentages: { [key: string]: Percent };

  /**
   * Specifies a set of health check request headers to match on. The health check filter will
   * check a request’s headers against all the specified headers. To specify the health check
   * endpoint, set the ``:path`` header to match on.
   *
   * @generated from field: repeated envoy.config.route.v3.HeaderMatcher headers = 5;
   */
  headers: HeaderMatcher[];

  constructor(data?: PartialMessage<HealthCheck>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.http.health_check.v3.HealthCheck";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HealthCheck;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HealthCheck;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HealthCheck;

  static equals(a: HealthCheck | PlainMessage<HealthCheck> | undefined, b: HealthCheck | PlainMessage<HealthCheck> | undefined): boolean;
}

