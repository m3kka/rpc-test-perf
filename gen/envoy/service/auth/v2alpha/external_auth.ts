// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/service/auth/v2alpha/external_auth.proto" (package "envoy.service.auth.v2alpha", syntax proto3)
// tslint:disable
import { CheckResponse } from "../v2/external_auth";
import { CheckRequest } from "../v2/external_auth";
import { ServiceType } from "@protobuf-ts/runtime-rpc";
/**
 * @generated ServiceType for protobuf service envoy.service.auth.v2alpha.Authorization
 */
export const Authorization = new ServiceType("envoy.service.auth.v2alpha.Authorization", [
    { name: "Check", options: {}, I: CheckRequest, O: CheckResponse }
]);
