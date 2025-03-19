import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { AccountLock } from "../generated/schema"
import { AccountLock as AccountLockEvent } from "../generated/Rptoken/Rptoken"
import { handleAccountLock } from "../src/rptoken"
import { createAccountLockEvent } from "./rptoken-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _address = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let amount = BigInt.fromI32(234)
    let releaseTime = BigInt.fromI32(234)
    let newAccountLockEvent = createAccountLockEvent(
      _address,
      amount,
      releaseTime
    )
    handleAccountLock(newAccountLockEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AccountLock created and stored", () => {
    assert.entityCount("AccountLock", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AccountLock",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_address",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AccountLock",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )
    assert.fieldEquals(
      "AccountLock",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "releaseTime",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
