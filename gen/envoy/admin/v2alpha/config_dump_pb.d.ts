// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/admin/v2alpha/config_dump.proto (package envoy.admin.v2alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { Any, BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Bootstrap } from "../../config/bootstrap/v2/bootstrap_pb.js";

/**
 * The :ref:`/config_dump <operations_admin_interface_config_dump>` admin endpoint uses this wrapper
 * message to maintain and serve arbitrary configuration information from any component in Envoy.
 *
 * @generated from message envoy.admin.v2alpha.ConfigDump
 */
export declare class ConfigDump extends Message<ConfigDump> {
  /**
   * This list is serialized and dumped in its entirety at the
   * :ref:`/config_dump <operations_admin_interface_config_dump>` endpoint.
   *
   * The following configurations are currently supported and will be dumped in the order given
   * below:
   *
   * * *bootstrap*: :ref:`BootstrapConfigDump <envoy_api_msg_admin.v2alpha.BootstrapConfigDump>`
   * * *clusters*: :ref:`ClustersConfigDump <envoy_api_msg_admin.v2alpha.ClustersConfigDump>`
   * * *listeners*: :ref:`ListenersConfigDump <envoy_api_msg_admin.v2alpha.ListenersConfigDump>`
   * * *routes*:  :ref:`RoutesConfigDump <envoy_api_msg_admin.v2alpha.RoutesConfigDump>`
   *
   * You can filter output with the resource and mask query parameters.
   * See :ref:`/config_dump?resource={} <operations_admin_interface_config_dump_by_resource>`,
   * :ref:`/config_dump?mask={} <operations_admin_interface_config_dump_by_mask>`,
   * or :ref:`/config_dump?resource={},mask={}
   * <operations_admin_interface_config_dump_by_resource_and_mask>` for more information.
   *
   * @generated from field: repeated google.protobuf.Any configs = 1;
   */
  configs: Any[];

  constructor(data?: PartialMessage<ConfigDump>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v2alpha.ConfigDump";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConfigDump;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConfigDump;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConfigDump;

  static equals(a: ConfigDump | PlainMessage<ConfigDump> | undefined, b: ConfigDump | PlainMessage<ConfigDump> | undefined): boolean;
}

/**
 * @generated from message envoy.admin.v2alpha.UpdateFailureState
 */
export declare class UpdateFailureState extends Message<UpdateFailureState> {
  /**
   * What the component configuration would have been if the update had succeeded.
   *
   * @generated from field: google.protobuf.Any failed_configuration = 1;
   */
  failedConfiguration?: Any;

  /**
   * Time of the latest failed update attempt.
   *
   * @generated from field: google.protobuf.Timestamp last_update_attempt = 2;
   */
  lastUpdateAttempt?: Timestamp;

  /**
   * Details about the last failed update attempt.
   *
   * @generated from field: string details = 3;
   */
  details: string;

  constructor(data?: PartialMessage<UpdateFailureState>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v2alpha.UpdateFailureState";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateFailureState;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateFailureState;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateFailureState;

  static equals(a: UpdateFailureState | PlainMessage<UpdateFailureState> | undefined, b: UpdateFailureState | PlainMessage<UpdateFailureState> | undefined): boolean;
}

/**
 * This message describes the bootstrap configuration that Envoy was started with. This includes
 * any CLI overrides that were merged. Bootstrap configuration information can be used to recreate
 * the static portions of an Envoy configuration by reusing the output as the bootstrap
 * configuration for another Envoy.
 *
 * @generated from message envoy.admin.v2alpha.BootstrapConfigDump
 */
export declare class BootstrapConfigDump extends Message<BootstrapConfigDump> {
  /**
   * @generated from field: envoy.config.bootstrap.v2.Bootstrap bootstrap = 1;
   */
  bootstrap?: Bootstrap;

  /**
   * The timestamp when the BootstrapConfig was last updated.
   *
   * @generated from field: google.protobuf.Timestamp last_updated = 2;
   */
  lastUpdated?: Timestamp;

