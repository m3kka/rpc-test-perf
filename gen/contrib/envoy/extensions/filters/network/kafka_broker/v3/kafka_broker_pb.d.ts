// @generated by protoc-gen-es v1.5.1
// @generated from file contrib/envoy/extensions/filters/network/kafka_broker/v3/kafka_broker.proto (package envoy.extensions.filters.network.kafka_broker.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message envoy.extensions.filters.network.kafka_broker.v3.KafkaBroker
 */
export declare class KafkaBroker extends Message<KafkaBroker> {
  /**
   * The prefix to use when emitting :ref:`statistics <config_network_filters_kafka_broker_stats>`.
   *
   * @generated from field: string stat_prefix = 1;
   */
  statPrefix: string;

  constructor(data?: PartialMessage<KafkaBroker>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.network.kafka_broker.v3.KafkaBroker";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): KafkaBroker;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): KafkaBroker;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): KafkaBroker;

  static equals(a: KafkaBroker | PlainMessage<KafkaBroker> | undefined, b: KafkaBroker | PlainMessage<KafkaBroker> | undefined): boolean;
}
