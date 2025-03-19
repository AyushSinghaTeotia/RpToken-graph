import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AccountLock,
  AccountRelease,
  AddressFrozen,
  AgentAdded,
  AgentRemoved,
  Approval,
  ComplianceAdded,
  CurrencySet,
  DividendsClaimed,
  IdentityRegistryAdded,
  LockingTimeUpdated,
  OwnershipTransferred,
  Paused,
  RecoverySuccess,
  TokenPriceUpdated,
  TokensFrozen,
  TokensPurchased,
  TokensUnfrozen,
  Transfer,
  Unpaused,
  UpdatedSettings,
  UpdatedTokenInformation
} from "../generated/Rptoken/Rptoken"

export function createAccountLockEvent(
  _address: Address,
  amount: BigInt,
  releaseTime: BigInt
): AccountLock {
  let accountLockEvent = changetype<AccountLock>(newMockEvent())

  accountLockEvent.parameters = new Array()

  accountLockEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )
  accountLockEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  accountLockEvent.parameters.push(
    new ethereum.EventParam(
      "releaseTime",
      ethereum.Value.fromUnsignedBigInt(releaseTime)
    )
  )

  return accountLockEvent
}

export function createAccountReleaseEvent(
  _address: Address,
  amount: BigInt
): AccountRelease {
  let accountReleaseEvent = changetype<AccountRelease>(newMockEvent())

  accountReleaseEvent.parameters = new Array()

  accountReleaseEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )
  accountReleaseEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return accountReleaseEvent
}

export function createAddressFrozenEvent(
  _userAddress: Address,
  _isFrozen: boolean,
  _owner: Address
): AddressFrozen {
  let addressFrozenEvent = changetype<AddressFrozen>(newMockEvent())

  addressFrozenEvent.parameters = new Array()

  addressFrozenEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )
  addressFrozenEvent.parameters.push(
    new ethereum.EventParam("_isFrozen", ethereum.Value.fromBoolean(_isFrozen))
  )
  addressFrozenEvent.parameters.push(
    new ethereum.EventParam("_owner", ethereum.Value.fromAddress(_owner))
  )

  return addressFrozenEvent
}

export function createAgentAddedEvent(_agent: Address): AgentAdded {
  let agentAddedEvent = changetype<AgentAdded>(newMockEvent())

  agentAddedEvent.parameters = new Array()

  agentAddedEvent.parameters.push(
    new ethereum.EventParam("_agent", ethereum.Value.fromAddress(_agent))
  )

  return agentAddedEvent
}

export function createAgentRemovedEvent(_agent: Address): AgentRemoved {
  let agentRemovedEvent = changetype<AgentRemoved>(newMockEvent())

  agentRemovedEvent.parameters = new Array()

  agentRemovedEvent.parameters.push(
    new ethereum.EventParam("_agent", ethereum.Value.fromAddress(_agent))
  )

  return agentRemovedEvent
}

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createComplianceAddedEvent(
  _compliance: Address
): ComplianceAdded {
  let complianceAddedEvent = changetype<ComplianceAdded>(newMockEvent())

  complianceAddedEvent.parameters = new Array()

  complianceAddedEvent.parameters.push(
    new ethereum.EventParam(
      "_compliance",
      ethereum.Value.fromAddress(_compliance)
    )
  )

  return complianceAddedEvent
}

export function createCurrencySetEvent(
  currency: string,
  tokenAddress: Address
): CurrencySet {
  let currencySetEvent = changetype<CurrencySet>(newMockEvent())

  currencySetEvent.parameters = new Array()

  currencySetEvent.parameters.push(
    new ethereum.EventParam("currency", ethereum.Value.fromString(currency))
  )
  currencySetEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )

  return currencySetEvent
}

export function createDividendsClaimedEvent(
  user: Address,
  amount: BigInt
): DividendsClaimed {
  let dividendsClaimedEvent = changetype<DividendsClaimed>(newMockEvent())

  dividendsClaimedEvent.parameters = new Array()

  dividendsClaimedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  dividendsClaimedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return dividendsClaimedEvent
}

export function createIdentityRegistryAddedEvent(
  _identityRegistry: Address
): IdentityRegistryAdded {
  let identityRegistryAddedEvent =
    changetype<IdentityRegistryAdded>(newMockEvent())

  identityRegistryAddedEvent.parameters = new Array()

  identityRegistryAddedEvent.parameters.push(
    new ethereum.EventParam(
      "_identityRegistry",
      ethereum.Value.fromAddress(_identityRegistry)
    )
  )

  return identityRegistryAddedEvent
}

export function createLockingTimeUpdatedEvent(
  newLockingTime: BigInt
): LockingTimeUpdated {
  let lockingTimeUpdatedEvent = changetype<LockingTimeUpdated>(newMockEvent())

  lockingTimeUpdatedEvent.parameters = new Array()

  lockingTimeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newLockingTime",
      ethereum.Value.fromUnsignedBigInt(newLockingTime)
    )
  )

  return lockingTimeUpdatedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent =
    changetype<OwnershipTransferred>(newMockEvent())

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedEvent(_userAddress: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )

  return pausedEvent
}

