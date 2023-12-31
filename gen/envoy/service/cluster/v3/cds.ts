// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/service/cluster/v3/cds.proto" (package "envoy.service.cluster.v3", syntax proto3)
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
 * [#not-implemented-hide:] Not configuration. Workaround c++ protobuf issue with importing
 * services: https://github.com/google/protobuf/issues/4221 and protoxform to upgrade the file.
 *
 * @generated from protobuf message envoy.service.cluster.v3.CdsDummy
 */
export interface CdsDummy {
}
// @generated message type with reflection information, may provide speed optimized methods
class CdsDummy$Type extends MessageType<CdsDummy> {
    constructor() {
        super("envoy.service.cluster.v3.CdsDummy", [], { "udpa.annotations.versioning": { previousMessageType: "envoy.api.v2.CdsDummy" } });
    }
    create(value?: PartialMessage<CdsDummy>): CdsDummy {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<CdsDummy>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CdsDummy): CdsDummy {
        return target ?? this.create();
    }
    internalBinaryWrite(message: CdsDummy, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.cluster.v3.CdsDummy
 */
export const CdsDummy = new CdsDummy$Type();
/**
 * @generated ServiceType for protobuf service envoy.service.cluster.v3.ClusterDiscoveryService
 */
export const ClusterDiscoveryService = new ServiceType("envoy.service.cluster.v3.ClusterDiscoveryService", [
    { name: "StreamClusters", serverStreaming: true, clientStreaming: true, options: {}, I: DiscoveryRequest, O: DiscoveryResponse },
    { name: "DeltaClusters", serverStreaming: true, clientStreaming: true, options: {}, I: DeltaDiscoveryRequest, O: DeltaDiscoveryResponse },
    { name: "FetchClusters", options: { "google.api.http": { post: "/v3/discovery:clusters", body: "*" } }, I: DiscoveryRequest, O: DiscoveryResponse }
], { "envoy.annotations.resource": { type: "envoy.config.cluster.v3.Cluster" } });
