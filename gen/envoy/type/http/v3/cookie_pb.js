// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/type/http/v3/cookie.proto (package envoy.type.http.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Duration, proto3 } from "@bufbuild/protobuf";

/**
 * Cookie defines an API for obtaining or generating HTTP cookie.
 *
 * @generated from message envoy.type.http.v3.Cookie
 */
export const Cookie = proto3.makeMessageType(
  "envoy.type.http.v3.Cookie",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "ttl", kind: "message", T: Duration },
    { no: 3, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);
