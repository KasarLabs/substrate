window.SIDEBAR_ITEMS = {"attr":[["pallet","The `pallet` attribute macro defines a pallet that can be used with [`construct_runtime!`]. It must be attached to a module named `pallet` as follows:"],["require_transactional","Assert the annotated function is executed within a storage transaction."],["storage_alias","Generate a new type alias for [`storage::types::StorageValue`], [`storage::types::StorageMap`], [`storage::types::StorageDoubleMap`] and [`storage::types::StorageNMap`]."],["transactional","Execute the annotated function in a new storage transaction."]],"constant":[["LOG_TARGET","A unified log target for support operations."],["MAX_MODULE_ERROR_ENCODED_SIZE","The number of bytes of the module-specific `error` field defined in [`ModuleError`]. In FRAME, this is the maximum encoded size of a pallet error type."]],"derive":[["CloneNoBound","Derive [`Clone`] but do not bound any generic."],["DebugNoBound","Derive [`Debug`] but do not bound any generic."],["DefaultNoBound","Derive [`Default`] but do not bound any generic."],["EqNoBound","Derive [`Eq`] but do not bound any generic."],["PalletError",""],["PartialEqNoBound","Derive [`PartialEq`] but do not bound any generic."],["RuntimeDebugNoBound","Derive [`Debug`], if `std` is enabled it uses `frame_support::DebugNoBound`, if `std` is not enabled it just returns `\"<stripped>\"`. This behaviour is useful to prevent bloating the runtime WASM blob from unneeded code."]],"enum":[["Never","A type that cannot be instantiated."],["Void","The void type - it cannot exist."]],"fn":[["debug","Print out the debuggable type."],["print","Print something that implements `Printable` from the runtime."]],"macro":[["assert_err","Assert an expression returns an error specified."],["assert_err_ignore_postinfo","Assert an expression returns an error specified."],["assert_err_with_weight","Assert an expression returns error with the given weight."],["assert_error_encoded_size","Assert that the maximum encoding size does not exceed the value defined in [`MAX_MODULE_ERROR_ENCODED_SIZE`] during compilation."],["assert_noop","Evaluate an expression, assert it returns an expected `Err` value and that runtime storage has not been mutated (i.e. expression is a no-operation)."],["assert_ok","Panic if an expression doesn’t evaluate to `Ok`."],["assert_storage_noop","Evaluate any expression and assert that runtime storage has not been mutated (i.e. expression is a storage no-operation)."],["construct_runtime","Construct a runtime, with the given name and the given pallets."],["crate_to_crate_version","Convert the current crate version into a `CrateVersion`."],["decl_error","Declare an error type for a runtime module."],["decl_event","Implement the `Event` for a module."],["decl_module","Declares a `Module` struct and a `Call` enum, which implements the dispatch logic."],["decl_storage","Declares strongly-typed wrappers around codec-compatible types in storage."],["defensive","Generic function to mark an execution path as ONLY defensive."],["ensure","Evaluate `$x:expr` and if not true return `Err($y:expr)`."],["fail","Return Err of the expression: `return Err($expression);`."],["impl_filter_stack",""],["match_and_insert","Macro that inserts some tokens after the first match of some pattern."],["match_type","Create a type which implements the `Contains` trait for a particular type with syntax similar to `matches!`."],["match_types","Create a type which implements the `Contains` trait for a particular type with syntax similar to `matches!`."],["ord_parameter_types","Macro for easily creating a new implementation of both the `Get` and `Contains` traits. Use exactly as with `parameter_types`, only the type must be `Ord`."],["parameter_types","Create new implementations of the `Get` trait."],["parameter_types_impl_thread_local",""],["runtime_print","Print out a formatted message."],["std_enabled","Enable/disable the given code depending on `feature = \"std\"` being enabled for the crate or not."]],"mod":[["crypto","Utilities for dealing with crypto primitives. Sometimes we need to use these from inside WASM contracts, where crypto calculations have weak performance."],["dispatch","Dispatch system. Contains a macro for defining runtime modules and generating values representing lazy module function calls."],["error","Macro for declaring a module error."],["event","Macros that define an Event types. Events can be used to easily report changes or conditions in your runtime to external entities like users, chain explorers, or dApps."],["inherent",""],["instances","Some instance placeholder to be used in [`frame_support::pallet`] attribute macro."],["migrations",""],["pallet_macros","Contains macro stubs for all of the pallet:: macros"],["pallet_prelude","Prelude to be used alongside pallet macro, for ease of use."],["storage","Stuff to do with the runtime’s storage."],["traits","Traits and associated utilities for use in the FRAME environment."],["weights","Re-exports `sp-weights` public API, and contains benchmarked weight constants specific to FRAME."]],"struct":[["Blake2_128","Hash storage keys with blake2 128"],["Blake2_128Concat","Hash storage keys with `concat(blake2_128(key), key)`"],["Blake2_256","Hash storage keys with blake2 256"],["BoundedBTreeMap","A bounded map based on a B-Tree."],["BoundedBTreeSet","A bounded set based on a B-Tree."],["BoundedSlice","A bounded slice."],["BoundedVec","A bounded vector."],["Identity","Store the key directly."],["PalletId","A pallet identifier. These are per pallet and should be stored in a registry somewhere."],["Twox128","Hash storage keys with twox 128"],["Twox256","Hash storage keys with twox 256"],["Twox64Concat","Hash storage keys with `concat(twox64(key), key)`"],["WeakBoundedVec","A weakly bounded vector."]],"trait":[["Hashable",""],["Printable","Trait for things which can be printed from the runtime."],["ReversibleStorageHasher","Hasher to use to hash keys to insert to storage."],["StorageHasher","Hasher to use to hash keys to insert to storage."]],"type":[["ConsensusEngineId","Consensus engine unique ID."]]};