  constructor(data?: PartialMessage<BootstrapConfigDump>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v2alpha.BootstrapConfigDump";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BootstrapConfigDump;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BootstrapConfigDump;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BootstrapConfigDump;

  static equals(a: BootstrapConfigDump | PlainMessage<BootstrapConfigDump> | undefined, b: BootstrapConfigDump | PlainMessage<BootstrapConfigDump> | undefined): boolean;
}

/**
 * Envoy's listener manager fills this message with all currently known listeners. Listener
 * configuration information can be used to recreate an Envoy configuration by populating all
 * listeners as static listeners or by returning them in a LDS response.
 *
 * @generated from message envoy.admin.v2alpha.ListenersConfigDump
 */
export declare class ListenersConfigDump extends Message<ListenersConfigDump> {
  /**
   * This is the :ref:`version_info <envoy_api_field_DiscoveryResponse.version_info>` in the
   * last processed LDS discovery response. If there are only static bootstrap listeners, this field
   * will be "".
   *
   * @generated from field: string version_info = 1;
   */
  versionInfo: string;

  /**
   * The statically loaded listener configs.
   *
   * @generated from field: repeated envoy.admin.v2alpha.ListenersConfigDump.StaticListener static_listeners = 2;
   */
  staticListeners: ListenersConfigDump_StaticListener[];

  /**
   * State for any warming, active, or draining listeners.
   *
   * @generated from field: repeated envoy.admin.v2alpha.ListenersConfigDump.DynamicListener dynamic_listeners = 3;
   */
  dynamicListeners: ListenersConfigDump_DynamicListener[];

  constructor(data?: PartialMessage<ListenersConfigDump>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v2alpha.ListenersConfigDump";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListenersConfigDump;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListenersConfigDump;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListenersConfigDump;

  static equals(a: ListenersConfigDump | PlainMessage<ListenersConfigDump> | undefined, b: ListenersConfigDump | PlainMessage<ListenersConfigDump> | undefined): boolean;
}

/**
 * Describes a statically loaded listener.
 *
 * @generated from message envoy.admin.v2alpha.ListenersConfigDump.StaticListener
 */
export declare class ListenersConfigDump_StaticListener extends Message<ListenersConfigDump_StaticListener> {
  /**
   * The listener config.
   *
   * @generated from field: google.protobuf.Any listener = 1;
   */
  listener?: Any;

  /**
   * The timestamp when the Listener was last successfully updated.
   *
   * @generated from field: google.protobuf.Timestamp last_updated = 2;
   */
  lastUpdated?: Timestamp;

  constructor(data?: PartialMessage<ListenersConfigDump_StaticListener>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v2alpha.ListenersConfigDump.StaticListener";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListenersConfigDump_StaticListener;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListenersConfigDump_StaticListener;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListenersConfigDump_StaticListener;

  static equals(a: ListenersConfigDump_StaticListener | PlainMessage<ListenersConfigDump_StaticListener> | undefined, b: ListenersConfigDump_StaticListener | PlainMessage<ListenersConfigDump_StaticListener> | undefined): boolean;
}

/**
 * @generated from message envoy.admin.v2alpha.ListenersConfigDump.DynamicListenerState
 */
export declare class ListenersConfigDump_DynamicListenerState extends Message<ListenersConfigDump_DynamicListenerState> {
  /**
   * This is the per-resource version information. This version is currently taken from the
   * :ref:`version_info <envoy_api_field_DiscoveryResponse.version_info>` field at the time
   * that the listener was loaded. In the future, discrete per-listener versions may be supported
   * by the API.
   *
   * @generated from field: string version_info = 1;
   */
  versionInfo: string;

  /**
   * The listener config.
   *
   * @generated from field: google.protobuf.Any listener = 2;
   */
  listener?: Any;

  /**
   * The timestamp when the Listener was last successfully updated.
   *
   * @generated from field: google.protobuf.Timestamp last_updated = 3;
   */
  lastUpdated?: Timestamp;

