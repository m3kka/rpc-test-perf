// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/http/original_ip_detection/xff/v3/xff.proto (package envoy.extensions.http.original_ip_detection.xff.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * This extension allows for the original downstream remote IP to be detected
 * by reading the :ref:`config_http_conn_man_headers_x-forwarded-for` header.
 *
 * [#extension: envoy.http.original_ip_detection.xff]
 *
 * @generated from message envoy.extensions.http.original_ip_detection.xff.v3.XffConfig
 */
export declare class XffConfig extends Message<XffConfig> {
  /**
   * The number of additional ingress proxy hops from the right side of the
   * :ref:`config_http_conn_man_headers_x-forwarded-for` HTTP header to trust when
   * determining the origin client's IP address. The default is zero if this option
   * is not specified. See the documentation for
   * :ref:`config_http_conn_man_headers_x-forwarded-for` for more information.
   *
   * @generated from field: uint32 xff_num_trusted_hops = 1;
   */
  xffNumTrustedHops: number;

  constructor(data?: PartialMessage<XffConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.http.original_ip_detection.xff.v3.XffConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): XffConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): XffConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): XffConfig;

  static equals(a: XffConfig | PlainMessage<XffConfig> | undefined, b: XffConfig | PlainMessage<XffConfig> | undefined): boolean;
}
