// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/upstreams/http/v3/http_protocol_options.proto (package envoy.extensions.upstreams.http.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { AlternateProtocolsCacheOptions, Http1ProtocolOptions, Http2ProtocolOptions, Http3ProtocolOptions, HttpProtocolOptions as HttpProtocolOptions$1, UpstreamHttpProtocolOptions } from "../../../../config/core/v3/protocol_pb.js";
import type { HttpFilter } from "../../../filters/network/http_connection_manager/v3/http_connection_manager_pb.js";
import type { TypedExtensionConfig } from "../../../../config/core/v3/extension_pb.js";

/**
 * HttpProtocolOptions specifies Http upstream protocol options. This object
 * is used in
 * :ref:`typed_extension_protocol_options<envoy_v3_api_field_config.cluster.v3.Cluster.typed_extension_protocol_options>`,
 * keyed by the name ``envoy.extensions.upstreams.http.v3.HttpProtocolOptions``.
 *
 * This controls what protocol(s) should be used for upstream and how said protocol(s) are configured.
 *
 * This replaces the prior pattern of explicit protocol configuration directly
 * in the cluster. So a configuration like this, explicitly configuring the use of HTTP/2 upstream:
 *
 * .. code::
 *
 *   clusters:
 *     - name: some_service
 *       connect_timeout: 5s
 *       upstream_http_protocol_options:
 *         auto_sni: true
 *       common_http_protocol_options:
 *         idle_timeout: 1s
 *       http2_protocol_options:
 *         max_concurrent_streams: 100
 *        .... [further cluster config]
 *
 * Would now look like this:
 *
 * .. code::
 *
 *   clusters:
 *     - name: some_service
 *       connect_timeout: 5s
 *       typed_extension_protocol_options:
 *         envoy.extensions.upstreams.http.v3.HttpProtocolOptions:
 *           "@type": type.googleapis.com/envoy.extensions.upstreams.http.v3.HttpProtocolOptions
 *           upstream_http_protocol_options:
 *             auto_sni: true
 *           common_http_protocol_options:
 *             idle_timeout: 1s
 *           explicit_http_config:
 *             http2_protocol_options:
 *               max_concurrent_streams: 100
 *        .... [further cluster config]
 * [#next-free-field: 8]
 *
 * @generated from message envoy.extensions.upstreams.http.v3.HttpProtocolOptions
 */
export declare class HttpProtocolOptions extends Message<HttpProtocolOptions> {
  /**
   * This contains options common across HTTP/1 and HTTP/2
   *
   * @generated from field: envoy.config.core.v3.HttpProtocolOptions common_http_protocol_options = 1;
   */
  commonHttpProtocolOptions?: HttpProtocolOptions$1;

  /**
   * This contains common protocol options which are only applied upstream.
   *
   * @generated from field: envoy.config.core.v3.UpstreamHttpProtocolOptions upstream_http_protocol_options = 2;
   */
  upstreamHttpProtocolOptions?: UpstreamHttpProtocolOptions;

  /**
   * This controls the actual protocol to be used upstream.
   *
   * @generated from oneof envoy.extensions.upstreams.http.v3.HttpProtocolOptions.upstream_protocol_options
   */
  upstreamProtocolOptions: {
    /**
     * To explicitly configure either HTTP/1 or HTTP/2 (but not both!) use ``explicit_http_config``.
     * If the ``explicit_http_config`` is empty, HTTP/1.1 is used.
     *
     * @generated from field: envoy.extensions.upstreams.http.v3.HttpProtocolOptions.ExplicitHttpConfig explicit_http_config = 3;
     */
    value: HttpProtocolOptions_ExplicitHttpConfig;
    case: "explicitHttpConfig";
  } | {
    /**
     * This allows switching on protocol based on what protocol the downstream
     * connection used.
     *
     * @generated from field: envoy.extensions.upstreams.http.v3.HttpProtocolOptions.UseDownstreamHttpConfig use_downstream_protocol_config = 4;
     */
    value: HttpProtocolOptions_UseDownstreamHttpConfig;
    case: "useDownstreamProtocolConfig";
  } | {
    /**
     * This allows switching on protocol based on ALPN
     *
     * @generated from field: envoy.extensions.upstreams.http.v3.HttpProtocolOptions.AutoHttpConfig auto_config = 5;
     */
    value: HttpProtocolOptions_AutoHttpConfig;
    case: "autoConfig";
  } | { case: undefined; value?: undefined };

