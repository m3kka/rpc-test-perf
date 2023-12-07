// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/udp_packet_writer/v3/udp_gso_batch_writer_factory.proto (package envoy.extensions.udp_packet_writer.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Configuration for the UDP GSO batch packet writer factory.
 *
 * @generated from message envoy.extensions.udp_packet_writer.v3.UdpGsoBatchWriterFactory
 */
export declare class UdpGsoBatchWriterFactory extends Message<UdpGsoBatchWriterFactory> {
  constructor(data?: PartialMessage<UdpGsoBatchWriterFactory>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.udp_packet_writer.v3.UdpGsoBatchWriterFactory";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UdpGsoBatchWriterFactory;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UdpGsoBatchWriterFactory;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UdpGsoBatchWriterFactory;

  static equals(a: UdpGsoBatchWriterFactory | PlainMessage<UdpGsoBatchWriterFactory> | undefined, b: UdpGsoBatchWriterFactory | PlainMessage<UdpGsoBatchWriterFactory> | undefined): boolean;
}

