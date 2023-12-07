// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/http/oauth2/v3/oauth.proto (package envoy.extensions.filters.http.oauth2.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { SdsSecretConfig } from "../../../../transport_sockets/tls/v3/secret_pb.js";
import type { HttpUri } from "../../../../../config/core/v3/http_uri_pb.js";
import type { PathMatcher } from "../../../../../type/matcher/v3/path_pb.js";
import type { HeaderMatcher } from "../../../../../config/route/v3/route_components_pb.js";

/**
 * @generated from message envoy.extensions.filters.http.oauth2.v3.OAuth2Credentials
 */
export declare class OAuth2Credentials extends Message<OAuth2Credentials> {
  /**
   * The client_id to be used in the authorize calls. This value will be URL encoded when sent to the OAuth server.
   *
   * @generated from field: string client_id = 1;
   */
  clientId: string;

  /**
   * The secret used to retrieve the access token. This value will be URL encoded when sent to the OAuth server.
   *
   * @generated from field: envoy.extensions.transport_sockets.tls.v3.SdsSecretConfig token_secret = 2;
   */
  tokenSecret?: SdsSecretConfig;

  /**
   * Configures how the secret token should be created.
   *
   * @generated from oneof envoy.extensions.filters.http.oauth2.v3.OAuth2Credentials.token_formation
   */
  tokenFormation: {
    /**
     * If present, the secret token will be a HMAC using the provided secret.
     *
     * @generated from field: envoy.extensions.transport_sockets.tls.v3.SdsSecretConfig hmac_secret = 3;
     */
    value: SdsSecretConfig;
    case: "hmacSecret";
  } | { case: undefined; value?: undefined };

  /**
   * The cookie names used in OAuth filters flow.
   *
   * @generated from field: envoy.extensions.filters.http.oauth2.v3.OAuth2Credentials.CookieNames cookie_names = 4;
   */
  cookieNames?: OAuth2Credentials_CookieNames;

  constructor(data?: PartialMessage<OAuth2Credentials>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.http.oauth2.v3.OAuth2Credentials";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OAuth2Credentials;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OAuth2Credentials;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OAuth2Credentials;

  static equals(a: OAuth2Credentials | PlainMessage<OAuth2Credentials> | undefined, b: OAuth2Credentials | PlainMessage<OAuth2Credentials> | undefined): boolean;
}

/**
 * [#next-free-field: 6]
 *
 * @generated from message envoy.extensions.filters.http.oauth2.v3.OAuth2Credentials.CookieNames
 */
export declare class OAuth2Credentials_CookieNames extends Message<OAuth2Credentials_CookieNames> {
  /**
   * Cookie name to hold OAuth bearer token value. When the authentication server validates the
   * client and returns an authorization token back to the OAuth filter, no matter what format
   * that token is, if :ref:`forward_bearer_token <envoy_v3_api_field_extensions.filters.http.oauth2.v3.OAuth2Config.forward_bearer_token>`
   * is set to true the filter will send over the bearer token as a cookie with this name to the
   * upstream. Defaults to ``BearerToken``.
   *
   * @generated from field: string bearer_token = 1;
   */
  bearerToken: string;

  /**
   * Cookie name to hold OAuth HMAC value. Defaults to ``OauthHMAC``.
   *
   * @generated from field: string oauth_hmac = 2;
   */
  oauthHmac: string;

  /**
   * Cookie name to hold OAuth expiry value. Defaults to ``OauthExpires``.
   *
   * @generated from field: string oauth_expires = 3;
   */
  oauthExpires: string;

  /**
   * Cookie name to hold the id token. Defaults to ``IdToken``.
   *
   * @generated from field: string id_token = 4;
   */
  idToken: string;

  /**
   * Cookie name to hold the refresh token. Defaults to ``RefreshToken``.
   *
   * @generated from field: string refresh_token = 5;
   */
  refreshToken: string;

  constructor(data?: PartialMessage<OAuth2Credentials_CookieNames>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.http.oauth2.v3.OAuth2Credentials.CookieNames";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OAuth2Credentials_CookieNames;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OAuth2Credentials_CookieNames;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OAuth2Credentials_CookieNames;

  static equals(a: OAuth2Credentials_CookieNames | PlainMessage<OAuth2Credentials_CookieNames> | undefined, b: OAuth2Credentials_CookieNames | PlainMessage<OAuth2Credentials_CookieNames> | undefined): boolean;
}

/**
 * OAuth config
 *
 * [#next-free-field: 12]
 *
 * @generated from message envoy.extensions.filters.http.oauth2.v3.OAuth2Config
 */
export declare class OAuth2Config extends Message<OAuth2Config> {
  /**
   * Endpoint on the authorization server to retrieve the access token from.
   *
   * @generated from field: envoy.config.core.v3.HttpUri token_endpoint = 1;
   */
  tokenEndpoint?: HttpUri;

