// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/filter/network/redis_proxy/v2/redis_proxy.proto (package envoy.config.filter.network.redis_proxy.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, Duration, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { DataSource, RuntimeFractionalPercent } from "../../../../../api/v2/core/base_pb.js";

/**
 * [#next-free-field: 7]
 *
 * @generated from message envoy.config.filter.network.redis_proxy.v2.RedisProxy
 */
export declare class RedisProxy extends Message<RedisProxy> {
  /**
   * The prefix to use when emitting :ref:`statistics <config_network_filters_redis_proxy_stats>`.
   *
   * @generated from field: string stat_prefix = 1;
   */
  statPrefix: string;

  /**
   * Name of cluster from cluster manager. See the :ref:`configuration section
   * <arch_overview_redis_configuration>` of the architecture overview for recommendations on
   * configuring the backing cluster.
   *
   * .. attention::
   *
   *   This field is deprecated. Use a :ref:`catch_all
   *   route<envoy_api_field_config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.catch_all_route>`
   *   instead.
   *
   * @generated from field: string cluster = 2 [deprecated = true];
   * @deprecated
   */
  cluster: string;

  /**
   * Network settings for the connection pool to the upstream clusters.
   *
   * @generated from field: envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings settings = 3;
   */
  settings?: RedisProxy_ConnPoolSettings;

  /**
   * Indicates that latency stat should be computed in microseconds. By default it is computed in
   * milliseconds.
   *
   * @generated from field: bool latency_in_micros = 4;
   */
  latencyInMicros: boolean;

  /**
   * List of **unique** prefixes used to separate keys from different workloads to different
   * clusters. Envoy will always favor the longest match first in case of overlap. A catch-all
   * cluster can be used to forward commands when there is no match. Time complexity of the
   * lookups are in O(min(longest key prefix, key length)).
   *
   * Example:
   *
   * .. code-block:: yaml
   *
   *    prefix_routes:
   *      routes:
   *        - prefix: "ab"
   *          cluster: "cluster_a"
   *        - prefix: "abc"
   *          cluster: "cluster_b"
   *
   * When using the above routes, the following prefixes would be sent to:
   *
   * * ``get abc:users`` would retrieve the key 'abc:users' from cluster_b.
   * * ``get ab:users`` would retrieve the key 'ab:users' from cluster_a.
   * * ``get z:users`` would return a NoUpstreamHost error. A :ref:`catch-all
   *   route<envoy_api_field_config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.catch_all_route>`
   *   would have retrieved the key from that cluster instead.
   *
   * See the :ref:`configuration section
   * <arch_overview_redis_configuration>` of the architecture overview for recommendations on
   * configuring the backing clusters.
   *
   * @generated from field: envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes prefix_routes = 5;
   */
  prefixRoutes?: RedisProxy_PrefixRoutes;

  /**
   * Authenticate Redis client connections locally by forcing downstream clients to issue a `Redis
   * AUTH command <https://redis.io/commands/auth>`_ with this password before enabling any other
   * command. If an AUTH command's password matches this password, an "OK" response will be returned
   * to the client. If the AUTH command password does not match this password, then an "ERR invalid
   * password" error will be returned. If any other command is received before AUTH when this
   * password is set, then a "NOAUTH Authentication required." error response will be sent to the
   * client. If an AUTH command is received when the password is not set, then an "ERR Client sent
   * AUTH, but no password is set" error will be returned.
   *
   * @generated from field: envoy.api.v2.core.DataSource downstream_auth_password = 6;
   */
  downstreamAuthPassword?: DataSource;

  constructor(data?: PartialMessage<RedisProxy>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.filter.network.redis_proxy.v2.RedisProxy";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RedisProxy;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RedisProxy;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RedisProxy;

  static equals(a: RedisProxy | PlainMessage<RedisProxy> | undefined, b: RedisProxy | PlainMessage<RedisProxy> | undefined): boolean;
}

/**
 * Redis connection pool settings.
 * [#next-free-field: 9]
 *
 * @generated from message envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings
 */
export declare class RedisProxy_ConnPoolSettings extends Message<RedisProxy_ConnPoolSettings> {
  /**
   * Per-operation timeout in milliseconds. The timer starts when the first
   * command of a pipeline is written to the backend connection. Each response received from Redis
   * resets the timer since it signifies that the next command is being processed by the backend.
   * The only exception to this behavior is when a connection to a backend is not yet established.
   * In that case, the connect timeout on the cluster will govern the timeout until the connection
   * is ready.
   *
   * @generated from field: google.protobuf.Duration op_timeout = 1;
   */
  opTimeout?: Duration;

