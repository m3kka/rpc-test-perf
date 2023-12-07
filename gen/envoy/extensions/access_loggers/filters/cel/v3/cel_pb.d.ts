// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/access_loggers/filters/cel/v3/cel.proto (package envoy.extensions.access_loggers.filters.cel.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * ExpressionFilter is an access logging filter that evaluates configured
 * symbolic Common Expression Language expressions to inform the decision
 * to generate an access log.
 *
 * @generated from message envoy.extensions.access_loggers.filters.cel.v3.ExpressionFilter
 */
export declare class ExpressionFilter extends Message<ExpressionFilter> {
  /**
   * Expression that, when evaluated, will be used to filter access logs.
   * Expressions are based on the set of Envoy :ref:`attributes <arch_overview_attributes>`.
   * The provided expression must evaluate to true for logging (expression errors are considered false).
   * Examples:
   * - ``response.code >= 400``
   * - ``(connection.mtls && request.headers['x-log-mtls'] == 'true') || request.url_path.contains('v1beta3')``
   *
   * @generated from field: string expression = 1;
   */
  expression: string;

  constructor(data?: PartialMessage<ExpressionFilter>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.access_loggers.filters.cel.v3.ExpressionFilter";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExpressionFilter;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExpressionFilter;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExpressionFilter;

  static equals(a: ExpressionFilter | PlainMessage<ExpressionFilter> | undefined, b: ExpressionFilter | PlainMessage<ExpressionFilter> | undefined): boolean;
}
