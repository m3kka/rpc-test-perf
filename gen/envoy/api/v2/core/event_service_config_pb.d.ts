// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/api/v2/core/event_service_config.proto (package envoy.api.v2.core, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { GrpcService } from "./grpc_service_pb.js";

/**
 * [#not-implemented-hide:]
 * Configuration of the event reporting service endpoint.
 *
 * @generated from message envoy.api.v2.core.EventServiceConfig
 */
export declare class EventServiceConfig extends Message<EventServiceConfig> {
  /**
   * @generated from oneof envoy.api.v2.core.EventServiceConfig.config_source_specifier
   */
  configSourceSpecifier: {
    /**
     * Specifies the gRPC service that hosts the event reporting service.
     *
     * @generated from field: envoy.api.v2.core.GrpcService grpc_service = 1;
     */
    value: GrpcService;
    case: "grpcService";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<EventServiceConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.api.v2.core.EventServiceConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventServiceConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventServiceConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventServiceConfig;

  static equals(a: EventServiceConfig | PlainMessage<EventServiceConfig> | undefined, b: EventServiceConfig | PlainMessage<EventServiceConfig> | undefined): boolean;
}
