// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/http/ext_authz/v3/ext_authz.proto (package envoy.extensions.filters.http.ext_authz.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { GrpcService } from "../../../../../config/core/v3/grpc_service_pb.js";
import type { ApiVersion } from "../../../../../config/core/v3/config_source_pb.js";
import type { HttpStatus } from "../../../../../type/v3/http_status_pb.js";
import type { HeaderValue, RuntimeFeatureFlag, RuntimeFractionalPercent } from "../../../../../config/core/v3/base_pb.js";
import type { MetadataMatcher } from "../../../../../type/matcher/v3/metadata_pb.js";
import type { ListStringMatcher } from "../../../../../type/matcher/v3/string_pb.js";
import type { HttpUri } from "../../../../../config/core/v3/http_uri_pb.js";

/**
 * [#next-free-field: 19]
 *
 * @generated from message envoy.extensions.filters.http.ext_authz.v3.ExtAuthz
 */
export declare class ExtAuthz extends Message<ExtAuthz> {
  /**
   * External authorization service configuration.
   *
   * @generated from oneof envoy.extensions.filters.http.ext_authz.v3.ExtAuthz.services
   */
  services: {
    /**
     * gRPC service configuration (default timeout: 200ms).
     *
     * @generated from field: envoy.config.core.v3.GrpcService grpc_service = 1;
     */
    value: GrpcService;
    case: "grpcService";
  } | {
    /**
     * HTTP service configuration (default timeout: 200ms).
     *
     * @generated from field: envoy.extensions.filters.http.ext_authz.v3.HttpService http_service = 3;
     */
    value: HttpService;
    case: "httpService";
  } | { case: undefined; value?: undefined };

  /**
   * API version for ext_authz transport protocol. This describes the ext_authz gRPC endpoint and
   * version of messages used on the wire.
   *
   * @generated from field: envoy.config.core.v3.ApiVersion transport_api_version = 12;
   */
  transportApiVersion: ApiVersion;

  /**
   *  Changes filter's behaviour on errors:
   *
   *  1. When set to true, the filter will ``accept`` client request even if the communication with
   *  the authorization service has failed, or if the authorization service has returned a HTTP 5xx
   *  error.
   *
   *  2. When set to false, ext-authz will ``reject`` client requests and return a ``Forbidden``
   *  response if the communication with the authorization service has failed, or if the
   *  authorization service has returned a HTTP 5xx error.
   *
   * Note that errors can be ``always`` tracked in the :ref:`stats
   * <config_http_filters_ext_authz_stats>`.
   *
   * @generated from field: bool failure_mode_allow = 2;
   */
  failureModeAllow: boolean;

  /**
   * Enables filter to buffer the client request body and send it within the authorization request.
   * A ``x-envoy-auth-partial-body: false|true`` metadata header will be added to the authorization
   * request message indicating if the body data is partial.
   *
   * @generated from field: envoy.extensions.filters.http.ext_authz.v3.BufferSettings with_request_body = 5;
   */
  withRequestBody?: BufferSettings;

  /**
   * Clears route cache in order to allow the external authorization service to correctly affect
   * routing decisions. Filter clears all cached routes when:
   *
   * 1. The field is set to ``true``.
   *
   * 2. The status returned from the authorization service is a HTTP 200 or gRPC 0.
   *
   * 3. At least one ``authorization response header`` is added to the client request, or is used for
   * altering another client request header.
   *
   *
   * @generated from field: bool clear_route_cache = 6;
   */
  clearRouteCache: boolean;

  /**
   * Sets the HTTP status that is returned to the client when the authorization server returns an error
   * or cannot be reached. The default status is HTTP 403 Forbidden.
   *
   * @generated from field: envoy.type.v3.HttpStatus status_on_error = 7;
   */
  statusOnError?: HttpStatus;

