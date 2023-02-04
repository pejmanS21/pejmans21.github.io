# Functions

So far you have learned that:

- Functions are blocks of code that can be executed from other pieces of code.
- Each function performs a specific task.
- Functions allow you to reuse code.

In this reading, you will explore examples of functions. You will reflect on what they are, why they are used, and most importantly, explore how to use them in your code.

## Function Types

You learned that each function in Swift has a type:

- Optional parameter types: These parameters allow you to pass one or more values into the function when called.
- Optional return type: Allows the function to return one or more values back to the caller.

## Calling Functions

You also learned that all functions have a name. To call a function, you execute its name followed by a pair of parentheses. The parentheses enclose an optional list of parameters.

For example “print()” is a function declared in the Swift library: print("Hello World")

## Defining a Function

To define a function, you have to tell the compiler three things:

- The name of the function
- The data type of the returned value(s)
- The data type(s) and names of any parameters (arguments)

Once the above has been defined, the function can be called.

Furthermore, a function has the following layout:

```swift
func functionName(arguments) -> ReturnType {
    Execute some code
    return ReturnType
}
```

## A simple function in practice 

Next, let’s review an example of defining a simple function.

Below is a simple function named showPhi. It takes no parameters and does not return any values.

When a function returns nothing, the return type is Void. Void is also an alias for (). You can use the two interchangeably. Typically a function that returns nothing wouldn't explicitly write Void or () as the return type. Nevertheless, it's helpful to know that the Void return type is implicit when an explicit function's return type isn't present.

```swift
func showPhi() {
   print("The value of phi is (√5 + 1) ÷ 2")
}
```

You can now call this function from elsewhere like this:

showPhi()

Next, you'll review an example of a function that passes an argument.

## Passing parameters

The argument is a local variable that will hold the passed data. Take note that the type of argument must be declared.

```swift hl_lines="1" linenums="0"
func double(passedValue: Int) {
  let result = passedValue * 2
  print("Double \(passedValue) is \(result)")
}
```

This function can now be called from elsewhere like this:

double(passedValue: 10)

## Passing multiple parameters.

You can pass multiple parameters to a function. Your function can also return a value.

To return a value, specify the function's expected return type. The keyword return is used to return the final value. Return is also the last command the function will execute.

The following example multiplies two numbers and returns the result:

```swift hl_lines="1" linenums="0"
func multiply(firstValue: Int, secondValue: Int) -> Int {
  let result = firstValue * secondValue
  return result
}
```

This function can now be called from elsewhere like this:

let result = multiply(firstValue: 10, secondValue: 3)

## In-out parameters

Function's parameters are `constants`. The compiler will not allow you to modify the parameters within the function body. To modify a parameter's value and persist the change, you use an in-out parameter. You declare an in-out parameter with the inout keyword before a parameter's type.

Here is an example:

```swift hl_lines="1" linenums="0"
func increment(number: inout Int) {
    number += 1
    print(number)
}

var number = 0
increment(number: &number)
// 1
```

When passing a variable as an argument for an in-out parameter, you put an ampersand (&) before passing the variable's name.

## Concluding thoughts  

In this reading, you reviewed how functions can be used to perform specific tasks. You also explored how functions can take parameters and return values. Furthermore, you explored how functions are used to make code reusable.

---

## Exercise: Practice using functions

So far, you have learned that functions allow you to reuse blocks of code. In this exercise, you will have the opportunity to practice creating a function. By the time you complete this exercise, you will be able to write a function. This will enable you to call on blocks of code without writing the underlying code every time.

## Scenario

Suppose you are creating a role-playing game where the protagonist is a pirate. The aim of the game is to journey across the seven seas and accumulate gold bars along the way.

In this exercise, you will create a function to unlock treasure chests. Each time a treasure chest is unlocked, the player's gold bar inventory will increment by 100.


## Instructions

