// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/trace/v3/datadog.proto (package envoy.config.trace.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Configuration for the Datadog tracer.
 * [#extension: envoy.tracers.datadog]
 *
 * @generated from message envoy.config.trace.v3.DatadogConfig
 */
export declare class DatadogConfig extends Message<DatadogConfig> {
  /**
   * The cluster to use for submitting traces to the Datadog agent.
   *
   * @generated from field: string collector_cluster = 1;
   */
  collectorCluster: string;

  /**
   * The name used for the service when traces are generated by envoy.
   *
   * @generated from field: string service_name = 2;
   */
  serviceName: string;

  /**
   * Optional hostname to use when sending spans to the collector_cluster. Useful for collectors
   * that require a specific hostname. Defaults to :ref:`collector_cluster <envoy_v3_api_field_config.trace.v3.DatadogConfig.collector_cluster>` above.
   *
   * @generated from field: string collector_hostname = 3;
   */
  collectorHostname: string;

  constructor(data?: PartialMessage<DatadogConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.trace.v3.DatadogConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DatadogConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DatadogConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DatadogConfig;

  static equals(a: DatadogConfig | PlainMessage<DatadogConfig> | undefined, b: DatadogConfig | PlainMessage<DatadogConfig> | undefined): boolean;
}
