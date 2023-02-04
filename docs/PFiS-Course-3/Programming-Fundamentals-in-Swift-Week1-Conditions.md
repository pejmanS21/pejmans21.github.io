# Conditions

> Generally, comparison operators return a Boolean of true or false by comparing two values, while logical operators allow you to evaluate more than one condition at a time.

|  Operator  | Meaning      |
| :--------: | ------------ |
|    `&&`    | **AND**      |
|     ll     | Or           |
|    `!`     | Not          |
|    `^`     | Exclusive or |
|    `==`    | Equal        |
|    `!=`    | Not equal    |
| `>=`, `>`  | Greater      |
| `<=` , `<` | Less than    |

### `if/else else/if`

```swift
let num = 2

if num == 1 {
	print("First")
}
else if num == 2 {
	print("Second")
}
else {
	print("Not in top 2!")
}
```

## Switch statements

Now that you have a better understanding of conditionals like if and if else statements, you are ready to learn about another statement that lets you test conditions. More specifically, you will be introduced to switch statements. In this reading, you will learn what they are, why they are used, and most importantly, how to use them in your code.

## What are switch statements? 

Switch statements are conditional statements that compare the value of a constant or variable with a fixed set of values. If the constant or variable’s value matches one of the values in the set, then the block of code associated with that value gets executed.

## Why do programmers use them? 

Switch statements behave like else if statements.

Switch statements have two big advantages over else if statements:

- They are easier to both read and write because you don’t have to repeat the name of the constant or variable like you do in each if or else if branch of an if else if statement. The name of the constant or variable appears only once in the switch statement and each value in the set is defined as a separate switch case.
- They are exhaustive so you always have to cover all possible cases. This doesn’t happen with if else if statements since there is no way of telling if all options have been handled with if, else if or else branches.

You will explore these advantages with relevant examples next.

## Switch statements in practice

Let’s start with an if else if statement and then convert it to a switch statement.

Imagine you are creating a weather app that works with different languages. You use else if statements to check what the default language is set to.

```swift
let language = "English"
if language == "English" {
  print("The default language is set to English.")
} else if language == "Spanish" {
  print("The default language is set to Spanish.")
} else {
  print("The default language has not been configured yet.")
}
```

The **language** constant appears in each if and else if branch of the above statement. This behavior can be simplified with switch statements.

```swift
let language = "English"
switch language {
    case "English": print("The default language is set to English.")
    case "Spanish": print("The default language is set to Spanish.")
    default: print("The default language has not been configured yet.")
}
```

The **language** constant appears only once this time. Each switch case defines a possible value for the language constant. The default case handles all of the values that aren’t declared in any of the previous cases. This makes sure the switch statement is always exhaustive.

Default cases of switch statements aren’t required to do anything in particular even if they are always present to make switch statements exhaustive.

```swift hl_lines="5"
let language = "English"
switch language {
    case "English": print("The default language is set to English.")
    case "Spanish": print("The default language is set to Spanish.")
    default: break
}
```

The above switch statement uses the break statement inside the default case. Since the default case can’t be empty, the break statement simply concludes the switch statement. If you leave the default case empty, you will receive an error.

## Concluding thoughts 

Switch statements are conditional statements that match constants and variables with certain values. They allow you to write code that’s exhaustive and easier to read and write.

---

## Exercise: Work with conditional statements in Swift

In this exercise, you will practice creating and working with conditional statements to implement a very basic weather app.

## Scenario

You might recall that in an earlier exercise, you implemented code for a basic weather app to display the temperature of a specific day. In this exercise, you will apply programming concepts that configure the app to work with Fahrenheit degrees. You will use conditional statements and logical operators to check the configuration of the weather app and display its settings.

## Instructions

