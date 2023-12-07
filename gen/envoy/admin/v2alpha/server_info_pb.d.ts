// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/admin/v2alpha/server_info.proto (package envoy.admin.v2alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, Duration, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Proto representation of the value returned by /server_info, containing
 * server version/server status information.
 * [#next-free-field: 7]
 *
 * @generated from message envoy.admin.v2alpha.ServerInfo
 */
export declare class ServerInfo extends Message<ServerInfo> {
  /**
   * Server version.
   *
   * @generated from field: string version = 1;
   */
  version: string;

  /**
   * State of the server.
   *
   * @generated from field: envoy.admin.v2alpha.ServerInfo.State state = 2;
   */
  state: ServerInfo_State;

  /**
   * Uptime since current epoch was started.
   *
   * @generated from field: google.protobuf.Duration uptime_current_epoch = 3;
   */
  uptimeCurrentEpoch?: Duration;

  /**
   * Uptime since the start of the first epoch.
   *
   * @generated from field: google.protobuf.Duration uptime_all_epochs = 4;
   */
  uptimeAllEpochs?: Duration;

  /**
   * Hot restart version.
   *
   * @generated from field: string hot_restart_version = 5;
   */
  hotRestartVersion: string;

  /**
   * Command line options the server is currently running with.
   *
   * @generated from field: envoy.admin.v2alpha.CommandLineOptions command_line_options = 6;
   */
  commandLineOptions?: CommandLineOptions;

  constructor(data?: PartialMessage<ServerInfo>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v2alpha.ServerInfo";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServerInfo;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServerInfo;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServerInfo;

  static equals(a: ServerInfo | PlainMessage<ServerInfo> | undefined, b: ServerInfo | PlainMessage<ServerInfo> | undefined): boolean;
}

/**
 * @generated from enum envoy.admin.v2alpha.ServerInfo.State
 */
export declare enum ServerInfo_State {
  /**
   * Server is live and serving traffic.
   *
   * @generated from enum value: LIVE = 0;
   */
  LIVE = 0,

  /**
   * Server is draining listeners in response to external health checks failing.
   *
   * @generated from enum value: DRAINING = 1;
   */
  DRAINING = 1,

  /**
   * Server has not yet completed cluster manager initialization.
   *
   * @generated from enum value: PRE_INITIALIZING = 2;
   */
  PRE_INITIALIZING = 2,

  /**
   * Server is running the cluster manager initialization callbacks (e.g., RDS).
   *
   * @generated from enum value: INITIALIZING = 3;
   */
  INITIALIZING = 3,
}

/**
 * [#next-free-field: 29]
 *
 * @generated from message envoy.admin.v2alpha.CommandLineOptions
 */
export declare class CommandLineOptions extends Message<CommandLineOptions> {
  /**
   * See :option:`--base-id` for details.
   *
   * @generated from field: uint64 base_id = 1;
   */
  baseId: bigint;

  /**
   * See :option:`--concurrency` for details.
   *
   * @generated from field: uint32 concurrency = 2;
   */
  concurrency: number;

  /**
   * See :option:`--config-path` for details.
   *
   * @generated from field: string config_path = 3;
   */
  configPath: string;

  /**
   * See :option:`--config-yaml` for details.
   *
   * @generated from field: string config_yaml = 4;
   */
  configYaml: string;

  /**
   * See :option:`--allow-unknown-static-fields` for details.
   *
   * @generated from field: bool allow_unknown_static_fields = 5;
   */
  allowUnknownStaticFields: boolean;

  /**
   * See :option:`--reject-unknown-dynamic-fields` for details.
   *
   * @generated from field: bool reject_unknown_dynamic_fields = 26;
   */
  rejectUnknownDynamicFields: boolean;

  /**
   * See :option:`--admin-address-path` for details.
   *
   * @generated from field: string admin_address_path = 6;
   */
  adminAddressPath: string;

  /**
   * See :option:`--local-address-ip-version` for details.
   *
   * @generated from field: envoy.admin.v2alpha.CommandLineOptions.IpVersion local_address_ip_version = 7;
   */
  localAddressIpVersion: CommandLineOptions_IpVersion;

  /**
   * See :option:`--log-level` for details.
   *
   * @generated from field: string log_level = 8;
   */
  logLevel: string;

  /**
   * See :option:`--component-log-level` for details.
   *
   * @generated from field: string component_log_level = 9;
   */
  componentLogLevel: string;

  /**
   * See :option:`--log-format` for details.
   *
   * @generated from field: string log_format = 10;
   */
  logFormat: string;

  /**
   * See :option:`--log-format-escaped` for details.
   *
   * @generated from field: bool log_format_escaped = 27;
   */
  logFormatEscaped: boolean;

  /**
   * See :option:`--log-path` for details.
   *
   * @generated from field: string log_path = 11;
   */
  logPath: string;

  /**
   * See :option:`--service-cluster` for details.
   *
   * @generated from field: string service_cluster = 13;
   */
  serviceCluster: string;

  /**
   * See :option:`--service-node` for details.
   *
   * @generated from field: string service_node = 14;
   */
  serviceNode: string;

  /**
   * See :option:`--service-zone` for details.
   *
   * @generated from field: string service_zone = 15;
   */
  serviceZone: string;

  /**
   * See :option:`--file-flush-interval-msec` for details.
   *
   * @generated from field: google.protobuf.Duration file_flush_interval = 16;
   */
  fileFlushInterval?: Duration;

  /**
   * See :option:`--drain-time-s` for details.
   *
   * @generated from field: google.protobuf.Duration drain_time = 17;
   */
  drainTime?: Duration;

  /**
   * See :option:`--parent-shutdown-time-s` for details.
   *
   * @generated from field: google.protobuf.Duration parent_shutdown_time = 18;
   */
  parentShutdownTime?: Duration;

  /**
   * See :option:`--mode` for details.
   *
   * @generated from field: envoy.admin.v2alpha.CommandLineOptions.Mode mode = 19;
   */
  mode: CommandLineOptions_Mode;

  /**
   * max_stats and max_obj_name_len are now unused and have no effect.
   *
   * @generated from field: uint64 max_stats = 20 [deprecated = true];
   * @deprecated
   */
  maxStats: bigint;

  /**
   * @generated from field: uint64 max_obj_name_len = 21 [deprecated = true];
   * @deprecated
   */
  maxObjNameLen: bigint;

  /**
   * See :option:`--disable-hot-restart` for details.
   *
   * @generated from field: bool disable_hot_restart = 22;
   */
  disableHotRestart: boolean;

  /**
   * See :option:`--enable-mutex-tracing` for details.
   *
   * @generated from field: bool enable_mutex_tracing = 23;
   */
  enableMutexTracing: boolean;

  /**
   * See :option:`--restart-epoch` for details.
   *
   * @generated from field: uint32 restart_epoch = 24;
   */
  restartEpoch: number;

  /**
   * See :option:`--cpuset-threads` for details.
   *
   * @generated from field: bool cpuset_threads = 25;
   */
  cpusetThreads: boolean;

  /**
   * See :option:`--disable-extensions` for details.
   *
   * @generated from field: repeated string disabled_extensions = 28;
   */
  disabledExtensions: string[];

  constructor(data?: PartialMessage<CommandLineOptions>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v2alpha.CommandLineOptions";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommandLineOptions;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommandLineOptions;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommandLineOptions;

  static equals(a: CommandLineOptions | PlainMessage<CommandLineOptions> | undefined, b: CommandLineOptions | PlainMessage<CommandLineOptions> | undefined): boolean;
}

/**
 * @generated from enum envoy.admin.v2alpha.CommandLineOptions.IpVersion
 */
export declare enum CommandLineOptions_IpVersion {
  /**
   * @generated from enum value: v4 = 0;
   */
  v4 = 0,

  /**
   * @generated from enum value: v6 = 1;
   */
  v6 = 1,
}

/**
 * @generated from enum envoy.admin.v2alpha.CommandLineOptions.Mode
 */
export declare enum CommandLineOptions_Mode {
  /**
   * Validate configs and then serve traffic normally.
   *
   * @generated from enum value: Serve = 0;
   */
  Serve = 0,

  /**
   * Validate configs and exit.
   *
   * @generated from enum value: Validate = 1;
   */
  Validate = 1,

  /**
   * Completely load and initialize the config, and then exit without running the listener loop.
   *
   * @generated from enum value: InitOnly = 2;
   */
  InitOnly = 2,
}

