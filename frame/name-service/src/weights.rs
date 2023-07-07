
//! Autogenerated weights for pallet_name_service
//!
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 4.0.0-dev
//! DATE: 2023-07-07, STEPS: `50`, REPEAT: `20`, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! WORST CASE MAP SIZE: `1000000`
//! HOSTNAME: `Rosss-MacBook-Pro-2.local`, CPU: `<UNKNOWN>`
//! EXECUTION: Some(Wasm), WASM-EXECUTION: Compiled, CHAIN: None, DB CACHE: 1024

// Executed Command:
// target/release/substrate
// benchmark
// pallet
// --execution
// wasm
// --wasm-execution
// compiled
// --dev
// --pallet
// pallet-name-service
// --steps
// 50
// --repeat
// 20
// --output
// frame/name-service/src/weights.rs
// --template
// .maintain/frame-weight-template.hbs
// --extrinsic
// *

#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]
#![allow(missing_docs)]

use frame_support::{traits::Get, weights::{Weight, constants::RocksDbWeight}};
use core::marker::PhantomData;

/// Weight functions needed for pallet_name_service.
pub trait WeightInfo {
	fn force_register() -> Weight;
	fn force_deregister() -> Weight;
	fn commit() -> Weight;
	fn reveal(l: u32, ) -> Weight;
	fn remove_commitment() -> Weight;
}

/// Weights for pallet_name_service using the Substrate node and recommended hardware.
pub struct SubstrateWeight<T>(PhantomData<T>);
impl<T: frame_system::Config> WeightInfo for SubstrateWeight<T> {
	/// Storage: NameService Registrations (r:1 w:1)
	/// Proof: NameService Registrations (max_values: None, max_size: Some(94), added: 2569, mode: MaxEncodedLen)
	/// Storage: NameService CounterForRegistrations (r:1 w:1)
	/// Proof: NameService CounterForRegistrations (max_values: Some(1), max_size: Some(4), added: 499, mode: MaxEncodedLen)
	/// Storage: System Account (r:1 w:1)
	/// Proof: System Account (max_values: None, max_size: Some(128), added: 2603, mode: MaxEncodedLen)
	fn force_register() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `522`
		//  Estimated: `3593`
		// Minimum execution time: 35_000_000 picoseconds.
		Weight::from_parts(36_000_000, 3593)
			.saturating_add(T::DbWeight::get().reads(3_u64))
			.saturating_add(T::DbWeight::get().writes(3_u64))
	}
	/// Storage: NameService Registrations (r:1 w:1)
	/// Proof: NameService Registrations (max_values: None, max_size: Some(94), added: 2569, mode: MaxEncodedLen)
	/// Storage: NameService CounterForRegistrations (r:1 w:1)
	/// Proof: NameService CounterForRegistrations (max_values: Some(1), max_size: Some(4), added: 499, mode: MaxEncodedLen)
	/// Storage: System Account (r:1 w:1)
	/// Proof: System Account (max_values: None, max_size: Some(128), added: 2603, mode: MaxEncodedLen)
	/// Storage: NameService NameResolver (r:1 w:1)
	/// Proof: NameService NameResolver (max_values: None, max_size: Some(2146), added: 4621, mode: MaxEncodedLen)
	/// Storage: NameService TextResolver (r:1 w:1)
	/// Proof: NameService TextResolver (max_values: None, max_size: Some(2146), added: 4621, mode: MaxEncodedLen)
	/// Storage: NameService AddressResolver (r:0 w:1)
	/// Proof: NameService AddressResolver (max_values: None, max_size: Some(84), added: 2559, mode: MaxEncodedLen)
	fn force_deregister() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `4928`
		//  Estimated: `5611`
		// Minimum execution time: 68_000_000 picoseconds.
		Weight::from_parts(69_000_000, 5611)
			.saturating_add(T::DbWeight::get().reads(5_u64))
			.saturating_add(T::DbWeight::get().writes(6_u64))
	}
	/// Storage: NameService Commitments (r:1 w:1)
	/// Proof: NameService Commitments (max_values: None, max_size: Some(132), added: 2607, mode: MaxEncodedLen)
	/// Storage: NameService CommitmentDeposit (r:1 w:0)
	/// Proof: NameService CommitmentDeposit (max_values: Some(1), max_size: Some(16), added: 511, mode: MaxEncodedLen)
	fn commit() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `319`
		//  Estimated: `3597`
		// Minimum execution time: 30_000_000 picoseconds.
		Weight::from_parts(30_000_000, 3597)
			.saturating_add(T::DbWeight::get().reads(2_u64))
			.saturating_add(T::DbWeight::get().writes(1_u64))
	}
	/// Storage: NameService Commitments (r:1 w:1)
	/// Proof: NameService Commitments (max_values: None, max_size: Some(132), added: 2607, mode: MaxEncodedLen)
	/// Storage: NameService Registrations (r:1 w:1)
	/// Proof: NameService Registrations (max_values: None, max_size: Some(94), added: 2569, mode: MaxEncodedLen)
	/// Storage: NameService TierDefault (r:1 w:0)
	/// Proof: NameService TierDefault (max_values: Some(1), max_size: Some(16), added: 511, mode: MaxEncodedLen)
	/// Storage: NameService RegistrationFeePerBlock (r:1 w:0)
	/// Proof: NameService RegistrationFeePerBlock (max_values: Some(1), max_size: Some(16), added: 511, mode: MaxEncodedLen)
	/// Storage: System Account (r:1 w:1)
	/// Proof: System Account (max_values: None, max_size: Some(128), added: 2603, mode: MaxEncodedLen)
	/// Storage: NameService CounterForRegistrations (r:1 w:1)
	/// Proof: NameService CounterForRegistrations (max_values: Some(1), max_size: Some(4), added: 499, mode: MaxEncodedLen)
	/// Storage: NameService TierThreeLetters (r:1 w:0)
	/// Proof: NameService TierThreeLetters (max_values: Some(1), max_size: Some(16), added: 511, mode: MaxEncodedLen)
	/// The range of component `l` is `[3, 2048]`.
	fn reveal(l: u32, ) -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `619`
		//  Estimated: `3597 + l * (450 ±0)`
		// Minimum execution time: 66_000_000 picoseconds.
		Weight::from_parts(69_286_584, 3597)
			// Standard Error: 104
			.saturating_add(Weight::from_parts(3_160, 0).saturating_mul(l.into()))
			.saturating_add(T::DbWeight::get().reads(6_u64))
			.saturating_add(T::DbWeight::get().writes(4_u64))
			.saturating_add(Weight::from_parts(0, 450).saturating_mul(l.into()))
	}
	/// Storage: NameService Commitments (r:1 w:1)
	/// Proof: NameService Commitments (max_values: None, max_size: Some(132), added: 2607, mode: MaxEncodedLen)
	fn remove_commitment() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `436`
		//  Estimated: `3597`
		// Minimum execution time: 25_000_000 picoseconds.
		Weight::from_parts(25_000_000, 3597)
			.saturating_add(T::DbWeight::get().reads(1_u64))
			.saturating_add(T::DbWeight::get().writes(1_u64))
	}
}

