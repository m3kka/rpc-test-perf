// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/api/v2/core/grpc_service.proto (package envoy.api.v2.core, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Any, Duration, Empty, proto3, Struct } from "@bufbuild/protobuf";
import { DataSource, HeaderValue } from "./base_pb.js";

/**
 * gRPC service configuration. This is used by :ref:`ApiConfigSource
 * <envoy_api_msg_core.ApiConfigSource>` and filter configurations.
 * [#next-free-field: 6]
 *
 * @generated from message envoy.api.v2.core.GrpcService
 */
export const GrpcService = proto3.makeMessageType(
  "envoy.api.v2.core.GrpcService",
  () => [
    { no: 1, name: "envoy_grpc", kind: "message", T: GrpcService_EnvoyGrpc, oneof: "target_specifier" },
    { no: 2, name: "google_grpc", kind: "message", T: GrpcService_GoogleGrpc, oneof: "target_specifier" },
    { no: 3, name: "timeout", kind: "message", T: Duration },
    { no: 5, name: "initial_metadata", kind: "message", T: HeaderValue, repeated: true },
  ],
);

/**
 * @generated from message envoy.api.v2.core.GrpcService.EnvoyGrpc
 */
export const GrpcService_EnvoyGrpc = proto3.makeMessageType(
  "envoy.api.v2.core.GrpcService.EnvoyGrpc",
  () => [
    { no: 1, name: "cluster_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "GrpcService_EnvoyGrpc"},
);

/**
 * [#next-free-field: 7]
 *
 * @generated from message envoy.api.v2.core.GrpcService.GoogleGrpc
 */
export const GrpcService_GoogleGrpc = proto3.makeMessageType(
  "envoy.api.v2.core.GrpcService.GoogleGrpc",
  () => [
    { no: 1, name: "target_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "channel_credentials", kind: "message", T: GrpcService_GoogleGrpc_ChannelCredentials },
    { no: 3, name: "call_credentials", kind: "message", T: GrpcService_GoogleGrpc_CallCredentials, repeated: true },
    { no: 4, name: "stat_prefix", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "credentials_factory_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "config", kind: "message", T: Struct },
  ],
  {localName: "GrpcService_GoogleGrpc"},
);

/**
 * See https://grpc.io/grpc/cpp/structgrpc_1_1_ssl_credentials_options.html.
 *
 * @generated from message envoy.api.v2.core.GrpcService.GoogleGrpc.SslCredentials
 */
export const GrpcService_GoogleGrpc_SslCredentials = proto3.makeMessageType(
  "envoy.api.v2.core.GrpcService.GoogleGrpc.SslCredentials",
  () => [
    { no: 1, name: "root_certs", kind: "message", T: DataSource },
    { no: 2, name: "private_key", kind: "message", T: DataSource },
    { no: 3, name: "cert_chain", kind: "message", T: DataSource },
  ],
  {localName: "GrpcService_GoogleGrpc_SslCredentials"},
);

/**
 * Local channel credentials. Only UDS is supported for now.
 * See https://github.com/grpc/grpc/pull/15909.
 *
 * @generated from message envoy.api.v2.core.GrpcService.GoogleGrpc.GoogleLocalCredentials
 */
export const GrpcService_GoogleGrpc_GoogleLocalCredentials = proto3.makeMessageType(
  "envoy.api.v2.core.GrpcService.GoogleGrpc.GoogleLocalCredentials",
  [],
  {localName: "GrpcService_GoogleGrpc_GoogleLocalCredentials"},
);

/**
 * See https://grpc.io/docs/guides/auth.html#credential-types to understand Channel and Call
 * credential types.
 *
 * @generated from message envoy.api.v2.core.GrpcService.GoogleGrpc.ChannelCredentials
 */
export const GrpcService_GoogleGrpc_ChannelCredentials = proto3.makeMessageType(
  "envoy.api.v2.core.GrpcService.GoogleGrpc.ChannelCredentials",
  () => [
    { no: 1, name: "ssl_credentials", kind: "message", T: GrpcService_GoogleGrpc_SslCredentials, oneof: "credential_specifier" },
    { no: 2, name: "google_default", kind: "message", T: Empty, oneof: "credential_specifier" },
    { no: 3, name: "local_credentials", kind: "message", T: GrpcService_GoogleGrpc_GoogleLocalCredentials, oneof: "credential_specifier" },
  ],
  {localName: "GrpcService_GoogleGrpc_ChannelCredentials"},
);

/**
 * [#next-free-field: 8]
 *
 * @generated from message envoy.api.v2.core.GrpcService.GoogleGrpc.CallCredentials
 */
export const GrpcService_GoogleGrpc_CallCredentials = proto3.makeMessageType(
  "envoy.api.v2.core.GrpcService.GoogleGrpc.CallCredentials",
  () => [
    { no: 1, name: "access_token", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "credential_specifier" },
    { no: 2, name: "google_compute_engine", kind: "message", T: Empty, oneof: "credential_specifier" },
    { no: 3, name: "google_refresh_token", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "credential_specifier" },
    { no: 4, name: "service_account_jwt_access", kind: "message", T: GrpcService_GoogleGrpc_CallCredentials_ServiceAccountJWTAccessCredentials, oneof: "credential_specifier" },
    { no: 5, name: "google_iam", kind: "message", T: GrpcService_GoogleGrpc_CallCredentials_GoogleIAMCredentials, oneof: "credential_specifier" },
    { no: 6, name: "from_plugin", kind: "message", T: GrpcService_GoogleGrpc_CallCredentials_MetadataCredentialsFromPlugin, oneof: "credential_specifier" },
    { no: 7, name: "sts_service", kind: "message", T: GrpcService_GoogleGrpc_CallCredentials_StsService, oneof: "credential_specifier" },
  ],
  {localName: "GrpcService_GoogleGrpc_CallCredentials"},
);

/**
 * @generated from message envoy.api.v2.core.GrpcService.GoogleGrpc.CallCredentials.ServiceAccountJWTAccessCredentials
 */
export const GrpcService_GoogleGrpc_CallCredentials_ServiceAccountJWTAccessCredentials = proto3.makeMessageType(
  "envoy.api.v2.core.GrpcService.GoogleGrpc.CallCredentials.ServiceAccountJWTAccessCredentials",
  () => [
    { no: 1, name: "json_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "token_lifetime_seconds", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
  {localName: "GrpcService_GoogleGrpc_CallCredentials_ServiceAccountJWTAccessCredentials"},
);

/**
 * @generated from message envoy.api.v2.core.GrpcService.GoogleGrpc.CallCredentials.GoogleIAMCredentials
 */
export const GrpcService_GoogleGrpc_CallCredentials_GoogleIAMCredentials = proto3.makeMessageType(
  "envoy.api.v2.core.GrpcService.GoogleGrpc.CallCredentials.GoogleIAMCredentials",
  () => [
    { no: 1, name: "authorization_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "authority_selector", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "GrpcService_GoogleGrpc_CallCredentials_GoogleIAMCredentials"},
);

/**
 * @generated from message envoy.api.v2.core.GrpcService.GoogleGrpc.CallCredentials.MetadataCredentialsFromPlugin
 */
export const GrpcService_GoogleGrpc_CallCredentials_MetadataCredentialsFromPlugin = proto3.makeMessageType(
  "envoy.api.v2.core.GrpcService.GoogleGrpc.CallCredentials.MetadataCredentialsFromPlugin",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "config", kind: "message", T: Struct, oneof: "config_type" },
    { no: 3, name: "typed_config", kind: "message", T: Any, oneof: "config_type" },
  ],
  {localName: "GrpcService_GoogleGrpc_CallCredentials_MetadataCredentialsFromPlugin"},
);

/**
 * Security token service configuration that allows Google gRPC to
 * fetch security token from an OAuth 2.0 authorization server.
 * See https://tools.ietf.org/html/draft-ietf-oauth-token-exchange-16 and
 * https://github.com/grpc/grpc/pull/19587.
 * [#next-free-field: 10]
 *
 * @generated from message envoy.api.v2.core.GrpcService.GoogleGrpc.CallCredentials.StsService
 */
export const GrpcService_GoogleGrpc_CallCredentials_StsService = proto3.makeMessageType(
  "envoy.api.v2.core.GrpcService.GoogleGrpc.CallCredentials.StsService",
  () => [
    { no: 1, name: "token_exchange_service_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "resource", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "audience", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "scope", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "requested_token_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "subject_token_path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "subject_token_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "actor_token_path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "actor_token_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "GrpcService_GoogleGrpc_CallCredentials_StsService"},
);

