//// [multipleDefaultExports01.ts]
"use strict";
//// [m1.ts]
//! 
//!   x the name `default` is exported multiple times
//!     ,-[1:1]
//!   1 | ,-> export default class foo {
//!   2 | |   
//!   3 | |-> }
//!     : `---- previous exported here
//!   4 |     
//!   5 | ,-> export default function bar() {
//!   6 | |   
//!   7 | |-> }
//!     : `---- exported more than once
//!   8 |     
//!   9 |     var x = 10;
//!  10 |     export default x;
//!     `----
//! 
//! Error: 
//!   > Exported identifiers must be unique
//! 
//!   x the name `default` is exported multiple times
//!     ,-[2:1]
//!   2 |     
//!   3 |     }
//!   4 |     
//!   5 | ,-> export default function bar() {
//!   6 | |   
//!   7 | |-> }
//!     : `---- previous exported here
//!   8 |     
//!   9 |     var x = 10;
//!  10 | ,-> export default x;
//!     : | ^^^^^^^^|^^^^^^^^
//!     : |         `-- exported more than once
//!  11 |     
//!     `----
//! 
//! Error: 
//!   > Exported identifiers must be unique
//// [m2.ts]
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), (0, require("@swc/helpers/_/_interop_require_default")._(require("./m1")).default)();
