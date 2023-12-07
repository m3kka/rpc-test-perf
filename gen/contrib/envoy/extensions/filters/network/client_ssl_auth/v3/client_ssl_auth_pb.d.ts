// @generated by protoc-gen-es v1.5.1
// @generated from file contrib/envoy/extensions/filters/network/client_ssl_auth/v3/client_ssl_auth.proto (package envoy.extensions.filters.network.client_ssl_auth.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, Duration, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { CidrRange } from "../../../../../../../envoy/config/core/v3/address_pb.js";

/**
 * @generated from message envoy.extensions.filters.network.client_ssl_auth.v3.ClientSSLAuth
 */
export declare class ClientSSLAuth extends Message<ClientSSLAuth> {
  /**
   * The :ref:`cluster manager <arch_overview_cluster_manager>` cluster that runs
   * the authentication service. The filter will connect to the service every 60s to fetch the list
   * of principals. The service must support the expected :ref:`REST API
   * <config_network_filters_client_ssl_auth_rest_api>`.
   *
   * @generated from field: string auth_api_cluster = 1;
   */
  authApiCluster: string;

  /**
   * The prefix to use when emitting :ref:`statistics
   * <config_network_filters_client_ssl_auth_stats>`.
   *
   * @generated from field: string stat_prefix = 2;
   */
  statPrefix: string;

  /**
   * Time in milliseconds between principal refreshes from the
   * authentication service. Default is 60000 (60s). The actual fetch time
   * will be this value plus a random jittered value between
   * 0-refresh_delay_ms milliseconds.
   *
   * @generated from field: google.protobuf.Duration refresh_delay = 3;
   */
  refreshDelay?: Duration;

  /**
   * An optional list of IP address and subnet masks that should be white
   * listed for access by the filter. If no list is provided, there is no
   * IP allowlist.
   *
   * @generated from field: repeated envoy.config.core.v3.CidrRange ip_white_list = 4;
   */
  ipWhiteList: CidrRange[];

  constructor(data?: PartialMessage<ClientSSLAuth>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.network.client_ssl_auth.v3.ClientSSLAuth";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientSSLAuth;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientSSLAuth;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientSSLAuth;

  static equals(a: ClientSSLAuth | PlainMessage<ClientSSLAuth> | undefined, b: ClientSSLAuth | PlainMessage<ClientSSLAuth> | undefined): boolean;
}
