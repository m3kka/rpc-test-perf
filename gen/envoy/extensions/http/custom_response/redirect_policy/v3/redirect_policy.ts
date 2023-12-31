// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/http/custom_response/redirect_policy/v3/redirect_policy.proto" (package "envoy.extensions.http.custom_response.redirect_policy.v3", syntax proto3)
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
import { TypedExtensionConfig } from "../../../../../config/core/v3/extension";
import { HeaderValueOption } from "../../../../../config/core/v3/base";
import { UInt32Value } from "../../../../../../google/protobuf/wrappers";
import { RedirectAction } from "../../../../../config/route/v3/route_components";
// [#protodoc-title: Redirect Policy for Custom Response]
// [#extension: envoy.http.custom_response.redirect_policy]

/**
 * Custom response policy to internally redirect the original response to a different
 * upstream.
 * [#next-free-field: 7]
 *
 * @generated from protobuf message envoy.extensions.http.custom_response.redirect_policy.v3.RedirectPolicy
 */
export interface RedirectPolicy {
    /**
     * @generated from protobuf oneof: redirect_action_specifier
     */
    redirectActionSpecifier: {
        oneofKind: "uri";
        /**
         * The Http URI to redirect the original request to, to get the custom
         * response.
         * It should be a full FQDN with protocol, host and path.
         *
         * Example:
         *
         * .. code-block:: yaml
         *
         *    uri: https://www.mydomain.com/path/to/404.txt
         *
         *
         * @generated from protobuf field: string uri = 1;
         */
        uri: string;
    } | {
        oneofKind: "redirectAction";
        /**
         * Specify elements of the redirect url individually.
         * Note: Do not specify the `response_code` field in `redirect_action`, use
         * `status_code` instead.
         * The following fields in `redirect_action` are currently not supported,
         * and specifying them will cause the config to be rejected:
         * - `prefix_rewrite`
         * - `regex_rewrite`
         *
         * @generated from protobuf field: envoy.config.route.v3.RedirectAction redirect_action = 2;
         */
        redirectAction: RedirectAction;
    } | {
        oneofKind: undefined;
    };
    /**
     * The new response status code if specified. This is used to override the
     * status code of the response from the new upstream if it is not an error status.
     *
     * @generated from protobuf field: google.protobuf.UInt32Value status_code = 3;
     */
    statusCode?: UInt32Value;
    /**
     * HTTP headers to add to the response. This allows the
     * response policy to append, to add or to override headers of
     * the original response for local body, or the custom response from the
     * remote body, before it is sent to a downstream client.
     * Note that these are not applied if the redirected response is an error
     * response.
     *
     * @generated from protobuf field: repeated envoy.config.core.v3.HeaderValueOption response_headers_to_add = 4;
     */
    responseHeadersToAdd: HeaderValueOption[];
    /**
     * HTTP headers to add to the request before it is internally redirected.
     *
     * @generated from protobuf field: repeated envoy.config.core.v3.HeaderValueOption request_headers_to_add = 5;
     */
    requestHeadersToAdd: HeaderValueOption[];
    /**
     * Custom action to modify request headers before selection of the
     * redirected route.
     * [#comment: TODO(pradeepcrao) add an extension category.]
     *
     * @generated from protobuf field: envoy.config.core.v3.TypedExtensionConfig modify_request_headers_action = 6;
     */
    modifyRequestHeadersAction?: TypedExtensionConfig;
}
// @generated message type with reflection information, may provide speed optimized methods
class RedirectPolicy$Type extends MessageType<RedirectPolicy> {
    constructor() {
        super("envoy.extensions.http.custom_response.redirect_policy.v3.RedirectPolicy", [
            { no: 1, name: "uri", kind: "scalar", oneof: "redirectActionSpecifier", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } },
            { no: 2, name: "redirect_action", kind: "message", oneof: "redirectActionSpecifier", T: () => RedirectAction },
            { no: 3, name: "status_code", kind: "message", T: () => UInt32Value, options: { "validate.rules": { uint32: { lte: 999, gte: 100 } } } },
            { no: 4, name: "response_headers_to_add", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HeaderValueOption, options: { "validate.rules": { repeated: { maxItems: "1000" } } } },
            { no: 5, name: "request_headers_to_add", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HeaderValueOption, options: { "validate.rules": { repeated: { maxItems: "1000" } } } },
            { no: 6, name: "modify_request_headers_action", kind: "message", T: () => TypedExtensionConfig }
        ]);
    }
    create(value?: PartialMessage<RedirectPolicy>): RedirectPolicy {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.redirectActionSpecifier = { oneofKind: undefined };
        message.responseHeadersToAdd = [];
        message.requestHeadersToAdd = [];
        if (value !== undefined)
            reflectionMergePartial<RedirectPolicy>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RedirectPolicy): RedirectPolicy {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string uri */ 1:
                    message.redirectActionSpecifier = {
                        oneofKind: "uri",
                        uri: reader.string()
                    };
                    break;
                case /* envoy.config.route.v3.RedirectAction redirect_action */ 2:
                    message.redirectActionSpecifier = {
                        oneofKind: "redirectAction",
                        redirectAction: RedirectAction.internalBinaryRead(reader, reader.uint32(), options, (message.redirectActionSpecifier as any).redirectAction)
                    };
                    break;
                case /* google.protobuf.UInt32Value status_code */ 3:
                    message.statusCode = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.statusCode);
                    break;
                case /* repeated envoy.config.core.v3.HeaderValueOption response_headers_to_add */ 4:
                    message.responseHeadersToAdd.push(HeaderValueOption.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated envoy.config.core.v3.HeaderValueOption request_headers_to_add */ 5:
                    message.requestHeadersToAdd.push(HeaderValueOption.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* envoy.config.core.v3.TypedExtensionConfig modify_request_headers_action */ 6:
                    message.modifyRequestHeadersAction = TypedExtensionConfig.internalBinaryRead(reader, reader.uint32(), options, message.modifyRequestHeadersAction);
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
    internalBinaryWrite(message: RedirectPolicy, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string uri = 1; */
        if (message.redirectActionSpecifier.oneofKind === "uri")
            writer.tag(1, WireType.LengthDelimited).string(message.redirectActionSpecifier.uri);
        /* envoy.config.route.v3.RedirectAction redirect_action = 2; */
        if (message.redirectActionSpecifier.oneofKind === "redirectAction")
            RedirectAction.internalBinaryWrite(message.redirectActionSpecifier.redirectAction, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value status_code = 3; */
        if (message.statusCode)
            UInt32Value.internalBinaryWrite(message.statusCode, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* repeated envoy.config.core.v3.HeaderValueOption response_headers_to_add = 4; */
        for (let i = 0; i < message.responseHeadersToAdd.length; i++)
            HeaderValueOption.internalBinaryWrite(message.responseHeadersToAdd[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* repeated envoy.config.core.v3.HeaderValueOption request_headers_to_add = 5; */
        for (let i = 0; i < message.requestHeadersToAdd.length; i++)
            HeaderValueOption.internalBinaryWrite(message.requestHeadersToAdd[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* envoy.config.core.v3.TypedExtensionConfig modify_request_headers_action = 6; */
        if (message.modifyRequestHeadersAction)
            TypedExtensionConfig.internalBinaryWrite(message.modifyRequestHeadersAction, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.http.custom_response.redirect_policy.v3.RedirectPolicy
 */
export const RedirectPolicy = new RedirectPolicy$Type();
