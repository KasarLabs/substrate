(function() {var implementors = {
"frame_remote_externalities":[["impl&lt;B: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"frame_remote_externalities/struct.RemoteExternalities.html\" title=\"struct frame_remote_externalities::RemoteExternalities\">RemoteExternalities</a>&lt;B&gt;"]],
"pallet_assets":[["impl&lt;T: <a class=\"trait\" href=\"pallet_assets/pallet/trait.Config.html\" title=\"trait pallet_assets::pallet::Config\">Config</a>&lt;I&gt;, I: 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"pallet_assets/struct.ExtraMutator.html\" title=\"struct pallet_assets::ExtraMutator\">ExtraMutator</a>&lt;T, I&gt;"]],
"pallet_atomic_swap":[["impl&lt;AccountId, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"pallet_atomic_swap/struct.BalanceSwapAction.html\" title=\"struct pallet_atomic_swap::BalanceSwapAction\">BalanceSwapAction</a>&lt;AccountId, C&gt;<span class=\"where fmt-newline\">where\n    C: <a class=\"trait\" href=\"frame_support/traits/tokens/currency/reservable/trait.ReservableCurrency.html\" title=\"trait frame_support::traits::tokens::currency::reservable::ReservableCurrency\">ReservableCurrency</a>&lt;AccountId&gt;,</span>"]],
"pallet_nomination_pools":[["impl&lt;T: <a class=\"trait\" href=\"pallet_nomination_pools/pallet/trait.Config.html\" title=\"trait pallet_nomination_pools::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"pallet_nomination_pools/struct.BondedPool.html\" title=\"struct pallet_nomination_pools::BondedPool\">BondedPool</a>&lt;T&gt;"]],
"sc_consensus":[["impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"sc_consensus/shared_data/struct.SharedDataLocked.html\" title=\"struct sc_consensus::shared_data::SharedDataLocked\">SharedDataLocked</a>&lt;'a, T&gt;"]],
"sp_api":[["impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"sp_api/struct.ApiRef.html\" title=\"struct sp_api::ApiRef\">ApiRef</a>&lt;'a, T&gt;"]],
"sp_core":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"sp_core/offchain/struct.OffchainWorkerExt.html\" title=\"struct sp_core::offchain::OffchainWorkerExt\">OffchainWorkerExt</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"sp_core/offchain/struct.OffchainDbExt.html\" title=\"struct sp_core::offchain::OffchainDbExt\">OffchainDbExt</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"sp_core/traits/struct.ReadRuntimeVersionExt.html\" title=\"struct sp_core::traits::ReadRuntimeVersionExt\">ReadRuntimeVersionExt</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"sp_core/offchain/struct.TransactionPoolExt.html\" title=\"struct sp_core::offchain::TransactionPoolExt\">TransactionPoolExt</a>"]],
"sp_keystore":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"sp_keystore/struct.KeystoreExt.html\" title=\"struct sp_keystore::KeystoreExt\">KeystoreExt</a>"]],
"sp_statement_store":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"sp_statement_store/runtime_api/struct.StatementStoreExt.html\" title=\"struct sp_statement_store::runtime_api::StatementStoreExt\">StatementStoreExt</a>"]],
"sp_std":[],
"sp_storage":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"sp_storage/struct.PrefixedStorageKey.html\" title=\"struct sp_storage::PrefixedStorageKey\">PrefixedStorageKey</a>"]],
"substrate_cli_test_utils":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"substrate_cli_test_utils/struct.KillChildOnDrop.html\" title=\"struct substrate_cli_test_utils::KillChildOnDrop\">KillChildOnDrop</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()