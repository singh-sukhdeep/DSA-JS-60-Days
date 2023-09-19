# Learning Javascript with Data Structures and Algorithms

## Javascript

Javascript is a lightweight interpreted <span title="Just-in-time (JIT) compilation is a computing technique where code is compiled during program execution,commonly translating bytecode to machine code for direct execution. JIT compilers continuously analyze executing code to determine when compilation or recompilation would provide a speed advantage. JIT compilation blends the speed of compiled code with the flexibility of interpretation, though it incurs interpreter and compilation overhead. It's well-suited for dynamic programming languages, supporting late-bound data types and security guarantees, and enables adaptive optimizations like dynamic recompilation and microarchitecture-specific speedups.">**(JIT Compiled)**</span>

### Hoisting

JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

1. Being able to use a variable's value in its scope before the line it is declared. **("Value hoisting")**
2. Being able to reference a variable in its scope before the line it is declared, without throwing a  
  ReferenceError but the value is always undefined. **("Declaration hoisting")**
3. 

Scope of variables

- var     -   global,module,function
- let     -   global,module,function,block
- const   -   global,module,function,block


A variable declared with let, const, or class is said to be in a **"temporal dead zone" (TDZ)** from the start of the block until code execution reaches the place where the variable is declared and initialized.


### Integer literals

```Javascript
const decimalExample = 123; // Base 10
// Outputs : 123

const octalExmaplle = 0o145; // Base 8
// Outputs : 101

const hexaExample = 0x3242abedf; // Base 16
// Outputs : 13491683039

const binaryExample = 0B11; // Binary Number;
// Outputs : 3

```