  /**
   * Use hash tagging on every redis key to guarantee that keys with the same hash tag will be
   * forwarded to the same upstream. The hash key used for determining the upstream in a
   * consistent hash ring configuration will be computed from the hash tagged key instead of the
   * whole key. The algorithm used to compute the hash tag is identical to the `redis-cluster
   * implementation <https://redis.io/topics/cluster-spec#keys-hash-tags>`_.
   *
   * Examples:
   *
   * * '{user1000}.following' and '{user1000}.followers' **will** be sent to the same upstream
   * * '{user1000}.following' and '{user1001}.following' **might** be sent to the same upstream
   *
   * @generated from field: bool enable_hashtagging = 2;
   */
  enableHashtagging: boolean;

  /**
   * Accept `moved and ask redirection
   * <https://redis.io/topics/cluster-spec#redirection-and-resharding>`_ errors from upstream
   * redis servers, and retry commands to the specified target server. The target server does not
   * need to be known to the cluster manager. If the command cannot be redirected, then the
   * original error is passed downstream unchanged. By default, this support is not enabled.
   *
   * @generated from field: bool enable_redirection = 3;
   */
  enableRedirection: boolean;

  /**
   * Maximum size of encoded request buffer before flush is triggered and encoded requests
   * are sent upstream. If this is unset, the buffer flushes whenever it receives data
   * and performs no batching.
   * This feature makes it possible for multiple clients to send requests to Envoy and have
   * them batched- for example if one is running several worker processes, each with its own
   * Redis connection. There is no benefit to using this with a single downstream process.
   * Recommended size (if enabled) is 1024 bytes.
   *
   * @generated from field: uint32 max_buffer_size_before_flush = 4;
   */
  maxBufferSizeBeforeFlush: number;

  /**
   * The encoded request buffer is flushed N milliseconds after the first request has been
   * encoded, unless the buffer size has already exceeded `max_buffer_size_before_flush`.
   * If `max_buffer_size_before_flush` is not set, this flush timer is not used. Otherwise,
   * the timer should be set according to the number of clients, overall request rate and
   * desired maximum latency for a single command. For example, if there are many requests
   * being batched together at a high rate, the buffer will likely be filled before the timer
   * fires. Alternatively, if the request rate is lower the buffer will not be filled as often
   * before the timer fires.
   * If `max_buffer_size_before_flush` is set, but `buffer_flush_timeout` is not, the latter
   * defaults to 3ms.
   *
   * @generated from field: google.protobuf.Duration buffer_flush_timeout = 5;
   */
  bufferFlushTimeout?: Duration;

  /**
   * `max_upstream_unknown_connections` controls how many upstream connections to unknown hosts
   * can be created at any given time by any given worker thread (see `enable_redirection` for
   * more details). If the host is unknown and a connection cannot be created due to enforcing
   * this limit, then redirection will fail and the original redirection error will be passed
   * downstream unchanged. This limit defaults to 100.
   *
   * @generated from field: google.protobuf.UInt32Value max_upstream_unknown_connections = 6;
   */
  maxUpstreamUnknownConnections?: number;

  /**
   * Enable per-command statistics per upstream cluster, in addition to the filter level aggregate
   * count.
   *
   * @generated from field: bool enable_command_stats = 8;
   */
  enableCommandStats: boolean;

  /**
   * Read policy. The default is to read from the primary.
   *
   * @generated from field: envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings.ReadPolicy read_policy = 7;
   */
  readPolicy: RedisProxy_ConnPoolSettings_ReadPolicy;

