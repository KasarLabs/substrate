(function() {var implementors = {
"sp_arithmetic":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"sp_arithmetic/fixed_point/struct.FixedI128.html\" title=\"struct sp_arithmetic::fixed_point::FixedI128\">FixedI128</a>&gt; for <a class=\"struct\" href=\"sp_arithmetic/fixed_point/struct.FixedI128.html\" title=\"struct sp_arithmetic::fixed_point::FixedI128\">FixedI128</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"sp_arithmetic/fixed_point/struct.FixedI64.html\" title=\"struct sp_arithmetic::fixed_point::FixedI64\">FixedI64</a>&gt; for <a class=\"struct\" href=\"sp_arithmetic/fixed_point/struct.FixedI64.html\" title=\"struct sp_arithmetic::fixed_point::FixedI64\">FixedI64</a>"],["impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;N&gt; for <a class=\"struct\" href=\"sp_arithmetic/per_things/struct.Perbill.html\" title=\"struct sp_arithmetic::per_things::Perbill\">Perbill</a><span class=\"where fmt-newline\">where\n    N: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"sp_arithmetic/traits/trait.UniqueSaturatedInto.html\" title=\"trait sp_arithmetic::traits::UniqueSaturatedInto\">UniqueSaturatedInto</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Rem.html\" title=\"trait core::ops::arith::Rem\">Rem</a>&lt;N, Output = N&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Div.html\" title=\"trait core::ops::arith::Div\">Div</a>&lt;N, Output = N&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;N, Output = N&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;N, Output = N&gt; + <a class=\"trait\" href=\"sp_arithmetic/traits/trait.Unsigned.html\" title=\"trait sp_arithmetic::traits::Unsigned\">Unsigned</a>,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.u32.html\">u32</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;N&gt;,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"sp_arithmetic/per_things/struct.Percent.html\" title=\"struct sp_arithmetic::per_things::Percent\">Percent</a>&gt; for <a class=\"struct\" href=\"sp_arithmetic/per_things/struct.Percent.html\" title=\"struct sp_arithmetic::per_things::Percent\">Percent</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"sp_arithmetic/fixed_point/struct.FixedU128.html\" title=\"struct sp_arithmetic::fixed_point::FixedU128\">FixedU128</a>&gt; for <a class=\"struct\" href=\"sp_arithmetic/fixed_point/struct.FixedU128.html\" title=\"struct sp_arithmetic::fixed_point::FixedU128\">FixedU128</a>"],["impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;N&gt; for <a class=\"struct\" href=\"sp_arithmetic/per_things/struct.Perquintill.html\" title=\"struct sp_arithmetic::per_things::Perquintill\">Perquintill</a><span class=\"where fmt-newline\">where\n    N: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"sp_arithmetic/traits/trait.UniqueSaturatedInto.html\" title=\"trait sp_arithmetic::traits::UniqueSaturatedInto\">UniqueSaturatedInto</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.u64.html\">u64</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Rem.html\" title=\"trait core::ops::arith::Rem\">Rem</a>&lt;N, Output = N&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Div.html\" title=\"trait core::ops::arith::Div\">Div</a>&lt;N, Output = N&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;N, Output = N&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;N, Output = N&gt; + <a class=\"trait\" href=\"sp_arithmetic/traits/trait.Unsigned.html\" title=\"trait sp_arithmetic::traits::Unsigned\">Unsigned</a>,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;N&gt;,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"sp_arithmetic/per_things/struct.Perbill.html\" title=\"struct sp_arithmetic::per_things::Perbill\">Perbill</a>&gt; for <a class=\"struct\" href=\"sp_arithmetic/per_things/struct.Perbill.html\" title=\"struct sp_arithmetic::per_things::Perbill\">Perbill</a>"],["impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;N&gt; for <a class=\"struct\" href=\"sp_arithmetic/per_things/struct.Percent.html\" title=\"struct sp_arithmetic::per_things::Percent\">Percent</a><span class=\"where fmt-newline\">where\n    N: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"sp_arithmetic/traits/trait.UniqueSaturatedInto.html\" title=\"trait sp_arithmetic::traits::UniqueSaturatedInto\">UniqueSaturatedInto</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.u8.html\">u8</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Rem.html\" title=\"trait core::ops::arith::Rem\">Rem</a>&lt;N, Output = N&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Div.html\" title=\"trait core::ops::arith::Div\">Div</a>&lt;N, Output = N&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;N, Output = N&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;N, Output = N&gt; + <a class=\"trait\" href=\"sp_arithmetic/traits/trait.Unsigned.html\" title=\"trait sp_arithmetic::traits::Unsigned\">Unsigned</a>,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.u8.html\">u8</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;N&gt;,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"sp_arithmetic/per_things/struct.Perquintill.html\" title=\"struct sp_arithmetic::per_things::Perquintill\">Perquintill</a>&gt; for <a class=\"struct\" href=\"sp_arithmetic/per_things/struct.Perquintill.html\" title=\"struct sp_arithmetic::per_things::Perquintill\">Perquintill</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"sp_arithmetic/per_things/struct.PerU16.html\" title=\"struct sp_arithmetic::per_things::PerU16\">PerU16</a>&gt; for <a class=\"struct\" href=\"sp_arithmetic/per_things/struct.PerU16.html\" title=\"struct sp_arithmetic::per_things::PerU16\">PerU16</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"sp_arithmetic/fixed_point/struct.FixedU64.html\" title=\"struct sp_arithmetic::fixed_point::FixedU64\">FixedU64</a>&gt; for <a class=\"struct\" href=\"sp_arithmetic/fixed_point/struct.FixedU64.html\" title=\"struct sp_arithmetic::fixed_point::FixedU64\">FixedU64</a>"],["impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;N&gt; for <a class=\"struct\" href=\"sp_arithmetic/per_things/struct.PerU16.html\" title=\"struct sp_arithmetic::per_things::PerU16\">PerU16</a><span class=\"where fmt-newline\">where\n    N: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"sp_arithmetic/traits/trait.UniqueSaturatedInto.html\" title=\"trait sp_arithmetic::traits::UniqueSaturatedInto\">UniqueSaturatedInto</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.u16.html\">u16</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Rem.html\" title=\"trait core::ops::arith::Rem\">Rem</a>&lt;N, Output = N&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Div.html\" title=\"trait core::ops::arith::Div\">Div</a>&lt;N, Output = N&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;N, Output = N&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;N, Output = N&gt; + <a class=\"trait\" href=\"sp_arithmetic/traits/trait.Unsigned.html\" title=\"trait sp_arithmetic::traits::Unsigned\">Unsigned</a>,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.u16.html\">u16</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;N&gt;,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"sp_arithmetic/per_things/struct.Permill.html\" title=\"struct sp_arithmetic::per_things::Permill\">Permill</a>&gt; for <a class=\"struct\" href=\"sp_arithmetic/per_things/struct.Permill.html\" title=\"struct sp_arithmetic::per_things::Permill\">Permill</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"sp_arithmetic/biguint/struct.BigUint.html\" title=\"struct sp_arithmetic::biguint::BigUint\">BigUint</a>&gt; for <a class=\"struct\" href=\"sp_arithmetic/biguint/struct.BigUint.html\" title=\"struct sp_arithmetic::biguint::BigUint\">BigUint</a>"],["impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;N&gt; for <a class=\"struct\" href=\"sp_arithmetic/per_things/struct.Permill.html\" title=\"struct sp_arithmetic::per_things::Permill\">Permill</a><span class=\"where fmt-newline\">where\n    N: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"sp_arithmetic/traits/trait.UniqueSaturatedInto.html\" title=\"trait sp_arithmetic::traits::UniqueSaturatedInto\">UniqueSaturatedInto</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Rem.html\" title=\"trait core::ops::arith::Rem\">Rem</a>&lt;N, Output = N&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Div.html\" title=\"trait core::ops::arith::Div\">Div</a>&lt;N, Output = N&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;N, Output = N&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;N, Output = N&gt; + <a class=\"trait\" href=\"sp_arithmetic/traits/trait.Unsigned.html\" title=\"trait sp_arithmetic::traits::Unsigned\">Unsigned</a>,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.u32.html\">u32</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;N&gt;,</span>"]],
"sp_std":[],
"sp_weights":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"sp_weights/struct.Weight.html\" title=\"struct sp_weights::Weight\">Weight</a>&gt; for <a class=\"struct\" href=\"sp_arithmetic/per_things/struct.Perbill.html\" title=\"struct sp_arithmetic::per_things::Perbill\">Perbill</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"sp_weights/struct.Weight.html\" title=\"struct sp_weights::Weight\">Weight</a>&gt; for <a class=\"struct\" href=\"sp_arithmetic/per_things/struct.Percent.html\" title=\"struct sp_arithmetic::per_things::Percent\">Percent</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"sp_weights/struct.Weight.html\" title=\"struct sp_weights::Weight\">Weight</a>&gt; for <a class=\"struct\" href=\"sp_arithmetic/per_things/struct.PerU16.html\" title=\"struct sp_arithmetic::per_things::PerU16\">PerU16</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"sp_weights/struct.Weight.html\" title=\"struct sp_weights::Weight\">Weight</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.u64.html\">u64</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"sp_weights/struct.Weight.html\" title=\"struct sp_weights::Weight\">Weight</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.u16.html\">u16</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"sp_weights/struct.Weight.html\" title=\"struct sp_weights::Weight\">Weight</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.u32.html\">u32</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"sp_weights/struct.Weight.html\" title=\"struct sp_weights::Weight\">Weight</a>&gt; for <a class=\"struct\" href=\"sp_arithmetic/per_things/struct.Permill.html\" title=\"struct sp_arithmetic::per_things::Permill\">Permill</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"sp_weights/struct.Weight.html\" title=\"struct sp_weights::Weight\">Weight</a>&gt; for <a class=\"struct\" href=\"sp_arithmetic/per_things/struct.Perquintill.html\" title=\"struct sp_arithmetic::per_things::Perquintill\">Perquintill</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"sp_weights/struct.Weight.html\" title=\"struct sp_weights::Weight\">Weight</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.u8.html\">u8</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;T&gt; for <a class=\"struct\" href=\"sp_weights/struct.Weight.html\" title=\"struct sp_weights::Weight\">Weight</a><span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.u64.html\">u64</a>, Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.u64.html\">u64</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()