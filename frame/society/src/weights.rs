// This file is part of Substrate.

// Copyright (C) 2022 Parity Technologies (UK) Ltd.
// SPDX-License-Identifier: Apache-2.0

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//! Autogenerated weights for pallet_society
//!
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 4.0.0-dev
//! DATE: 2022-09-13, STEPS: `50`, REPEAT: 20, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! EXECUTION: Some(Wasm), WASM-EXECUTION: Compiled, CHAIN: Some("dev"), DB CACHE: 1024

// Executed Command:
// ./target/production/substrate
// benchmark
// pallet
// --chain=dev
// --steps=50
// --repeat=20
// --pallet=pallet_society
// --extrinsic=*
// --execution=wasm
// --wasm-execution=compiled
// --template=./.maintain/frame-weight-template.hbs
// --header=./HEADER-APACHE2
// --output=./frame/society/src/weights.rs

#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]

use frame_support::{traits::Get, weights::{Weight, constants::RocksDbWeight}};
use sp_std::marker::PhantomData;

/// Weight functions needed for pallet_society.
pub trait WeightInfo {
	fn bid() -> Weight;
	fn unbid() -> Weight;
	fn vouch() -> Weight;
	fn unvouch() -> Weight;
	fn vote() -> Weight;
	fn defender_vote() -> Weight;
	fn payout() -> Weight;
	fn waive_repay() -> Weight;
	fn found_society() -> Weight;
	fn dissolve() -> Weight;
	fn judge_suspended_member() -> Weight;
	fn set_parameters() -> Weight;
	fn punish_skeptic() -> Weight;
	fn claim_membership() -> Weight;
	fn bestow_membership() -> Weight;
	fn kick_candidate() -> Weight;
	fn resign_candidacy() -> Weight;
	fn drop_candidate() -> Weight;
	fn cleanup_candidacy() -> Weight;
	fn cleanup_challenge() -> Weight;
}

