import { oDependency } from '../dependency';
import { oProtocolMethods } from '../enums';
import { JSONRPCRequest, JSONRPCResponse } from '../json-rpc/json-rpc';

export interface oHandshakeRequest extends JSONRPCRequest {
  method: oProtocolMethods.HANDSHAKE;
  params: {
    address: string;
  };
}

export interface oHandshakeResponse extends JSONRPCResponse {
  result: {
    dependencies: oDependency[];
    parameters: any;
  };
}