Create a new playground in Xcode to complete this exercise. Refer to the “[How to complete exercises](https://www.coursera.org/learn/programming-fundamentals-swift/supplement/IH0Fd/how-to-complete-exercises)” reading to refresh your memory on creating and launching a new playground in Xcode.

Once you have created a new playground, follow the steps below to create your very own weather app.

#### Tips

- Boolean constants only have two possible values: true and false.
- You can use three types of conditions in your code: if statements, if else statements and if else if statements.
- The OR logical operator evaluates the compound condition to true if and only if either of its conditions are true.

### Step 1: Create a Boolean constant

For the first step of the exercise, you will create a Boolean constant to determine if users are using the free or paid version of the app.

1.  Create a Boolean constant named freeApp.
2.  Set the value to true.

Boolean constants only have two possible values: true and false. In this case, the Boolean will indicate whether users are either running the free version of the app, or the paid version.

### Step 2: Check the status of the app

Use a simple if statement to check which version of the app is currently running.

**Tip:** The condition should use the **equality comparison operator** ( == ) to check if the freeApp constant is true.

### Step 3: Print the status of the app

Use the print statement to print the following message if the status is true: _"You are using the free version of the app. Buy the full version of the app to get access to all of its features."_

**Tip:** Place the print statement between the curly brackets of the if statement.

### Step 4: Create temperature constants

Next, create constants to store the morning and evening temperatures of the current day.

1.  First, create a constant that stores the morning temperature of the current day. Name it morningTemperature and set its value to 70.
2.  Next, create a constant that stores the evening temperature of the current day. Call it eveningTemperature and set its value to 80.

You should now have two constants that you will use in the next step of the exercise.

### Step 5: Check the daily temperature

Use an **if else statement** to check which time of day has the coldest temperature.

**Tip:** The condition should use the **less than operator** (<)to test if the morning’s temperature is less than the evening’s temperature. The if block will run if the condition is true, while the else block should run if the condition is false.

1.  Add a print statement inside the **if block** that prints the morning’s weather report to the console.
2.  Add a print statement inside the **else block** that prints the evening’s weather report to the console.

Run your code and review the output in the console. If your if else statement runs correctly, you should notice that only the print statement from the if block outputs to the console since the condition is true.

### Step 6: Check the app’s default settings

Next, you are going to use the if else statement to check that the app is configured to Fahrenheit degrees as a default temperature setting.

1.  First create the default setting by declaring a constant that stores the degree. Name it temperatureDegree and set its value to "Fahrenheit".
2.  Next create an if else statement to confirm that the app uses Fahrenheit degrees.
3.  Then add a print statement inside the if block that prints that the app uses Fahrenheit degrees.
4.  Finally, add a print statement inside the else block that prints that the app uses Celsius degrees.

Run your code and review the output in the console. The output should confirm that the app defaults to Fahrenheit degrees.

### Step 7: Check if the app is using Fahrenheit OR Celsius

Now you need to check that Fahrenheit or Celsius is being used and ensure another temperature scale such as Kelvin is not being used. To achieve this, you will use conditions and logical operators.

1.  First, create an if else statement that uses the logical OR operator to check if the app uses Fahrenheit or Celsius degrees. The compound condition is true if and only if either of its conditions is true and false otherwise.
2.  Then print inside the **if block** that the app is configured properly.
3.  Finally, print inside the **else block** that the app isn’t configured properly.

Run your code and review the output to the console. The printed statement should indicate that the app is configured correctly since at least one of the conditions is true.

### Step 8: Check what region the app is configured for

Finally, you are going to check what specific region the app is configured for by evaluating the default temperature degree.

1.  Declare a switch statement that selects the right temperature degree type from the list of temperature degree types provided by the app. The switch statement switches on the temperatureDegree constant and prints the app configuration to the console.
2.  Print to the console that the app is configured for the US in the first switch case of the switch statement. The temperatureDegree constant’s value you test is "Fahrenheit" in this case. This means that the app uses Fahrenheit degrees for its temperature.
3.  Print to the console that the app is configured for Europe in the second switch case of the switch statement. The temperatureDegree constant’s value you test is "Celsius" in this case. This means that the app uses Celsius degrees for its temperature.
4.  Add a default case to the switch statement in order to make it exhaustive. The default case handles all values of the temperatureDegree constant that other switch cases don’t handle. Print to the console that the app has an unknown configuration in this case. This means that the app doesn’t use either Celsius or Fahrenheit degrees for its temperature.

### Step 9: Run your code

Run your program and note down the output.

The first printed statement should be: "You are using the free version of the app. Buy the full version of the app to get access to all of its features."

## Concluding thoughts

In this exercise, you practiced using conditional statements and logical operators to configure a simple weather app to work with Fahrenheit degrees.

```swift linenums="1"
let freeApp = true

if freeApp == true {
    print("You are using the free version of the app. Buy the full version of the app to get access to all of its features.")
}

let morningTemperature = 70
let eveningTemperature = 80

if morningTemperature < eveningTemperature {
    print("Morning temperature is \(morningTemperature).")
}
else {
    print("Evening temperature is \(eveningTemperature).")
}

let temperatureDegree = "Fahrenheit"

if temperatureDegree == "Fahrenheit" {
    print("App uses \(temperatureDegree) degrees.")
}
else {
    print("App uses Celsius degrees.")
}

if temperatureDegree == "Fahrenheit" || temperatureDegree == "Celsius" {
    print("App is configured properly.")
}
else {
    print("App isn’t configured properly.")
}

switch temperatureDegree {
case "Fahrenheit":
   print("App is configured for the US.")
case "Celsius":
    print("App is configured for Europe.")
default:
   print("App has an unknown configuration.")
}
```

## Additional resources

Refer to the [Control Flow](https://docs.swift.org/swift-book/LanguageGuide/ControlFlow.html) chapter from the Swift Programming Language Guide to further your understanding of conditional statements.