  constructor(data?: PartialMessage<ListenersConfigDump_DynamicListenerState>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v2alpha.ListenersConfigDump.DynamicListenerState";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListenersConfigDump_DynamicListenerState;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListenersConfigDump_DynamicListenerState;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListenersConfigDump_DynamicListenerState;

  static equals(a: ListenersConfigDump_DynamicListenerState | PlainMessage<ListenersConfigDump_DynamicListenerState> | undefined, b: ListenersConfigDump_DynamicListenerState | PlainMessage<ListenersConfigDump_DynamicListenerState> | undefined): boolean;
}

/**
 * Describes a dynamically loaded listener via the LDS API.
 * [#next-free-field: 6]
 *
 * @generated from message envoy.admin.v2alpha.ListenersConfigDump.DynamicListener
 */
export declare class ListenersConfigDump_DynamicListener extends Message<ListenersConfigDump_DynamicListener> {
  /**
   * The name or unique id of this listener, pulled from the DynamicListenerState config.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The listener state for any active listener by this name.
   * These are listeners that are available to service data plane traffic.
   *
   * @generated from field: envoy.admin.v2alpha.ListenersConfigDump.DynamicListenerState active_state = 2;
   */
  activeState?: ListenersConfigDump_DynamicListenerState;

  /**
   * The listener state for any warming listener by this name.
   * These are listeners that are currently undergoing warming in preparation to service data
   * plane traffic. Note that if attempting to recreate an Envoy configuration from a
   * configuration dump, the warming listeners should generally be discarded.
   *
   * @generated from field: envoy.admin.v2alpha.ListenersConfigDump.DynamicListenerState warming_state = 3;
   */
  warmingState?: ListenersConfigDump_DynamicListenerState;

  /**
   * The listener state for any draining listener by this name.
   * These are listeners that are currently undergoing draining in preparation to stop servicing
   * data plane traffic. Note that if attempting to recreate an Envoy configuration from a
   * configuration dump, the draining listeners should generally be discarded.
   *
   * @generated from field: envoy.admin.v2alpha.ListenersConfigDump.DynamicListenerState draining_state = 4;
   */
  drainingState?: ListenersConfigDump_DynamicListenerState;

  /**
   * Set if the last update failed, cleared after the next successful update.
   *
   * @generated from field: envoy.admin.v2alpha.UpdateFailureState error_state = 5;
   */
  errorState?: UpdateFailureState;

  constructor(data?: PartialMessage<ListenersConfigDump_DynamicListener>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v2alpha.ListenersConfigDump.DynamicListener";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListenersConfigDump_DynamicListener;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListenersConfigDump_DynamicListener;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListenersConfigDump_DynamicListener;

  static equals(a: ListenersConfigDump_DynamicListener | PlainMessage<ListenersConfigDump_DynamicListener> | undefined, b: ListenersConfigDump_DynamicListener | PlainMessage<ListenersConfigDump_DynamicListener> | undefined): boolean;
}

/**
 * Envoy's cluster manager fills this message with all currently known clusters. Cluster
 * configuration information can be used to recreate an Envoy configuration by populating all
 * clusters as static clusters or by returning them in a CDS response.
 *
 * @generated from message envoy.admin.v2alpha.ClustersConfigDump
 */
export declare class ClustersConfigDump extends Message<ClustersConfigDump> {
  /**
   * This is the :ref:`version_info <envoy_api_field_DiscoveryResponse.version_info>` in the
   * last processed CDS discovery response. If there are only static bootstrap clusters, this field
   * will be "".
   *
   * @generated from field: string version_info = 1;
   */
  versionInfo: string;

  /**
   * The statically loaded cluster configs.
   *
   * @generated from field: repeated envoy.admin.v2alpha.ClustersConfigDump.StaticCluster static_clusters = 2;
   */
  staticClusters: ClustersConfigDump_StaticCluster[];

  /**
   * The dynamically loaded active clusters. These are clusters that are available to service
   * data plane traffic.
   *
   * @generated from field: repeated envoy.admin.v2alpha.ClustersConfigDump.DynamicCluster dynamic_active_clusters = 3;
   */
  dynamicActiveClusters: ClustersConfigDump_DynamicCluster[];

  /**
   * The dynamically loaded warming clusters. These are clusters that are currently undergoing
   * warming in preparation to service data plane traffic. Note that if attempting to recreate an
   * Envoy configuration from a configuration dump, the warming clusters should generally be
   * discarded.
   *
   * @generated from field: repeated envoy.admin.v2alpha.ClustersConfigDump.DynamicCluster dynamic_warming_clusters = 4;
   */
  dynamicWarmingClusters: ClustersConfigDump_DynamicCluster[];

