// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/service/extension/v3/config_discovery.proto" (package "envoy.service.extension.v3", syntax proto3)
// tslint:disable
import { DeltaDiscoveryResponse } from "../../discovery/v3/discovery";
import { DeltaDiscoveryRequest } from "../../discovery/v3/discovery";
import { DiscoveryResponse } from "../../discovery/v3/discovery";
import { DiscoveryRequest } from "../../discovery/v3/discovery";
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
 * [#not-implemented-hide:] Not configuration. Workaround c++ protobuf issue
 * with importing services: https://github.com/google/protobuf/issues/4221 and
 * protoxform to upgrade the file.
 *
 * @generated from protobuf message envoy.service.extension.v3.EcdsDummy
 */
export interface EcdsDummy {
}
// @generated message type with reflection information, may provide speed optimized methods
class EcdsDummy$Type extends MessageType<EcdsDummy> {
    constructor() {
        super("envoy.service.extension.v3.EcdsDummy", []);
    }
    create(value?: PartialMessage<EcdsDummy>): EcdsDummy {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<EcdsDummy>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EcdsDummy): EcdsDummy {
        return target ?? this.create();
    }
    internalBinaryWrite(message: EcdsDummy, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.extension.v3.EcdsDummy
 */
export const EcdsDummy = new EcdsDummy$Type();
/**
 * @generated ServiceType for protobuf service envoy.service.extension.v3.ExtensionConfigDiscoveryService
 */
export const ExtensionConfigDiscoveryService = new ServiceType("envoy.service.extension.v3.ExtensionConfigDiscoveryService", [
    { name: "StreamExtensionConfigs", serverStreaming: true, clientStreaming: true, options: {}, I: DiscoveryRequest, O: DiscoveryResponse },
    { name: "DeltaExtensionConfigs", serverStreaming: true, clientStreaming: true, options: {}, I: DeltaDiscoveryRequest, O: DeltaDiscoveryResponse },
    { name: "FetchExtensionConfigs", options: { "google.api.http": { post: "/v3/discovery:extension_configs", body: "*" } }, I: DiscoveryRequest, O: DiscoveryResponse }
], { "envoy.annotations.resource": { type: "envoy.config.core.v3.TypedExtensionConfig" } });
