// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/internal_redirect/safe_cross_scheme/v3/safe_cross_scheme_config.proto" (package "envoy.extensions.internal_redirect.safe_cross_scheme.v3", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// [#protodoc-title: SafeCrossScheme internal redirect predicate]

/**
 * An internal redirect predicate that checks the scheme between the
 * downstream url and the redirect target url and allows a) same scheme
 * redirect and b) safe cross scheme redirect, which means if the downstream
 * scheme is HTTPS, both HTTPS and HTTP redirect targets are allowed, but if the
 * downstream scheme is HTTP, only HTTP redirect targets are allowed.
 * [#extension: envoy.internal_redirect_predicates.safe_cross_scheme]
 *
 * @generated from protobuf message envoy.extensions.internal_redirect.safe_cross_scheme.v3.SafeCrossSchemeConfig
 */
export interface SafeCrossSchemeConfig {
}
// @generated message type with reflection information, may provide speed optimized methods
class SafeCrossSchemeConfig$Type extends MessageType<SafeCrossSchemeConfig> {
    constructor() {
        super("envoy.extensions.internal_redirect.safe_cross_scheme.v3.SafeCrossSchemeConfig", []);
    }
    create(value?: PartialMessage<SafeCrossSchemeConfig>): SafeCrossSchemeConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<SafeCrossSchemeConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SafeCrossSchemeConfig): SafeCrossSchemeConfig {
        return target ?? this.create();
    }
    internalBinaryWrite(message: SafeCrossSchemeConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.internal_redirect.safe_cross_scheme.v3.SafeCrossSchemeConfig
 */
export const SafeCrossSchemeConfig = new SafeCrossSchemeConfig$Type();