  constructor(data?: PartialMessage<RedisProxy_ConnPoolSettings>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RedisProxy_ConnPoolSettings;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RedisProxy_ConnPoolSettings;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RedisProxy_ConnPoolSettings;

  static equals(a: RedisProxy_ConnPoolSettings | PlainMessage<RedisProxy_ConnPoolSettings> | undefined, b: RedisProxy_ConnPoolSettings | PlainMessage<RedisProxy_ConnPoolSettings> | undefined): boolean;
}

/**
 * ReadPolicy controls how Envoy routes read commands to Redis nodes. This is currently
 * supported for Redis Cluster. All ReadPolicy settings except MASTER may return stale data
 * because replication is asynchronous and requires some delay. You need to ensure that your
 * application can tolerate stale data.
 *
 * @generated from enum envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings.ReadPolicy
 */
export declare enum RedisProxy_ConnPoolSettings_ReadPolicy {
  /**
   * Default mode. Read from the current primary node.
   *
   * @generated from enum value: MASTER = 0;
   */
  MASTER = 0,

  /**
   * Read from the primary, but if it is unavailable, read from replica nodes.
   *
   * @generated from enum value: PREFER_MASTER = 1;
   */
  PREFER_MASTER = 1,

  /**
   * Read from replica nodes. If multiple replica nodes are present within a shard, a random
   * node is selected. Healthy nodes have precedent over unhealthy nodes.
   *
   * @generated from enum value: REPLICA = 2;
   */
  REPLICA = 2,

  /**
   * Read from the replica nodes (similar to REPLICA), but if all replicas are unavailable (not
   * present or unhealthy), read from the primary.
   *
   * @generated from enum value: PREFER_REPLICA = 3;
   */
  PREFER_REPLICA = 3,

  /**
   * Read from any node of the cluster. A random node is selected among the primary and
   * replicas, healthy nodes have precedent over unhealthy nodes.
   *
   * @generated from enum value: ANY = 4;
   */
  ANY = 4,
}

/**
 * @generated from message envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes
 */
export declare class RedisProxy_PrefixRoutes extends Message<RedisProxy_PrefixRoutes> {
  /**
   * List of prefix routes.
   *
   * @generated from field: repeated envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route routes = 1;
   */
  routes: RedisProxy_PrefixRoutes_Route[];

  /**
   * Indicates that prefix matching should be case insensitive.
   *
   * @generated from field: bool case_insensitive = 2;
   */
  caseInsensitive: boolean;

  /**
   * Optional catch-all route to forward commands that doesn't match any of the routes. The
   * catch-all route becomes required when no routes are specified.
   * .. attention::
   *
   *   This field is deprecated. Use a :ref:`catch_all
   *   route<envoy_api_field_config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.catch_all_route>`
   *   instead.
   *
   * @generated from field: string catch_all_cluster = 3 [deprecated = true];
   * @deprecated
   */
  catchAllCluster: string;

  /**
   * Optional catch-all route to forward commands that doesn't match any of the routes. The
   * catch-all route becomes required when no routes are specified.
   *
   * @generated from field: envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route catch_all_route = 4;
   */
  catchAllRoute?: RedisProxy_PrefixRoutes_Route;

  constructor(data?: PartialMessage<RedisProxy_PrefixRoutes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RedisProxy_PrefixRoutes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RedisProxy_PrefixRoutes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RedisProxy_PrefixRoutes;

  static equals(a: RedisProxy_PrefixRoutes | PlainMessage<RedisProxy_PrefixRoutes> | undefined, b: RedisProxy_PrefixRoutes | PlainMessage<RedisProxy_PrefixRoutes> | undefined): boolean;
}

/**
 * @generated from message envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route
 */
export declare class RedisProxy_PrefixRoutes_Route extends Message<RedisProxy_PrefixRoutes_Route> {
  /**
   * String prefix that must match the beginning of the keys. Envoy will always favor the
   * longest match.
   *
   * @generated from field: string prefix = 1;
   */
  prefix: string;

  /**
   * Indicates if the prefix needs to be removed from the key when forwarded.
   *
   * @generated from field: bool remove_prefix = 2;
   */
  removePrefix: boolean;

  /**
   * Upstream cluster to forward the command to.
   *
   * @generated from field: string cluster = 3;
   */
  cluster: string;

