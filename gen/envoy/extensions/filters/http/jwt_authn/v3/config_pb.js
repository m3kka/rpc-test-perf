// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/http/jwt_authn/v3/config.proto (package envoy.extensions.filters.http.jwt_authn.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Duration, Empty, proto3 } from "@bufbuild/protobuf";
import { DataSource, RetryPolicy } from "../../../../../config/core/v3/base_pb.js";
import { HttpUri } from "../../../../../config/core/v3/http_uri_pb.js";
import { RouteMatch } from "../../../../../config/route/v3/route_components_pb.js";

/**
 * Please see following for JWT authentication flow:
 *
 * * `JSON Web Token (JWT) <https://tools.ietf.org/html/rfc7519>`_
 * * `The OAuth 2.0 Authorization Framework <https://tools.ietf.org/html/rfc6749>`_
 * * `OpenID Connect <http://openid.net/connect>`_
 *
 * A JwtProvider message specifies how a JSON Web Token (JWT) can be verified. It specifies:
 *
 * * issuer: the principal that issues the JWT. If specified, it has to match the ``iss`` field in JWT.
 * * allowed audiences: the ones in the token have to be listed here.
 * * how to fetch public key JWKS to verify the token signature.
 * * how to extract JWT token in the request.
 * * how to pass successfully verified token payload.
 *
 * Example:
 *
 * .. code-block:: yaml
 *
 *     issuer: https://example.com
 *     audiences:
 *     - bookstore_android.apps.googleusercontent.com
 *     - bookstore_web.apps.googleusercontent.com
 *     remote_jwks:
 *       http_uri:
 *         uri: https://example.com/.well-known/jwks.json
 *         cluster: example_jwks_cluster
 *         timeout: 1s
 *       cache_duration:
 *         seconds: 300
 *
 * [#next-free-field: 17]
 *
 * @generated from message envoy.extensions.filters.http.jwt_authn.v3.JwtProvider
 */
