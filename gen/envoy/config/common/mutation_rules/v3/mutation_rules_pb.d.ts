// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/common/mutation_rules/v3/mutation_rules.proto (package envoy.config.common.mutation_rules.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { RegexMatcher } from "../../../../type/matcher/v3/regex_pb.js";
import type { HeaderValueOption } from "../../../core/v3/base_pb.js";

/**
 * The HeaderMutationRules structure specifies what headers may be
 * manipulated by a processing filter. This set of rules makes it
 * possible to control which modifications a filter may make.
 *
 * By default, an external processing server may add, modify, or remove
 * any header except for an "Envoy internal" header (which is typically
 * denoted by an x-envoy prefix) or specific headers that may affect
 * further filter processing:
 *
 * * ``host``
 * * ``:authority``
 * * ``:scheme``
 * * ``:method``
 *
 * Every attempt to add, change, append, or remove a header will be
 * tested against the rules here. Disallowed header mutations will be
 * ignored unless ``disallow_is_error`` is set to true.
 *
 * Attempts to remove headers are further constrained -- regardless of the
 * settings, system-defined headers (that start with ``:``) and the ``host``
 * header may never be removed.
 *
 * In addition, a counter will be incremented whenever a mutation is
 * rejected. In the ext_proc filter, that counter is named
 * ``rejected_header_mutations``.
 * [#next-free-field: 8]
 *
 * @generated from message envoy.config.common.mutation_rules.v3.HeaderMutationRules
 */
export declare class HeaderMutationRules extends Message<HeaderMutationRules> {
  /**
   * By default, certain headers that could affect processing of subsequent
   * filters or request routing cannot be modified. These headers are
   * ``host``, ``:authority``, ``:scheme``, and ``:method``. Setting this parameter
   * to true allows these headers to be modified as well.
   *
   * @generated from field: google.protobuf.BoolValue allow_all_routing = 1;
   */
  allowAllRouting?: boolean;

  /**
   * If true, allow modification of envoy internal headers. By default, these
   * start with ``x-envoy`` but this may be overridden in the ``Bootstrap``
   * configuration using the
   * :ref:`header_prefix <envoy_v3_api_field_config.bootstrap.v3.Bootstrap.header_prefix>`
   * field. Default is false.
   *
   * @generated from field: google.protobuf.BoolValue allow_envoy = 2;
   */
  allowEnvoy?: boolean;

  /**
   * If true, prevent modification of any system header, defined as a header
   * that starts with a ``:`` character, regardless of any other settings.
   * A processing server may still override the ``:status`` of an HTTP response
   * using an ``ImmediateResponse`` message. Default is false.
   *
   * @generated from field: google.protobuf.BoolValue disallow_system = 3;
   */
  disallowSystem?: boolean;

  /**
   * If true, prevent modifications of all header values, regardless of any
   * other settings. A processing server may still override the ``:status``
   * of an HTTP response using an ``ImmediateResponse`` message. Default is false.
   *
   * @generated from field: google.protobuf.BoolValue disallow_all = 4;
   */
  disallowAll?: boolean;

  /**
   * If set, specifically allow any header that matches this regular
   * expression. This overrides all other settings except for
   * ``disallow_expression``.
   *
   * @generated from field: envoy.type.matcher.v3.RegexMatcher allow_expression = 5;
   */
  allowExpression?: RegexMatcher;

  /**
   * If set, specifically disallow any header that matches this regular
   * expression regardless of any other settings.
   *
   * @generated from field: envoy.type.matcher.v3.RegexMatcher disallow_expression = 6;
   */
  disallowExpression?: RegexMatcher;

  /**
   * If true, and if the rules in this list cause a header mutation to be
   * disallowed, then the filter using this configuration will terminate the
   * request with a 500 error. In addition, regardless of the setting of this
   * parameter, any attempt to set, add, or modify a disallowed header will
   * cause the ``rejected_header_mutations`` counter to be incremented.
   * Default is false.
   *
   * @generated from field: google.protobuf.BoolValue disallow_is_error = 7;
   */
  disallowIsError?: boolean;

  constructor(data?: PartialMessage<HeaderMutationRules>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.common.mutation_rules.v3.HeaderMutationRules";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HeaderMutationRules;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HeaderMutationRules;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HeaderMutationRules;

  static equals(a: HeaderMutationRules | PlainMessage<HeaderMutationRules> | undefined, b: HeaderMutationRules | PlainMessage<HeaderMutationRules> | undefined): boolean;
}

/**
 * The HeaderMutation structure specifies an action that may be taken on HTTP
 * headers.
 *
 * @generated from message envoy.config.common.mutation_rules.v3.HeaderMutation
 */
export declare class HeaderMutation extends Message<HeaderMutation> {
  /**
   * @generated from oneof envoy.config.common.mutation_rules.v3.HeaderMutation.action
   */
  action: {
    /**
     * Remove the specified header if it exists.
     *
     * @generated from field: string remove = 1;
     */
    value: string;
    case: "remove";
  } | {
    /**
     * Append new header by the specified HeaderValueOption.
     *
     * @generated from field: envoy.config.core.v3.HeaderValueOption append = 2;
     */
    value: HeaderValueOption;
    case: "append";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<HeaderMutation>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.common.mutation_rules.v3.HeaderMutation";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HeaderMutation;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HeaderMutation;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HeaderMutation;

  static equals(a: HeaderMutation | PlainMessage<HeaderMutation> | undefined, b: HeaderMutation | PlainMessage<HeaderMutation> | undefined): boolean;
}
