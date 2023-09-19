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

var-declared variables are not block-scoped, but are scoped to the containing function or script, and the effects of setting them persist beyond the block itself. For example:

```Javascript
var x = 1;
{
  var x = 2;
}
console.log(x);
// Output : 2

```
console.log(x); // 2


This outputs 2 because the var x statement within the block is in the same scope as the var x statement before the block. (In C or Java, the equivalent code would have output 1.)

This scoping effect can be mitigated by using let or const.
### Array Literals

**Extra commas in array literals**

```Javascript

const fish = ["Lion", , "Angel"];
// Output : [ 'Lion', <1 empty item>, 'Angel' ]

```

Note that the second item is "empty", which is not exactly the same as the actual undefined value. When using array-traversing methods like Array.prototype.map, *empty slots are skipped*. However, *index-accessing fish[1] still returns undefined*.

**If you include a trailing comma at the end of the list of elements, the comma is ignored.**

```Javascript
const myList = ["home", , "school", ,];
```

In the following example, the length of the array is four, and myList[1] and myList[3] are missing. **Only the last comma is ignored.**


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

### String Literal

You can call any of the String object's methods on a string literal value. JavaScript automatically converts the string literal to a temporary String object, calls the method, then discards the temporary String object.

