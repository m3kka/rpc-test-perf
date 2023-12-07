// @generated by protoc-gen-es v1.5.1
// @generated from file contrib/envoy/extensions/filters/network/generic_proxy/v3/route.proto (package envoy.extensions.filters.network.generic_proxy.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Matcher } from "../../../../../../../xds/type/matcher/v3/matcher_pb.js";

/**
 * @generated from message envoy.extensions.filters.network.generic_proxy.v3.VirtualHost
 */
export declare class VirtualHost extends Message<VirtualHost> {
  /**
   * The name of the virtual host.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * A list of hosts that will be matched to this virtual host. Wildcard hosts are supported in
   * the suffix or prefix form.
   *
   * Host search order:
   *  1. Exact names: ``www.foo.com``.
   *  2. Suffix wildcards: ``*.foo.com`` or ``*-bar.foo.com``.
   *  3. Prefix wildcards: ``foo.*`` or ``foo-*``.
   *  4. Special wildcard ``*`` matching any host and will be the default virtual host.
   *
   * .. note::
   *
   *   The wildcard will not match the empty string.
   *   e.g. ``*-bar.foo.com`` will match ``baz-bar.foo.com`` but not ``-bar.foo.com``.
   *   The longest wildcards match first.
   *   Only a single virtual host in the entire route configuration can match on ``*``. A domain
   *   must be unique across all virtual hosts or the config will fail to load.
   *
   * @generated from field: repeated string hosts = 2;
   */
  hosts: string[];

  /**
   * The match tree to use when resolving route actions for incoming requests.
   *
   * @generated from field: xds.type.matcher.v3.Matcher routes = 3;
   */
  routes?: Matcher;

  constructor(data?: PartialMessage<VirtualHost>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.network.generic_proxy.v3.VirtualHost";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VirtualHost;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VirtualHost;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VirtualHost;

  static equals(a: VirtualHost | PlainMessage<VirtualHost> | undefined, b: VirtualHost | PlainMessage<VirtualHost> | undefined): boolean;
}

/**
 * The generic proxy makes use of the `xds matching API` for routing configurations.
 *
 * In the below example, we combine a top level tree matcher with a linear matcher to match
 * the incoming requests, and send the matching requests to v1 of the upstream service.
 *
 * .. code-block:: yaml
 *
 *   name: example
 *   routes:
 *     matcher_tree:
 *       input:
 *         name: request-service
 *         typed_config:
 *           "@type": type.googleapis.com/envoy.extensions.filters.network.generic_proxy.matcher.v3.ServiceMatchInput
 *       exact_match_map:
 *         map:
 *           service_name_0:
 *             matcher:
 *               matcher_list:
 *                 matchers:
 *                 - predicate:
 *                     and_matcher:
 *                       predicate:
 *                       - single_predicate:
 *                           input:
 *                             name: request-properties
 *                             typed_config:
 *                               "@type": type.googleapis.com/envoy.extensions.filters.network.generic_proxy.matcher.v3.PropertyMatchInput
 *                               property_name: version
 *                           value_match:
 *                             exact: v1
 *                       - single_predicate:
 *                           input:
 *                             name: request-properties
 *                             typed_config:
 *                               "@type": type.googleapis.com/envoy.extensions.filters.network.generic_proxy.matcher.v3.PropertyMatchInput
 *                               property_name: user
 *                           value_match:
 *                             exact: john
 *                   on_match:
 *                     action:
 *                       name: route
 *                       typed_config:
 *                         "@type": type.googleapis.com/envoy.extensions.filters.network.generic_proxy.action.v3.routeAction
 *                         cluster: cluster_0
 *
 * @generated from message envoy.extensions.filters.network.generic_proxy.v3.RouteConfiguration
 */
export declare class RouteConfiguration extends Message<RouteConfiguration> {
  /**
   * The name of the route configuration. For example, it might match route_config_name in
   * envoy.extensions.filters.network.generic_proxy.v3.Rds.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The match tree to use when resolving route actions for incoming requests.
   * If no any virtual host is configured in the ``virtual_hosts`` field or no special wildcard
   * virtual host is configured, the ``routes`` field will be used as the default route table.
   * If both the wildcard virtual host and ``routes`` are configured, the configuration will fail
   * to load.
   *
   * @generated from field: xds.type.matcher.v3.Matcher routes = 2;
   */
  routes?: Matcher;

  /**
   * An array of virtual hosts that make up the route table.
   *
   * @generated from field: repeated envoy.extensions.filters.network.generic_proxy.v3.VirtualHost virtual_hosts = 3;
   */
  virtualHosts: VirtualHost[];

  constructor(data?: PartialMessage<RouteConfiguration>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.network.generic_proxy.v3.RouteConfiguration";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RouteConfiguration;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RouteConfiguration;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RouteConfiguration;

  static equals(a: RouteConfiguration | PlainMessage<RouteConfiguration> | undefined, b: RouteConfiguration | PlainMessage<RouteConfiguration> | undefined): boolean;
}

