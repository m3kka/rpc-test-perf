// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/network/dubbo_proxy/v3/dubbo_proxy.proto (package envoy.extensions.filters.network.dubbo_proxy.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { Any, BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ConfigSource } from "../../../../../config/core/v3/config_source_pb.js";
import type { MultipleRouteConfiguration, RouteConfiguration } from "./route_pb.js";

/**
 * Dubbo Protocol types supported by Envoy.
 *
 * @generated from enum envoy.extensions.filters.network.dubbo_proxy.v3.ProtocolType
 */
export declare enum ProtocolType {
  /**
   * the default protocol.
   *
   * @generated from enum value: Dubbo = 0;
   */
  Dubbo = 0,
}

/**
 * Dubbo Serialization types supported by Envoy.
 *
 * @generated from enum envoy.extensions.filters.network.dubbo_proxy.v3.SerializationType
 */
export declare enum SerializationType {
  /**
   * the default serialization protocol.
   *
   * @generated from enum value: Hessian2 = 0;
   */
  Hessian2 = 0,
}

/**
 * @generated from message envoy.extensions.filters.network.dubbo_proxy.v3.Drds
 */
export declare class Drds extends Message<Drds> {
  /**
   * Configuration source specifier.
   * In case of ``api_config_source`` only aggregated ``api_type`` is supported.
   *
   * @generated from field: envoy.config.core.v3.ConfigSource config_source = 1;
   */
  configSource?: ConfigSource;

  /**
   * The name of the multiple route configuration. This allows to use different multiple route
   * configurations. Tells which multiple route configuration should be fetched from the configuration
   * source. Leave unspecified is also valid and means the unnamed multiple route configuration.
   *
   * @generated from field: string route_config_name = 2;
   */
  routeConfigName: string;

  constructor(data?: PartialMessage<Drds>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.network.dubbo_proxy.v3.Drds";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Drds;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Drds;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Drds;

  static equals(a: Drds | PlainMessage<Drds> | undefined, b: Drds | PlainMessage<Drds> | undefined): boolean;
}

/**
 * [#next-free-field: 8]
 *
 * @generated from message envoy.extensions.filters.network.dubbo_proxy.v3.DubboProxy
 */
export declare class DubboProxy extends Message<DubboProxy> {
  /**
   * The human readable prefix to use when emitting statistics.
   *
   * @generated from field: string stat_prefix = 1;
   */
  statPrefix: string;

  /**
   * Configure the protocol used.
   *
   * @generated from field: envoy.extensions.filters.network.dubbo_proxy.v3.ProtocolType protocol_type = 2;
   */
  protocolType: ProtocolType;

  /**
   * Configure the serialization protocol used.
   *
   * @generated from field: envoy.extensions.filters.network.dubbo_proxy.v3.SerializationType serialization_type = 3;
   */
  serializationType: SerializationType;

  /**
   * The route table for the connection manager is static and is specified in this property.
   *
   * .. note::
   *
   *   This field is deprecated. Please use ``drds`` or ``multiple_route_config`` first.
   *
   * @generated from field: repeated envoy.extensions.filters.network.dubbo_proxy.v3.RouteConfiguration route_config = 4 [deprecated = true];
   * @deprecated
   */
  routeConfig: RouteConfiguration[];

  /**
   * @generated from oneof envoy.extensions.filters.network.dubbo_proxy.v3.DubboProxy.route_specifier
   */
  routeSpecifier: {
    /**
     * Use xDS to fetch the route configuration. It is invalid to define both ``route_config`` and ``drds``.
     *
     * @generated from field: envoy.extensions.filters.network.dubbo_proxy.v3.Drds drds = 6;
     */
    value: Drds;
    case: "drds";
  } | {
    /**
     * @generated from field: envoy.extensions.filters.network.dubbo_proxy.v3.MultipleRouteConfiguration multiple_route_config = 7;
     */
    value: MultipleRouteConfiguration;
    case: "multipleRouteConfig";
  } | { case: undefined; value?: undefined };

  /**
   * A list of individual Dubbo filters that make up the filter chain for requests made to the
   * Dubbo proxy. Order matters as the filters are processed sequentially. For backwards
   * compatibility, if no dubbo_filters are specified, a default Dubbo router filter
   * (``envoy.filters.dubbo.router``) is used.
   *
   * @generated from field: repeated envoy.extensions.filters.network.dubbo_proxy.v3.DubboFilter dubbo_filters = 5;
   */
  dubboFilters: DubboFilter[];

  constructor(data?: PartialMessage<DubboProxy>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.network.dubbo_proxy.v3.DubboProxy";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DubboProxy;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DubboProxy;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DubboProxy;

  static equals(a: DubboProxy | PlainMessage<DubboProxy> | undefined, b: DubboProxy | PlainMessage<DubboProxy> | undefined): boolean;
}

/**
 * DubboFilter configures a Dubbo filter.
 *
 * @generated from message envoy.extensions.filters.network.dubbo_proxy.v3.DubboFilter
 */
export declare class DubboFilter extends Message<DubboFilter> {
  /**
   * The name of the filter to instantiate. The name must match a supported
   * filter.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Filter specific configuration which depends on the filter being
   * instantiated. See the supported filters for further documentation.
   *
   * @generated from field: google.protobuf.Any config = 2;
   */
  config?: Any;

  constructor(data?: PartialMessage<DubboFilter>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.network.dubbo_proxy.v3.DubboFilter";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DubboFilter;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DubboFilter;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DubboFilter;

  static equals(a: DubboFilter | PlainMessage<DubboFilter> | undefined, b: DubboFilter | PlainMessage<DubboFilter> | undefined): boolean;
}

