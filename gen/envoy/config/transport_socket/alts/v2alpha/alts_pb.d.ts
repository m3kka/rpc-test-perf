// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/transport_socket/alts/v2alpha/alts.proto (package envoy.config.transport_socket.alts.v2alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Configuration for ALTS transport socket. This provides Google's ALTS protocol to Envoy.
 * https://cloud.google.com/security/encryption-in-transit/application-layer-transport-security/
 *
 * @generated from message envoy.config.transport_socket.alts.v2alpha.Alts
 */
export declare class Alts extends Message<Alts> {
  /**
   * The location of a handshaker service, this is usually 169.254.169.254:8080
   * on GCE.
   *
   * @generated from field: string handshaker_service = 1;
   */
  handshakerService: string;

  /**
   * The acceptable service accounts from peer, peers not in the list will be rejected in the
   * handshake validation step. If empty, no validation will be performed.
   *
   * @generated from field: repeated string peer_service_accounts = 2;
   */
  peerServiceAccounts: string[];

  constructor(data?: PartialMessage<Alts>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.transport_socket.alts.v2alpha.Alts";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Alts;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Alts;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Alts;

  static equals(a: Alts | PlainMessage<Alts> | undefined, b: Alts | PlainMessage<Alts> | undefined): boolean;
}

