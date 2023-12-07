// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/data/tap/v2alpha/common.proto (package envoy.data.tap.v2alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Wrapper for tapped body data. This includes HTTP request/response body, transport socket received
 * and transmitted data, etc.
 *
 * @generated from message envoy.data.tap.v2alpha.Body
 */
export declare class Body extends Message<Body> {
  /**
   * @generated from oneof envoy.data.tap.v2alpha.Body.body_type
   */
  bodyType: {
    /**
     * Body data as bytes. By default, tap body data will be present in this field, as the proto
     * `bytes` type can contain any valid byte.
     *
     * @generated from field: bytes as_bytes = 1;
     */
    value: Uint8Array;
    case: "asBytes";
  } | {
    /**
     * Body data as string. This field is only used when the :ref:`JSON_BODY_AS_STRING
     * <envoy_api_enum_value_service.tap.v2alpha.OutputSink.Format.JSON_BODY_AS_STRING>` sink
     * format type is selected. See the documentation for that option for why this is useful.
     *
     * @generated from field: string as_string = 2;
     */
    value: string;
    case: "asString";
  } | { case: undefined; value?: undefined };

  /**
   * Specifies whether body data has been truncated to fit within the specified
   * :ref:`max_buffered_rx_bytes
   * <envoy_api_field_service.tap.v2alpha.OutputConfig.max_buffered_rx_bytes>` and
   * :ref:`max_buffered_tx_bytes
   * <envoy_api_field_service.tap.v2alpha.OutputConfig.max_buffered_tx_bytes>` settings.
   *
   * @generated from field: bool truncated = 3;
   */
  truncated: boolean;

  constructor(data?: PartialMessage<Body>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.data.tap.v2alpha.Body";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Body;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Body;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Body;

  static equals(a: Body | PlainMessage<Body> | undefined, b: Body | PlainMessage<Body> | undefined): boolean;
}
