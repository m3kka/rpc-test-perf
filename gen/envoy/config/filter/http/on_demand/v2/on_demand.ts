// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/config/filter/http/on_demand/v2/on_demand.proto" (package "envoy.config.filter.http.on_demand.v2", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// [#protodoc-title: OnDemand]
// IP tagging :ref:`configuration overview <config_http_filters_on_demand>`.
// [#extension: envoy.filters.http.on_demand]

/**
 * @generated from protobuf message envoy.config.filter.http.on_demand.v2.OnDemand
 */
export interface OnDemand {
}
// @generated message type with reflection information, may provide speed optimized methods
class OnDemand$Type extends MessageType<OnDemand> {
    constructor() {
        super("envoy.config.filter.http.on_demand.v2.OnDemand", []);
    }
    create(value?: PartialMessage<OnDemand>): OnDemand {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<OnDemand>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OnDemand): OnDemand {
        return target ?? this.create();
    }
    internalBinaryWrite(message: OnDemand, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.config.filter.http.on_demand.v2.OnDemand
 */
export const OnDemand = new OnDemand$Type();
