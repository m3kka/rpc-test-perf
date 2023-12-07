// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/filter/network/zookeeper_proxy/v1alpha1/zookeeper_proxy.proto (package envoy.config.filter.network.zookeeper_proxy.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message envoy.config.filter.network.zookeeper_proxy.v1alpha1.ZooKeeperProxy
 */
export declare class ZooKeeperProxy extends Message<ZooKeeperProxy> {
  /**
   * The human readable prefix to use when emitting :ref:`statistics
   * <config_network_filters_zookeeper_proxy_stats>`.
   *
   * @generated from field: string stat_prefix = 1;
   */
  statPrefix: string;

  /**
   * [#not-implemented-hide:] The optional path to use for writing ZooKeeper access logs.
   * If the access log field is empty, access logs will not be written.
   *
   * @generated from field: string access_log = 2;
   */
  accessLog: string;

  /**
   * Messages — requests, responses and events — that are bigger than this value will
   * be ignored. If it is not set, the default value is 1Mb.
   *
   * The value here should match the jute.maxbuffer property in your cluster configuration:
   *
   * https://zookeeper.apache.org/doc/r3.4.10/zookeeperAdmin.html#Unsafe+Options
   *
   * if that is set. If it isn't, ZooKeeper's default is also 1Mb.
   *
   * @generated from field: google.protobuf.UInt32Value max_packet_bytes = 3;
   */
  maxPacketBytes?: number;

  constructor(data?: PartialMessage<ZooKeeperProxy>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.filter.network.zookeeper_proxy.v1alpha1.ZooKeeperProxy";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ZooKeeperProxy;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ZooKeeperProxy;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ZooKeeperProxy;

  static equals(a: ZooKeeperProxy | PlainMessage<ZooKeeperProxy> | undefined, b: ZooKeeperProxy | PlainMessage<ZooKeeperProxy> | undefined): boolean;
}