// For backwards compatibility and tests
impl WeightInfo for () {
	/// Storage: NameService Registrations (r:1 w:1)
	/// Proof: NameService Registrations (max_values: None, max_size: Some(94), added: 2569, mode: MaxEncodedLen)
	/// Storage: NameService CounterForRegistrations (r:1 w:1)
	/// Proof: NameService CounterForRegistrations (max_values: Some(1), max_size: Some(4), added: 499, mode: MaxEncodedLen)
	/// Storage: System Account (r:1 w:1)
	/// Proof: System Account (max_values: None, max_size: Some(128), added: 2603, mode: MaxEncodedLen)
	fn force_register() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `522`
		//  Estimated: `3593`
		// Minimum execution time: 35_000_000 picoseconds.
		Weight::from_parts(36_000_000, 3593)
			.saturating_add(RocksDbWeight::get().reads(3_u64))
			.saturating_add(RocksDbWeight::get().writes(3_u64))
	}
	/// Storage: NameService Registrations (r:1 w:1)
	/// Proof: NameService Registrations (max_values: None, max_size: Some(94), added: 2569, mode: MaxEncodedLen)
	/// Storage: NameService CounterForRegistrations (r:1 w:1)
	/// Proof: NameService CounterForRegistrations (max_values: Some(1), max_size: Some(4), added: 499, mode: MaxEncodedLen)
	/// Storage: System Account (r:1 w:1)
	/// Proof: System Account (max_values: None, max_size: Some(128), added: 2603, mode: MaxEncodedLen)
	/// Storage: NameService NameResolver (r:1 w:1)
	/// Proof: NameService NameResolver (max_values: None, max_size: Some(2146), added: 4621, mode: MaxEncodedLen)
	/// Storage: NameService TextResolver (r:1 w:1)
	/// Proof: NameService TextResolver (max_values: None, max_size: Some(2146), added: 4621, mode: MaxEncodedLen)
	/// Storage: NameService AddressResolver (r:0 w:1)
	/// Proof: NameService AddressResolver (max_values: None, max_size: Some(84), added: 2559, mode: MaxEncodedLen)
	fn force_deregister() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `4928`
		//  Estimated: `5611`
		// Minimum execution time: 68_000_000 picoseconds.
		Weight::from_parts(69_000_000, 5611)
			.saturating_add(RocksDbWeight::get().reads(5_u64))
			.saturating_add(RocksDbWeight::get().writes(6_u64))
	}
	/// Storage: NameService Commitments (r:1 w:1)
	/// Proof: NameService Commitments (max_values: None, max_size: Some(132), added: 2607, mode: MaxEncodedLen)
	/// Storage: NameService CommitmentDeposit (r:1 w:0)
	/// Proof: NameService CommitmentDeposit (max_values: Some(1), max_size: Some(16), added: 511, mode: MaxEncodedLen)
	fn commit() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `319`
		//  Estimated: `3597`
		// Minimum execution time: 30_000_000 picoseconds.
		Weight::from_parts(30_000_000, 3597)
			.saturating_add(RocksDbWeight::get().reads(2_u64))
			.saturating_add(RocksDbWeight::get().writes(1_u64))
	}
	/// Storage: NameService Commitments (r:1 w:1)
	/// Proof: NameService Commitments (max_values: None, max_size: Some(132), added: 2607, mode: MaxEncodedLen)
	/// Storage: NameService Registrations (r:1 w:1)
	/// Proof: NameService Registrations (max_values: None, max_size: Some(94), added: 2569, mode: MaxEncodedLen)
	/// Storage: NameService TierDefault (r:1 w:0)
	/// Proof: NameService TierDefault (max_values: Some(1), max_size: Some(16), added: 511, mode: MaxEncodedLen)
	/// Storage: NameService RegistrationFeePerBlock (r:1 w:0)
	/// Proof: NameService RegistrationFeePerBlock (max_values: Some(1), max_size: Some(16), added: 511, mode: MaxEncodedLen)
	/// Storage: System Account (r:1 w:1)
	/// Proof: System Account (max_values: None, max_size: Some(128), added: 2603, mode: MaxEncodedLen)
	/// Storage: NameService CounterForRegistrations (r:1 w:1)
	/// Proof: NameService CounterForRegistrations (max_values: Some(1), max_size: Some(4), added: 499, mode: MaxEncodedLen)
	/// Storage: NameService TierThreeLetters (r:1 w:0)
	/// Proof: NameService TierThreeLetters (max_values: Some(1), max_size: Some(16), added: 511, mode: MaxEncodedLen)
	/// The range of component `l` is `[3, 2048]`.
	fn reveal(l: u32, ) -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `619`
		//  Estimated: `3597 + l * (450 ±0)`
		// Minimum execution time: 66_000_000 picoseconds.
		Weight::from_parts(69_286_584, 3597)
			// Standard Error: 104
			.saturating_add(Weight::from_parts(3_160, 0).saturating_mul(l.into()))
			.saturating_add(RocksDbWeight::get().reads(6_u64))
			.saturating_add(RocksDbWeight::get().writes(4_u64))
			.saturating_add(Weight::from_parts(0, 450).saturating_mul(l.into()))
	}
	/// Storage: NameService Commitments (r:1 w:1)
	/// Proof: NameService Commitments (max_values: None, max_size: Some(132), added: 2607, mode: MaxEncodedLen)
	fn remove_commitment() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `436`
		//  Estimated: `3597`
		// Minimum execution time: 25_000_000 picoseconds.
		Weight::from_parts(25_000_000, 3597)
			.saturating_add(RocksDbWeight::get().reads(1_u64))
			.saturating_add(RocksDbWeight::get().writes(1_u64))
	}
}
