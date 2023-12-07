// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/internal_redirect/allow_listed_routes/v3/allow_listed_routes_config.proto (package envoy.extensions.internal_redirect.allow_listed_routes.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * An internal redirect predicate that accepts only explicitly allowed target routes.
 * [#extension: envoy.internal_redirect_predicates.allow_listed_routes]
 *
 * @generated from message envoy.extensions.internal_redirect.allow_listed_routes.v3.AllowListedRoutesConfig
 */
export declare class AllowListedRoutesConfig extends Message<AllowListedRoutesConfig> {
  /**
   * The list of routes that's allowed as redirect target by this predicate,
   * identified by the route's :ref:`name <envoy_v3_api_field_config.route.v3.Route.route>`.
   * Empty route names are not allowed.
   *
   * @generated from field: repeated string allowed_route_names = 1;
   */
  allowedRouteNames: string[];

  constructor(data?: PartialMessage<AllowListedRoutesConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.internal_redirect.allow_listed_routes.v3.AllowListedRoutesConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AllowListedRoutesConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AllowListedRoutesConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AllowListedRoutesConfig;

  static equals(a: AllowListedRoutesConfig | PlainMessage<AllowListedRoutesConfig> | undefined, b: AllowListedRoutesConfig | PlainMessage<AllowListedRoutesConfig> | undefined): boolean;
}