/// Weights for pallet_society using the Substrate node and recommended hardware.
pub struct SubstrateWeight<T>(PhantomData<T>);
impl<T: frame_system::Config> WeightInfo for SubstrateWeight<T> {
	// Storage: Society Bids (r:1 w:1)
	// Storage: Society Candidates (r:1 w:0)
	// Storage: Society Members (r:1 w:0)
	// Storage: Society SuspendedMembers (r:1 w:0)
	// Storage: Society Parameters (r:1 w:0)
	fn bid() -> Weight {
		Weight::zero()
	}
	// Storage: Society Bids (r:1 w:1)
	fn unbid() -> Weight {
		Weight::zero()
	}
	// Storage: Society Bids (r:1 w:1)
	// Storage: Society Candidates (r:1 w:0)
	// Storage: Society Members (r:2 w:1)
	// Storage: Society SuspendedMembers (r:1 w:0)
	fn vouch() -> Weight {
		Weight::zero()
	}
	// Storage: Society Bids (r:1 w:1)
	// Storage: Society Members (r:1 w:1)
	fn unvouch() -> Weight {
		Weight::zero()
	}
	// Storage: Society Candidates (r:1 w:1)
	// Storage: Society Members (r:1 w:0)
	// Storage: Society Votes (r:1 w:1)
	fn vote() -> Weight {
		Weight::zero()
	}
	// Storage: Society Defending (r:1 w:1)
	// Storage: Society Members (r:1 w:0)
	// Storage: Society ChallengeRoundCount (r:1 w:0)
	// Storage: Society DefenderVotes (r:1 w:1)
	fn defender_vote() -> Weight {
		Weight::zero()
	}
	// Storage: Society Members (r:1 w:0)
	// Storage: Society Payouts (r:1 w:1)
	// Storage: System Account (r:1 w:1)
	fn payout() -> Weight {
		Weight::zero()
	}
	// Storage: Society Members (r:1 w:1)
	// Storage: Society Payouts (r:1 w:1)
	fn waive_repay() -> Weight {
		Weight::zero()
	}
	// Storage: Society Head (r:1 w:1)
	// Storage: Society MemberCount (r:1 w:1)
	// Storage: Society MemberByIndex (r:0 w:1)
	// Storage: Society Founder (r:0 w:1)
	// Storage: Society Rules (r:0 w:1)
	// Storage: Society Members (r:0 w:1)
	// Storage: Society Parameters (r:0 w:1)
	fn found_society() -> Weight {
		Weight::zero()
	}
	// Storage: Society Founder (r:1 w:1)
	// Storage: Society MemberCount (r:1 w:1)
	// Storage: Society Head (r:0 w:1)
	// Storage: Society Defending (r:0 w:1)
	// Storage: Society ChallengeRoundCount (r:0 w:1)
	// Storage: Society MemberByIndex (r:0 w:5)
	// Storage: Society Skeptic (r:0 w:1)
	// Storage: Society Candidates (r:0 w:4)
	// Storage: Society Pot (r:0 w:1)
	// Storage: Society Rules (r:0 w:1)
	// Storage: Society Votes (r:0 w:4)
	// Storage: Society Members (r:0 w:5)
	// Storage: Society RoundCount (r:0 w:1)
	// Storage: Society Bids (r:0 w:1)
	// Storage: Society Parameters (r:0 w:1)
	// Storage: Society NextHead (r:0 w:1)
	fn dissolve() -> Weight {
		Weight::zero()
	}
	// Storage: Society Founder (r:1 w:0)
	// Storage: Society SuspendedMembers (r:1 w:1)
	// Storage: Society Payouts (r:1 w:0)
	// Storage: Society Pot (r:1 w:1)
	fn judge_suspended_member() -> Weight {
		Weight::zero()
	}
	// Storage: Society Founder (r:1 w:0)
	// Storage: Society MemberCount (r:1 w:0)
	// Storage: Society Parameters (r:0 w:1)
	fn set_parameters() -> Weight {
		Weight::zero()
	}
	// Storage: Society Candidates (r:1 w:1)
	// Storage: Society RoundCount (r:1 w:0)
	// Storage: Society Skeptic (r:1 w:0)
	// Storage: Society Votes (r:1 w:0)
	// Storage: Society Members (r:1 w:1)
	// Storage: Society Parameters (r:1 w:0)
	fn punish_skeptic() -> Weight {
		Weight::zero()
	}
	// Storage: Society Candidates (r:1 w:1)
	// Storage: Society RoundCount (r:1 w:0)
	// Storage: Society Parameters (r:1 w:0)
	// Storage: Society MemberCount (r:1 w:1)
	// Storage: Society NextHead (r:1 w:1)
	// Storage: System Account (r:1 w:1)
	// Storage: Society MemberByIndex (r:0 w:1)
	// Storage: Society Members (r:0 w:1)
	fn claim_membership() -> Weight {
		Weight::zero()
	}
	// Storage: Society Founder (r:1 w:0)
	// Storage: Society Candidates (r:1 w:1)
	// Storage: Society RoundCount (r:1 w:0)
	// Storage: Society Parameters (r:1 w:0)
	// Storage: Society MemberCount (r:1 w:1)
	// Storage: Society NextHead (r:1 w:1)
	// Storage: System Account (r:1 w:1)
	// Storage: Society MemberByIndex (r:0 w:1)
	// Storage: Society Members (r:0 w:1)
	fn bestow_membership() -> Weight {
		Weight::zero()
	}
	// Storage: Society Founder (r:1 w:0)
	// Storage: Society Candidates (r:1 w:1)
	// Storage: Society RoundCount (r:1 w:0)
	fn kick_candidate() -> Weight {
		Weight::zero()
	}
	// Storage: Society Candidates (r:1 w:1)
	// Storage: Society RoundCount (r:1 w:0)
	fn resign_candidacy() -> Weight {
		Weight::zero()
	}
	// Storage: Society Candidates (r:1 w:1)
	// Storage: Society RoundCount (r:1 w:0)
	fn drop_candidate() -> Weight {
		Weight::zero()
	}
	// Storage: Society Candidates (r:1 w:0)
	// Storage: Society VoteClearCursor (r:1 w:0)
	// Storage: Society Votes (r:0 w:2)
	fn cleanup_candidacy() -> Weight {
		Weight::zero()
	}
	// Storage: Society ChallengeRoundCount (r:1 w:0)
	// Storage: Society DefenderVotes (r:0 w:1)
	fn cleanup_challenge() -> Weight {
		Weight::zero()
	}
}