export const JwtProvider = proto3.makeMessageType(
  "envoy.extensions.filters.http.jwt_authn.v3.JwtProvider",
  () => [
    { no: 1, name: "issuer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "audiences", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "remote_jwks", kind: "message", T: RemoteJwks, oneof: "jwks_source_specifier" },
    { no: 4, name: "local_jwks", kind: "message", T: DataSource, oneof: "jwks_source_specifier" },
    { no: 5, name: "forward", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "from_headers", kind: "message", T: JwtHeader, repeated: true },
    { no: 7, name: "from_params", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 13, name: "from_cookies", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 8, name: "forward_payload_header", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "pad_forward_payload_header", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "payload_in_metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "header_in_metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 16, name: "failed_status_in_metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "clock_skew_seconds", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 12, name: "jwt_cache_config", kind: "message", T: JwtCacheConfig },
    { no: 15, name: "claim_to_headers", kind: "message", T: JwtClaimToHeader, repeated: true },
  ],
);

/**
 * This message specifies JWT Cache configuration.
 *
 * @generated from message envoy.extensions.filters.http.jwt_authn.v3.JwtCacheConfig
 */
export const JwtCacheConfig = proto3.makeMessageType(
  "envoy.extensions.filters.http.jwt_authn.v3.JwtCacheConfig",
  () => [
    { no: 1, name: "jwt_cache_size", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * This message specifies how to fetch JWKS from remote and how to cache it.
 *
 * @generated from message envoy.extensions.filters.http.jwt_authn.v3.RemoteJwks
 */
export const RemoteJwks = proto3.makeMessageType(
  "envoy.extensions.filters.http.jwt_authn.v3.RemoteJwks",
  () => [
    { no: 1, name: "http_uri", kind: "message", T: HttpUri },
    { no: 2, name: "cache_duration", kind: "message", T: Duration },
    { no: 3, name: "async_fetch", kind: "message", T: JwksAsyncFetch },
    { no: 4, name: "retry_policy", kind: "message", T: RetryPolicy },
  ],
);

/**
 * Fetch Jwks asynchronously in the main thread when the filter config is parsed.
 * The listener is activated only after the Jwks is fetched.
 * When the Jwks is expired in the cache, it is fetched again in the main thread.
 * The fetched Jwks from the main thread can be used by all worker threads.
 *
 * @generated from message envoy.extensions.filters.http.jwt_authn.v3.JwksAsyncFetch
 */
export const JwksAsyncFetch = proto3.makeMessageType(
  "envoy.extensions.filters.http.jwt_authn.v3.JwksAsyncFetch",
  () => [
    { no: 1, name: "fast_listener", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "failed_refetch_duration", kind: "message", T: Duration },
  ],
);

/**
 * This message specifies a header location to extract JWT token.
 *
 * @generated from message envoy.extensions.filters.http.jwt_authn.v3.JwtHeader
 */
export const JwtHeader = proto3.makeMessageType(
  "envoy.extensions.filters.http.jwt_authn.v3.JwtHeader",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value_prefix", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Specify a required provider with audiences.
 *
 * @generated from message envoy.extensions.filters.http.jwt_authn.v3.ProviderWithAudiences
 */
export const ProviderWithAudiences = proto3.makeMessageType(
  "envoy.extensions.filters.http.jwt_authn.v3.ProviderWithAudiences",
  () => [
    { no: 1, name: "provider_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "audiences", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * This message specifies a Jwt requirement. An empty message means JWT verification is not
 * required. Here are some config examples:
 *
 * .. code-block:: yaml
 *
 *  # Example 1: not required with an empty message
 *
 *  # Example 2: require A
 *  provider_name: provider-A
 *
 *  # Example 3: require A or B
 *  requires_any:
 *    requirements:
 *      - provider_name: provider-A
 *      - provider_name: provider-B
 *
 *  # Example 4: require A and B
 *  requires_all:
 *    requirements:
 *      - provider_name: provider-A
 *      - provider_name: provider-B
 *
 *  # Example 5: require A and (B or C)
 *  requires_all:
 *    requirements:
 *      - provider_name: provider-A
 *      - requires_any:
 *        requirements:
 *          - provider_name: provider-B
 *          - provider_name: provider-C
 *
 *  # Example 6: require A or (B and C)
 *  requires_any:
 *    requirements:
 *      - provider_name: provider-A
 *      - requires_all:
 *        requirements:
 *          - provider_name: provider-B
 *          - provider_name: provider-C
 *
 *  # Example 7: A is optional (if token from A is provided, it must be valid, but also allows
 *  missing token.)
 *  requires_any:
 *    requirements:
 *    - provider_name: provider-A
 *    - allow_missing: {}
 *
 *  # Example 8: A is optional and B is required.
 *  requires_all:
 *    requirements:
 *    - requires_any:
 *        requirements:
 *        - provider_name: provider-A
 *        - allow_missing: {}
 *    - provider_name: provider-B
 *
 * [#next-free-field: 7]
 *
 * @generated from message envoy.extensions.filters.http.jwt_authn.v3.JwtRequirement
 */
export const JwtRequirement = proto3.makeMessageType(
  "envoy.extensions.filters.http.jwt_authn.v3.JwtRequirement",
  () => [
    { no: 1, name: "provider_name", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "requires_type" },
    { no: 2, name: "provider_and_audiences", kind: "message", T: ProviderWithAudiences, oneof: "requires_type" },
    { no: 3, name: "requires_any", kind: "message", T: JwtRequirementOrList, oneof: "requires_type" },
    { no: 4, name: "requires_all", kind: "message", T: JwtRequirementAndList, oneof: "requires_type" },
    { no: 5, name: "allow_missing_or_failed", kind: "message", T: Empty, oneof: "requires_type" },
    { no: 6, name: "allow_missing", kind: "message", T: Empty, oneof: "requires_type" },
  ],
);

/**
 * This message specifies a list of RequiredProvider.
 * Their results are OR-ed; if any one of them passes, the result is passed
 *
 * @generated from message envoy.extensions.filters.http.jwt_authn.v3.JwtRequirementOrList
 */
export const JwtRequirementOrList = proto3.makeMessageType(
  "envoy.extensions.filters.http.jwt_authn.v3.JwtRequirementOrList",
  () => [
    { no: 1, name: "requirements", kind: "message", T: JwtRequirement, repeated: true },
  ],
);

/**
 * This message specifies a list of RequiredProvider.
 * Their results are AND-ed; all of them must pass, if one of them fails or missing, it fails.
 *
 * @generated from message envoy.extensions.filters.http.jwt_authn.v3.JwtRequirementAndList
 */
export const JwtRequirementAndList = proto3.makeMessageType(
  "envoy.extensions.filters.http.jwt_authn.v3.JwtRequirementAndList",
  () => [
    { no: 1, name: "requirements", kind: "message", T: JwtRequirement, repeated: true },
  ],
);

/**
 * This message specifies a Jwt requirement for a specific Route condition.
 * Example 1:
 *
 * .. code-block:: yaml
 *
 *    - match:
 *        prefix: /healthz
 *
 * In above example, "requires" field is empty for /healthz prefix match,
 * it means that requests matching the path prefix don't require JWT authentication.
 *
 * Example 2:
 *
 * .. code-block:: yaml
 *
 *    - match:
 *        prefix: /
 *      requires: { provider_name: provider-A }
 *
 * In above example, all requests matched the path prefix require jwt authentication
 * from "provider-A".
 *
 * @generated from message envoy.extensions.filters.http.jwt_authn.v3.RequirementRule
 */
export const RequirementRule = proto3.makeMessageType(
  "envoy.extensions.filters.http.jwt_authn.v3.RequirementRule",
  () => [
    { no: 1, name: "match", kind: "message", T: RouteMatch },
    { no: 2, name: "requires", kind: "message", T: JwtRequirement, oneof: "requirement_type" },
    { no: 3, name: "requirement_name", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "requirement_type" },
  ],
);

/**
 * This message specifies Jwt requirements based on stream_info.filterState.
 * This FilterState should use ``Router::StringAccessor`` object to set a string value.
 * Other HTTP filters can use it to specify Jwt requirements dynamically.
 *
 * Example:
 *
 * .. code-block:: yaml
 *
 *    name: jwt_selector
 *    requires:
 *      issuer_1:
 *        provider_name: issuer1
 *      issuer_2:
 *        provider_name: issuer2
 *
 * If a filter set "jwt_selector" with "issuer_1" to FilterState for a request,
 * jwt_authn filter will use JwtRequirement{"provider_name": "issuer1"} to verify.
 *
 * @generated from message envoy.extensions.filters.http.jwt_authn.v3.FilterStateRule
 */
export const FilterStateRule = proto3.makeMessageType(
  "envoy.extensions.filters.http.jwt_authn.v3.FilterStateRule",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "requires", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: JwtRequirement} },
  ],
);

/**
 * This is the Envoy HTTP filter config for JWT authentication.
 *
 * For example:
 *
 * .. code-block:: yaml
 *
 *   providers:
 *      provider1:
 *        issuer: issuer1
 *        audiences:
 *        - audience1
 *        - audience2
 *        remote_jwks:
 *          http_uri:
 *            uri: https://example.com/.well-known/jwks.json
 *            cluster: example_jwks_cluster
 *            timeout: 1s
 *      provider2:
 *        issuer: issuer2
 *        local_jwks:
 *          inline_string: jwks_string
 *
 *   rules:
 *      # Not jwt verification is required for /health path
 *      - match:
 *          prefix: /health
 *
 *      # Jwt verification for provider1 is required for path prefixed with "prefix"
 *      - match:
 *          prefix: /prefix
 *        requires:
 *          provider_name: provider1
 *
 *      # Jwt verification for either provider1 or provider2 is required for all other requests.
 *      - match:
 *          prefix: /
 *        requires:
 *          requires_any:
 *            requirements:
 *              - provider_name: provider1
 *              - provider_name: provider2
 *
 * [#next-free-field: 6]
 *
 * @generated from message envoy.extensions.filters.http.jwt_authn.v3.JwtAuthentication
 */
export const JwtAuthentication = proto3.makeMessageType(
  "envoy.extensions.filters.http.jwt_authn.v3.JwtAuthentication",
  () => [
    { no: 1, name: "providers", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: JwtProvider} },
    { no: 2, name: "rules", kind: "message", T: RequirementRule, repeated: true },
    { no: 3, name: "filter_state_rules", kind: "message", T: FilterStateRule },
    { no: 4, name: "bypass_cors_preflight", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "requirement_map", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: JwtRequirement} },
  ],
);

/**
 * Specify per-route config.
 *
 * @generated from message envoy.extensions.filters.http.jwt_authn.v3.PerRouteConfig
 */
export const PerRouteConfig = proto3.makeMessageType(
  "envoy.extensions.filters.http.jwt_authn.v3.PerRouteConfig",
  () => [
    { no: 1, name: "disabled", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "requirement_specifier" },
    { no: 2, name: "requirement_name", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "requirement_specifier" },
  ],
);

/**
 * This message specifies a combination of header name and claim name.
 *
 * @generated from message envoy.extensions.filters.http.jwt_authn.v3.JwtClaimToHeader
 */
export const JwtClaimToHeader = proto3.makeMessageType(
  "envoy.extensions.filters.http.jwt_authn.v3.JwtClaimToHeader",
  () => [
    { no: 1, name: "header_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "claim_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);