  /**
   * Indicates that the route has a request mirroring policy.
   *
   * @generated from field: repeated envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route.RequestMirrorPolicy request_mirror_policy = 4;
   */
  requestMirrorPolicy: RedisProxy_PrefixRoutes_Route_RequestMirrorPolicy[];

  constructor(data?: PartialMessage<RedisProxy_PrefixRoutes_Route>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RedisProxy_PrefixRoutes_Route;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RedisProxy_PrefixRoutes_Route;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RedisProxy_PrefixRoutes_Route;

  static equals(a: RedisProxy_PrefixRoutes_Route | PlainMessage<RedisProxy_PrefixRoutes_Route> | undefined, b: RedisProxy_PrefixRoutes_Route | PlainMessage<RedisProxy_PrefixRoutes_Route> | undefined): boolean;
}

/**
 * The router is capable of shadowing traffic from one cluster to another. The current
 * implementation is "fire and forget," meaning Envoy will not wait for the shadow cluster to
 * respond before returning the response from the primary cluster. All normal statistics are
 * collected for the shadow cluster making this feature useful for testing.
 *
 * @generated from message envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route.RequestMirrorPolicy
 */
export declare class RedisProxy_PrefixRoutes_Route_RequestMirrorPolicy extends Message<RedisProxy_PrefixRoutes_Route_RequestMirrorPolicy> {
  /**
   * Specifies the cluster that requests will be mirrored to. The cluster must
   * exist in the cluster manager configuration.
   *
   * @generated from field: string cluster = 1;
   */
  cluster: string;

  /**
   * If not specified or the runtime key is not present, all requests to the target cluster
   * will be mirrored.
   *
   * If specified, Envoy will lookup the runtime key to get the percentage of requests to the
   * mirror.
   *
   * @generated from field: envoy.api.v2.core.RuntimeFractionalPercent runtime_fraction = 2;
   */
  runtimeFraction?: RuntimeFractionalPercent;

  /**
   * Set this to TRUE to only mirror write commands, this is effectively replicating the
   * writes in a "fire and forget" manner.
   *
   * @generated from field: bool exclude_read_commands = 3;
   */
  excludeReadCommands: boolean;

  constructor(data?: PartialMessage<RedisProxy_PrefixRoutes_Route_RequestMirrorPolicy>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route.RequestMirrorPolicy";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RedisProxy_PrefixRoutes_Route_RequestMirrorPolicy;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RedisProxy_PrefixRoutes_Route_RequestMirrorPolicy;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RedisProxy_PrefixRoutes_Route_RequestMirrorPolicy;

  static equals(a: RedisProxy_PrefixRoutes_Route_RequestMirrorPolicy | PlainMessage<RedisProxy_PrefixRoutes_Route_RequestMirrorPolicy> | undefined, b: RedisProxy_PrefixRoutes_Route_RequestMirrorPolicy | PlainMessage<RedisProxy_PrefixRoutes_Route_RequestMirrorPolicy> | undefined): boolean;
}

/**
 * RedisProtocolOptions specifies Redis upstream protocol options. This object is used in
 * :ref:`typed_extension_protocol_options<envoy_api_field_Cluster.typed_extension_protocol_options>`,
 * keyed by the name `envoy.filters.network.redis_proxy`.
 *
 * @generated from message envoy.config.filter.network.redis_proxy.v2.RedisProtocolOptions
 */
export declare class RedisProtocolOptions extends Message<RedisProtocolOptions> {
  /**
   * Upstream server password as defined by the `requirepass` directive
   * <https://redis.io/topics/config>`_ in the server's configuration file.
   *
   * @generated from field: envoy.api.v2.core.DataSource auth_password = 1;
   */
  authPassword?: DataSource;

  constructor(data?: PartialMessage<RedisProtocolOptions>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.filter.network.redis_proxy.v2.RedisProtocolOptions";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RedisProtocolOptions;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RedisProtocolOptions;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RedisProtocolOptions;

  static equals(a: RedisProtocolOptions | PlainMessage<RedisProtocolOptions> | undefined, b: RedisProtocolOptions | PlainMessage<RedisProtocolOptions> | undefined): boolean;
}
