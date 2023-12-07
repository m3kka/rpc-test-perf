// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/http/stateful_session/cookie/v3/cookie.proto" (package "envoy.extensions.http.stateful_session.cookie.v3", syntax proto3)
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
import { Cookie } from "../../../../../type/http/v3/cookie";
// [#protodoc-title: Cookie based stateful session extension]

/**
 * This extension allows the session state to be tracked via cookies.
 *
 * This extension first encodes the address of the upstream host selected by the load balancer
 * into a ``set-cookie`` response header with the :ref:`cookie configuration
 * <envoy_v3_api_field_extensions.http.stateful_session.cookie.v3.CookieBasedSessionState.cookie>`.
 * when new requests are incoming, this extension will try to parse the specific upstream host
 * address by the cookie name. If the address parsed from the cookie corresponds to a valid
 * upstream host, this upstream host will be selected first. See :ref:`stateful session filter
 * <envoy_v3_api_msg_extensions.filters.http.stateful_session.v3.StatefulSession>`.
 *
 * For example, if the cookie name is set to ``sticky-host``, envoy will prefer ``1.2.3.4:80``
 * as the upstream host when the request contains the following header:
 *
 * .. code-block:: none
 *
 *     cookie: sticky-host="MS4yLjMuNDo4MA=="
 *
 * When processing the upstream response, if ``1.2.3.4:80`` is indeed the final choice the extension
 * does nothing. If ``1.2.3.4:80`` is not the final choice, the new selected host will be used to
 * update the cookie (via the ``set-cookie`` response header).
 *
 * [#extension: envoy.http.stateful_session.cookie]
 *
 * @generated from protobuf message envoy.extensions.http.stateful_session.cookie.v3.CookieBasedSessionState
 */
export interface CookieBasedSessionState {
    /**
     * The cookie configuration used to track session state.
     *
     * @generated from protobuf field: envoy.type.http.v3.Cookie cookie = 1;
     */
    cookie?: Cookie;
}
// @generated message type with reflection information, may provide speed optimized methods
class CookieBasedSessionState$Type extends MessageType<CookieBasedSessionState> {
    constructor() {
        super("envoy.extensions.http.stateful_session.cookie.v3.CookieBasedSessionState", [
            { no: 1, name: "cookie", kind: "message", T: () => Cookie, options: { "validate.rules": { message: { required: true } } } }
        ]);
    }
    create(value?: PartialMessage<CookieBasedSessionState>): CookieBasedSessionState {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<CookieBasedSessionState>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CookieBasedSessionState): CookieBasedSessionState {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.type.http.v3.Cookie cookie */ 1:
                    message.cookie = Cookie.internalBinaryRead(reader, reader.uint32(), options, message.cookie);
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
    internalBinaryWrite(message: CookieBasedSessionState, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.type.http.v3.Cookie cookie = 1; */
        if (message.cookie)
            Cookie.internalBinaryWrite(message.cookie, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.http.stateful_session.cookie.v3.CookieBasedSessionState
 */
export const CookieBasedSessionState = new CookieBasedSessionState$Type();
