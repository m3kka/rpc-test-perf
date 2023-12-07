// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/type/v3/http_status.proto (package envoy.type.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * HTTP response codes supported in Envoy.
 * For more details: https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
 *
 * @generated from enum envoy.type.v3.StatusCode
 */
export const StatusCode = proto3.makeEnum(
  "envoy.type.v3.StatusCode",
  [
    {no: 0, name: "Empty"},
    {no: 100, name: "Continue"},
    {no: 200, name: "OK"},
    {no: 201, name: "Created"},
    {no: 202, name: "Accepted"},
    {no: 203, name: "NonAuthoritativeInformation"},
    {no: 204, name: "NoContent"},
    {no: 205, name: "ResetContent"},
    {no: 206, name: "PartialContent"},
    {no: 207, name: "MultiStatus"},
    {no: 208, name: "AlreadyReported"},
    {no: 226, name: "IMUsed"},
    {no: 300, name: "MultipleChoices"},
    {no: 301, name: "MovedPermanently"},
    {no: 302, name: "Found"},
    {no: 303, name: "SeeOther"},
    {no: 304, name: "NotModified"},
    {no: 305, name: "UseProxy"},
    {no: 307, name: "TemporaryRedirect"},
    {no: 308, name: "PermanentRedirect"},
    {no: 400, name: "BadRequest"},
    {no: 401, name: "Unauthorized"},
    {no: 402, name: "PaymentRequired"},
    {no: 403, name: "Forbidden"},
    {no: 404, name: "NotFound"},
    {no: 405, name: "MethodNotAllowed"},
    {no: 406, name: "NotAcceptable"},
    {no: 407, name: "ProxyAuthenticationRequired"},
    {no: 408, name: "RequestTimeout"},
    {no: 409, name: "Conflict"},
    {no: 410, name: "Gone"},
    {no: 411, name: "LengthRequired"},
    {no: 412, name: "PreconditionFailed"},
    {no: 413, name: "PayloadTooLarge"},
    {no: 414, name: "URITooLong"},
    {no: 415, name: "UnsupportedMediaType"},
    {no: 416, name: "RangeNotSatisfiable"},
    {no: 417, name: "ExpectationFailed"},
    {no: 421, name: "MisdirectedRequest"},
    {no: 422, name: "UnprocessableEntity"},
    {no: 423, name: "Locked"},
    {no: 424, name: "FailedDependency"},
    {no: 426, name: "UpgradeRequired"},
    {no: 428, name: "PreconditionRequired"},
    {no: 429, name: "TooManyRequests"},
    {no: 431, name: "RequestHeaderFieldsTooLarge"},
    {no: 500, name: "InternalServerError"},
    {no: 501, name: "NotImplemented"},
    {no: 502, name: "BadGateway"},
    {no: 503, name: "ServiceUnavailable"},
    {no: 504, name: "GatewayTimeout"},
    {no: 505, name: "HTTPVersionNotSupported"},
    {no: 506, name: "VariantAlsoNegotiates"},
    {no: 507, name: "InsufficientStorage"},
    {no: 508, name: "LoopDetected"},
    {no: 510, name: "NotExtended"},
    {no: 511, name: "NetworkAuthenticationRequired"},
  ],
);

/**
 * HTTP status.
 *
 * @generated from message envoy.type.v3.HttpStatus
 */
export const HttpStatus = proto3.makeMessageType(
  "envoy.type.v3.HttpStatus",
  () => [
    { no: 1, name: "code", kind: "enum", T: proto3.getEnumType(StatusCode) },
  ],
);