// For backwards compatibility and tests
impl WeightInfo for () {
	// Storage: Society Bids (r:1 w:1)
	// Storage: Society Candidates (r:1 w:0)
	// Storage: Society Members (r:1 w:0)
	// Storage: Society SuspendedMembers (r:1 w:0)
	// Storage: Society Parameters (r:1 w:0)
	fn bid() -> Weight {
		Weight::zero()
	}
	// Storage: Society Bids (r:1 w:1)
	fn unbid() -> Weight {
		Weight::zero()
	}
	// Storage: Society Bids (r:1 w:1)
	// Storage: Society Candidates (r:1 w:0)
	// Storage: Society Members (r:2 w:1)
	// Storage: Society SuspendedMembers (r:1 w:0)
	fn vouch() -> Weight {
		Weight::zero()
	}
	// Storage: Society Bids (r:1 w:1)
	// Storage: Society Members (r:1 w:1)
	fn unvouch() -> Weight {
		Weight::zero()
	}
	// Storage: Society Candidates (r:1 w:1)
	// Storage: Society Members (r:1 w:0)
	// Storage: Society Votes (r:1 w:1)
	fn vote() -> Weight {
		Weight::zero()
	}
	// Storage: Society Defending (r:1 w:1)
	// Storage: Society Members (r:1 w:0)
	// Storage: Society ChallengeRoundCount (r:1 w:0)
	// Storage: Society DefenderVotes (r:1 w:1)
	fn defender_vote() -> Weight {
		Weight::zero()
	}
	// Storage: Society Members (r:1 w:0)
	// Storage: Society Payouts (r:1 w:1)
	// Storage: System Account (r:1 w:1)
	fn payout() -> Weight {
		Weight::zero()
	}
	// Storage: Society Members (r:1 w:1)
	// Storage: Society Payouts (r:1 w:1)
	fn waive_repay() -> Weight {
		Weight::zero()
	}
	// Storage: Society Head (r:1 w:1)
	// Storage: Society MemberCount (r:1 w:1)
	// Storage: Society MemberByIndex (r:0 w:1)
	// Storage: Society Founder (r:0 w:1)
	// Storage: Society Rules (r:0 w:1)
	// Storage: Society Members (r:0 w:1)
	// Storage: Society Parameters (r:0 w:1)
	fn found_society() -> Weight {
		Weight::zero()
	}
	// Storage: Society Founder (r:1 w:1)
	// Storage: Society MemberCount (r:1 w:1)
	// Storage: Society Head (r:0 w:1)
	// Storage: Society Defending (r:0 w:1)
	// Storage: Society ChallengeRoundCount (r:0 w:1)
	// Storage: Society MemberByIndex (r:0 w:5)
	// Storage: Society Skeptic (r:0 w:1)
	// Storage: Society Candidates (r:0 w:4)
	// Storage: Society Pot (r:0 w:1)
	// Storage: Society Rules (r:0 w:1)
	// Storage: Society Votes (r:0 w:4)
	// Storage: Society Members (r:0 w:5)
	// Storage: Society RoundCount (r:0 w:1)
	// Storage: Society Bids (r:0 w:1)
	// Storage: Society Parameters (r:0 w:1)
	// Storage: Society NextHead (r:0 w:1)
	fn dissolve() -> Weight {
		Weight::zero()
	}
	// Storage: Society Founder (r:1 w:0)
	// Storage: Society SuspendedMembers (r:1 w:1)
	// Storage: Society Payouts (r:1 w:0)
	// Storage: Society Pot (r:1 w:1)
	fn judge_suspended_member() -> Weight {
		Weight::zero()
	}
	// Storage: Society Founder (r:1 w:0)
	// Storage: Society MemberCount (r:1 w:0)
	// Storage: Society Parameters (r:0 w:1)
	fn set_parameters() -> Weight {
		Weight::zero()
	}
	// Storage: Society Candidates (r:1 w:1)
	// Storage: Society RoundCount (r:1 w:0)
	// Storage: Society Skeptic (r:1 w:0)
	// Storage: Society Votes (r:1 w:0)
	// Storage: Society Members (r:1 w:1)
	// Storage: Society Parameters (r:1 w:0)
	fn punish_skeptic() -> Weight {
		Weight::zero()
	}
	// Storage: Society Candidates (r:1 w:1)
	// Storage: Society RoundCount (r:1 w:0)
	// Storage: Society Parameters (r:1 w:0)
	// Storage: Society MemberCount (r:1 w:1)
	// Storage: Society NextHead (r:1 w:1)
	// Storage: System Account (r:1 w:1)
	// Storage: Society MemberByIndex (r:0 w:1)
	// Storage: Society Members (r:0 w:1)
	fn claim_membership() -> Weight {
		Weight::zero()
	}
	// Storage: Society Founder (r:1 w:0)
	// Storage: Society Candidates (r:1 w:1)
	// Storage: Society RoundCount (r:1 w:0)
	// Storage: Society Parameters (r:1 w:0)
	// Storage: Society MemberCount (r:1 w:1)
	// Storage: Society NextHead (r:1 w:1)
	// Storage: System Account (r:1 w:1)
	// Storage: Society MemberByIndex (r:0 w:1)
	// Storage: Society Members (r:0 w:1)
	fn bestow_membership() -> Weight {
		Weight::zero()
	}
	// Storage: Society Founder (r:1 w:0)
	// Storage: Society Candidates (r:1 w:1)
	// Storage: Society RoundCount (r:1 w:0)
	fn kick_candidate() -> Weight {
		Weight::zero()
	}
	// Storage: Society Candidates (r:1 w:1)
	// Storage: Society RoundCount (r:1 w:0)
	fn resign_candidacy() -> Weight {
		Weight::zero()
	}
	// Storage: Society Candidates (r:1 w:1)
	// Storage: Society RoundCount (r:1 w:0)
	fn drop_candidate() -> Weight {
		Weight::zero()
	}
	// Storage: Society Candidates (r:1 w:0)
	// Storage: Society VoteClearCursor (r:1 w:0)
	// Storage: Society Votes (r:0 w:2)
	fn cleanup_candidacy() -> Weight {
		Weight::zero()
	}
	// Storage: Society ChallengeRoundCount (r:1 w:0)
	// Storage: Society DefenderVotes (r:0 w:1)
	fn cleanup_challenge() -> Weight {
		Weight::zero()
	}
}
