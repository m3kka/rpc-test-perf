// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/http/lua/v3/lua.proto (package envoy.extensions.filters.http.lua.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { DataSource } from "../../../../../config/core/v3/base_pb.js";

/**
 * @generated from message envoy.extensions.filters.http.lua.v3.Lua
 */
export declare class Lua extends Message<Lua> {
  /**
   * The Lua code that Envoy will execute. This can be a very small script that
   * further loads code from disk if desired. Note that if JSON configuration is used, the code must
   * be properly escaped. YAML configuration may be easier to read since YAML supports multi-line
   * strings so complex scripts can be easily expressed inline in the configuration.
   *
   * This field is deprecated. Please use
   * :ref:`default_source_code <envoy_v3_api_field_extensions.filters.http.lua.v3.Lua.default_source_code>`.
   * Only one of :ref:`inline_code <envoy_v3_api_field_extensions.filters.http.lua.v3.Lua.inline_code>`
   * or :ref:`default_source_code <envoy_v3_api_field_extensions.filters.http.lua.v3.Lua.default_source_code>`
   * can be set for the Lua filter.
   *
   * @generated from field: string inline_code = 1 [deprecated = true];
   * @deprecated
   */
  inlineCode: string;

  /**
   * Map of named Lua source codes that can be referenced in :ref:`LuaPerRoute
   * <envoy_v3_api_msg_extensions.filters.http.lua.v3.LuaPerRoute>`. The Lua source codes can be
   * loaded from inline string or local files.
   *
   * Example:
   *
   * .. code-block:: yaml
   *
   *   source_codes:
   *     hello.lua:
   *       inline_string: |
   *         function envoy_on_response(response_handle)
   *           -- Do something.
   *         end
   *     world.lua:
   *       filename: /etc/lua/world.lua
   *
   *
   * @generated from field: map<string, envoy.config.core.v3.DataSource> source_codes = 2;
   */
  sourceCodes: { [key: string]: DataSource };

  /**
   * The default Lua code that Envoy will execute. If no per route config is provided
   * for the request, this Lua code will be applied.
   *
   * @generated from field: envoy.config.core.v3.DataSource default_source_code = 3;
   */
  defaultSourceCode?: DataSource;

  /**
   * Optional additional prefix to use when emitting statistics. By default
   * metrics are emitted in *.lua.* namespace. If multiple lua filters are
   * configured in a filter chain, the stats from each filter instance can
   * be emitted using custom stat prefix to distinguish emitted
   * statistics. For example:
   *
   * .. code-block:: yaml
   *
   *   http_filters:
   *     - name: envoy.filters.http.lua
   *       typed_config:
   *         "@type": type.googleapis.com/envoy.extensions.filters.http.lua.v3.Lua
   *         stat_prefix: foo_script # This emits lua.foo_script.errors etc.
   *     - name: envoy.filters.http.lua
   *       typed_config:
   *         "@type": type.googleapis.com/envoy.extensions.filters.http.lua.v3.Lua
   *         stat_prefix: bar_script # This emits lua.bar_script.errors etc.
   *
   *
   * @generated from field: string stat_prefix = 4;
   */
  statPrefix: string;

  constructor(data?: PartialMessage<Lua>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.http.lua.v3.Lua";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Lua;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Lua;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Lua;

  static equals(a: Lua | PlainMessage<Lua> | undefined, b: Lua | PlainMessage<Lua> | undefined): boolean;
}

/**
 * @generated from message envoy.extensions.filters.http.lua.v3.LuaPerRoute
 */
export declare class LuaPerRoute extends Message<LuaPerRoute> {
  /**
   * @generated from oneof envoy.extensions.filters.http.lua.v3.LuaPerRoute.override
   */
  override: {
    /**
     * Disable the Lua filter for this particular vhost or route. If disabled is specified in
     * multiple per-filter-configs, the most specific one will be used.
     *
     * @generated from field: bool disabled = 1;
     */
    value: boolean;
    case: "disabled";
  } | {
    /**
     * A name of a Lua source code stored in
     * :ref:`Lua.source_codes <envoy_v3_api_field_extensions.filters.http.lua.v3.Lua.source_codes>`.
     *
     * @generated from field: string name = 2;
     */
    value: string;
    case: "name";
  } | {
    /**
     * A configured per-route Lua source code that can be served by RDS or provided inline.
     *
     * @generated from field: envoy.config.core.v3.DataSource source_code = 3;
     */
    value: DataSource;
    case: "sourceCode";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<LuaPerRoute>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.http.lua.v3.LuaPerRoute";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LuaPerRoute;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LuaPerRoute;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LuaPerRoute;

  static equals(a: LuaPerRoute | PlainMessage<LuaPerRoute> | undefined, b: LuaPerRoute | PlainMessage<LuaPerRoute> | undefined): boolean;
}

