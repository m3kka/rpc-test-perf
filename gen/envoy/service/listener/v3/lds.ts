// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/service/listener/v3/lds.proto" (package "envoy.service.listener.v3", syntax proto3)
// tslint:disable
import { DiscoveryResponse } from "../../discovery/v3/discovery";
import { DiscoveryRequest } from "../../discovery/v3/discovery";
import { DeltaDiscoveryResponse } from "../../discovery/v3/discovery";
import { DeltaDiscoveryRequest } from "../../discovery/v3/discovery";
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
 * @generated from protobuf message envoy.service.listener.v3.LdsDummy
 */
export interface LdsDummy {
}
// @generated message type with reflection information, may provide speed optimized methods
class LdsDummy$Type extends MessageType<LdsDummy> {
    constructor() {
        super("envoy.service.listener.v3.LdsDummy", [], { "udpa.annotations.versioning": { previousMessageType: "envoy.api.v2.LdsDummy" } });
    }
    create(value?: PartialMessage<LdsDummy>): LdsDummy {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<LdsDummy>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LdsDummy): LdsDummy {
        return target ?? this.create();
    }
    internalBinaryWrite(message: LdsDummy, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.listener.v3.LdsDummy
 */
export const LdsDummy = new LdsDummy$Type();
/**
 * @generated ServiceType for protobuf service envoy.service.listener.v3.ListenerDiscoveryService
 */
export const ListenerDiscoveryService = new ServiceType("envoy.service.listener.v3.ListenerDiscoveryService", [
    { name: "DeltaListeners", serverStreaming: true, clientStreaming: true, options: {}, I: DeltaDiscoveryRequest, O: DeltaDiscoveryResponse },
    { name: "StreamListeners", serverStreaming: true, clientStreaming: true, options: {}, I: DiscoveryRequest, O: DiscoveryResponse },
    { name: "FetchListeners", options: { "google.api.http": { post: "/v3/discovery:listeners", body: "*" } }, I: DiscoveryRequest, O: DiscoveryResponse }
], { "envoy.annotations.resource": { type: "envoy.config.listener.v3.Listener" } });
