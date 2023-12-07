// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/admin/v3/tap.proto (package envoy.admin.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { TapConfig } from "../../config/tap/v3/common_pb.js";

/**
 * The /tap admin request body that is used to configure an active tap session.
 *
 * @generated from message envoy.admin.v3.TapRequest
 */
export declare class TapRequest extends Message<TapRequest> {
  /**
   * The opaque configuration ID used to match the configuration to a loaded extension.
   * A tap extension configures a similar opaque ID that is used to match.
   *
   * @generated from field: string config_id = 1;
   */
  configId: string;

  /**
   * The tap configuration to load.
   *
   * @generated from field: envoy.config.tap.v3.TapConfig tap_config = 2;
   */
  tapConfig?: TapConfig;

  constructor(data?: PartialMessage<TapRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v3.TapRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TapRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TapRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TapRequest;

  static equals(a: TapRequest | PlainMessage<TapRequest> | undefined, b: TapRequest | PlainMessage<TapRequest> | undefined): boolean;
}