  /**
   * .. note::
   *   Upstream HTTP filters are currently in alpha.
   *
   * Optional HTTP filters for the upstream filter chain.
   *
   * These filters will be applied for all HTTP streams which flow through this
   * cluster. Unlike downstream filters, they will *not* be applied to terminated CONNECT requests.
   *
   * If using upstream filters, please be aware that local errors sent by
   * upstream filters will not trigger retries, and local errors sent by
   * upstream filters will count as a final response if hedging is configured.
   * [#extension-category: envoy.filters.http.upstream]
   *
   * @generated from field: repeated envoy.extensions.filters.network.http_connection_manager.v3.HttpFilter http_filters = 6;
   */
  httpFilters: HttpFilter[];

  /**
   * Configuration options for Unified Header Validation (UHV).
   * UHV is an extensible mechanism for checking validity of HTTP responses.
   *
   * [#comment:TODO(yanavlasov): Make it a link to the default header validator doc when it becomes visible.]
   * Leaving this field unspecified, selects the default header validator ``envoy.http.header_validators.envoy_default``.
   *
   * [#not-implemented-hide:]
   * [#extension-category: envoy.http.header_validators]
   *
   * @generated from field: envoy.config.core.v3.TypedExtensionConfig header_validation_config = 7;
   */
  headerValidationConfig?: TypedExtensionConfig;

  constructor(data?: PartialMessage<HttpProtocolOptions>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.upstreams.http.v3.HttpProtocolOptions";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HttpProtocolOptions;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HttpProtocolOptions;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HttpProtocolOptions;

  static equals(a: HttpProtocolOptions | PlainMessage<HttpProtocolOptions> | undefined, b: HttpProtocolOptions | PlainMessage<HttpProtocolOptions> | undefined): boolean;
}

/**
 * If this is used, the cluster will only operate on one of the possible upstream protocols.
 * Note that HTTP/2 or above should generally be used for upstream gRPC clusters.
 *
 * @generated from message envoy.extensions.upstreams.http.v3.HttpProtocolOptions.ExplicitHttpConfig
 */
export declare class HttpProtocolOptions_ExplicitHttpConfig extends Message<HttpProtocolOptions_ExplicitHttpConfig> {
  /**
   * @generated from oneof envoy.extensions.upstreams.http.v3.HttpProtocolOptions.ExplicitHttpConfig.protocol_config
   */
  protocolConfig: {
    /**
     * @generated from field: envoy.config.core.v3.Http1ProtocolOptions http_protocol_options = 1;
     */
    value: Http1ProtocolOptions;
    case: "httpProtocolOptions";
  } | {
    /**
     * @generated from field: envoy.config.core.v3.Http2ProtocolOptions http2_protocol_options = 2;
     */
    value: Http2ProtocolOptions;
    case: "http2ProtocolOptions";
  } | {
    /**
     * .. warning::
     *   QUIC upstream support is currently not ready for internet use.
     *   Please see :ref:`here <arch_overview_http3>` for details.
     *
     * @generated from field: envoy.config.core.v3.Http3ProtocolOptions http3_protocol_options = 3;
     */
    value: Http3ProtocolOptions;
    case: "http3ProtocolOptions";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<HttpProtocolOptions_ExplicitHttpConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.upstreams.http.v3.HttpProtocolOptions.ExplicitHttpConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HttpProtocolOptions_ExplicitHttpConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HttpProtocolOptions_ExplicitHttpConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HttpProtocolOptions_ExplicitHttpConfig;

  static equals(a: HttpProtocolOptions_ExplicitHttpConfig | PlainMessage<HttpProtocolOptions_ExplicitHttpConfig> | undefined, b: HttpProtocolOptions_ExplicitHttpConfig | PlainMessage<HttpProtocolOptions_ExplicitHttpConfig> | undefined): boolean;
}

/**
 * If this is used, the cluster can use either of the configured protocols, and
 * will use whichever protocol was used by the downstream connection.
 *
 * If HTTP/3 is configured for downstream and not configured for upstream,
 * HTTP/3 requests will fail over to HTTP/2.
 *
 * @generated from message envoy.extensions.upstreams.http.v3.HttpProtocolOptions.UseDownstreamHttpConfig
 */
export declare class HttpProtocolOptions_UseDownstreamHttpConfig extends Message<HttpProtocolOptions_UseDownstreamHttpConfig> {
  /**
   * @generated from field: envoy.config.core.v3.Http1ProtocolOptions http_protocol_options = 1;
   */
  httpProtocolOptions?: Http1ProtocolOptions;

