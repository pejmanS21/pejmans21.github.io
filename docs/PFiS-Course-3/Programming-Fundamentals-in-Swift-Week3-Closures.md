# Closures

```swift title="closures.swift" hl_lines="1 8 15" linenums="0"
var sayHello = {() -> () in
    print("Hello")
}

sayHello()
// Hello

var sayHelloTo = {(name: String) -> () in
    print("Hello \(name)")
}

sayHelloTo("Pejman")
// Hello Pejman

var maxNum = {(a: Int, b: Int) -> Int in
    return a > b ? a : b
}

print(maxNum(1, 5))
// 5
```

> Zero and one can be viewed as indexes of an array. `$0` and `$1` is called shorthand argument names.

```swift hl_lines="2" linenums="0"
let letters = ["H" , "E" , "X" , "A"]
let myCollection = letters.sorted(by: { (string1: String, string2: String) -> Bool in return string1 < string2 } )
// returns ["A", "E", "H", "X"] 

let newOrder = letters.sorted(by: {$0 > $1})
// returns ["X", "H", "E", "A"]
```

---

## Exercise: Practice using closures

You have learned that closures are anonymous functions. You can’t call them by themselves like functions because they don’t have a name. Closures are beneficial because they are like portable functions that work in conjunction with constants and variables. By completing this exercise, you will have the opportunity to practice writing a closure.

## **Scenario**

You want to pass around the unlocking treasure chest instructions in your codebase. To extend this functionality, you will abstract the instructions into a closure. A closure allows you to save instructions to a variable/constant. You will use a constant instead of a variable because you only need to assign the closure once in this exercise. With the functionality contained in a constant, you can pass around the constant like any other constant. In addition to executing blocks of code, you can save a closure in a variable/constant. Thus, making a closure more versatile than a function. Saving a closure inside a variable/constant is an example showcase of its versatility. You will practice writing a closure to unlock a treasure chest in this exercise.


## **Instructions**

Create a new playground in Xcode to complete this exercise. Refer to the “[How to complete exercises](https://www.coursera.org/learn/programming-fundamentals-swift/item/IH0Fd)” reading to refresh your memory on creating and launching a new playground in Xcode.

Once you have created a new playground, follow the steps below.

### **Step 1: Declare a variable**

To keep track of the number of gold bars, declare a variable called goldBars. You will begin your journey with zero gold bars. Set the variable value to 0.

### **Step 2: Declare a constant**

Declare a constant called unlockTreasureChest. You’ll attach a closure to this constant.

### **Step 3: Set the constant to a closure**

Set the constant equal to a closure with:

- A parameter called inventory of type Int.
- An Int return type.
- An expression of inventory plus 100 in the body.

Although you can use this closure, you can further simplify it to write less code without compromising functionality or intent expressiveness.

### **Step 4: Refactor the closure**

Set the constant equal to a closure with:

- An in-out parameter called inventory of type Int.
- A Void return type.
- A body consisting of inventory equal to itself plus 100.

### **Step 5: Use the closure**

Call the closure while passing in goldBars into the inventory parameter.

### **Step 6: Print the variable**

To ensure goldBars get incremented, print goldBars.

Run your code and review the output. It should print 100 in the console log.

## **Concluding thoughts**

In this exercise, you created a closure. You also practiced implementing function-like features inside a closure

```swift
var goldBars: Int = 0
let unlockTreasureChest = {(inventory: inout Int) in
    inventory += 100
}

unlockTreasureChest(&goldBars)

print(goldBars)
// 100
```

---

## Exercise: Use functions to modularize a program

You have practiced using functions and closures separately. However, you can also use functions and closures together. One benefit of using functions and closures together is the ability to have a function completion handler via a callback. By completing this exercise, you will have the opportunity to practice writing a completion handler.

## **Scenario**

The protagonist pirate is looking to spend the accumulated gold bars. After spending the gold bars, players want to be notified of the remaining gold bars. To achieve this, you’ll write a function with a completion handler.


## **Instructions**

Create a new playground in Xcode to complete this exercise. Refer to the “[How to complete exercises](https://www.coursera.org/learn/programming-fundamentals-swift/item/IH0Fd)” reading to refresh your memory on creating and launching a new playground in Xcode.

Once you have created a new playground, follow the steps below.

### **Step 1: Declare a variable**

To keep track of the number of gold bars, declare a variable called `goldBars`. Since players will already have gold bars in their inventory, set the variable value to 100.

### **Step 2: Declare a function**

Declare a function called spendTenGoldBars.

### **Step 3: Add an in-out parameter**

In the function signature, add an in-out parameter of type Int with:

- An argument label called from.
- A parameter name called inventory.

### **Step 4: Add a closure parameter**

Now, you’ll create a completion handler. In the function signature, add a closure as your second parameter called completion. Set completion’s:

- Parameter as type Int. You’ll use the closure parameter to return a value to the function caller.
- Return as type Void. Since you don’t need to pass any value back to the closure, you set the return type as Void.

### **Step 5: Minus ten gold bars from the inventory** 

To modify the inventory parameter, add the following to the function body:

- inventory equal to itself minus 10.

### **Step 6: Pass the new inventory value into the closure**

To return the new inventory value, call the completion closure and pass inventory into the closure parameter.

### **Step 7: Print the initial gold bars**

To see your initial gold bars, add the following print statement:

print("You had \(goldBars) gold bars.")

You should have the following in the console log:

**"You had 100 gold bars."**

### **Step 8: Call the function with a completion handler**

Call the function while passing in goldBars in the parameter. Name the closure’s argument label goldBars.

!!! Note ""
    A closure expression written in a function’s final parameter is called a trailing closure.

### **Step 9: Print ten gold bars spent**

To indicate the completion of spending ten gold bars, add the following print statement inside the completion closure:

print("You spent ten gold bars.")

You should have the following in the console log:

**"You spent ten gold bars."**

### **Step 10: Print the remaining gold bars**

To indicate the remaining gold bars, add the following print statement inside the completion closure and after the previous print statement:

print("You have \(goldBars) gold bars.")

You should have the following in the console log:

**"You have 90 gold bars."**

## **Concluding thoughts**

In this exercise, you used functions and closures in conjunction to create a completion handler.

```swift linenums="1"
var goldBars = 100
func spendTenGoldBars(from inventory: inout Int, completion: (Int) -> Void) {
  inventory -= 10
  completion(inventory)
}
print("You had \(goldBars) gold bars.")
spendTenGoldBars(from: &goldBars) { goldBars in
  print("You spent ten gold bars.")
  print("You have \(goldBars) gold bars.")
}
```

---

## Additional resources

The following resource from the Swift Programming Language Guide may be helpful to further your learning of closures:

[Swift Closures](https://docs.swift.org/swift-book/LanguageGuide/Closures.html)
