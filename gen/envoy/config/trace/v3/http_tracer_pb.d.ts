// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/trace/v3/http_tracer.proto (package envoy.config.trace.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { Any, BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * The tracing configuration specifies settings for an HTTP tracer provider used by Envoy.
 *
 * Envoy may support other tracers in the future, but right now the HTTP tracer is the only one
 * supported.
 *
 * .. attention::
 *
 *   Use of this message type has been deprecated in favor of direct use of
 *   :ref:`Tracing.Http <envoy_v3_api_msg_config.trace.v3.Tracing.Http>`.
 *
 * @generated from message envoy.config.trace.v3.Tracing
 */
export declare class Tracing extends Message<Tracing> {
  /**
   * Provides configuration for the HTTP tracer.
   *
   * @generated from field: envoy.config.trace.v3.Tracing.Http http = 1;
   */
  http?: Tracing_Http;

  constructor(data?: PartialMessage<Tracing>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.trace.v3.Tracing";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Tracing;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Tracing;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Tracing;

  static equals(a: Tracing | PlainMessage<Tracing> | undefined, b: Tracing | PlainMessage<Tracing> | undefined): boolean;
}

/**
 * Configuration for an HTTP tracer provider used by Envoy.
 *
 * The configuration is defined by the
 * :ref:`HttpConnectionManager.Tracing <envoy_v3_api_msg_extensions.filters.network.http_connection_manager.v3.HttpConnectionManager.Tracing>`
 * :ref:`provider <envoy_v3_api_field_extensions.filters.network.http_connection_manager.v3.HttpConnectionManager.Tracing.provider>`
 * field.
 *
 * @generated from message envoy.config.trace.v3.Tracing.Http
 */
export declare class Tracing_Http extends Message<Tracing_Http> {
  /**
   * The name of the HTTP trace driver to instantiate. The name must match a
   * supported HTTP trace driver.
   * See the :ref:`extensions listed in typed_config below <extension_category_envoy.tracers>` for the default list of the HTTP trace driver.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Trace driver specific configuration which must be set according to the driver being instantiated.
   * [#extension-category: envoy.tracers]
   *
   * @generated from oneof envoy.config.trace.v3.Tracing.Http.config_type
   */
  configType: {
    /**
     * @generated from field: google.protobuf.Any typed_config = 3;
     */
    value: Any;
    case: "typedConfig";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<Tracing_Http>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.trace.v3.Tracing.Http";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Tracing_Http;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Tracing_Http;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Tracing_Http;

  static equals(a: Tracing_Http | PlainMessage<Tracing_Http> | undefined, b: Tracing_Http | PlainMessage<Tracing_Http> | undefined): boolean;
}