  /**
   * Specifies a list of metadata namespaces whose values, if present, will be passed to the
   * ext_authz service. :ref:`filter_metadata <envoy_v3_api_field_config.core.v3.Metadata.filter_metadata>` is passed as an opaque ``protobuf::Struct``.
   *
   * For example, if the ``jwt_authn`` filter is used and :ref:`payload_in_metadata
   * <envoy_v3_api_field_extensions.filters.http.jwt_authn.v3.JwtProvider.payload_in_metadata>` is set,
   * then the following will pass the jwt payload to the authorization server.
   *
   * .. code-block:: yaml
   *
   *    metadata_context_namespaces:
   *    - envoy.filters.http.jwt_authn
   *
   *
   * @generated from field: repeated string metadata_context_namespaces = 8;
   */
  metadataContextNamespaces: string[];

  /**
   * Specifies a list of metadata namespaces whose values, if present, will be passed to the
   * ext_authz service. :ref:`typed_filter_metadata <envoy_v3_api_field_config.core.v3.Metadata.typed_filter_metadata>` is passed as an ``protobuf::Any``.
   *
   * It works in a way similar to ``metadata_context_namespaces`` but allows envoy and external authz server to share the protobuf message definition
   * in order to do a safe parsing.
   *
   *
   * @generated from field: repeated string typed_metadata_context_namespaces = 16;
   */
  typedMetadataContextNamespaces: string[];

  /**
   * Specifies if the filter is enabled.
   *
   * If :ref:`runtime_key <envoy_v3_api_field_config.core.v3.RuntimeFractionalPercent.runtime_key>` is specified,
   * Envoy will lookup the runtime key to get the percentage of requests to filter.
   *
   * If this field is not specified, the filter will be enabled for all requests.
   *
   * @generated from field: envoy.config.core.v3.RuntimeFractionalPercent filter_enabled = 9;
   */
  filterEnabled?: RuntimeFractionalPercent;

  /**
   * Specifies if the filter is enabled with metadata matcher.
   * If this field is not specified, the filter will be enabled for all requests.
   *
   * @generated from field: envoy.type.matcher.v3.MetadataMatcher filter_enabled_metadata = 14;
   */
  filterEnabledMetadata?: MetadataMatcher;

  /**
   * Specifies whether to deny the requests, when the filter is disabled.
   * If :ref:`runtime_key <envoy_v3_api_field_config.core.v3.RuntimeFeatureFlag.runtime_key>` is specified,
   * Envoy will lookup the runtime key to determine whether to deny request for
   * filter protected path at filter disabling. If filter is disabled in
   * typed_per_filter_config for the path, requests will not be denied.
   *
   * If this field is not specified, all requests will be allowed when disabled.
   *
   * If a request is denied due to this setting, the response code in :ref:`status_on_error
   * <envoy_v3_api_field_extensions.filters.http.ext_authz.v3.ExtAuthz.status_on_error>` will
   * be returned.
   *
   * @generated from field: envoy.config.core.v3.RuntimeFeatureFlag deny_at_disable = 11;
   */
  denyAtDisable?: RuntimeFeatureFlag;

  /**
   * Specifies if the peer certificate is sent to the external service.
   *
   * When this field is true, Envoy will include the peer X.509 certificate, if available, in the
   * :ref:`certificate<envoy_v3_api_field_service.auth.v3.AttributeContext.Peer.certificate>`.
   *
   * @generated from field: bool include_peer_certificate = 10;
   */
  includePeerCertificate: boolean;

  /**
   * Optional additional prefix to use when emitting statistics. This allows to distinguish
   * emitted statistics between configured ``ext_authz`` filters in an HTTP filter chain. For example:
   *
   * .. code-block:: yaml
   *
   *   http_filters:
   *     - name: envoy.filters.http.ext_authz
   *       typed_config:
   *         "@type": type.googleapis.com/envoy.extensions.filters.http.ext_authz.v3.ExtAuthz
   *         stat_prefix: waf # This emits ext_authz.waf.ok, ext_authz.waf.denied, etc.
   *     - name: envoy.filters.http.ext_authz
   *       typed_config:
   *         "@type": type.googleapis.com/envoy.extensions.filters.http.ext_authz.v3.ExtAuthz
   *         stat_prefix: blocker # This emits ext_authz.blocker.ok, ext_authz.blocker.denied, etc.
   *
   *
   * @generated from field: string stat_prefix = 13;
   */
  statPrefix: string;

