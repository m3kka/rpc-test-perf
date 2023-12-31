// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "contrib/envoy/extensions/vcl/v3alpha/vcl_socket_interface.proto" (package "envoy.extensions.vcl.v3alpha", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// [#protodoc-title: VCL socket interface configuration]
// VCL :ref:`configuration overview <config_sock_interface_vcl>`.
// [#extension: envoy.bootstrap.vcl]

/**
 * Configuration for vcl socket interface that relies on ``vpp`` ``comms`` library (VCL)
 *
 * @generated from protobuf message envoy.extensions.vcl.v3alpha.VclSocketInterface
 */
export interface VclSocketInterface {
}
// @generated message type with reflection information, may provide speed optimized methods
class VclSocketInterface$Type extends MessageType<VclSocketInterface> {
    constructor() {
        super("envoy.extensions.vcl.v3alpha.VclSocketInterface", []);
    }
    create(value?: PartialMessage<VclSocketInterface>): VclSocketInterface {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<VclSocketInterface>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VclSocketInterface): VclSocketInterface {
        return target ?? this.create();
    }
    internalBinaryWrite(message: VclSocketInterface, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.vcl.v3alpha.VclSocketInterface
 */
export const VclSocketInterface = new VclSocketInterface$Type();
