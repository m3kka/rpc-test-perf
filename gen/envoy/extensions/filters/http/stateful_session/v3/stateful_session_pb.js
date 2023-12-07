// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/http/stateful_session/v3/stateful_session.proto (package envoy.extensions.filters.http.stateful_session.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { TypedExtensionConfig } from "../../../../../config/core/v3/extension_pb.js";

/**
 * @generated from message envoy.extensions.filters.http.stateful_session.v3.StatefulSession
 */
export const StatefulSession = proto3.makeMessageType(
  "envoy.extensions.filters.http.stateful_session.v3.StatefulSession",
  () => [
    { no: 1, name: "session_state", kind: "message", T: TypedExtensionConfig },
  ],
);

/**
 * @generated from message envoy.extensions.filters.http.stateful_session.v3.StatefulSessionPerRoute
 */
export const StatefulSessionPerRoute = proto3.makeMessageType(
  "envoy.extensions.filters.http.stateful_session.v3.StatefulSessionPerRoute",
  () => [
    { no: 1, name: "disabled", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "override" },
    { no: 2, name: "stateful_session", kind: "message", T: StatefulSession, oneof: "override" },
  ],
);