  /**
   * Optional labels that will be passed to :ref:`labels<envoy_v3_api_field_service.auth.v3.AttributeContext.Peer.labels>` in
   * :ref:`destination<envoy_v3_api_field_service.auth.v3.AttributeContext.destination>`.
   * The labels will be read from :ref:`metadata<envoy_v3_api_msg_config.core.v3.Node>` with the specified key.
   *
   * @generated from field: string bootstrap_metadata_labels_key = 15;
   */
  bootstrapMetadataLabelsKey: string;

  /**
   * Check request to authorization server will include the client request headers that have a correspondent match
   * in the :ref:`list <envoy_v3_api_msg_type.matcher.v3.ListStringMatcher>`. If this option isn't specified, then
   * all client request headers are included in the check request to a gRPC authorization server, whereas no client request headers
   * (besides the ones allowed by default - see note below) are included in the check request to an HTTP authorization server.
   * This inconsistency between gRPC and HTTP servers is to maintain backwards compatibility with legacy behavior.
   *
   * .. note::
   *
   *  1. For requests to an HTTP authorization server: in addition to the the user's supplied matchers, ``Host``, ``Method``, ``Path``,
   *     ``Content-Length``, and ``Authorization`` are **additionally included** in the list.
   *
   * .. note::
   *
   *  2. For requests to an HTTP authorization server: *Content-Length* will be set to 0 and the request to the
   *  authorization server will not have a message body. However, the check request can include the buffered
   *  client request body (controlled by :ref:`with_request_body
   *  <envoy_v3_api_field_extensions.filters.http.ext_authz.v3.ExtAuthz.with_request_body>` setting),
   *  consequently the value of *Content-Length* of the authorization request reflects the size of
   *  its payload size.
   *
   * @generated from field: envoy.type.matcher.v3.ListStringMatcher allowed_headers = 17;
   */
  allowedHeaders?: ListStringMatcher;

  /**
   * Specifies if the TLS session level details like SNI are sent to the external service.
   *
   * When this field is true, Envoy will include the SNI name used for TLSClientHello, if available, in the
   * :ref:`tls_session<envoy_v3_api_field_service.auth.v3.AttributeContext.tls_session>`.
   *
   * @generated from field: bool include_tls_session = 18;
   */
  includeTlsSession: boolean;

  constructor(data?: PartialMessage<ExtAuthz>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.http.ext_authz.v3.ExtAuthz";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExtAuthz;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExtAuthz;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExtAuthz;

  static equals(a: ExtAuthz | PlainMessage<ExtAuthz> | undefined, b: ExtAuthz | PlainMessage<ExtAuthz> | undefined): boolean;
}

/**
 * Configuration for buffering the request data.
 *
 * @generated from message envoy.extensions.filters.http.ext_authz.v3.BufferSettings
 */
export declare class BufferSettings extends Message<BufferSettings> {
  /**
   * Sets the maximum size of a message body that the filter will hold in memory. Envoy will return
   * ``HTTP 413`` and will *not* initiate the authorization process when buffer reaches the number
   * set in this field. Note that this setting will have precedence over :ref:`failure_mode_allow
   * <envoy_v3_api_field_extensions.filters.http.ext_authz.v3.ExtAuthz.failure_mode_allow>`.
   *
   * @generated from field: uint32 max_request_bytes = 1;
   */
  maxRequestBytes: number;

  /**
   * When this field is true, Envoy will buffer the message until ``max_request_bytes`` is reached.
   * The authorization request will be dispatched and no 413 HTTP error will be returned by the
   * filter.
   *
   * @generated from field: bool allow_partial_message = 2;
   */
  allowPartialMessage: boolean;

  /**
   * If true, the body sent to the external authorization service is set with raw bytes, it sets
   * the :ref:`raw_body<envoy_v3_api_field_service.auth.v3.AttributeContext.HttpRequest.raw_body>`
   * field of HTTP request attribute context. Otherwise, :ref:`body
   * <envoy_v3_api_field_service.auth.v3.AttributeContext.HttpRequest.body>` will be filled
   * with UTF-8 string request body.
   *
   * This field only affects configurations using a :ref:`grpc_service
   * <envoy_v3_api_field_extensions.filters.http.ext_authz.v3.ExtAuthz.grpc_service>`. In configurations that use
   * an :ref:`http_service <envoy_v3_api_field_extensions.filters.http.ext_authz.v3.ExtAuthz.http_service>`, this
   * has no effect.
   *
   * @generated from field: bool pack_as_bytes = 3;
   */
  packAsBytes: boolean;

