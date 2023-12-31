// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/config/validators/minimum_clusters/v3/minimum_clusters.proto" (package "envoy.extensions.config.validators.minimum_clusters.v3", syntax proto3)
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
// [#protodoc-title: Minimum Clusters]
// [#extension: envoy.config.validators.minimum_clusters_validator]

/**
 * Validates a CDS config, and ensures that the number of clusters is above the
 * set threshold.
 *
 * @generated from protobuf message envoy.extensions.config.validators.minimum_clusters.v3.MinimumClustersValidator
 */
export interface MinimumClustersValidator {
    /**
     * The minimal clusters threshold. Any CDS config update leading to less than
     * this number will be rejected.
     * Default value is 0.
     *
     * @generated from protobuf field: uint32 min_clusters_num = 1;
     */
    minClustersNum: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class MinimumClustersValidator$Type extends MessageType<MinimumClustersValidator> {
    constructor() {
        super("envoy.extensions.config.validators.minimum_clusters.v3.MinimumClustersValidator", [
            { no: 1, name: "min_clusters_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<MinimumClustersValidator>): MinimumClustersValidator {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.minClustersNum = 0;
        if (value !== undefined)
            reflectionMergePartial<MinimumClustersValidator>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MinimumClustersValidator): MinimumClustersValidator {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 min_clusters_num */ 1:
                    message.minClustersNum = reader.uint32();
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
    internalBinaryWrite(message: MinimumClustersValidator, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 min_clusters_num = 1; */
        if (message.minClustersNum !== 0)
            writer.tag(1, WireType.Varint).uint32(message.minClustersNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.config.validators.minimum_clusters.v3.MinimumClustersValidator
 */
export const MinimumClustersValidator = new MinimumClustersValidator$Type();
