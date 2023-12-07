// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/filter/network/thrift_proxy/v2alpha1/thrift_proxy.proto (package envoy.config.filter.network.thrift_proxy.v2alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { Any, BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Struct } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { RouteConfiguration } from "./route_pb.js";

/**
 * Thrift transport types supported by Envoy.
 *
 * @generated from enum envoy.config.filter.network.thrift_proxy.v2alpha1.TransportType
 */
export declare enum TransportType {
  /**
   * For downstream connections, the Thrift proxy will attempt to determine which transport to use.
   * For upstream connections, the Thrift proxy will use same transport as the downstream
   * connection.
   *
   * @generated from enum value: AUTO_TRANSPORT = 0;
   */
  AUTO_TRANSPORT = 0,

  /**
   * The Thrift proxy will use the Thrift framed transport.
   *
   * @generated from enum value: FRAMED = 1;
   */
  FRAMED = 1,

  /**
   * The Thrift proxy will use the Thrift unframed transport.
   *
   * @generated from enum value: UNFRAMED = 2;
   */
  UNFRAMED = 2,

  /**
   * The Thrift proxy will assume the client is using the Thrift header transport.
   *
   * @generated from enum value: HEADER = 3;
   */
  HEADER = 3,
}

/**
 * Thrift Protocol types supported by Envoy.
 *
 * @generated from enum envoy.config.filter.network.thrift_proxy.v2alpha1.ProtocolType
 */
export declare enum ProtocolType {
  /**
   * For downstream connections, the Thrift proxy will attempt to determine which protocol to use.
   * Note that the older, non-strict (or lax) binary protocol is not included in automatic protocol
   * detection. For upstream connections, the Thrift proxy will use the same protocol as the
   * downstream connection.
   *
   * @generated from enum value: AUTO_PROTOCOL = 0;
   */
  AUTO_PROTOCOL = 0,

  /**
   * The Thrift proxy will use the Thrift binary protocol.
   *
   * @generated from enum value: BINARY = 1;
   */
  BINARY = 1,

  /**
   * The Thrift proxy will use Thrift non-strict binary protocol.
   *
   * @generated from enum value: LAX_BINARY = 2;
   */
  LAX_BINARY = 2,

  /**
   * The Thrift proxy will use the Thrift compact protocol.
   *
   * @generated from enum value: COMPACT = 3;
   */
  COMPACT = 3,

  /**
   * The Thrift proxy will use the Thrift "Twitter" protocol implemented by the finagle library.
   *
   * @generated from enum value: TWITTER = 4;
   */
  TWITTER = 4,
}

/**
 * [#next-free-field: 6]
 *
 * @generated from message envoy.config.filter.network.thrift_proxy.v2alpha1.ThriftProxy
 */
export declare class ThriftProxy extends Message<ThriftProxy> {
  /**
   * Supplies the type of transport that the Thrift proxy should use. Defaults to
   * :ref:`AUTO_TRANSPORT<envoy_api_enum_value_config.filter.network.thrift_proxy.v2alpha1.TransportType.AUTO_TRANSPORT>`.
   *
   * @generated from field: envoy.config.filter.network.thrift_proxy.v2alpha1.TransportType transport = 2;
   */
  transport: TransportType;

  /**
   * Supplies the type of protocol that the Thrift proxy should use. Defaults to
   * :ref:`AUTO_PROTOCOL<envoy_api_enum_value_config.filter.network.thrift_proxy.v2alpha1.ProtocolType.AUTO_PROTOCOL>`.
   *
   * @generated from field: envoy.config.filter.network.thrift_proxy.v2alpha1.ProtocolType protocol = 3;
   */
  protocol: ProtocolType;

  /**
   * The human readable prefix to use when emitting statistics.
   *
   * @generated from field: string stat_prefix = 1;
   */
  statPrefix: string;

  /**
   * The route table for the connection manager is static and is specified in this property.
   *
   * @generated from field: envoy.config.filter.network.thrift_proxy.v2alpha1.RouteConfiguration route_config = 4;
   */
  routeConfig?: RouteConfiguration;

