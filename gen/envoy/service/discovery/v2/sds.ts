// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/service/discovery/v2/sds.proto" (package "envoy.service.discovery.v2", syntax proto3)
// tslint:disable
import { DiscoveryResponse } from "../../../api/v2/discovery";
import { DiscoveryRequest } from "../../../api/v2/discovery";
import { DeltaDiscoveryResponse } from "../../../api/v2/discovery";
import { DeltaDiscoveryRequest } from "../../../api/v2/discovery";
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
 * services: https://github.com/google/protobuf/issues/4221
 *
 * @generated from protobuf message envoy.service.discovery.v2.SdsDummy
 */
export interface SdsDummy {
}
// @generated message type with reflection information, may provide speed optimized methods
class SdsDummy$Type extends MessageType<SdsDummy> {
    constructor() {
        super("envoy.service.discovery.v2.SdsDummy", []);
    }
    create(value?: PartialMessage<SdsDummy>): SdsDummy {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<SdsDummy>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SdsDummy): SdsDummy {
        return target ?? this.create();
    }
    internalBinaryWrite(message: SdsDummy, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.discovery.v2.SdsDummy
 */
export const SdsDummy = new SdsDummy$Type();
/**
 * @generated ServiceType for protobuf service envoy.service.discovery.v2.SecretDiscoveryService
 */
export const SecretDiscoveryService = new ServiceType("envoy.service.discovery.v2.SecretDiscoveryService", [
    { name: "DeltaSecrets", serverStreaming: true, clientStreaming: true, options: {}, I: DeltaDiscoveryRequest, O: DeltaDiscoveryResponse },
    { name: "StreamSecrets", serverStreaming: true, clientStreaming: true, options: {}, I: DiscoveryRequest, O: DiscoveryResponse },
    { name: "FetchSecrets", options: { "google.api.http": { post: "/v2/discovery:secrets", body: "*" } }, I: DiscoveryRequest, O: DiscoveryResponse }
], { "envoy.annotations.resource": { type: "envoy.api.v2.auth.Secret" } });
