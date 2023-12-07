// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/clusters/redis/v3/redis_cluster.proto (package envoy.extensions.clusters.redis.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, Duration, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * [#next-free-field: 7]
 *
 * @generated from message envoy.extensions.clusters.redis.v3.RedisClusterConfig
 */
export declare class RedisClusterConfig extends Message<RedisClusterConfig> {
  /**
   * Interval between successive topology refresh requests. If not set, this defaults to 5s.
   *
   * @generated from field: google.protobuf.Duration cluster_refresh_rate = 1;
   */
  clusterRefreshRate?: Duration;

  /**
   * Timeout for topology refresh request. If not set, this defaults to 3s.
   *
   * @generated from field: google.protobuf.Duration cluster_refresh_timeout = 2;
   */
  clusterRefreshTimeout?: Duration;

  /**
   * The minimum interval that must pass after triggering a topology refresh request before a new
   * request can possibly be triggered again. Any errors received during one of these
   * time intervals are ignored. If not set, this defaults to 5s.
   *
   * @generated from field: google.protobuf.Duration redirect_refresh_interval = 3;
   */
  redirectRefreshInterval?: Duration;

  /**
   * The number of redirection errors that must be received before
   * triggering a topology refresh request. If not set, this defaults to 5.
   * If this is set to 0, topology refresh after redirect is disabled.
   *
   * @generated from field: google.protobuf.UInt32Value redirect_refresh_threshold = 4;
   */
  redirectRefreshThreshold?: number;

  /**
   * The number of failures that must be received before triggering a topology refresh request.
   * If not set, this defaults to 0, which disables the topology refresh due to failure.
   *
   * @generated from field: uint32 failure_refresh_threshold = 5;
   */
  failureRefreshThreshold: number;

  /**
   * The number of hosts became degraded or unhealthy before triggering a topology refresh request.
   * If not set, this defaults to 0, which disables the topology refresh due to degraded or
   * unhealthy host.
   *
   * @generated from field: uint32 host_degraded_refresh_threshold = 6;
   */
  hostDegradedRefreshThreshold: number;

  constructor(data?: PartialMessage<RedisClusterConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.clusters.redis.v3.RedisClusterConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RedisClusterConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RedisClusterConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RedisClusterConfig;

  static equals(a: RedisClusterConfig | PlainMessage<RedisClusterConfig> | undefined, b: RedisClusterConfig | PlainMessage<RedisClusterConfig> | undefined): boolean;
}
