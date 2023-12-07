// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/http/ip_tagging/v3/ip_tagging.proto (package envoy.extensions.filters.http.ip_tagging.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { CidrRange } from "../../../../../config/core/v3/address_pb.js";

/**
 * @generated from message envoy.extensions.filters.http.ip_tagging.v3.IPTagging
 */
export declare class IPTagging extends Message<IPTagging> {
  /**
   * The type of request the filter should apply to.
   *
   * @generated from field: envoy.extensions.filters.http.ip_tagging.v3.IPTagging.RequestType request_type = 1;
   */
  requestType: IPTagging_RequestType;

  /**
   * [#comment:TODO(ccaraman): Extend functionality to load IP tags from file system.
   * Tracked by issue https://github.com/envoyproxy/envoy/issues/2695]
   * The set of IP tags for the filter.
   *
   * @generated from field: repeated envoy.extensions.filters.http.ip_tagging.v3.IPTagging.IPTag ip_tags = 4;
   */
  ipTags: IPTagging_IPTag[];

  constructor(data?: PartialMessage<IPTagging>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.http.ip_tagging.v3.IPTagging";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IPTagging;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IPTagging;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IPTagging;

  static equals(a: IPTagging | PlainMessage<IPTagging> | undefined, b: IPTagging | PlainMessage<IPTagging> | undefined): boolean;
}

/**
 * The type of requests the filter should apply to. The supported types
 * are internal, external or both. The
 * :ref:`x-forwarded-for<config_http_conn_man_headers_x-forwarded-for_internal_origin>` header is
 * used to determine if a request is internal and will result in
 * :ref:`x-envoy-internal<config_http_conn_man_headers_x-envoy-internal>`
 * being set. The filter defaults to both, and it will apply to all request types.
 *
 * @generated from enum envoy.extensions.filters.http.ip_tagging.v3.IPTagging.RequestType
 */
export declare enum IPTagging_RequestType {
  /**
   * Both external and internal requests will be tagged. This is the default value.
   *
   * @generated from enum value: BOTH = 0;
   */
  BOTH = 0,

  /**
   * Only internal requests will be tagged.
   *
   * @generated from enum value: INTERNAL = 1;
   */
  INTERNAL = 1,

  /**
   * Only external requests will be tagged.
   *
   * @generated from enum value: EXTERNAL = 2;
   */
  EXTERNAL = 2,
}

/**
 * Supplies the IP tag name and the IP address subnets.
 *
 * @generated from message envoy.extensions.filters.http.ip_tagging.v3.IPTagging.IPTag
 */
export declare class IPTagging_IPTag extends Message<IPTagging_IPTag> {
  /**
   * Specifies the IP tag name to apply.
   *
   * @generated from field: string ip_tag_name = 1;
   */
  ipTagName: string;

  /**
   * A list of IP address subnets that will be tagged with
   * ip_tag_name. Both IPv4 and IPv6 are supported.
   *
   * @generated from field: repeated envoy.config.core.v3.CidrRange ip_list = 2;
   */
  ipList: CidrRange[];

  constructor(data?: PartialMessage<IPTagging_IPTag>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.http.ip_tagging.v3.IPTagging.IPTag";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IPTagging_IPTag;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IPTagging_IPTag;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IPTagging_IPTag;

  static equals(a: IPTagging_IPTag | PlainMessage<IPTagging_IPTag> | undefined, b: IPTagging_IPTag | PlainMessage<IPTagging_IPTag> | undefined): boolean;
}