  constructor(data?: PartialMessage<ClustersConfigDump>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v2alpha.ClustersConfigDump";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClustersConfigDump;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClustersConfigDump;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClustersConfigDump;

  static equals(a: ClustersConfigDump | PlainMessage<ClustersConfigDump> | undefined, b: ClustersConfigDump | PlainMessage<ClustersConfigDump> | undefined): boolean;
}

/**
 * Describes a statically loaded cluster.
 *
 * @generated from message envoy.admin.v2alpha.ClustersConfigDump.StaticCluster
 */
export declare class ClustersConfigDump_StaticCluster extends Message<ClustersConfigDump_StaticCluster> {
  /**
   * The cluster config.
   *
   * @generated from field: google.protobuf.Any cluster = 1;
   */
  cluster?: Any;

  /**
   * The timestamp when the Cluster was last updated.
   *
   * @generated from field: google.protobuf.Timestamp last_updated = 2;
   */
  lastUpdated?: Timestamp;

  constructor(data?: PartialMessage<ClustersConfigDump_StaticCluster>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v2alpha.ClustersConfigDump.StaticCluster";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClustersConfigDump_StaticCluster;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClustersConfigDump_StaticCluster;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClustersConfigDump_StaticCluster;

  static equals(a: ClustersConfigDump_StaticCluster | PlainMessage<ClustersConfigDump_StaticCluster> | undefined, b: ClustersConfigDump_StaticCluster | PlainMessage<ClustersConfigDump_StaticCluster> | undefined): boolean;
}

/**
 * Describes a dynamically loaded cluster via the CDS API.
 *
 * @generated from message envoy.admin.v2alpha.ClustersConfigDump.DynamicCluster
 */
export declare class ClustersConfigDump_DynamicCluster extends Message<ClustersConfigDump_DynamicCluster> {
  /**
   * This is the per-resource version information. This version is currently taken from the
   * :ref:`version_info <envoy_api_field_DiscoveryResponse.version_info>` field at the time
   * that the cluster was loaded. In the future, discrete per-cluster versions may be supported by
   * the API.
   *
   * @generated from field: string version_info = 1;
   */
  versionInfo: string;

  /**
   * The cluster config.
   *
   * @generated from field: google.protobuf.Any cluster = 2;
   */
  cluster?: Any;

  /**
   * The timestamp when the Cluster was last updated.
   *
   * @generated from field: google.protobuf.Timestamp last_updated = 3;
   */
  lastUpdated?: Timestamp;

  constructor(data?: PartialMessage<ClustersConfigDump_DynamicCluster>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v2alpha.ClustersConfigDump.DynamicCluster";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClustersConfigDump_DynamicCluster;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClustersConfigDump_DynamicCluster;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClustersConfigDump_DynamicCluster;

  static equals(a: ClustersConfigDump_DynamicCluster | PlainMessage<ClustersConfigDump_DynamicCluster> | undefined, b: ClustersConfigDump_DynamicCluster | PlainMessage<ClustersConfigDump_DynamicCluster> | undefined): boolean;
}

/**
 * Envoy's RDS implementation fills this message with all currently loaded routes, as described by
 * their RouteConfiguration objects. Static routes that are either defined in the bootstrap configuration
 * or defined inline while configuring listeners are separated from those configured dynamically via RDS.
 * Route configuration information can be used to recreate an Envoy configuration by populating all routes
 * as static routes or by returning them in RDS responses.
 *
 * @generated from message envoy.admin.v2alpha.RoutesConfigDump
 */
export declare class RoutesConfigDump extends Message<RoutesConfigDump> {
  /**
   * The statically loaded route configs.
   *
   * @generated from field: repeated envoy.admin.v2alpha.RoutesConfigDump.StaticRouteConfig static_route_configs = 2;
   */
  staticRouteConfigs: RoutesConfigDump_StaticRouteConfig[];

  /**
   * The dynamically loaded route configs.
   *
   * @generated from field: repeated envoy.admin.v2alpha.RoutesConfigDump.DynamicRouteConfig dynamic_route_configs = 3;
   */
  dynamicRouteConfigs: RoutesConfigDump_DynamicRouteConfig[];

