// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/path/rewrite/uri_template/v3/uri_template_rewrite.proto" (package "envoy.extensions.path.rewrite.uri_template.v3", syntax proto3)
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
// [#protodoc-title: Uri Template Rewrite Config]
// [#extension: envoy.path.rewrite.uri_template.uri_template_rewriter]

/**
 * Indicates that during forwarding, portions of the path that match the
 * pattern should be rewritten, even allowing the substitution of variables
 * from the match pattern into the new path as specified by the rewrite template.
 * This is useful to allow application paths to be
 * rewritten in a way that is aware of segments with variable content like
 * identifiers. The router filter will place the original path as it was
 * before the rewrite into the :ref:`x-envoy-original-path
 * <config_http_filters_router_x-envoy-original-path>` header.
 *
 * Only one of :ref:`prefix_rewrite <envoy_v3_api_field_config.route.v3.RouteAction.prefix_rewrite>`,
 * :ref:`regex_rewrite <envoy_v3_api_field_config.route.v3.RouteAction.regex_rewrite>`,
 * or *path_template_rewrite* may be specified.
 *
 * Template pattern matching types:
 *
 * * ``*`` : Matches a single path component, up to the next path separator: /
 *
 * * ``**`` : Matches zero or more path segments. If present, must be the last operator.
 *
 * * ``{name} or {name=*}`` :  A named variable matching one path segment up to the next path separator: /.
 *
 * * ``{name=videos/*}`` : A named variable matching more than one path segment.
 *      The path component matching videos/* is captured as the named variable.
 *
 * * ``{name=**}`` : A named variable matching zero or more path segments.
 *
 * Only named matches can be used to perform rewrites.
 *
 * Examples using path_template_rewrite:
 *
 * * The pattern ``/{one}/{two}`` paired with a substitution string of ``/{two}/{one}`` would
 *   transform ``/cat/dog`` into ``/dog/cat``.
 *
 * * The pattern ``/videos/{language=lang/*}/*`` paired with a substitution string of
 *   ``/{language}`` would transform ``/videos/lang/en/video.m4s`` into ``lang/en``.
 *
 * * The path pattern ``/content/{format}/{lang}/{id}/{file}.vtt`` paired with a substitution
 *   string of ``/{lang}/{format}/{file}.vtt`` would transform ``/content/hls/en-us/12345/en_193913.vtt``
 *   into ``/en-us/hls/en_193913.vtt``.
 *
 * @generated from protobuf message envoy.extensions.path.rewrite.uri_template.v3.UriTemplateRewriteConfig
 */
export interface UriTemplateRewriteConfig {
    /**
     * @generated from protobuf field: string path_template_rewrite = 1;
     */
    pathTemplateRewrite: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class UriTemplateRewriteConfig$Type extends MessageType<UriTemplateRewriteConfig> {
    constructor() {
        super("envoy.extensions.path.rewrite.uri_template.v3.UriTemplateRewriteConfig", [
            { no: 1, name: "path_template_rewrite", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1", maxLen: "256" } } } }
        ]);
    }
    create(value?: PartialMessage<UriTemplateRewriteConfig>): UriTemplateRewriteConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.pathTemplateRewrite = "";
        if (value !== undefined)
            reflectionMergePartial<UriTemplateRewriteConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UriTemplateRewriteConfig): UriTemplateRewriteConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string path_template_rewrite */ 1:
                    message.pathTemplateRewrite = reader.string();
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
    internalBinaryWrite(message: UriTemplateRewriteConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string path_template_rewrite = 1; */
        if (message.pathTemplateRewrite !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.pathTemplateRewrite);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.path.rewrite.uri_template.v3.UriTemplateRewriteConfig
 */
export const UriTemplateRewriteConfig = new UriTemplateRewriteConfig$Type();