  constructor(data?: PartialMessage<BufferSettings>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.http.ext_authz.v3.BufferSettings";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BufferSettings;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BufferSettings;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BufferSettings;

  static equals(a: BufferSettings | PlainMessage<BufferSettings> | undefined, b: BufferSettings | PlainMessage<BufferSettings> | undefined): boolean;
}

/**
 * HttpService is used for raw HTTP communication between the filter and the authorization service.
 * When configured, the filter will parse the client request and use these attributes to call the
 * authorization server. Depending on the response, the filter may reject or accept the client
 * request. Note that in any of these events, metadata can be added, removed or overridden by the
 * filter:
 *
 * *On authorization request*, a list of allowed request headers may be supplied. See
 * :ref:`allowed_headers
 * <envoy_v3_api_field_extensions.filters.http.ext_authz.v3.AuthorizationRequest.allowed_headers>`
 * for details. Additional headers metadata may be added to the authorization request. See
 * :ref:`headers_to_add
 * <envoy_v3_api_field_extensions.filters.http.ext_authz.v3.AuthorizationRequest.headers_to_add>` for
 * details.
 *
 * On authorization response status HTTP 200 OK, the filter will allow traffic to the upstream and
 * additional headers metadata may be added to the original client request. See
 * :ref:`allowed_upstream_headers
 * <envoy_v3_api_field_extensions.filters.http.ext_authz.v3.AuthorizationResponse.allowed_upstream_headers>`
 * for details. Additionally, the filter may add additional headers to the client's response. See
 * :ref:`allowed_client_headers_on_success
 * <envoy_v3_api_field_extensions.filters.http.ext_authz.v3.AuthorizationResponse.allowed_client_headers_on_success>`
 * for details.
 *
 * On other authorization response statuses, the filter will not allow traffic. Additional headers
 * metadata as well as body may be added to the client's response. See :ref:`allowed_client_headers
 * <envoy_v3_api_field_extensions.filters.http.ext_authz.v3.AuthorizationResponse.allowed_client_headers>`
 * for details.
 * [#next-free-field: 9]
 *
 * @generated from message envoy.extensions.filters.http.ext_authz.v3.HttpService
 */
export declare class HttpService extends Message<HttpService> {
  /**
   * Sets the HTTP server URI which the authorization requests must be sent to.
   *
   * @generated from field: envoy.config.core.v3.HttpUri server_uri = 1;
   */
  serverUri?: HttpUri;

  /**
   * Sets a prefix to the value of authorization request header ``Path``.
   *
   * @generated from field: string path_prefix = 2;
   */
  pathPrefix: string;

  /**
   * Settings used for controlling authorization request metadata.
   *
   * @generated from field: envoy.extensions.filters.http.ext_authz.v3.AuthorizationRequest authorization_request = 7;
   */
  authorizationRequest?: AuthorizationRequest;

  /**
   * Settings used for controlling authorization response metadata.
   *
   * @generated from field: envoy.extensions.filters.http.ext_authz.v3.AuthorizationResponse authorization_response = 8;
   */
  authorizationResponse?: AuthorizationResponse;

