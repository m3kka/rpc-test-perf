// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/config/transport_socket/alts/v2alpha/alts.proto" (package "envoy.config.transport_socket.alts.v2alpha", syntax proto3)
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
// [#protodoc-title: ALTS]
// [#extension: envoy.transport_sockets.alts]

/**
 * Configuration for ALTS transport socket. This provides Google's ALTS protocol to Envoy.
 * https://cloud.google.com/security/encryption-in-transit/application-layer-transport-security/
 *
 * @generated from protobuf message envoy.config.transport_socket.alts.v2alpha.Alts
 */
export interface Alts {
    /**
     * The location of a handshaker service, this is usually 169.254.169.254:8080
     * on GCE.
     *
     * @generated from protobuf field: string handshaker_service = 1;
     */
    handshakerService: string;
    /**
     * The acceptable service accounts from peer, peers not in the list will be rejected in the
     * handshake validation step. If empty, no validation will be performed.
     *
     * @generated from protobuf field: repeated string peer_service_accounts = 2;
     */
    peerServiceAccounts: string[];
}
// @generated message type with reflection information, may provide speed optimized methods
class Alts$Type extends MessageType<Alts> {
    constructor() {
        super("envoy.config.transport_socket.alts.v2alpha.Alts", [
            { no: 1, name: "handshaker_service", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minBytes: "1" } } } },
            { no: 2, name: "peer_service_accounts", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Alts>): Alts {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.handshakerService = "";
        message.peerServiceAccounts = [];
        if (value !== undefined)
            reflectionMergePartial<Alts>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Alts): Alts {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string handshaker_service */ 1:
                    message.handshakerService = reader.string();
                    break;
                case /* repeated string peer_service_accounts */ 2:
                    message.peerServiceAccounts.push(reader.string());
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
    internalBinaryWrite(message: Alts, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string handshaker_service = 1; */
        if (message.handshakerService !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.handshakerService);
        /* repeated string peer_service_accounts = 2; */
        for (let i = 0; i < message.peerServiceAccounts.length; i++)
            writer.tag(2, WireType.LengthDelimited).string(message.peerServiceAccounts[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.config.transport_socket.alts.v2alpha.Alts
 */
export const Alts = new Alts$Type();
