// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/udp_packet_writer/v3/udp_default_writer_factory.proto (package envoy.extensions.udp_packet_writer.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Configuration for the default UDP packet writer factory which simply
 * uses the kernel's sendmsg() to send UDP packets.
 *
 * @generated from message envoy.extensions.udp_packet_writer.v3.UdpDefaultWriterFactory
 */
export declare class UdpDefaultWriterFactory extends Message<UdpDefaultWriterFactory> {
  constructor(data?: PartialMessage<UdpDefaultWriterFactory>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.udp_packet_writer.v3.UdpDefaultWriterFactory";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UdpDefaultWriterFactory;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UdpDefaultWriterFactory;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UdpDefaultWriterFactory;

  static equals(a: UdpDefaultWriterFactory | PlainMessage<UdpDefaultWriterFactory> | undefined, b: UdpDefaultWriterFactory | PlainMessage<UdpDefaultWriterFactory> | undefined): boolean;
}