  constructor(data?: PartialMessage<RoutesConfigDump>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v2alpha.RoutesConfigDump";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RoutesConfigDump;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RoutesConfigDump;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RoutesConfigDump;

  static equals(a: RoutesConfigDump | PlainMessage<RoutesConfigDump> | undefined, b: RoutesConfigDump | PlainMessage<RoutesConfigDump> | undefined): boolean;
}

/**
 * @generated from message envoy.admin.v2alpha.RoutesConfigDump.StaticRouteConfig
 */
export declare class RoutesConfigDump_StaticRouteConfig extends Message<RoutesConfigDump_StaticRouteConfig> {
  /**
   * The route config.
   *
   * @generated from field: google.protobuf.Any route_config = 1;
   */
  routeConfig?: Any;

  /**
   * The timestamp when the Route was last updated.
   *
   * @generated from field: google.protobuf.Timestamp last_updated = 2;
   */
  lastUpdated?: Timestamp;

  constructor(data?: PartialMessage<RoutesConfigDump_StaticRouteConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v2alpha.RoutesConfigDump.StaticRouteConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RoutesConfigDump_StaticRouteConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RoutesConfigDump_StaticRouteConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RoutesConfigDump_StaticRouteConfig;

  static equals(a: RoutesConfigDump_StaticRouteConfig | PlainMessage<RoutesConfigDump_StaticRouteConfig> | undefined, b: RoutesConfigDump_StaticRouteConfig | PlainMessage<RoutesConfigDump_StaticRouteConfig> | undefined): boolean;
}

/**
 * @generated from message envoy.admin.v2alpha.RoutesConfigDump.DynamicRouteConfig
 */
export declare class RoutesConfigDump_DynamicRouteConfig extends Message<RoutesConfigDump_DynamicRouteConfig> {
  /**
   * This is the per-resource version information. This version is currently taken from the
   * :ref:`version_info <envoy_api_field_DiscoveryResponse.version_info>` field at the time that
   * the route configuration was loaded.
   *
   * @generated from field: string version_info = 1;
   */
  versionInfo: string;

  /**
   * The route config.
   *
   * @generated from field: google.protobuf.Any route_config = 2;
   */
  routeConfig?: Any;

  /**
   * The timestamp when the Route was last updated.
   *
   * @generated from field: google.protobuf.Timestamp last_updated = 3;
   */
  lastUpdated?: Timestamp;

  constructor(data?: PartialMessage<RoutesConfigDump_DynamicRouteConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v2alpha.RoutesConfigDump.DynamicRouteConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RoutesConfigDump_DynamicRouteConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RoutesConfigDump_DynamicRouteConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RoutesConfigDump_DynamicRouteConfig;

  static equals(a: RoutesConfigDump_DynamicRouteConfig | PlainMessage<RoutesConfigDump_DynamicRouteConfig> | undefined, b: RoutesConfigDump_DynamicRouteConfig | PlainMessage<RoutesConfigDump_DynamicRouteConfig> | undefined): boolean;
}

/**
 * Envoy's scoped RDS implementation fills this message with all currently loaded route
 * configuration scopes (defined via ScopedRouteConfigurationsSet protos). This message lists both
 * the scopes defined inline with the higher order object (i.e., the HttpConnectionManager) and the
 * dynamically obtained scopes via the SRDS API.
 *
 * @generated from message envoy.admin.v2alpha.ScopedRoutesConfigDump
 */
export declare class ScopedRoutesConfigDump extends Message<ScopedRoutesConfigDump> {
  /**
   * The statically loaded scoped route configs.
   *
   * @generated from field: repeated envoy.admin.v2alpha.ScopedRoutesConfigDump.InlineScopedRouteConfigs inline_scoped_route_configs = 1;
   */
  inlineScopedRouteConfigs: ScopedRoutesConfigDump_InlineScopedRouteConfigs[];

  /**
   * The dynamically loaded scoped route configs.
   *
   * @generated from field: repeated envoy.admin.v2alpha.ScopedRoutesConfigDump.DynamicScopedRouteConfigs dynamic_scoped_route_configs = 2;
   */
  dynamicScopedRouteConfigs: ScopedRoutesConfigDump_DynamicScopedRouteConfigs[];

