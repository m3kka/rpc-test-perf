// @generated by protoc-gen-es v1.5.1
// @generated from file contrib/envoy/extensions/private_key_providers/cryptomb/v3alpha/cryptomb.proto (package envoy.extensions.private_key_providers.cryptomb.v3alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, Duration, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { DataSource } from "../../../../../../envoy/config/core/v3/base_pb.js";

/**
 * A CryptoMbPrivateKeyMethodConfig message specifies how the CryptoMb private
 * key provider is configured. The private key provider provides ``SIMD``
 * processing for RSA sign and decrypt operations (ECDSA signing uses regular
 * BoringSSL functions). The provider works by gathering the operations into a
 * worker-thread specific queue, and processing the queue using ``ipp-crypto``
 * library when the queue is full or when a timer expires.
 * [#extension-category: envoy.tls.key_providers]
 *
 * @generated from message envoy.extensions.private_key_providers.cryptomb.v3alpha.CryptoMbPrivateKeyMethodConfig
 */
export declare class CryptoMbPrivateKeyMethodConfig extends Message<CryptoMbPrivateKeyMethodConfig> {
  /**
   * Private key to use in the private key provider. If set to inline_bytes or
   * inline_string, the value needs to be the private key in PEM format.
   *
   * @generated from field: envoy.config.core.v3.DataSource private_key = 1;
   */
  privateKey?: DataSource;

  /**
   * How long to wait until the per-thread processing queue should be
   * processed. If the processing queue gets full (eight sign or decrypt
   * requests are received) it is processed immediately. However, if the
   * queue is not filled before the delay has expired, the requests
   * already in the queue are processed, even if the queue is not full.
   * In effect, this value controls the balance between latency and
   * throughput. The duration needs to be set to a value greater than or equal to 1 millisecond.
   *
   * @generated from field: google.protobuf.Duration poll_delay = 2;
   */
  pollDelay?: Duration;

  constructor(data?: PartialMessage<CryptoMbPrivateKeyMethodConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.private_key_providers.cryptomb.v3alpha.CryptoMbPrivateKeyMethodConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CryptoMbPrivateKeyMethodConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CryptoMbPrivateKeyMethodConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CryptoMbPrivateKeyMethodConfig;

  static equals(a: CryptoMbPrivateKeyMethodConfig | PlainMessage<CryptoMbPrivateKeyMethodConfig> | undefined, b: CryptoMbPrivateKeyMethodConfig | PlainMessage<CryptoMbPrivateKeyMethodConfig> | undefined): boolean;
}

