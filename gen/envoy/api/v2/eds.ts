// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/api/v2/eds.proto" (package "envoy.api.v2", syntax proto3)
// tslint:disable
import { DeltaDiscoveryResponse } from "./discovery";
import { DeltaDiscoveryRequest } from "./discovery";
import { DiscoveryResponse } from "./discovery";
import { DiscoveryRequest } from "./discovery";
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * [#not-implemented-hide:] Not configuration. Workaround c++ protobuf issue with importing
 * services: https://github.com/google/protobuf/issues/4221 and protoxform to upgrade the file.
 *
 * @generated from protobuf message envoy.api.v2.EdsDummy
 */
export interface EdsDummy {
}
// @generated message type with reflection information, may provide speed optimized methods
class EdsDummy$Type extends MessageType<EdsDummy> {
    constructor() {
        super("envoy.api.v2.EdsDummy", []);
    }
    create(value?: PartialMessage<EdsDummy>): EdsDummy {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<EdsDummy>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EdsDummy): EdsDummy {
        return target ?? this.create();
    }
    internalBinaryWrite(message: EdsDummy, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.api.v2.EdsDummy
 */
export const EdsDummy = new EdsDummy$Type();
/**
 * @generated ServiceType for protobuf service envoy.api.v2.EndpointDiscoveryService
 */
export const EndpointDiscoveryService = new ServiceType("envoy.api.v2.EndpointDiscoveryService", [
    { name: "StreamEndpoints", serverStreaming: true, clientStreaming: true, options: {}, I: DiscoveryRequest, O: DiscoveryResponse },
    { name: "DeltaEndpoints", serverStreaming: true, clientStreaming: true, options: {}, I: DeltaDiscoveryRequest, O: DeltaDiscoveryResponse },
    { name: "FetchEndpoints", options: { "google.api.http": { post: "/v2/discovery:endpoints", body: "*" } }, I: DiscoveryRequest, O: DiscoveryResponse }
], { "envoy.annotations.resource": { type: "envoy.api.v2.ClusterLoadAssignment" } });