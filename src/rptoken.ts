import {
  AccountLock as AccountLockEvent,
  AccountRelease as AccountReleaseEvent,
  AddressFrozen as AddressFrozenEvent,
  AgentAdded as AgentAddedEvent,
  AgentRemoved as AgentRemovedEvent,
  Approval as ApprovalEvent,
  ComplianceAdded as ComplianceAddedEvent,
  CurrencySet as CurrencySetEvent,
  DividendsClaimed as DividendsClaimedEvent,
  IdentityRegistryAdded as IdentityRegistryAddedEvent,
  LockingTimeUpdated as LockingTimeUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  RecoverySuccess as RecoverySuccessEvent,
  TokenPriceUpdated as TokenPriceUpdatedEvent,
  TokensFrozen as TokensFrozenEvent,
  TokensPurchased as TokensPurchasedEvent,
  TokensUnfrozen as TokensUnfrozenEvent,
  Transfer as TransferEvent,
  Unpaused as UnpausedEvent,
  UpdatedSettings as UpdatedSettingsEvent,
  UpdatedTokenInformation as UpdatedTokenInformationEvent
} from "../generated/Rptoken/Rptoken"
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
} from "../generated/schema"
import { User} from '../generated/schema'
import { Meta } from "../generated/schema"
import { BigInt } from "@graphprotocol/graph-ts"
import { TotalTokensHistory } from "../generated/schema"
import { UserDividends } from "../generated/schema"
import { Token } from "../generated/schema"
export function handleAccountLock(event: AccountLockEvent): void {
  let entity = new AccountLock(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._address = event.params._address
  entity.amount = event.params.amount
  entity.releaseTime = event.params.releaseTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAccountRelease(event: AccountReleaseEvent): void {
  let entity = new AccountRelease(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._address = event.params._address
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAddressFrozen(event: AddressFrozenEvent): void {
  let entity = new AddressFrozen(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress
  entity._isFrozen = event.params._isFrozen
  entity._owner = event.params._owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAgentAdded(event: AgentAddedEvent): void {
  let entity = new AgentAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._agent = event.params._agent

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAgentRemoved(event: AgentRemovedEvent): void {
  let entity = new AgentRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._agent = event.params._agent

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleComplianceAdded(event: ComplianceAddedEvent): void {
  let entity = new ComplianceAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._compliance = event.params._compliance

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCurrencySet(event: CurrencySetEvent): void {
  let entity = new CurrencySet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.currency = event.params.currency
  entity.tokenAddress = event.params.tokenAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

// export function handleDividendsClaimed(event: DividendsClaimedEvent): void {
//   let entity = new DividendsClaimed(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity.user = event.params.user
//   entity.amount = event.params.amount

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }
export function handleDividendsClaimed(event: DividendsClaimedEvent): void {
  let user=UserDividends.load(event.params.user);
  if(user==null){
    user=new UserDividends(event.params.user);
    user.save();
    }
  let transactionId = event.transaction.hash.concatI32(event.logIndex.toI32())
  let entity = new TokensPurchased(transactionId)
  entity.user=user.id
 // entity.user = event.params.user
  entity.amount = event.params.amount
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}


export function handleIdentityRegistryAdded(
  event: IdentityRegistryAddedEvent
): void {
  let entity = new IdentityRegistryAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._identityRegistry = event.params._identityRegistry

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLockingTimeUpdated(event: LockingTimeUpdatedEvent): void {
  let entity = new LockingTimeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newLockingTime = event.params.newLockingTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRecoverySuccess(event: RecoverySuccessEvent): void {
  let entity = new RecoverySuccess(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._lostWallet = event.params._lostWallet
  entity._newWallet = event.params._newWallet
  entity._investorOnchainID = event.params._investorOnchainID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

// export function handleTokenPriceUpdated(event: TokenPriceUpdatedEvent): void {
//   let entity = new TokenPriceUpdated(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity.ContractAddress = event.params.ContractAddress
//   entity.newPrice = event.params.newPrice

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }
export function handleTokenPriceUpdated(event: TokenPriceUpdatedEvent): void {
  // Load or create a Token entity based on the token's address
  let token = Token.load(event.params.ContractAddress);

  if (token == null) {
    // If the token doesn't exist, create a new Token entity
    token = new Token(event.params.ContractAddress);
    token.save(); // Save the token entity to persist it
  }

  // Create a new TokenPriceUpdate entity for this price update
  let priceUpdateId = event.transaction.hash.concatI32(event.logIndex.toI32());
  let tokenPriceUpdate = new TokenPriceUpdated(priceUpdateId);

  tokenPriceUpdate.ContractAddress = token.id; // Link the price update to the token
  tokenPriceUpdate.newPrice = event.params.newPrice; // Set the new price
  tokenPriceUpdate.blockNumber = event.block.number; // Record block number
  tokenPriceUpdate.blockTimestamp = event.block.timestamp; // Record block timestamp
  tokenPriceUpdate.transactionHash = event.transaction.hash; // Record transaction hash

  // Save the price update entity
  tokenPriceUpdate.save();
}
export function handleTokensFrozen(event: TokensFrozenEvent): void {
  let entity = new TokensFrozen(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress
  entity._amount = event.params._amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

// export function handleTokensPurchased(event: TokensPurchasedEvent): void {
//   let entity = new TokensPurchased(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity.user = event.params.user
//   entity.amount = event.params.amount
//   entity.usdaddress = event.params.usdaddress

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }

export function handleTokensUnfrozen(event: TokensUnfrozenEvent): void {
  let entity = new TokensUnfrozen(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress
  entity._amount = event.params._amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._userAddress = event.params._userAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdatedSettings(event: UpdatedSettingsEvent): void {
  let entity = new UpdatedSettings(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.minHolding = event.params.minHolding
  entity.claimExpiry = event.params.claimExpiry
  entity.claimPeriod = event.params.claimPeriod
  entity.apy = event.params.apy
  entity.factor = event.params.factor
  entity.tokenPrice = event.params.tokenPrice
  entity.lockingTime = event.params.lockingTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdatedTokenInformation(
  event: UpdatedTokenInformationEvent
): void {
  let entity = new UpdatedTokenInformation(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.Contractaddress = event.params.Contractaddress
  entity._newName = event.params._newName
  entity._newSymbol = event.params._newSymbol
  entity._newDecimals = event.params._newDecimals
  entity._newVersion = event.params._newVersion
  entity._newOnchainID = event.params._newOnchainID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
export function handleTokensPurchased(event: TokensPurchasedEvent): void {
  // Load or create a User entity based on the buyer's address
  let user = User.load(event.params.user)

  if (user == null) {
    user = new User(event.params.user)
    user.save()

    // Update the global user count in the Meta entity
    let meta = Meta.load("meta")
    if (meta == null) {
      meta = new Meta("meta")
      meta.userCount = BigInt.fromI32(1)
      meta.totalTokensPurchased = BigInt.fromI32(0) // Initialize totalTokensPurchased
    } else {
      meta.userCount = meta.userCount.plus(BigInt.fromI32(1))
    }
    meta.save()
  }

  // Create a new TokensPurchased entity for the transaction
  let transactionId = event.transaction.hash.concatI32(event.logIndex.toI32())
  let tokensPurchased = new TokensPurchased(transactionId)

  tokensPurchased.user = user.id
  tokensPurchased.amount = event.params.amount
  tokensPurchased.blockNumber = event.block.number
  tokensPurchased.blockTimestamp = event.block.timestamp
  tokensPurchased.transactionHash = event.transaction.hash

  tokensPurchased.save()

  // Update the global totalTokensPurchased in the Meta entity
  let meta = Meta.load("meta")
  if (meta == null) {
    meta = new Meta("meta")
    meta.userCount = BigInt.fromI32(0)
    meta.totalTokensPurchased = event.params.amount
  } else {
    meta.totalTokensPurchased = meta.totalTokensPurchased.plus(event.params.amount)
  }
  meta.save()

  // Create a new TotalTokensHistory entity for tracking historical totalTokensPurchased
  let historyId = event.transaction.hash.concatI32(event.logIndex.toI32())
  let totalHistory = new TotalTokensHistory(historyId)

  totalHistory.meta = meta.id
  totalHistory.totalTokensPurchased = meta.totalTokensPurchased
  totalHistory.transactionHash = event.transaction.hash
  totalHistory.blockTimestamp = event.block.timestamp

  totalHistory.save()
}
