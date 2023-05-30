// This file is part of Substrate.

// Copyright (C) Parity Technologies (UK) Ltd.
// SPDX-License-Identifier: Apache-2.0

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// 	http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//! > Made with *Substrate*, for *DotSama*.
//!
//! [![github]](https://github.com/paritytech/substrate/frame/fast-unstake) -
//! [![polkadot]](https://polkadot.network)
//!
//! [polkadot]: https://img.shields.io/badge/polkadot-E6007A?style=for-the-badge&logo=polkadot&logoColor=white
//! [github]: https://img.shields.io/badge/github-8da0cb?style=for-the-badge&labelColor=555555&logo=github
//!
//! # Paged List Pallet
//!
//! A thin wrapper pallet around a [`paged_list::StoragePagedList`]. It provides an API for a single
//! paginated list. It can be instantiated multiple times to provide multiple lists.
//!
//! ## Overview
//!
//! The pallet is quite unique since it does not expose any `Call`s, `Error`s or `Event`s. All
//! interaction goes through the implemented [`StorageList`] trait.
//!
//! ## Examples
//!
//! 1. **Appending** some data to the list can happen either by [`Pallet::append_one`]:
#![doc = docify::embed!("frame/paged-list/src/tests.rs", append_one_works)]
//! 2. or by [`Pallet::append_many`]. This should always be preferred to repeated calls to
//! [`Pallet::append_one`]:
#![doc = docify::embed!("frame/paged-list/src/tests.rs", append_many_works)]
//! 3. If you want to append many values (ie. in a loop), then best use the [`Pallet::appender`]:
#![doc = docify::embed!("frame/paged-list/src/tests.rs", appender_works)]
//! 4. **Iterating** over the list can be done with [`Pallet::iter`]. It uses the standard
//! `Iterator` trait. For testing, there is a `Pallet::as_vec` convenience function:
#![doc = docify::embed!("frame/paged-list/src/tests.rs", iter_works)]
//! 5. **Draining** elements happens through the [`Pallet::drain`] iterator. For testing, there is a
//! `Pallet::as_drained_vec` convenience function. Note that even *peeking* a value will remove it.
#![doc = docify::embed!("frame/paged-list/src/tests.rs", drain_works)]
//!
//! ## Pallet API
//!
//! None. Only things to consider is the [`Config`] traits.
//!
//! ## Low Level / Implementation Details
//!
//! Implementation details are documented in [`paged_list::StoragePagedList`].

#![cfg_attr(not(feature = "std"), no_std)]

pub use pallet::*;

pub mod mock;
mod paged_list;
mod tests;

use codec::FullCodec;
use frame_support::{
	pallet_prelude::StorageList,
	traits::{PalletInfoAccess, StorageInstance},
};
pub use paged_list::StoragePagedList;

#[frame_support::pallet]
pub mod pallet {
	use super::*;
	use frame_support::pallet_prelude::*;

	#[pallet::pallet]
	pub struct Pallet<T, I = ()>(_);

	/// A storage paged list akin to what the FRAME macros would generate.
	// Note that FRAME does natively support paged lists in storage.
	pub type List<T, I> = StoragePagedList<
		ListPrefix<T, I>,
		Blake2_128Concat,
		<T as Config<I>>::Value,
		<T as Config<I>>::ValuesPerPage,
		<T as Config<I>>::MaxPages,
	>;

	#[pallet::config]
	pub trait Config<I: 'static = ()>: frame_system::Config {
		type RuntimeEvent: From<Event<Self, I>>
			+ IsType<<Self as frame_system::Config>::RuntimeEvent>;

		/// The value type that can be stored in the list.
		type Value: FullCodec + Clone + MaxEncodedLen;

		/// The number of values per page.
		#[pallet::constant]
		type ValuesPerPage: Get<u32>;

		/// The maximal number of pages in the list.
		#[pallet::constant]
		type MaxPages: Get<Option<u32>>;
	}

	#[pallet::event]
	pub enum Event<T: Config<I>, I: 'static = ()> {}

	#[pallet::call]
	impl<T: Config<I>, I: 'static> Pallet<T, I> {}
}

// This exposes the list functionality to other pallets.
impl<T: Config<I>, I: 'static> StorageList<T::Value> for Pallet<T, I> {
	type Iterator = <List<T, I> as StorageList<T::Value>>::Iterator;
	type Appender = <List<T, I> as StorageList<T::Value>>::Appender;

	fn iter() -> Self::Iterator {
		List::<T, I>::iter()
	}

	fn drain() -> Self::Iterator {
		List::<T, I>::drain()
	}

	fn appender() -> Self::Appender {
		List::<T, I>::appender()
	}
}

/// The storage prefix for the list.
///
/// Unique for each instance.
pub struct ListPrefix<T, I>(core::marker::PhantomData<(T, I)>);

impl<T: Config<I>, I: 'static> StorageInstance for ListPrefix<T, I> {
	fn pallet_prefix() -> &'static str {
		crate::Pallet::<T, I>::name()
	}

	const STORAGE_PREFIX: &'static str = "paged_list";
}

#[cfg(test)]
impl<T: Config<I>, I: 'static> Pallet<T, I> {
	pub(crate) fn as_vec() -> Vec<T::Value> {
		List::<T, I>::iter().collect::<Vec<_>>()
	}
}
