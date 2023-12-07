// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/common/tap/v2alpha/common.proto (package envoy.config.common.tap.v2alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { TapConfig } from "../../../../service/tap/v2alpha/common_pb.js";

/**
 * Common configuration for all tap extensions.
 *
 * @generated from message envoy.config.common.tap.v2alpha.CommonExtensionConfig
 */
export declare class CommonExtensionConfig extends Message<CommonExtensionConfig> {
  /**
   * @generated from oneof envoy.config.common.tap.v2alpha.CommonExtensionConfig.config_type
   */
  configType: {
    /**
     * If specified, the tap filter will be configured via an admin handler.
     *
     * @generated from field: envoy.config.common.tap.v2alpha.AdminConfig admin_config = 1;
     */
    value: AdminConfig;
    case: "adminConfig";
  } | {
    /**
     * If specified, the tap filter will be configured via a static configuration that cannot be
     * changed.
     *
     * @generated from field: envoy.service.tap.v2alpha.TapConfig static_config = 2;
     */
    value: TapConfig;
    case: "staticConfig";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<CommonExtensionConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.common.tap.v2alpha.CommonExtensionConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommonExtensionConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommonExtensionConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommonExtensionConfig;

  static equals(a: CommonExtensionConfig | PlainMessage<CommonExtensionConfig> | undefined, b: CommonExtensionConfig | PlainMessage<CommonExtensionConfig> | undefined): boolean;
}

/**
 * Configuration for the admin handler. See :ref:`here <config_http_filters_tap_admin_handler>` for
 * more information.
 *
 * @generated from message envoy.config.common.tap.v2alpha.AdminConfig
 */
export declare class AdminConfig extends Message<AdminConfig> {
  /**
   * Opaque configuration ID. When requests are made to the admin handler, the passed opaque ID is
   * matched to the configured filter opaque ID to determine which filter to configure.
   *
   * @generated from field: string config_id = 1;
   */
  configId: string;

  constructor(data?: PartialMessage<AdminConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.common.tap.v2alpha.AdminConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AdminConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AdminConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AdminConfig;

  static equals(a: AdminConfig | PlainMessage<AdminConfig> | undefined, b: AdminConfig | PlainMessage<AdminConfig> | undefined): boolean;
}