export function createRecoverySuccessEvent(
  _lostWallet: Address,
  _newWallet: Address,
  _investorOnchainID: Address
): RecoverySuccess {
  let recoverySuccessEvent = changetype<RecoverySuccess>(newMockEvent())

  recoverySuccessEvent.parameters = new Array()

  recoverySuccessEvent.parameters.push(
    new ethereum.EventParam(
      "_lostWallet",
      ethereum.Value.fromAddress(_lostWallet)
    )
  )
  recoverySuccessEvent.parameters.push(
    new ethereum.EventParam(
      "_newWallet",
      ethereum.Value.fromAddress(_newWallet)
    )
  )
  recoverySuccessEvent.parameters.push(
    new ethereum.EventParam(
      "_investorOnchainID",
      ethereum.Value.fromAddress(_investorOnchainID)
    )
  )

  return recoverySuccessEvent
}

export function createTokenPriceUpdatedEvent(
  ContractAddress: Address,
  newPrice: BigInt
): TokenPriceUpdated {
  let tokenPriceUpdatedEvent = changetype<TokenPriceUpdated>(newMockEvent())

  tokenPriceUpdatedEvent.parameters = new Array()

  tokenPriceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "ContractAddress",
      ethereum.Value.fromAddress(ContractAddress)
    )
  )
  tokenPriceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newPrice",
      ethereum.Value.fromUnsignedBigInt(newPrice)
    )
  )

  return tokenPriceUpdatedEvent
}

export function createTokensFrozenEvent(
  _userAddress: Address,
  _amount: BigInt
): TokensFrozen {
  let tokensFrozenEvent = changetype<TokensFrozen>(newMockEvent())

  tokensFrozenEvent.parameters = new Array()

  tokensFrozenEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )
  tokensFrozenEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return tokensFrozenEvent
}

export function createTokensPurchasedEvent(
  user: Address,
  amount: BigInt,
  usdaddress: Address
): TokensPurchased {
  let tokensPurchasedEvent = changetype<TokensPurchased>(newMockEvent())

  tokensPurchasedEvent.parameters = new Array()

  tokensPurchasedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  tokensPurchasedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  tokensPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "usdaddress",
      ethereum.Value.fromAddress(usdaddress)
    )
  )

  return tokensPurchasedEvent
}

export function createTokensUnfrozenEvent(
  _userAddress: Address,
  _amount: BigInt
): TokensUnfrozen {
  let tokensUnfrozenEvent = changetype<TokensUnfrozen>(newMockEvent())

  tokensUnfrozenEvent.parameters = new Array()

  tokensUnfrozenEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )
  tokensUnfrozenEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return tokensUnfrozenEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createUnpausedEvent(_userAddress: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )

  return unpausedEvent
}

export function createUpdatedSettingsEvent(
  contractAddress: Address,
  minHolding: BigInt,
  claimExpiry: BigInt,
  claimPeriod: BigInt,
  apy: BigInt,
  factor: BigInt,
  tokenPrice: BigInt,
  lockingTime: BigInt
): UpdatedSettings {
  let updatedSettingsEvent = changetype<UpdatedSettings>(newMockEvent())

  updatedSettingsEvent.parameters = new Array()

  updatedSettingsEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress)
    )
  )
  updatedSettingsEvent.parameters.push(
    new ethereum.EventParam(
      "minHolding",
      ethereum.Value.fromUnsignedBigInt(minHolding)
    )
  )
  updatedSettingsEvent.parameters.push(
    new ethereum.EventParam(
      "claimExpiry",
      ethereum.Value.fromUnsignedBigInt(claimExpiry)
    )
  )
  updatedSettingsEvent.parameters.push(
    new ethereum.EventParam(
      "claimPeriod",
      ethereum.Value.fromUnsignedBigInt(claimPeriod)
    )
  )
  updatedSettingsEvent.parameters.push(
    new ethereum.EventParam("apy", ethereum.Value.fromUnsignedBigInt(apy))
  )
  updatedSettingsEvent.parameters.push(
    new ethereum.EventParam("factor", ethereum.Value.fromUnsignedBigInt(factor))
  )
  updatedSettingsEvent.parameters.push(
    new ethereum.EventParam(
      "tokenPrice",
      ethereum.Value.fromUnsignedBigInt(tokenPrice)
    )
  )
  updatedSettingsEvent.parameters.push(
    new ethereum.EventParam(
      "lockingTime",
      ethereum.Value.fromUnsignedBigInt(lockingTime)
    )
  )

  return updatedSettingsEvent
}

export function createUpdatedTokenInformationEvent(
  Contractaddress: Address,
  _newName: string,
  _newSymbol: string,
  _newDecimals: i32,
  _newVersion: string,
  _newOnchainID: Address
): UpdatedTokenInformation {
  let updatedTokenInformationEvent =
    changetype<UpdatedTokenInformation>(newMockEvent())

  updatedTokenInformationEvent.parameters = new Array()

  updatedTokenInformationEvent.parameters.push(
    new ethereum.EventParam(
      "Contractaddress",
      ethereum.Value.fromAddress(Contractaddress)
    )
  )
  updatedTokenInformationEvent.parameters.push(
    new ethereum.EventParam("_newName", ethereum.Value.fromString(_newName))
  )
  updatedTokenInformationEvent.parameters.push(
    new ethereum.EventParam("_newSymbol", ethereum.Value.fromString(_newSymbol))
  )
  updatedTokenInformationEvent.parameters.push(
    new ethereum.EventParam(
      "_newDecimals",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_newDecimals))
    )
  )
  updatedTokenInformationEvent.parameters.push(
    new ethereum.EventParam(
      "_newVersion",
      ethereum.Value.fromString(_newVersion)
    )
  )
  updatedTokenInformationEvent.parameters.push(
    new ethereum.EventParam(
      "_newOnchainID",
      ethereum.Value.fromAddress(_newOnchainID)
    )
  )

  return updatedTokenInformationEvent
}
