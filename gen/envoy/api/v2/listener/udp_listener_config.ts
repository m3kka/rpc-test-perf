// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/api/v2/listener/udp_listener_config.proto" (package "envoy.api.v2.listener", syntax proto3)
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
import { Any } from "../../../../google/protobuf/any";
import { Struct } from "../../../../google/protobuf/struct";
// [#protodoc-title: UDP Listener Config]
// Listener :ref:`configuration overview <config_listeners>`

/**
 * @generated from protobuf message envoy.api.v2.listener.UdpListenerConfig
 */
export interface UdpListenerConfig {
    /**
     * Used to look up UDP listener factory, matches "raw_udp_listener" or
     * "quic_listener" to create a specific udp listener.
     * If not specified, treat as "raw_udp_listener".
     *
     * @generated from protobuf field: string udp_listener_name = 1;
     */
    udpListenerName: string;
    /**
     * @generated from protobuf oneof: config_type
     */
    configType: {
        oneofKind: "config";
        /**
         * @deprecated
         * @generated from protobuf field: google.protobuf.Struct config = 2 [deprecated = true];
         */
        config: Struct;
    } | {
        oneofKind: "typedConfig";
        /**
         * @generated from protobuf field: google.protobuf.Any typed_config = 3;
         */
        typedConfig: Any;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message envoy.api.v2.listener.ActiveRawUdpListenerConfig
 */
export interface ActiveRawUdpListenerConfig {
}
// @generated message type with reflection information, may provide speed optimized methods
class UdpListenerConfig$Type extends MessageType<UdpListenerConfig> {
    constructor() {
        super("envoy.api.v2.listener.UdpListenerConfig", [
            { no: 1, name: "udp_listener_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "config", kind: "message", oneof: "configType", T: () => Struct },
            { no: 3, name: "typed_config", kind: "message", oneof: "configType", T: () => Any }
        ]);
    }
    create(value?: PartialMessage<UdpListenerConfig>): UdpListenerConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.udpListenerName = "";
        message.configType = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<UdpListenerConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UdpListenerConfig): UdpListenerConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string udp_listener_name */ 1:
                    message.udpListenerName = reader.string();
                    break;
                case /* google.protobuf.Struct config = 2 [deprecated = true];*/ 2:
                    message.configType = {
                        oneofKind: "config",
                        config: Struct.internalBinaryRead(reader, reader.uint32(), options, (message.configType as any).config)
                    };
                    break;
                case /* google.protobuf.Any typed_config */ 3:
                    message.configType = {
                        oneofKind: "typedConfig",
                        typedConfig: Any.internalBinaryRead(reader, reader.uint32(), options, (message.configType as any).typedConfig)
                    };
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
    internalBinaryWrite(message: UdpListenerConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string udp_listener_name = 1; */
        if (message.udpListenerName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.udpListenerName);
        /* google.protobuf.Struct config = 2 [deprecated = true]; */
        if (message.configType.oneofKind === "config")
            Struct.internalBinaryWrite(message.configType.config, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Any typed_config = 3; */
        if (message.configType.oneofKind === "typedConfig")
            Any.internalBinaryWrite(message.configType.typedConfig, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.api.v2.listener.UdpListenerConfig
 */
export const UdpListenerConfig = new UdpListenerConfig$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ActiveRawUdpListenerConfig$Type extends MessageType<ActiveRawUdpListenerConfig> {
    constructor() {
        super("envoy.api.v2.listener.ActiveRawUdpListenerConfig", []);
    }
    create(value?: PartialMessage<ActiveRawUdpListenerConfig>): ActiveRawUdpListenerConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<ActiveRawUdpListenerConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ActiveRawUdpListenerConfig): ActiveRawUdpListenerConfig {
        return target ?? this.create();
    }
    internalBinaryWrite(message: ActiveRawUdpListenerConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.api.v2.listener.ActiveRawUdpListenerConfig
 */
export const ActiveRawUdpListenerConfig = new ActiveRawUdpListenerConfig$Type();