  constructor(data?: PartialMessage<ScopedRoutesConfigDump>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v2alpha.ScopedRoutesConfigDump";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScopedRoutesConfigDump;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScopedRoutesConfigDump;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScopedRoutesConfigDump;

  static equals(a: ScopedRoutesConfigDump | PlainMessage<ScopedRoutesConfigDump> | undefined, b: ScopedRoutesConfigDump | PlainMessage<ScopedRoutesConfigDump> | undefined): boolean;
}

/**
 * @generated from message envoy.admin.v2alpha.ScopedRoutesConfigDump.InlineScopedRouteConfigs
 */
export declare class ScopedRoutesConfigDump_InlineScopedRouteConfigs extends Message<ScopedRoutesConfigDump_InlineScopedRouteConfigs> {
  /**
   * The name assigned to the scoped route configurations.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The scoped route configurations.
   *
   * @generated from field: repeated google.protobuf.Any scoped_route_configs = 2;
   */
  scopedRouteConfigs: Any[];

  /**
   * The timestamp when the scoped route config set was last updated.
   *
   * @generated from field: google.protobuf.Timestamp last_updated = 3;
   */
  lastUpdated?: Timestamp;

  constructor(data?: PartialMessage<ScopedRoutesConfigDump_InlineScopedRouteConfigs>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v2alpha.ScopedRoutesConfigDump.InlineScopedRouteConfigs";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScopedRoutesConfigDump_InlineScopedRouteConfigs;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScopedRoutesConfigDump_InlineScopedRouteConfigs;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScopedRoutesConfigDump_InlineScopedRouteConfigs;

  static equals(a: ScopedRoutesConfigDump_InlineScopedRouteConfigs | PlainMessage<ScopedRoutesConfigDump_InlineScopedRouteConfigs> | undefined, b: ScopedRoutesConfigDump_InlineScopedRouteConfigs | PlainMessage<ScopedRoutesConfigDump_InlineScopedRouteConfigs> | undefined): boolean;
}

/**
 * @generated from message envoy.admin.v2alpha.ScopedRoutesConfigDump.DynamicScopedRouteConfigs
 */
export declare class ScopedRoutesConfigDump_DynamicScopedRouteConfigs extends Message<ScopedRoutesConfigDump_DynamicScopedRouteConfigs> {
  /**
   * The name assigned to the scoped route configurations.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * This is the per-resource version information. This version is currently taken from the
   * :ref:`version_info <envoy_api_field_DiscoveryResponse.version_info>` field at the time that
   * the scoped routes configuration was loaded.
   *
   * @generated from field: string version_info = 2;
   */
  versionInfo: string;

  /**
   * The scoped route configurations.
   *
   * @generated from field: repeated google.protobuf.Any scoped_route_configs = 3;
   */
  scopedRouteConfigs: Any[];

  /**
   * The timestamp when the scoped route config set was last updated.
   *
   * @generated from field: google.protobuf.Timestamp last_updated = 4;
   */
  lastUpdated?: Timestamp;

  constructor(data?: PartialMessage<ScopedRoutesConfigDump_DynamicScopedRouteConfigs>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v2alpha.ScopedRoutesConfigDump.DynamicScopedRouteConfigs";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScopedRoutesConfigDump_DynamicScopedRouteConfigs;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScopedRoutesConfigDump_DynamicScopedRouteConfigs;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScopedRoutesConfigDump_DynamicScopedRouteConfigs;

  static equals(a: ScopedRoutesConfigDump_DynamicScopedRouteConfigs | PlainMessage<ScopedRoutesConfigDump_DynamicScopedRouteConfigs> | undefined, b: ScopedRoutesConfigDump_DynamicScopedRouteConfigs | PlainMessage<ScopedRoutesConfigDump_DynamicScopedRouteConfigs> | undefined): boolean;
}

/**
 * Envoys SDS implementation fills this message with all secrets fetched dynamically via SDS.
 *
 * @generated from message envoy.admin.v2alpha.SecretsConfigDump
 */
export declare class SecretsConfigDump extends Message<SecretsConfigDump> {
  /**
   * The statically loaded secrets.
   *
   * @generated from field: repeated envoy.admin.v2alpha.SecretsConfigDump.StaticSecret static_secrets = 1;
   */
  staticSecrets: SecretsConfigDump_StaticSecret[];