  /**
   * The endpoint redirect to for authorization in response to unauthorized requests.
   *
   * @generated from field: string authorization_endpoint = 2;
   */
  authorizationEndpoint: string;

  /**
   * Credentials used for OAuth.
   *
   * @generated from field: envoy.extensions.filters.http.oauth2.v3.OAuth2Credentials credentials = 3;
   */
  credentials?: OAuth2Credentials;

  /**
   * The redirect URI passed to the authorization endpoint. Supports header formatting
   * tokens. For more information, including details on header value syntax, see the
   * documentation on :ref:`custom request headers <config_http_conn_man_headers_custom_request_headers>`.
   *
   * This URI should not contain any query parameters.
   *
   * @generated from field: string redirect_uri = 4;
   */
  redirectUri: string;

  /**
   * Matching criteria used to determine whether a path appears to be the result of a redirect from the authorization server.
   *
   * @generated from field: envoy.type.matcher.v3.PathMatcher redirect_path_matcher = 5;
   */
  redirectPathMatcher?: PathMatcher;

  /**
   * The path to sign a user out, clearing their credential cookies.
   *
   * @generated from field: envoy.type.matcher.v3.PathMatcher signout_path = 6;
   */
  signoutPath?: PathMatcher;

  /**
   * Forward the OAuth token as a Bearer to upstream web service.
   *
   * @generated from field: bool forward_bearer_token = 7;
   */
  forwardBearerToken: boolean;

  /**
   * Any request that matches any of the provided matchers will be passed through without OAuth validation.
   *
   * @generated from field: repeated envoy.config.route.v3.HeaderMatcher pass_through_matcher = 8;
   */
  passThroughMatcher: HeaderMatcher[];

  /**
   * Optional list of OAuth scopes to be claimed in the authorization request. If not specified,
   * defaults to "user" scope.
   * OAuth RFC https://tools.ietf.org/html/rfc6749#section-3.3
   *
   * @generated from field: repeated string auth_scopes = 9;
   */
  authScopes: string[];

  /**
   * Optional resource parameter for authorization request
   * RFC: https://tools.ietf.org/html/rfc8707
   *
   * @generated from field: repeated string resources = 10;
   */
  resources: string[];

  /**
   * Defines how ``client_id`` and ``client_secret`` are sent in OAuth client to OAuth server requests.
   * RFC https://datatracker.ietf.org/doc/html/rfc6749#section-2.3.1
   *
   * @generated from field: envoy.extensions.filters.http.oauth2.v3.OAuth2Config.AuthType auth_type = 11;
   */
  authType: OAuth2Config_AuthType;

  constructor(data?: PartialMessage<OAuth2Config>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.http.oauth2.v3.OAuth2Config";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OAuth2Config;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OAuth2Config;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OAuth2Config;

  static equals(a: OAuth2Config | PlainMessage<OAuth2Config> | undefined, b: OAuth2Config | PlainMessage<OAuth2Config> | undefined): boolean;
}

/**
 * @generated from enum envoy.extensions.filters.http.oauth2.v3.OAuth2Config.AuthType
 */
export declare enum OAuth2Config_AuthType {
  /**
   * The ``client_id`` and ``client_secret`` will be sent in the URL encoded request body.
   * This type should only be used when Auth server does not support Basic authentication.
   *
   * @generated from enum value: URL_ENCODED_BODY = 0;
   */
  URL_ENCODED_BODY = 0,

  /**
   * The ``client_id`` and ``client_secret`` will be sent using HTTP Basic authentication scheme.
   *
   * @generated from enum value: BASIC_AUTH = 1;
   */
  BASIC_AUTH = 1,
}

/**
 * Filter config.
 *
 * @generated from message envoy.extensions.filters.http.oauth2.v3.OAuth2
 */
export declare class OAuth2 extends Message<OAuth2> {
  /**
   * Leave this empty to disable OAuth2 for a specific route, using per filter config.
   *
   * @generated from field: envoy.extensions.filters.http.oauth2.v3.OAuth2Config config = 1;
   */
  config?: OAuth2Config;

  constructor(data?: PartialMessage<OAuth2>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.http.oauth2.v3.OAuth2";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OAuth2;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OAuth2;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OAuth2;

  static equals(a: OAuth2 | PlainMessage<OAuth2> | undefined, b: OAuth2 | PlainMessage<OAuth2> | undefined): boolean;
}