  constructor(data?: PartialMessage<HttpService>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.http.ext_authz.v3.HttpService";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HttpService;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HttpService;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HttpService;

  static equals(a: HttpService | PlainMessage<HttpService> | undefined, b: HttpService | PlainMessage<HttpService> | undefined): boolean;
}

/**
 * @generated from message envoy.extensions.filters.http.ext_authz.v3.AuthorizationRequest
 */
export declare class AuthorizationRequest extends Message<AuthorizationRequest> {
  /**
   * Authorization request includes the client request headers that have a correspondent match
   * in the :ref:`list <envoy_v3_api_msg_type.matcher.v3.ListStringMatcher>`.
   * This field has been deprecated in favor of :ref:`allowed_headers
   * <envoy_v3_api_field_extensions.filters.http.ext_authz.v3.ExtAuthz.allowed_headers>`.
   *
   * .. note::
   *
   *   In addition to the the user's supplied matchers, ``Host``, ``Method``, ``Path``,
   *   ``Content-Length``, and ``Authorization`` are **automatically included** to the list.
   *
   * .. note::
   *
   *   By default, ``Content-Length`` header is set to ``0`` and the request to the authorization
   *   service has no message body. However, the authorization request *may* include the buffered
   *   client request body (controlled by :ref:`with_request_body
   *   <envoy_v3_api_field_extensions.filters.http.ext_authz.v3.ExtAuthz.with_request_body>`
   *   setting) hence the value of its ``Content-Length`` reflects the size of its payload size.
   *
   *
   * @generated from field: envoy.type.matcher.v3.ListStringMatcher allowed_headers = 1 [deprecated = true];
   * @deprecated
   */
  allowedHeaders?: ListStringMatcher;

  /**
   * Sets a list of headers that will be included to the request to authorization service. Note that
   * client request of the same key will be overridden.
   *
   * @generated from field: repeated envoy.config.core.v3.HeaderValue headers_to_add = 2;
   */
  headersToAdd: HeaderValue[];

  constructor(data?: PartialMessage<AuthorizationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.http.ext_authz.v3.AuthorizationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthorizationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthorizationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthorizationRequest;

  static equals(a: AuthorizationRequest | PlainMessage<AuthorizationRequest> | undefined, b: AuthorizationRequest | PlainMessage<AuthorizationRequest> | undefined): boolean;
}

/**
 * [#next-free-field: 6]
 *
 * @generated from message envoy.extensions.filters.http.ext_authz.v3.AuthorizationResponse
 */
export declare class AuthorizationResponse extends Message<AuthorizationResponse> {
  /**
   * When this :ref:`list <envoy_v3_api_msg_type.matcher.v3.ListStringMatcher>` is set, authorization
   * response headers that have a correspondent match will be added to the original client request.
   * Note that coexistent headers will be overridden.
   *
   * @generated from field: envoy.type.matcher.v3.ListStringMatcher allowed_upstream_headers = 1;
   */
  allowedUpstreamHeaders?: ListStringMatcher;

  /**
   * When this :ref:`list <envoy_v3_api_msg_type.matcher.v3.ListStringMatcher>` is set, authorization
   * response headers that have a correspondent match will be added to the client's response. Note
   * that coexistent headers will be appended.
   *
   * @generated from field: envoy.type.matcher.v3.ListStringMatcher allowed_upstream_headers_to_append = 3;
   */
  allowedUpstreamHeadersToAppend?: ListStringMatcher;

  /**
   * When this :ref:`list <envoy_v3_api_msg_type.matcher.v3.ListStringMatcher>` is set, authorization
   * response headers that have a correspondent match will be added to the client's response. Note
   * that when this list is *not* set, all the authorization response headers, except ``Authority
   * (Host)`` will be in the response to the client. When a header is included in this list, ``Path``,
   * ``Status``, ``Content-Length``, ``WWWAuthenticate`` and ``Location`` are automatically added.
   *
   * @generated from field: envoy.type.matcher.v3.ListStringMatcher allowed_client_headers = 2;
   */
  allowedClientHeaders?: ListStringMatcher;

  /**
   * When this :ref:`list <envoy_v3_api_msg_type.matcher.v3.ListStringMatcher>` is set, authorization
   * response headers that have a correspondent match will be added to the client's response when
   * the authorization response itself is successful, i.e. not failed or denied. When this list is
   * *not* set, no additional headers will be added to the client's response on success.
   *
   * @generated from field: envoy.type.matcher.v3.ListStringMatcher allowed_client_headers_on_success = 4;
   */
  allowedClientHeadersOnSuccess?: ListStringMatcher;