Create a new playground in Xcode to complete this exercise. Refer to the “[How to complete exercises](https://www.coursera.org/learn/programming-fundamentals-swift/supplement/IH0Fd/how-to-complete-exercises)” reading to refresh your memory on creating and launching a new playground in Xcode.

Once you have created a new playground, follow the steps below to start creating the pirate adventure.

### Step 1: Declare a variable

1.  To keep track of the number of gold bars, declare a variable called goldBars.
2.  Since the player will begin their journey with zero gold bars, set the variable value to 0.

### Step 2: Define a function

Since pirates can unlock treasure chests more than once, it’s worthwhile to define a function to reuse the code without having to write all the underlying code every time.

Begin by defining a function called unlockTreasureChest.

Tip: Notice that the function name describes the intent for the code inside the body.

### Step 3: Set the return type

Your function will return an integer. For that reason, set the function signature return type to Int.

Note: It’s normal to see a compile error until you return an Int in the function body.

### Step 4: Add a parameter

To pass the current gold bars into the function, add a parameter called inventory of type Int to the function signature.

### Step 5: Update the body

In the function body, return inventory plus 100.

The "100" value is an arbitrarily defined value. Essentially, the inventory increases by 100 gold bars each time a treasure chest opens. And the function you write calculates the sum of the inventory and 100 gold bars after opening a treasure chest.

### Step 6: Return an expression implicitly

Since the function body consists of a single line of code as the function’s return statement, you can return an implicit expression to make your code more succinct.

Convert the function’s return statement to an expression.

### Step 7: Call the function

Next, suppose a player finds three treasure chests. To unlock and accumulate the gold bars from the treasure chests using your function, do the following:

1.  Set goldBars equal to calling the function with goldBars passed in the parameter.
2.  Print goldBars.
3.  Run your code and review the output. You should see 100 in the console log.
4.  Repeat steps 1, 2 and 3. You should see 200 in the console log.
5.  Repeat steps 1, 2 and 3 again. You should see 300 in the console log.

## Concluding thoughts

In this exercise, you created a function. You also practiced implementing a function parameter, return type, and body. In addition to this, you also used an expression in-place of a return statement.

```swift hl_lines="3" linenums="0"
var goldBars: Int = 0

func unlockTreasureChest(inventory: Int) -> Int {
    // return inventory + 100
    /*
     * or
     */
    inventory + 100
}

goldBars = unlockTreasureChest(inventory: goldBars)

print(goldBars)
// 100

goldBars = unlockTreasureChest(inventory: goldBars)

print(goldBars)
// 200

goldBars = unlockTreasureChest(inventory: goldBars)

print(goldBars)
// 300
```

---

### More Examples

```swift hl_lines="1 8 15" linenums="0"
func paramEx1 (fn: String, sn: String) {
    print("Hello \(fn) \(sn).")
}

paramEx1(fn: "John", sn: "Doe")
// Hello John Doe.

func paramEx2 (_ fn: String, _ sn: String) {
    print("Hello \(fn) \(sn).")
}

paramEx2("John", "Doe")
// Hello John Doe.

func paramEx3 (firstname fn: String, surname sn: String) {
    print("Hello \(fn) \(sn).")
}

paramEx3(firstname: "John", surname: "Doe")
// Hello John Doe.
```

- Default value

```swift hl_lines="1" linenums="0"
func paramEx1 (fn: String, sn: String = "Doe") {
    print("Hello \(fn) \(sn).")
}

paramEx1(fn: "John")
// Hello John Doe.

paramEx1(fn: "Jon", sn: "Snow")
// Hello Jon Snow.
```

- variable as function

```swift hl_lines="5" linenums="0"
func sum2Ints (a: Int, b: Int) -> Int {
    return a + b
}

var myFunction: (Int, Int) -> Int = sum2Ints

print(myFunction(2, 3))
// 5
```

> Note: As defined by the [Swift programming language guide](https://docs.swift.org/swift-book/LanguageGuide/Initialization.html):

_The_ _memberwise initializer_ _is a shorthand way to initialize the member properties of new structure instances. Initial values for the properties of the new instance can be passed to the memberwise initializer by name._

---

## Exercise: Practice writing succinctly expressive functions

You have learned about the basics of using functions in your code. In this exercise, you will practice additional function features and adding syntactic sugar in Swift. Syntactic sugar is about writing code in a way that is expressive and easy to read. This is beneficial for communicating your code to other developers and future self.

By completing this exercise, you will be able to write more versatile and succinctly expressive functions.

## Scenario

Suppose multiple developers share a common codebase to build a pirate game. Eventually, the developers will run into each other's code.

Imagine this scenario:

1.  Developer B needs to use a function created by Developer A.
2.  Developer A’s function is difficult to understand with a non-descriptive function name and difficult to read due to the verbose syntax.
3.  Developer B spends three days figuring out Developer A’s code.
4.  Developer B is still unsure of the function’s details.
5.  Developer B asks Developer A about the function details.
6.  Developer A forgets because the function’s details were written six months ago.
7.  Developer A also could not figure out the function’s intention because some parts of the function were not expressive.


In this scenario, Developer B is having a challenging time understanding and reading Developer A’s function. To clearly communicate the intention of a piece of code, it is helpful to write code expressively. To make reading code easy, it is helpful to write code succinctly. Writing expressive and succinctly written code is commonly referred to as syntactic sugar.

In this function exercise, you will practice Swift syntactic sugar by utilizing a(n):

- Default parameter value.
- Argument label.
- In-out parameter.

You will make a function more expressive and succinct than the original version.

## Instructions

Create a new playground in Xcode to complete this exercise. Refer to the “[How to complete exercises](https://www.coursera.org/learn/programming-fundamentals-swift/supplement/IH0Fd/how-to-complete-exercises)” reading to refresh your memory on creating and launching a new playground in Xcode.

Once you have created a new playground, follow the steps below to begin adding syntactic sugar to a Swift function.

### Step 1: Declare a variable

1.  To keep track of the number of gold bars in the pirate game, declare a variable called goldBars.
2.  Since the player will begin their journey with zero gold bars, set the variable value to 0.

### Step 2: Add unsweetened function

Add the following function to your playground:

```swift
func incrementInventory(inventory: Int) -> Int {
  return inventory + 100
}
```

You will make this function more versatile and succinctly expressive.

### Step 3: Add a second parameter

Every time you increment the inventory, it will always increment by 100. However, suppose you wish to increment it by a different value, that’s currently not an option. To make a dynamic increment value possible, you can utilize a second parameter.

Add a second parameter called amount of type Int to the function.

Tip: You will set the default value in the function signature as well.

### Step 4: Update the body

To utilize the recently added second parameter, replace 100 with amount in the function body.

### Step 5: Provide a default parameter value

When you want to make it an option for developers to call your function without necessarily passing in a value to the parameter each time, you can use a default parameter. For instance, if most treasure chests contain 100 gold bars and you would otherwise often need to pass in 100 in the parameter, you can reduce the verboseness of your code using a default parameter value.

Provide amount with a default value of 100.

### Step 6: Add an argument label

Now, you’ll look at Swift syntactic sugar. Succinctly expressive code improves communication between developers building on a common codebase.

Currently, if you call your function, it may read something like “increment inventory inventory gold bars amount 200.” What if you can make your function signature read more like an English sentence? Using an argument label can help you express your code to read more like an English sentence.

In the function signature, add an argument label called by for the amount parameter.

Now at the function call-site, your function may read something like “increment inventory inventory gold bars by 200”.

It's better, but can still be improved.

### Step 7: Omit an argument label

To further express your function to read more like an English sentence, you can omit an argument label. In the function signature, omit inventory’s argument label.

Now at the function call-site, your function may read something like “increment gold bars by 200.” That reads more expressively and succinctly.

### Step 8: Make an in-out parameter

If you want to modify a function parameter value in Swift, you’ll need to use an in-out parameter. In the function signature, convert inventory into an in-out parameter.

### Step 9: Set the in-out parameter value in the body

You can now modify the inventory parameter value within the function body. You no longer need to call a function and set the function result to a variable as you did in a previous exercise.

1.  In the function body, set inventory equals itself plus amount.
2.  Remove the function’s return type because you no longer need to return a value.

### Step 10: Calling the function

Suppose a player finds five treasure chests. To unlock and accumulate the gold bars from the treasure chests using your sweetened function, do the following:

1.  Call the function with goldBars passed in the inventory parameter.
2.  Print goldBars.
3.  Call the function with goldBars passed in the inventory parameter.
4.  Print goldBars.
5.  Call the function with goldBars passed in the inventory parameter.
6.  Print goldBars.
7.  Call the function with goldBars passed in the inventory parameter and 300 in the amount parameter.
8.  Print goldBars.
9.  Call the function with goldBars passed in the inventory parameter and 50 in the amount parameter.
10. Print goldBars.

Run your program and review the output in the console.

## Concluding thoughts

In this exercise, you sweetened a function with syntactic sugar. You practiced adding a second parameter, adding an argument label, setting a default parameter value, omitting an argument label, and working with an in-out parameter.

```swift linenums="1"
var goldBars = 0
func incrementInventory(_ inventory: inout Int, by amount: Int = 100) {
  inventory += amount
}
incrementInventory(&goldBars)
print(goldBars)
//100
incrementInventory(&goldBars)
print(goldBars)
//200
incrementInventory(&goldBars)
print(goldBars)
//300
incrementInventory(&goldBars, by: 300)
print(goldBars)
//600
incrementInventory(&goldBars, by: 50)
print(goldBars)
//650
```

---

## Additional resources

The following resource from the Swift Programming Language Guide may be helpful to further your learning of functions:

[Swift Functions](https://docs.swift.org/swift-book/LanguageGuide/Functions.html)
