// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/filters/http/set_metadata/v3/set_metadata.proto" (package "envoy.extensions.filters.http.set_metadata.v3", syntax proto3)
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
import { Struct } from "../../../../../../google/protobuf/struct";
// [#protodoc-title: Set-Metadata Filter]
// 
// This filters adds or updates dynamic metadata with static data.
// 
// [#extension: envoy.filters.http.set_metadata]

/**
 * @generated from protobuf message envoy.extensions.filters.http.set_metadata.v3.Config
 */
export interface Config {
    /**
     * The metadata namespace.
     *
     * @generated from protobuf field: string metadata_namespace = 1;
     */
    metadataNamespace: string;
    /**
     * The value to update the namespace with. See
     * :ref:`the filter documentation <config_http_filters_set_metadata>` for
     * more information on how this value is merged with potentially existing
     * ones.
     *
     * @generated from protobuf field: google.protobuf.Struct value = 2;
     */
    value?: Struct;
}
// @generated message type with reflection information, may provide speed optimized methods
class Config$Type extends MessageType<Config> {
    constructor() {
        super("envoy.extensions.filters.http.set_metadata.v3.Config", [
            { no: 1, name: "metadata_namespace", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } },
            { no: 2, name: "value", kind: "message", T: () => Struct }
        ]);
    }
    create(value?: PartialMessage<Config>): Config {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.metadataNamespace = "";
        if (value !== undefined)
            reflectionMergePartial<Config>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Config): Config {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string metadata_namespace */ 1:
                    message.metadataNamespace = reader.string();
                    break;
                case /* google.protobuf.Struct value */ 2:
                    message.value = Struct.internalBinaryRead(reader, reader.uint32(), options, message.value);
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
    internalBinaryWrite(message: Config, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string metadata_namespace = 1; */
        if (message.metadataNamespace !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.metadataNamespace);
        /* google.protobuf.Struct value = 2; */
        if (message.value)
            Struct.internalBinaryWrite(message.value, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.http.set_metadata.v3.Config
 */
export const Config = new Config$Type();
