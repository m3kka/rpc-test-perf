// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/service/discovery/v2/rtds.proto" (package "envoy.service.discovery.v2", syntax proto3)
// tslint:disable
import { DeltaDiscoveryResponse } from "../../../api/v2/discovery";
import { DeltaDiscoveryRequest } from "../../../api/v2/discovery";
import { DiscoveryResponse } from "../../../api/v2/discovery";
import { DiscoveryRequest } from "../../../api/v2/discovery";
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Struct } from "../../../../google/protobuf/struct";
/**
 * [#not-implemented-hide:] Not configuration. Workaround c++ protobuf issue with importing
 * services: https://github.com/google/protobuf/issues/4221
 *
 * @generated from protobuf message envoy.service.discovery.v2.RtdsDummy
 */
export interface RtdsDummy {
}
/**
 * RTDS resource type. This describes a layer in the runtime virtual filesystem.
 *
 * @generated from protobuf message envoy.service.discovery.v2.Runtime
 */
export interface Runtime {
    /**
     * Runtime resource name. This makes the Runtime a self-describing xDS
     * resource.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: google.protobuf.Struct layer = 2;
     */
    layer?: Struct;
}
// @generated message type with reflection information, may provide speed optimized methods
class RtdsDummy$Type extends MessageType<RtdsDummy> {
    constructor() {
        super("envoy.service.discovery.v2.RtdsDummy", []);
    }
    create(value?: PartialMessage<RtdsDummy>): RtdsDummy {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<RtdsDummy>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RtdsDummy): RtdsDummy {
        return target ?? this.create();
    }
    internalBinaryWrite(message: RtdsDummy, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.discovery.v2.RtdsDummy
 */
export const RtdsDummy = new RtdsDummy$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Runtime$Type extends MessageType<Runtime> {
    constructor() {
        super("envoy.service.discovery.v2.Runtime", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minBytes: "1" } } } },
            { no: 2, name: "layer", kind: "message", T: () => Struct }
        ]);
    }
    create(value?: PartialMessage<Runtime>): Runtime {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.name = "";
        if (value !== undefined)
            reflectionMergePartial<Runtime>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Runtime): Runtime {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* google.protobuf.Struct layer */ 2:
                    message.layer = Struct.internalBinaryRead(reader, reader.uint32(), options, message.layer);
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
    internalBinaryWrite(message: Runtime, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* google.protobuf.Struct layer = 2; */
        if (message.layer)
            Struct.internalBinaryWrite(message.layer, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.discovery.v2.Runtime
 */
export const Runtime = new Runtime$Type();
/**
 * @generated ServiceType for protobuf service envoy.service.discovery.v2.RuntimeDiscoveryService
 */
export const RuntimeDiscoveryService = new ServiceType("envoy.service.discovery.v2.RuntimeDiscoveryService", [
    { name: "StreamRuntime", serverStreaming: true, clientStreaming: true, options: {}, I: DiscoveryRequest, O: DiscoveryResponse },
    { name: "DeltaRuntime", serverStreaming: true, clientStreaming: true, options: {}, I: DeltaDiscoveryRequest, O: DeltaDiscoveryResponse },
    { name: "FetchRuntime", options: { "google.api.http": { post: "/v2/discovery:runtime", body: "*" } }, I: DiscoveryRequest, O: DiscoveryResponse }
], { "envoy.annotations.resource": { type: "envoy.service.discovery.v2.Runtime" } });