  /**
   * @generated from field: envoy.config.core.v3.Http2ProtocolOptions http2_protocol_options = 2;
   */
  http2ProtocolOptions?: Http2ProtocolOptions;

  /**
   * .. warning::
   *   QUIC upstream support is currently not ready for internet use.
   *   Please see :ref:`here <arch_overview_http3>` for details.
   *
   * @generated from field: envoy.config.core.v3.Http3ProtocolOptions http3_protocol_options = 3;
   */
  http3ProtocolOptions?: Http3ProtocolOptions;

  constructor(data?: PartialMessage<HttpProtocolOptions_UseDownstreamHttpConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.upstreams.http.v3.HttpProtocolOptions.UseDownstreamHttpConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HttpProtocolOptions_UseDownstreamHttpConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HttpProtocolOptions_UseDownstreamHttpConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HttpProtocolOptions_UseDownstreamHttpConfig;

  static equals(a: HttpProtocolOptions_UseDownstreamHttpConfig | PlainMessage<HttpProtocolOptions_UseDownstreamHttpConfig> | undefined, b: HttpProtocolOptions_UseDownstreamHttpConfig | PlainMessage<HttpProtocolOptions_UseDownstreamHttpConfig> | undefined): boolean;
}

/**
 * If this is used, the cluster can use either HTTP/1 or HTTP/2, and will use whichever
 * protocol is negotiated by ALPN with the upstream.
 * Clusters configured with ``AutoHttpConfig`` will use the highest available
 * protocol; HTTP/2 if supported, otherwise HTTP/1.
 * If the upstream does not support ALPN, ``AutoHttpConfig`` will fail over to HTTP/1.
 * This can only be used with transport sockets which support ALPN. Using a
 * transport socket which does not support ALPN will result in configuration
 * failure. The transport layer may be configured with custom ALPN, but the default ALPN
 * for the cluster (or if custom ALPN fails) will be "h2,http/1.1".
 *
 * @generated from message envoy.extensions.upstreams.http.v3.HttpProtocolOptions.AutoHttpConfig
 */
export declare class HttpProtocolOptions_AutoHttpConfig extends Message<HttpProtocolOptions_AutoHttpConfig> {
  /**
   * @generated from field: envoy.config.core.v3.Http1ProtocolOptions http_protocol_options = 1;
   */
  httpProtocolOptions?: Http1ProtocolOptions;

  /**
   * @generated from field: envoy.config.core.v3.Http2ProtocolOptions http2_protocol_options = 2;
   */
  http2ProtocolOptions?: Http2ProtocolOptions;

  /**
   * Unlike HTTP/1 and HTTP/2, HTTP/3 will not be configured unless it is
   * present, and (soon) only if there is an indication of server side
   * support.
   * See :ref:`here <arch_overview_http3_upstream>` for more information on
   * when HTTP/3 will be used, and when Envoy will fail over to TCP.
   *
   * .. warning::
   *   QUIC upstream support is currently not ready for internet use.
   *   Please see :ref:`here <arch_overview_http3>` for details.
   *
   * @generated from field: envoy.config.core.v3.Http3ProtocolOptions http3_protocol_options = 3;
   */
  http3ProtocolOptions?: Http3ProtocolOptions;

  /**
   * The presence of alternate protocols cache options causes the use of the
   * alternate protocols cache, which is responsible for parsing and caching
   * HTTP Alt-Svc headers. This enables the use of HTTP/3 for origins that
   * advertise supporting it.
   *
   * .. note::
   *   This is required when HTTP/3 is enabled.
   *
   * @generated from field: envoy.config.core.v3.AlternateProtocolsCacheOptions alternate_protocols_cache_options = 4;
   */
  alternateProtocolsCacheOptions?: AlternateProtocolsCacheOptions;

  constructor(data?: PartialMessage<HttpProtocolOptions_AutoHttpConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.upstreams.http.v3.HttpProtocolOptions.AutoHttpConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HttpProtocolOptions_AutoHttpConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HttpProtocolOptions_AutoHttpConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HttpProtocolOptions_AutoHttpConfig;

  static equals(a: HttpProtocolOptions_AutoHttpConfig | PlainMessage<HttpProtocolOptions_AutoHttpConfig> | undefined, b: HttpProtocolOptions_AutoHttpConfig | PlainMessage<HttpProtocolOptions_AutoHttpConfig> | undefined): boolean;
}