  /**
   * The dynamically loaded active secrets. These are secrets that are available to service
   * clusters or listeners.
   *
   * @generated from field: repeated envoy.admin.v2alpha.SecretsConfigDump.DynamicSecret dynamic_active_secrets = 2;
   */
  dynamicActiveSecrets: SecretsConfigDump_DynamicSecret[];

  /**
   * The dynamically loaded warming secrets. These are secrets that are currently undergoing
   * warming in preparation to service clusters or listeners.
   *
   * @generated from field: repeated envoy.admin.v2alpha.SecretsConfigDump.DynamicSecret dynamic_warming_secrets = 3;
   */
  dynamicWarmingSecrets: SecretsConfigDump_DynamicSecret[];

  constructor(data?: PartialMessage<SecretsConfigDump>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v2alpha.SecretsConfigDump";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SecretsConfigDump;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SecretsConfigDump;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SecretsConfigDump;

  static equals(a: SecretsConfigDump | PlainMessage<SecretsConfigDump> | undefined, b: SecretsConfigDump | PlainMessage<SecretsConfigDump> | undefined): boolean;
}

/**
 * DynamicSecret contains secret information fetched via SDS.
 *
 * @generated from message envoy.admin.v2alpha.SecretsConfigDump.DynamicSecret
 */
export declare class SecretsConfigDump_DynamicSecret extends Message<SecretsConfigDump_DynamicSecret> {
  /**
   * The name assigned to the secret.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * This is the per-resource version information.
   *
   * @generated from field: string version_info = 2;
   */
  versionInfo: string;

  /**
   * The timestamp when the secret was last updated.
   *
   * @generated from field: google.protobuf.Timestamp last_updated = 3;
   */
  lastUpdated?: Timestamp;

  /**
   * The actual secret information.
   * Security sensitive information is redacted (replaced with "[redacted]") for
   * private keys and passwords in TLS certificates.
   *
   * @generated from field: google.protobuf.Any secret = 4;
   */
  secret?: Any;

  constructor(data?: PartialMessage<SecretsConfigDump_DynamicSecret>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v2alpha.SecretsConfigDump.DynamicSecret";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SecretsConfigDump_DynamicSecret;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SecretsConfigDump_DynamicSecret;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SecretsConfigDump_DynamicSecret;

  static equals(a: SecretsConfigDump_DynamicSecret | PlainMessage<SecretsConfigDump_DynamicSecret> | undefined, b: SecretsConfigDump_DynamicSecret | PlainMessage<SecretsConfigDump_DynamicSecret> | undefined): boolean;
}

/**
 * StaticSecret specifies statically loaded secret in bootstrap.
 *
 * @generated from message envoy.admin.v2alpha.SecretsConfigDump.StaticSecret
 */
export declare class SecretsConfigDump_StaticSecret extends Message<SecretsConfigDump_StaticSecret> {
  /**
   * The name assigned to the secret.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The timestamp when the secret was last updated.
   *
   * @generated from field: google.protobuf.Timestamp last_updated = 2;
   */
  lastUpdated?: Timestamp;

  /**
   * The actual secret information.
   * Security sensitive information is redacted (replaced with "[redacted]") for
   * private keys and passwords in TLS certificates.
   *
   * @generated from field: google.protobuf.Any secret = 3;
   */
  secret?: Any;

  constructor(data?: PartialMessage<SecretsConfigDump_StaticSecret>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v2alpha.SecretsConfigDump.StaticSecret";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SecretsConfigDump_StaticSecret;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SecretsConfigDump_StaticSecret;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SecretsConfigDump_StaticSecret;

  static equals(a: SecretsConfigDump_StaticSecret | PlainMessage<SecretsConfigDump_StaticSecret> | undefined, b: SecretsConfigDump_StaticSecret | PlainMessage<SecretsConfigDump_StaticSecret> | undefined): boolean;
}