  /**
   * When this :ref:`list <envoy_v3_api_msg_type.matcher.v3.ListStringMatcher>` is set, authorization
   * response headers that have a correspondent match will be emitted as dynamic metadata to be consumed
   * by the next filter. This metadata lives in a namespace specified by the canonical name of extension filter
   * that requires it:
   *
   * - :ref:`envoy.filters.http.ext_authz <config_http_filters_ext_authz_dynamic_metadata>` for HTTP filter.
   * - :ref:`envoy.filters.network.ext_authz <config_network_filters_ext_authz_dynamic_metadata>` for network filter.
   *
   * @generated from field: envoy.type.matcher.v3.ListStringMatcher dynamic_metadata_from_headers = 5;
   */
  dynamicMetadataFromHeaders?: ListStringMatcher;

  constructor(data?: PartialMessage<AuthorizationResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.http.ext_authz.v3.AuthorizationResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthorizationResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthorizationResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthorizationResponse;

  static equals(a: AuthorizationResponse | PlainMessage<AuthorizationResponse> | undefined, b: AuthorizationResponse | PlainMessage<AuthorizationResponse> | undefined): boolean;
}

/**
 * Extra settings on a per virtualhost/route/weighted-cluster level.
 *
 * @generated from message envoy.extensions.filters.http.ext_authz.v3.ExtAuthzPerRoute
 */
export declare class ExtAuthzPerRoute extends Message<ExtAuthzPerRoute> {
  /**
   * @generated from oneof envoy.extensions.filters.http.ext_authz.v3.ExtAuthzPerRoute.override
   */
  override: {
    /**
     * Disable the ext auth filter for this particular vhost or route.
     * If disabled is specified in multiple per-filter-configs, the most specific one will be used.
     *
     * @generated from field: bool disabled = 1;
     */
    value: boolean;
    case: "disabled";
  } | {
    /**
     * Check request settings for this route.
     *
     * @generated from field: envoy.extensions.filters.http.ext_authz.v3.CheckSettings check_settings = 2;
     */
    value: CheckSettings;
    case: "checkSettings";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<ExtAuthzPerRoute>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.http.ext_authz.v3.ExtAuthzPerRoute";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExtAuthzPerRoute;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExtAuthzPerRoute;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExtAuthzPerRoute;

  static equals(a: ExtAuthzPerRoute | PlainMessage<ExtAuthzPerRoute> | undefined, b: ExtAuthzPerRoute | PlainMessage<ExtAuthzPerRoute> | undefined): boolean;
}

/**
 * Extra settings for the check request.
 *
 * @generated from message envoy.extensions.filters.http.ext_authz.v3.CheckSettings
 */
export declare class CheckSettings extends Message<CheckSettings> {
  /**
   * Context extensions to set on the CheckRequest's
   * :ref:`AttributeContext.context_extensions<envoy_v3_api_field_service.auth.v3.AttributeContext.context_extensions>`
   *
   * You can use this to provide extra context for the external authorization server on specific
   * virtual hosts/routes. For example, adding a context extension on the virtual host level can
   * give the ext-authz server information on what virtual host is used without needing to parse the
   * host header. If CheckSettings is specified in multiple per-filter-configs, they will be merged
   * in order, and the result will be used.
   *
   * Merge semantics for this field are such that keys from more specific configs override.
   *
   * .. note::
   *
   *   These settings are only applied to a filter configured with a
   *   :ref:`grpc_service<envoy_v3_api_field_extensions.filters.http.ext_authz.v3.ExtAuthz.grpc_service>`.
   *
   * @generated from field: map<string, string> context_extensions = 1;
   */
  contextExtensions: { [key: string]: string };

  /**
   * When set to true, disable the configured :ref:`with_request_body
   * <envoy_v3_api_field_extensions.filters.http.ext_authz.v3.ExtAuthz.with_request_body>` for a route.
   *
   * @generated from field: bool disable_request_body_buffering = 2;
   */
  disableRequestBodyBuffering: boolean;

  constructor(data?: PartialMessage<CheckSettings>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.http.ext_authz.v3.CheckSettings";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckSettings;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckSettings;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckSettings;

  static equals(a: CheckSettings | PlainMessage<CheckSettings> | undefined, b: CheckSettings | PlainMessage<CheckSettings> | undefined): boolean;
}

