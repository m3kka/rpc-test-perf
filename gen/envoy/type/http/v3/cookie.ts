// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/type/http/v3/cookie.proto" (package "envoy.type.http.v3", syntax proto3)
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
// [#protodoc-title: HTTP cookie API]

/**
 * Cookie defines an API for obtaining or generating HTTP cookie.
 *
 * @generated from protobuf message envoy.type.http.v3.Cookie
 */
export interface Cookie {
    /**
     * The name that will be used to obtain cookie value from downstream HTTP request or generate
     * new cookie for downstream.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * Duration of cookie. This will be used to set the expiry time of a new cookie when it is
     * generated. Set this to 0 to use a session cookie.
     *
     * @generated from protobuf field: google.protobuf.Duration ttl = 2;
     */
    ttl?: Duration;
    /**
     * Path of cookie. This will be used to set the path of a new cookie when it is generated.
     * If no path is specified here, no path will be set for the cookie.
     *
     * @generated from protobuf field: string path = 3;
     */
    path: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class Cookie$Type extends MessageType<Cookie> {
    constructor() {
        super("envoy.type.http.v3.Cookie", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } },
            { no: 2, name: "ttl", kind: "message", T: () => Duration, options: { "validate.rules": { duration: { gte: {} } } } },
            { no: 3, name: "path", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Cookie>): Cookie {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.name = "";
        message.path = "";
        if (value !== undefined)
            reflectionMergePartial<Cookie>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Cookie): Cookie {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* google.protobuf.Duration ttl */ 2:
                    message.ttl = Duration.internalBinaryRead(reader, reader.uint32(), options, message.ttl);
                    break;
                case /* string path */ 3:
                    message.path = reader.string();
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
    internalBinaryWrite(message: Cookie, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* google.protobuf.Duration ttl = 2; */
        if (message.ttl)
            Duration.internalBinaryWrite(message.ttl, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* string path = 3; */
        if (message.path !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.path);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.type.http.v3.Cookie
 */
export const Cookie = new Cookie$Type();