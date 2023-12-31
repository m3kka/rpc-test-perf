// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/api/v2/listener/quic_config.proto" (package "envoy.api.v2.listener", syntax proto3)
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
import { Duration } from "../../../../google/protobuf/duration";
import { UInt32Value } from "../../../../google/protobuf/wrappers";
// [#protodoc-title: QUIC listener Config]

/**
 * Configuration specific to the QUIC protocol.
 * Next id: 4
 *
 * @generated from protobuf message envoy.api.v2.listener.QuicProtocolOptions
 */
export interface QuicProtocolOptions {
    /**
     * Maximum number of streams that the client can negotiate per connection. 100
     * if not specified.
     *
     * @generated from protobuf field: google.protobuf.UInt32Value max_concurrent_streams = 1;
     */
    maxConcurrentStreams?: UInt32Value;
    /**
     * Maximum number of milliseconds that connection will be alive when there is
     * no network activity. 300000ms if not specified.
     *
     * @generated from protobuf field: google.protobuf.Duration idle_timeout = 2;
     */
    idleTimeout?: Duration;
    /**
     * Connection timeout in milliseconds before the crypto handshake is finished.
     * 20000ms if not specified.
     *
     * @generated from protobuf field: google.protobuf.Duration crypto_handshake_timeout = 3;
     */
    cryptoHandshakeTimeout?: Duration;
}
// @generated message type with reflection information, may provide speed optimized methods
class QuicProtocolOptions$Type extends MessageType<QuicProtocolOptions> {
    constructor() {
        super("envoy.api.v2.listener.QuicProtocolOptions", [
            { no: 1, name: "max_concurrent_streams", kind: "message", T: () => UInt32Value },
            { no: 2, name: "idle_timeout", kind: "message", T: () => Duration },
            { no: 3, name: "crypto_handshake_timeout", kind: "message", T: () => Duration }
        ]);
    }
    create(value?: PartialMessage<QuicProtocolOptions>): QuicProtocolOptions {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<QuicProtocolOptions>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QuicProtocolOptions): QuicProtocolOptions {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.UInt32Value max_concurrent_streams */ 1:
                    message.maxConcurrentStreams = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.maxConcurrentStreams);
                    break;
                case /* google.protobuf.Duration idle_timeout */ 2:
                    message.idleTimeout = Duration.internalBinaryRead(reader, reader.uint32(), options, message.idleTimeout);
                    break;
                case /* google.protobuf.Duration crypto_handshake_timeout */ 3:
                    message.cryptoHandshakeTimeout = Duration.internalBinaryRead(reader, reader.uint32(), options, message.cryptoHandshakeTimeout);
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
    internalBinaryWrite(message: QuicProtocolOptions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.UInt32Value max_concurrent_streams = 1; */
        if (message.maxConcurrentStreams)
            UInt32Value.internalBinaryWrite(message.maxConcurrentStreams, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration idle_timeout = 2; */
        if (message.idleTimeout)
            Duration.internalBinaryWrite(message.idleTimeout, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration crypto_handshake_timeout = 3; */
        if (message.cryptoHandshakeTimeout)
            Duration.internalBinaryWrite(message.cryptoHandshakeTimeout, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.api.v2.listener.QuicProtocolOptions
 */
export const QuicProtocolOptions = new QuicProtocolOptions$Type();
