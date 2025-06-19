import { ConnectionId, JSONRPCRequest } from "../json-rpc";
import { oProtocolMethods } from "../enums";

export interface RouterRequest extends JSONRPCRequest {
  method: oProtocolMethods.ROUTE;
  params: {
    _meta: {
      connectionId?: ConnectionId;
    };
    address: string;
    payload: {
      [key: string]: unknown;
    };
  };
}