// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/filters/network/connection_limit/v3/connection_limit.proto" (package "envoy.extensions.filters.network.connection_limit.v3", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { RuntimeFeatureFlag } from "../../../../../config/core/v3/base";
import { Duration } from "../../../../../../google/protobuf/duration";
import { UInt64Value } from "../../../../../../google/protobuf/wrappers";
// [#protodoc-title: Connection limit]
// Connection limit :ref:`configuration overview <config_network_filters_connection_limit>`.
// [#extension: envoy.filters.network.connection_limit]

/**
 * @generated from protobuf message envoy.extensions.filters.network.connection_limit.v3.ConnectionLimit
 */
export interface ConnectionLimit {
    /**
     * The prefix to use when emitting :ref:`statistics
     * <config_network_filters_connection_limit_stats>`.
     *
     * @generated from protobuf field: string stat_prefix = 1;
     */
    statPrefix: string;
    /**
     * The max connections configuration to use for new incoming connections that are processed
     * by the filter's filter chain. When max_connection is reached, the incoming connection
     * will be closed after delay duration.
     *
     * @generated from protobuf field: google.protobuf.UInt64Value max_connections = 2;
     */
    maxConnections?: UInt64Value;
    /**
     * The delay configuration to use for rejecting the connection after some specified time duration
     * instead of immediately rejecting the connection. That way, a malicious user is not able to
     * retry as fast as possible which provides a better DoS protection for Envoy. If this is not present,
     * the connection will be closed immediately.
     *
     * @generated from protobuf field: google.protobuf.Duration delay = 3;
     */
    delay?: Duration;
    /**
     * Runtime flag that controls whether the filter is enabled or not. If not specified, defaults
     * to enabled.
     *
     * @generated from protobuf field: envoy.config.core.v3.RuntimeFeatureFlag runtime_enabled = 4;
     */
    runtimeEnabled?: RuntimeFeatureFlag;
}
// @generated message type with reflection information, may provide speed optimized methods
class ConnectionLimit$Type extends MessageType<ConnectionLimit> {
    constructor() {
        super("envoy.extensions.filters.network.connection_limit.v3.ConnectionLimit", [
            { no: 1, name: "stat_prefix", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } },
            { no: 2, name: "max_connections", kind: "message", T: () => UInt64Value, options: { "validate.rules": { uint64: { gte: "1" } } } },
            { no: 3, name: "delay", kind: "message", T: () => Duration },
            { no: 4, name: "runtime_enabled", kind: "message", T: () => RuntimeFeatureFlag }
        ]);
    }
    create(value?: PartialMessage<ConnectionLimit>): ConnectionLimit {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.statPrefix = "";
        if (value !== undefined)
            reflectionMergePartial<ConnectionLimit>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConnectionLimit): ConnectionLimit {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string stat_prefix */ 1:
                    message.statPrefix = reader.string();
                    break;
                case /* google.protobuf.UInt64Value max_connections */ 2:
                    message.maxConnections = UInt64Value.internalBinaryRead(reader, reader.uint32(), options, message.maxConnections);
                    break;
                case /* google.protobuf.Duration delay */ 3:
                    message.delay = Duration.internalBinaryRead(reader, reader.uint32(), options, message.delay);
                    break;
                case /* envoy.config.core.v3.RuntimeFeatureFlag runtime_enabled */ 4:
                    message.runtimeEnabled = RuntimeFeatureFlag.internalBinaryRead(reader, reader.uint32(), options, message.runtimeEnabled);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ConnectionLimit, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string stat_prefix = 1; */
        if (message.statPrefix !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.statPrefix);
        /* google.protobuf.UInt64Value max_connections = 2; */
        if (message.maxConnections)
            UInt64Value.internalBinaryWrite(message.maxConnections, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration delay = 3; */
        if (message.delay)
            Duration.internalBinaryWrite(message.delay, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* envoy.config.core.v3.RuntimeFeatureFlag runtime_enabled = 4; */
        if (message.runtimeEnabled)
            RuntimeFeatureFlag.internalBinaryWrite(message.runtimeEnabled, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.network.connection_limit.v3.ConnectionLimit
 */
export const ConnectionLimit = new ConnectionLimit$Type();