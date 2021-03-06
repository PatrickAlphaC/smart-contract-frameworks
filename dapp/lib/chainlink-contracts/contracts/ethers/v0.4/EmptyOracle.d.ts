/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface EmptyOracleInterface extends Interface {
  functions: {
    oracleRequest: TypedFunctionDescription<{
      encode([, , , , , , ,]: [
        string,
        BigNumberish,
        Arrayish,
        string,
        Arrayish,
        BigNumberish,
        BigNumberish,
        Arrayish
      ]): string;
    }>;

    fulfillOracleRequest: TypedFunctionDescription<{
      encode([, , , , ,]: [
        Arrayish,
        BigNumberish,
        string,
        Arrayish,
        BigNumberish,
        Arrayish
      ]): string;
    }>;

    withdrawable: TypedFunctionDescription<{ encode([]: []): string }>;

    cancelOracleRequest: TypedFunctionDescription<{
      encode([, , ,]: [Arrayish, BigNumberish, Arrayish, BigNumberish]): string;
    }>;

    setFulfillmentPermission: TypedFunctionDescription<{
      encode([,]: [string, boolean]): string;
    }>;

    onTokenTransfer: TypedFunctionDescription<{
      encode([, ,]: [string, BigNumberish, Arrayish]): string;
    }>;

    getAuthorizationStatus: TypedFunctionDescription<{
      encode([]: [string]): string;
    }>;

    withdraw: TypedFunctionDescription<{
      encode([,]: [string, BigNumberish]): string;
    }>;
  };

  events: {};
}

export class EmptyOracle extends Contract {
  connect(signerOrProvider: Signer | Provider | string): EmptyOracle;
  attach(addressOrName: string): EmptyOracle;
  deployed(): Promise<EmptyOracle>;

  on(event: EventFilter | string, listener: Listener): EmptyOracle;
  once(event: EventFilter | string, listener: Listener): EmptyOracle;
  addListener(eventName: EventFilter | string, listener: Listener): EmptyOracle;
  removeAllListeners(eventName: EventFilter | string): EmptyOracle;
  removeListener(eventName: any, listener: Listener): EmptyOracle;

  interface: EmptyOracleInterface;

  functions: {
    oracleRequest(
      arg0: string,
      arg1: BigNumberish,
      arg2: Arrayish,
      arg3: string,
      arg4: Arrayish,
      arg5: BigNumberish,
      arg6: BigNumberish,
      arg7: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    fulfillOracleRequest(
      arg0: Arrayish,
      arg1: BigNumberish,
      arg2: string,
      arg3: Arrayish,
      arg4: BigNumberish,
      arg5: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    withdrawable(): Promise<BigNumber>;

    cancelOracleRequest(
      arg0: Arrayish,
      arg1: BigNumberish,
      arg2: Arrayish,
      arg3: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setFulfillmentPermission(
      arg0: string,
      arg1: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    onTokenTransfer(
      arg0: string,
      arg1: BigNumberish,
      arg2: Arrayish
    ): Promise<void>;

    getAuthorizationStatus(arg0: string): Promise<boolean>;

    withdraw(
      arg0: string,
      arg1: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  oracleRequest(
    arg0: string,
    arg1: BigNumberish,
    arg2: Arrayish,
    arg3: string,
    arg4: Arrayish,
    arg5: BigNumberish,
    arg6: BigNumberish,
    arg7: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  fulfillOracleRequest(
    arg0: Arrayish,
    arg1: BigNumberish,
    arg2: string,
    arg3: Arrayish,
    arg4: BigNumberish,
    arg5: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  withdrawable(): Promise<BigNumber>;

  cancelOracleRequest(
    arg0: Arrayish,
    arg1: BigNumberish,
    arg2: Arrayish,
    arg3: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setFulfillmentPermission(
    arg0: string,
    arg1: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  onTokenTransfer(
    arg0: string,
    arg1: BigNumberish,
    arg2: Arrayish
  ): Promise<void>;

  getAuthorizationStatus(arg0: string): Promise<boolean>;

  withdraw(
    arg0: string,
    arg1: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {};

  estimate: {
    oracleRequest(
      arg0: string,
      arg1: BigNumberish,
      arg2: Arrayish,
      arg3: string,
      arg4: Arrayish,
      arg5: BigNumberish,
      arg6: BigNumberish,
      arg7: Arrayish
    ): Promise<BigNumber>;

    fulfillOracleRequest(
      arg0: Arrayish,
      arg1: BigNumberish,
      arg2: string,
      arg3: Arrayish,
      arg4: BigNumberish,
      arg5: Arrayish
    ): Promise<BigNumber>;

    withdrawable(): Promise<BigNumber>;

    cancelOracleRequest(
      arg0: Arrayish,
      arg1: BigNumberish,
      arg2: Arrayish,
      arg3: BigNumberish
    ): Promise<BigNumber>;

    setFulfillmentPermission(arg0: string, arg1: boolean): Promise<BigNumber>;

    onTokenTransfer(
      arg0: string,
      arg1: BigNumberish,
      arg2: Arrayish
    ): Promise<BigNumber>;

    getAuthorizationStatus(arg0: string): Promise<BigNumber>;

    withdraw(arg0: string, arg1: BigNumberish): Promise<BigNumber>;
  };
}
