// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/filters/http/wasm/v3/wasm.proto" (package "envoy.extensions.filters.http.wasm.v3", syntax proto3)
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
import { PluginConfig } from "../../../../wasm/v3/wasm";
// [#protodoc-title: Wasm]
// [#extension: envoy.filters.http.wasm]
// Wasm :ref:`configuration overview <config_http_filters_wasm>`.

/**
 * @generated from protobuf message envoy.extensions.filters.http.wasm.v3.Wasm
 */
export interface Wasm {
    /**
     * General Plugin configuration.
     *
     * @generated from protobuf field: envoy.extensions.wasm.v3.PluginConfig config = 1;
     */
    config?: PluginConfig;
}
// @generated message type with reflection information, may provide speed optimized methods
class Wasm$Type extends MessageType<Wasm> {
    constructor() {
        super("envoy.extensions.filters.http.wasm.v3.Wasm", [
            { no: 1, name: "config", kind: "message", T: () => PluginConfig }
        ]);
    }
    create(value?: PartialMessage<Wasm>): Wasm {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<Wasm>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Wasm): Wasm {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.extensions.wasm.v3.PluginConfig config */ 1:
                    message.config = PluginConfig.internalBinaryRead(reader, reader.uint32(), options, message.config);
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
    internalBinaryWrite(message: Wasm, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.extensions.wasm.v3.PluginConfig config = 1; */
        if (message.config)
            PluginConfig.internalBinaryWrite(message.config, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.http.wasm.v3.Wasm
 */
export const Wasm = new Wasm$Type();
