import { oDependency } from "../dependency";
import { oProtocolMethods } from "../enums";
import {
  JSONRPCRequest,
  JSONRPCResponse,
  RequestParams,
} from "../json-rpc/json-rpc";

export interface oHandshakeRequest extends JSONRPCRequest {
  method: oProtocolMethods.HANDSHAKE;
  params: RequestParams & {
    address: string;
  };
}

export interface oHandshakeResponse extends JSONRPCResponse {
  result: {
    dependencies: oDependency[];
    parameters: any;
  };
}
