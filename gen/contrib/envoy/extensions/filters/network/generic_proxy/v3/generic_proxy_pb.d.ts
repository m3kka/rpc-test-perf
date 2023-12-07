// @generated by protoc-gen-es v1.5.1
// @generated from file contrib/envoy/extensions/filters/network/generic_proxy/v3/generic_proxy.proto (package envoy.extensions.filters.network.generic_proxy.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { TypedExtensionConfig } from "../../../../../../../envoy/config/core/v3/extension_pb.js";
import type { RouteConfiguration } from "./route_pb.js";
import type { HttpConnectionManager_Tracing } from "../../../../../../../envoy/extensions/filters/network/http_connection_manager/v3/http_connection_manager_pb.js";
import type { ConfigSource } from "../../../../../../../envoy/config/core/v3/config_source_pb.js";

/**
 * [#next-free-field: 7]
 *
 * @generated from message envoy.extensions.filters.network.generic_proxy.v3.GenericProxy
 */
export declare class GenericProxy extends Message<GenericProxy> {
  /**
   * The human readable prefix to use when emitting statistics.
   *
   * @generated from field: string stat_prefix = 1;
   */
  statPrefix: string;

  /**
   * The codec which encodes and decodes the application protocol.
   * [#extension-category: envoy.generic_proxy.codecs]
   *
   * @generated from field: envoy.config.core.v3.TypedExtensionConfig codec_config = 2;
   */
  codecConfig?: TypedExtensionConfig;

  /**
   * @generated from oneof envoy.extensions.filters.network.generic_proxy.v3.GenericProxy.route_specifier
   */
  routeSpecifier: {
    /**
     * The generic proxies route table will be dynamically loaded via the meta RDS API.
     *
     * @generated from field: envoy.extensions.filters.network.generic_proxy.v3.GenericRds generic_rds = 3;
     */
    value: GenericRds;
    case: "genericRds";
  } | {
    /**
     * The route table for the generic proxy is static and is specified in this property.
     *
     * @generated from field: envoy.extensions.filters.network.generic_proxy.v3.RouteConfiguration route_config = 4;
     */
    value: RouteConfiguration;
    case: "routeConfig";
  } | { case: undefined; value?: undefined };

  /**
   * A list of individual Layer-7 filters that make up the filter chain for requests made to the
   * proxy. Order matters as the filters are processed sequentially as request events
   * happen.
   * [#extension-category: envoy.generic_proxy.filters]
   *
   * @generated from field: repeated envoy.config.core.v3.TypedExtensionConfig filters = 5;
   */
  filters: TypedExtensionConfig[];

  /**
   * Tracing configuration for the generic proxy.
   *
   * @generated from field: envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager.Tracing tracing = 6;
   */
  tracing?: HttpConnectionManager_Tracing;

  constructor(data?: PartialMessage<GenericProxy>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.network.generic_proxy.v3.GenericProxy";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenericProxy;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenericProxy;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenericProxy;

  static equals(a: GenericProxy | PlainMessage<GenericProxy> | undefined, b: GenericProxy | PlainMessage<GenericProxy> | undefined): boolean;
}

/**
 * @generated from message envoy.extensions.filters.network.generic_proxy.v3.GenericRds
 */
export declare class GenericRds extends Message<GenericRds> {
  /**
   * Configuration source specifier for RDS.
   *
   * @generated from field: envoy.config.core.v3.ConfigSource config_source = 1;
   */
  configSource?: ConfigSource;

  /**
   * The name of the route configuration. This name will be passed to the RDS API. This allows an
   * Envoy configuration with multiple generic proxies to use different route configurations.
   *
   * @generated from field: string route_config_name = 2;
   */
  routeConfigName: string;

  constructor(data?: PartialMessage<GenericRds>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.network.generic_proxy.v3.GenericRds";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenericRds;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenericRds;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenericRds;

  static equals(a: GenericRds | PlainMessage<GenericRds> | undefined, b: GenericRds | PlainMessage<GenericRds> | undefined): boolean;
}

