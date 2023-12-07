// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/filter/http/dynamic_forward_proxy/v2alpha/dynamic_forward_proxy.proto (package envoy.config.filter.http.dynamic_forward_proxy.v2alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { DnsCacheConfig } from "../../../../common/dynamic_forward_proxy/v2alpha/dns_cache_pb.js";

/**
 * Configuration for the dynamic forward proxy HTTP filter. See the :ref:`architecture overview
 * <arch_overview_http_dynamic_forward_proxy>` for more information.
 * [#extension: envoy.filters.http.dynamic_forward_proxy]
 *
 * @generated from message envoy.config.filter.http.dynamic_forward_proxy.v2alpha.FilterConfig
 */
export declare class FilterConfig extends Message<FilterConfig> {
  /**
   * The DNS cache configuration that the filter will attach to. Note this configuration must
   * match that of associated :ref:`dynamic forward proxy cluster configuration
   * <envoy_api_field_config.cluster.dynamic_forward_proxy.v2alpha.ClusterConfig.dns_cache_config>`.
   *
   * @generated from field: envoy.config.common.dynamic_forward_proxy.v2alpha.DnsCacheConfig dns_cache_config = 1;
   */
  dnsCacheConfig?: DnsCacheConfig;

  constructor(data?: PartialMessage<FilterConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.filter.http.dynamic_forward_proxy.v2alpha.FilterConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FilterConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FilterConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FilterConfig;

  static equals(a: FilterConfig | PlainMessage<FilterConfig> | undefined, b: FilterConfig | PlainMessage<FilterConfig> | undefined): boolean;
}

/**
 * Per route Configuration for the dynamic forward proxy HTTP filter.
 *
 * @generated from message envoy.config.filter.http.dynamic_forward_proxy.v2alpha.PerRouteConfig
 */
export declare class PerRouteConfig extends Message<PerRouteConfig> {
  /**
   * @generated from oneof envoy.config.filter.http.dynamic_forward_proxy.v2alpha.PerRouteConfig.host_rewrite_specifier
   */
  hostRewriteSpecifier: {
    /**
     * Indicates that before DNS lookup, the host header will be swapped with
     * this value. If not set or empty, the original host header value
     * will be used and no rewrite will happen.
     *
     * Note: this rewrite affects both DNS lookup and host header forwarding. However, this
     * option shouldn't be used with
     * :ref:`HCM host rewrite <envoy_api_field_route.RouteAction.host_rewrite>` given that the
     * value set here would be used for DNS lookups whereas the value set in the HCM would be used
     * for host header forwarding which is not the desired outcome.
     *
     * @generated from field: string host_rewrite = 1;
     */
    value: string;
    case: "hostRewrite";
  } | {
    /**
     * Indicates that before DNS lookup, the host header will be swapped with
     * the value of this header. If not set or empty, the original host header
     * value will be used and no rewrite will happen.
     *
     * Note: this rewrite affects both DNS lookup and host header forwarding. However, this
     * option shouldn't be used with
     * :ref:`HCM host rewrite header <envoy_api_field_route.RouteAction.auto_host_rewrite_header>`
     * given that the value set here would be used for DNS lookups whereas the value set in the HCM
     * would be used for host header forwarding which is not the desired outcome.
     *
     * .. note::
     *
     *   If the header appears multiple times only the first value is used.
     *
     * @generated from field: string auto_host_rewrite_header = 2;
     */
    value: string;
    case: "autoHostRewriteHeader";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<PerRouteConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.filter.http.dynamic_forward_proxy.v2alpha.PerRouteConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PerRouteConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PerRouteConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PerRouteConfig;

  static equals(a: PerRouteConfig | PlainMessage<PerRouteConfig> | undefined, b: PerRouteConfig | PlainMessage<PerRouteConfig> | undefined): boolean;
}
