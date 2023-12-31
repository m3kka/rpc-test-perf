// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/internal_redirect/previous_routes/v3/previous_routes_config.proto" (package "envoy.extensions.internal_redirect.previous_routes.v3", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// [#protodoc-title: Previous routes internal redirect predicate]

/**
 * An internal redirect predicate that rejects redirect targets that are pointing
 * to a route that has been followed by a previous redirect from the current route.
 * [#extension: envoy.internal_redirect_predicates.previous_routes]
 *
 * @generated from protobuf message envoy.extensions.internal_redirect.previous_routes.v3.PreviousRoutesConfig
 */
export interface PreviousRoutesConfig {
}
// @generated message type with reflection information, may provide speed optimized methods
class PreviousRoutesConfig$Type extends MessageType<PreviousRoutesConfig> {
    constructor() {
        super("envoy.extensions.internal_redirect.previous_routes.v3.PreviousRoutesConfig", []);
    }
    create(value?: PartialMessage<PreviousRoutesConfig>): PreviousRoutesConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<PreviousRoutesConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreviousRoutesConfig): PreviousRoutesConfig {
        return target ?? this.create();
    }
    internalBinaryWrite(message: PreviousRoutesConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.internal_redirect.previous_routes.v3.PreviousRoutesConfig
 */
export const PreviousRoutesConfig = new PreviousRoutesConfig$Type();