  /**
   * A list of individual Thrift filters that make up the filter chain for requests made to the
   * Thrift proxy. Order matters as the filters are processed sequentially. For backwards
   * compatibility, if no thrift_filters are specified, a default Thrift router filter
   * (`envoy.filters.thrift.router`) is used.
   *
   * @generated from field: repeated envoy.config.filter.network.thrift_proxy.v2alpha1.ThriftFilter thrift_filters = 5;
   */
  thriftFilters: ThriftFilter[];

  constructor(data?: PartialMessage<ThriftProxy>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.filter.network.thrift_proxy.v2alpha1.ThriftProxy";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ThriftProxy;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ThriftProxy;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ThriftProxy;

  static equals(a: ThriftProxy | PlainMessage<ThriftProxy> | undefined, b: ThriftProxy | PlainMessage<ThriftProxy> | undefined): boolean;
}

/**
 * ThriftFilter configures a Thrift filter.
 *
 * @generated from message envoy.config.filter.network.thrift_proxy.v2alpha1.ThriftFilter
 */
export declare class ThriftFilter extends Message<ThriftFilter> {
  /**
   * The name of the filter to instantiate. The name must match a supported
   * filter. The built-in filters are:
   *
   * [#comment:TODO(zuercher): Auto generate the following list]
   * * :ref:`envoy.filters.thrift.router <config_thrift_filters_router>`
   * * :ref:`envoy.filters.thrift.rate_limit <config_thrift_filters_rate_limit>`
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Filter specific configuration which depends on the filter being instantiated. See the supported
   * filters for further documentation.
   *
   * @generated from oneof envoy.config.filter.network.thrift_proxy.v2alpha1.ThriftFilter.config_type
   */
  configType: {
    /**
     * @generated from field: google.protobuf.Struct config = 2 [deprecated = true];
     * @deprecated
     */
    value: Struct;
    case: "config";
  } | {
    /**
     * @generated from field: google.protobuf.Any typed_config = 3;
     */
    value: Any;
    case: "typedConfig";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<ThriftFilter>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.filter.network.thrift_proxy.v2alpha1.ThriftFilter";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ThriftFilter;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ThriftFilter;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ThriftFilter;

  static equals(a: ThriftFilter | PlainMessage<ThriftFilter> | undefined, b: ThriftFilter | PlainMessage<ThriftFilter> | undefined): boolean;
}

/**
 * ThriftProtocolOptions specifies Thrift upstream protocol options. This object is used in
 * in
 * :ref:`typed_extension_protocol_options<envoy_api_field_Cluster.typed_extension_protocol_options>`,
 * keyed by the name `envoy.filters.network.thrift_proxy`.
 *
 * @generated from message envoy.config.filter.network.thrift_proxy.v2alpha1.ThriftProtocolOptions
 */
export declare class ThriftProtocolOptions extends Message<ThriftProtocolOptions> {
  /**
   * Supplies the type of transport that the Thrift proxy should use for upstream connections.
   * Selecting
   * :ref:`AUTO_TRANSPORT<envoy_api_enum_value_config.filter.network.thrift_proxy.v2alpha1.TransportType.AUTO_TRANSPORT>`,
   * which is the default, causes the proxy to use the same transport as the downstream connection.
   *
   * @generated from field: envoy.config.filter.network.thrift_proxy.v2alpha1.TransportType transport = 1;
   */
  transport: TransportType;

  /**
   * Supplies the type of protocol that the Thrift proxy should use for upstream connections.
   * Selecting
   * :ref:`AUTO_PROTOCOL<envoy_api_enum_value_config.filter.network.thrift_proxy.v2alpha1.ProtocolType.AUTO_PROTOCOL>`,
   * which is the default, causes the proxy to use the same protocol as the downstream connection.
   *
   * @generated from field: envoy.config.filter.network.thrift_proxy.v2alpha1.ProtocolType protocol = 2;
   */
  protocol: ProtocolType;

  constructor(data?: PartialMessage<ThriftProtocolOptions>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.filter.network.thrift_proxy.v2alpha1.ThriftProtocolOptions";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ThriftProtocolOptions;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ThriftProtocolOptions;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ThriftProtocolOptions;

  static equals(a: ThriftProtocolOptions | PlainMessage<ThriftProtocolOptions> | undefined, b: ThriftProtocolOptions | PlainMessage<ThriftProtocolOptions> | undefined): boolean;
}
