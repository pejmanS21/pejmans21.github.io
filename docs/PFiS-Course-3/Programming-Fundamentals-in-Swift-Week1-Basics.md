# Additional resources

### Downloading Xcode

Visit the Mac App Store to [download Xcode](https://apps.apple.com/us/app/xcode/id497799835?ls=1&mt=12). When downloading Xcode, please note the following:

1.  **An Apple ID is required.** Your Apple ID account holds your sign-in, contact and security information that lets you access Apple services such as the App Store, Apple Music, iCloud, iMessage, etc.
2.  **Xcode is free to use.** When you are ready to distribute your apps to the App Store, there are different paid membership programs that you can choose from.
3.  Downloading and installing Xcode may take several minutes, even hours, to complete. **It is recommended to install Xcode in advance** before continuing your learning journey since you will be prompted to complete coding exercises using Xcode playgrounds.

Here is a list of additional resources that may be helpful as you get started with Xcode and Swift.

- [Xcode Support](https://developer.apple.com/support/xcode/)
- [Apple Developer Program](https://developer.apple.com/support/compare-memberships/)
- [Swift Playground](https://www.apple.com/uk/swift/playgrounds/)
- [About Swift](https://www.swift.org/about/)

#### Constants & Variables

```swift
// Constants value doesn’t change
let number = 10
print(number)
// 10

// Variables value can change
let age = 20
print(number)
// 20
```

> **Swift will perform type checks before compiling your code.**

## How to complete exercises

Throughout this course, you will encounter different exercises to practice the programming concepts you learn about.

In most exercises, you will be prompted to create a new playground in Xcode. The purpose of this reading is to provide you with a step-by-step guide on creating and launching a new playground in Xcode.

### Step 1: Launch Xcode

Open the Finder application, navigate to the Applications folder and find the Xcode application.

- Click on it to launch the application.
- Once Xcode has launched, you should be presented with the “Welcome to Xcode” window.

### Step 2: Create new playground

Next, from the menu bar at the top of the screen, choose: File > New > Playground…

### Step 3: Select template

You will be presented with a window asking you to select a template for the new playground.

- For the platform, select "macOS".
- Then select the "Blank" template.
- Once you have selected the template, click "next".

### Step 4: Save the playground

A new window will appear with the default name “MyPlayground”.

- For each exercise, you may choose to give the playground a unique name.
- Select the save location.
- Finally, click the “Create” button at the bottom right corner of the box.

### Step 5: Clear the playground

Clear the playground of the default template code so that you have a fresh, clean playground to complete your exercises.

### Step 6: Run your code

Once you have completed the exercise, use the "play" button to run the code. The playground output appears in the console at the bottom of the playground window.

**Take note:** Should you encounter a “failure to communicate error” when attempting to run your code, you may restart Xcode and try again.

---

## Exercise: Working with constants and variables

In this exercise, you will have the opportunity to practice creating and using constants and variables with different data types. After completing this exercise, you will be able to demonstrate your ability to use Swift basics to implement code for a very basic weather app.

Remember, the purpose of this exercise is to practice and build on your existing knowledge. Take your time to complete the individual steps. You will have access to the solution file after completing the exercise.

### Take note:

Swift uses both constants and variables to optimize code. However, from a coding perspective, variables are often more difficult to handle since they can lead to undesirable patterns in your code if used incorrectly. For this reason, the Swift programming guidelines recommend using constants wherever possible and reserving the use of variables for when values **will** change.

In this exercise, you will practice using both constants and variables.

You may notice that Xcode issues a warning message when you use variables to store a value that never changes. This message serves as a reminder to use constants where you have only assigned a value once.

## Scenario

Imagine you are creating a weather app that computes daily and weekly temperatures. You will use constants and variables to define the temperature of the current day of the week and the average temperature for that week.

## Instructions

Create a new playground in Xcode to complete this exercise. Refer to the “[How to complete exercises](https://www.coursera.org/learn/programming-fundamentals-swift/item/IH0Fd)” reading to refresh your memory on creating and launching a new playground in Xcode.

Once you have created a new playground, follow the steps below to create your very own weather app.

### Step 1: Create a constant for the day of the week

1.  First, declare a constant for the day of the week. You may recall that to declare a constant you must use the keyword let followed by the constant’s name. For this exercise, call the constant day.
2.  Next, set the constant’s value to "Monday". To assign the value, add the equal sign after the constant name followed by the string "Monday".

A string, as the name suggests, is a string of characters enclosed inside double quotes. Don’t worry too much about this now, you will learn more about strings later.

You should now have a line of code that reads: `let day = "Monday"`

### Step 2: Create a constant for the temperature

1.  In the next line, create another constant for the daily temperature. You may call it dailyTemperature.
2.  Set the value to 75.

You should now have a line of code that reads `let dailyTemperature = 75`.

**Tip**: The dailyTemperature constant’s name uses a naming convention called “**camel case notation**”. This is useful because element names cannot contain spaces. Using camel case notation makes compound names easier to read.

You should now have two different constants, one with a string value and the other with an integer. You might recall that a constant’s value may never change. Their values can only be set once.

### Step 3: Print the current day

A print function, otherwise known as a print statement, allows you to "print" a message to the output console. For this step, use a print function to print the current day of the week.

1.  In a new line, insert the keyword print followed by parentheses. It should read like this: `print()`
2.  Next, inside the parentheses, add the description that you would like to display in the console when the print function is executed. For example, `"Today is…"`.
3.  Finally, reference the constant in the print function. To do this, insert a backslash followed by the constant’s name in parentheses. For example `"\(day)"`. This is called “**string interpolation**”.

You should now have a print function that reads: `print("Today is \(day)")`.

Notice that the sentence inside the print function is also enclosed in double quotes.

You can also insert text after the constant. For example, try adding “Rise and shine!” as a new sentence in the same print function.

**Run your code and review the output.**

**Tip:** To run your code, click on the checkbox above the console. You should now have the sentence `"Today is Monday. Rise and shine!" displayed in the console.`

### Step 4: Print the daily temperature

Next, create a new print function to include the dailyTemperature constant. This will allow you to print the current day of the week and the daily temperature. For example, you may create the print function to read: `"The temperature on \(day) is \(dailyTemperature)°F"`

Run your code and review the output in the console.

As you may have noticed, you can print as many custom values inside the same print function as you'd like.

### Step 5: Create a variable

Next, you will create a variable that stores the **current** temperature on a given day.

Since the current temperature may fluctuate throughout the day, the value of the variable may change. For this reason, you will use a variable as opposed to a constant.

1.  In a new line, create a variable by inserting the keyword var followed by the variable name. In this case, call it temperature.
2.  Set the initial value to 70.

You should now have a line of code that reads `var temperature = 70`.

For the purpose of this exercise, the value represents the temperature of Monday morning. You will have the opportunity to change this value later.

### Step 6: Print the morning temperature

Print the morning temperature of the current day to the console. To achieve this, you will include the day constant as well as the temperature variable.

Run your code and review the output in the console. The output should read: `"The temperature on Monday morning is 70°F."`

!!! Warning ""
	Don’t worry if you did not get the same result right away. Refer to step 3 to refresh your memory on using the print function. If you are still stuck, you may review the solution code in the next reading after completing this exercise.

### Step 7: Change the value

Next, practice changing the value of the temperature variable by setting it to 80.

To do this, insert `temperature = 80` in a new line. This value represents the evening temperature.

Note that you should not include the var keyword again. This is because you are adjusting a variable’s value, as opposed to creating a new one.

### Step 8: Print the evening temperature

Print the evening temperature of the current day to the console.

Run your code and review the output in the console. The output should read: "The temperature on **Monday** evening is **80**°F."

### Step 9: Create another constant

Create a constant that stores the average temperature of the week. Call it weeklyTemperature and set its value to 75.

### Step 10: Set the value of a variable based on the value of another constant

Update the value of the temperature variable to the value of the weeklyTemperature constant. This makes sure the weather app is focusing on the average temperature of the week.

To achieve this, set temperature equal to weeklyTemperature.

### Step 11: Print the average weekly temperature

Print the average temperature of the week to the console by referencing the temperature variable in a new print function.

Now run your code. The output to the console should read: "The average temperature this week is **75°F**."

### Step 12: Review the output in the console

After running your program, review the output in the console and note it down.

The first printed statement should be: "Today is Monday. Rise and shine!"

## Concluding thoughts

In this exercise, you practiced creating and using variables to store values. You also learned how to use the print function to output these values to the console.

```swift
let day = "Monday"
let dailyTemperature = 75

print("Today is \(day), Rise and shine!")
print("The temperature on \(day) is \(dailyTemperature)°F.")

var temperature = 70

print("The temperature on \(day) morning is \(temperature)°F.")

temperature = 80

print("The temperature on \(day) evening is \(temperature)°F.")

let weeklyTemperature = 75

print("The average temperature this week is \(weeklyTemperature)°F.")
```

---

## Exercise: Operators and data types

You've learned that operators allow you to perform operations on variables and values to manipulate individual data items and return a specific result. Now to put theory to practice, you will explore how to use operators to perform simple calculations using different data types.

## Scenario

Suppose you are creating a simple game with multiple levels. After completing each level, the player receives a score. You will use operators and data types to tally up the total game score based on the player’s performance in each level. You will also compute the current level’s average score.

## Instructions

Create a new playground in Xcode to complete this exercise. Refer to the “[How to complete exercises](https://www.coursera.org/learn/programming-fundamentals-swift/supplement/IH0Fd/how-to-complete-exercises)” reading to refresh your memory on creating and launching a new playground in Xcode. Once you have created a new playground, follow the steps below to create your very own game with multiple levels.

### Step 1: Create constants and variables

Create a constant and variable for the game’s score and the current level’s score.

1.  First, **declare a constant** for the current level’s score. For example,`let levelScore = 10`.
2.  Next, **create a variable** for the game’s score. You may call it gameScore. Set its value to 0.

**Note:** The levelScore constant and gameScore variable names use “camel case notation”. This makes them easy to identify and read.

### Step 2: Update the game’s score

Use the **addition assignment operator** (`+=`) to add the current level’s score to the game’s score.

The operator performs two different operations at the same time. It first adds the values of the gameScore variable and levelScore constant and then assigns the result to the gameScore variable.

You should now have a line of code that reads `gameScore += levelScore`.

### Step 3: Print the game’s score

Use the print statement to print the game’s score to the console. You can add any custom description to the print statement, for example: “The game’s score is…”. This will output the description with a value to the console.

**Tip:** Remember to use backslash with the gameScore variable in parenthesis in your print statement. This is called “string interpolation”.

Now run your code and review the output. The following should display in the console: "The game's score is 10."

### Step 4: Create a floating point variable

In some cases, the score will not incur an entire point and partial points might need to be awarded.

Create a variable that stores the current level’s bonus score: Call it levelBonusScore and set its initial value to 10.0.

**Tip:** Recall that this type of value is called a **floating point** value.

### Step 5: Change the value of the floating point variable

Next, try to change the value of the levelBonusScore variable to 20. You can do this by inserting the following code in a new line:

levelBonusScore = 20

You may think that the levelBonusScore variable can also store integer values. The next step proves that this is not the case.

### Step 6: Print the current level’s bonus score

Print the current level’s bonus score to the console by inserting the following line of code: `print("The level's bonus score is \(levelBonusScore).")`

Run your code and review the output in the console. Notice the value of the levelBonusScore variable is 20.0 instead of 20. This is because the variable only stores floating point values.

### Step 7: Compute the game’s final score

Next, you are going to add the current level’s bonus score to the game’s final score with the addition assignment operator. Note that you must first convert the current level’s bonus score to an **integer** value. This is because you can’t add floating point values to integer values.

1.  First insert the gameScore variable followed by the addition assignment operator (+=).
2.  Then specify the type you would like the levelBonusScore to change to. Since it needs to be an integer, use the keyword Int.
3.  Finally, insert the levelBonusScore variable inside parentheses.

You should now have a line of code that reads: `gameScore += Int(levelBonusScore)`

**Tip:** This method of changing the type is called “**type casting**”.

### Step 8: Print the game’s final score

Now that you have added the bonus level score to the total game score, print the game’s final score to the console and run your code.

The output in the console should read: "The game's final score is 30."

### Step 9: Create additional constants

Next, suppose the game uses the player’s average score to determine if they qualify for a bonus level. Before you can determine the average, you must first identify the lowest and highest scores and define the total levels in the game.

Create constants for the current level’s lowest and highest scores and the number of levels in the game.

1.  First, declare a constant for the current level’s lowest score. For example, `let levelLowestScore = 50`.
2.  Next, create a constant for the current level’s highest score. You may call it levelHighestScore. Set its value to 99.
3.  Finally, define a constant that stores the number of levels of the game. Call it levels and set its initial value to 10.

### Step 10: Compute the current level’s average score

Next, use the previously declared constants to determine the current level’s average score. For this step, you will create new constants and use operators to define their values.

1.  First, subtract the current level’s lowest score from the current level’s highest score. Store the result in a new constant called levelScoreDifference.
2.  Next, divide the value determined in the previous step by the number of levels to get the current level’s average score. Store the result in a new constant called levelAverageScore.

The current level’s average score isn’t quite accurate in this case. You will explore why that happens in the following steps.

### Step 11: Print the current level’s average score

Print the current level’s average score to the console and run your code. The output in the console should read: "The level's average score is 4."

Notice the value of the averageLevelScore constant is 4 instead of 4.9. This is because when you divide two integers, an integer value is returned. You will fix this in the next step.

### Step 12: Update the current level’s average score

Use type casting to convert levelScoreDifference and levels to floating point constants before dividing them. Store the result in a new constant called averageLevelScore.

**Tip:** Previously you used the keyword Int to change the value to an integer, for this step you must use the keyword Double to change an integer value to a floating point.

### Step 13: Print the updated current level’s average score

Print the updated current level’s average score to the console and run your code.

The output in the console should read: "The level's average score is 4.9"

### Step 14: Review the output

After running your program, review and note down the output.

The first printed statement should be: "The game's score is 10."

## Concluding thoughts

In this exercise, you practiced using compound assignment operators to update the values of variables. You also used type casting to change the types of constants and variables.

```swift
let levelScore = 10
var gameScore = 0

gameScore += levelScore

print("The game's score is \(gameScore).")

var levelBonusScore = 10.0

// levelBonusScore will be float even an integer assign to it!
levelBonusScore = 20

print("The level's bonus score is \(levelBonusScore).")

gameScore += Int(levelBonusScore)

let levelLowestScore = 50
let levelHighestScore = 99
let levels = 10

/*
let levelScoreDifference = (levelHighestScore - levelLowestScore) / levels

// Should be 4.9 NOT 4 (because two Int
print("The level's average score is \(levelScoreDifference).")

 */

let levelScoreDifference = Float(levelHighestScore - levelLowestScore)

let averageLevelScore = levelScoreDifference / Float(levels)

print("The level's average score is \(averageLevelScore).")
```

---

### Strings Methods

```swift
let quote = "Hello World"
// Check Prefix
quote.hasPrefix("H")    // true
quote.hasPrefix("h")    // false
// Check Suffix
quote.hasSuffix("D")    // false
quote.hasSuffix("d")    // true

quote.uppercased()    // HELLO WORLD
quote.lowercased()    // hello world

// Count lenght of String
let theCount = quote.count    // 11

let longString = """ hello there
					bye
					"""
```

---

## Exercise: Working with strings in Swift

In this exercise, you will practice working with strings to implement a very basic calendar app.

## Scenario

Suppose you are creating a calendar app that works with different time zones. You will use strings to determine the current day of the week and the current time and time zone.

## Instructions

Create a new playground in Xcode to complete this exercise. Refer to the “How to complete exercises” reading to refresh your memory on creating and launching a new playground in Xcode.

Once you have created a new playground, follow the steps below to create your very own calendar app.

### Step 1: Create constant

Create a constant for the current day of the week. For example, let day equal "Monday".

**Tip**: Remember to use double quotes for the day’s name since it is a string.

### Step 2: Print the current day

Use the print statement to print the current day of the week to the console. You can add any custom description to the print statement, for example: "Today is…". This will output the description with a value to the console.

**Tip:** Remember to use backslash with the day constant in parentheses in your print statement. Recall that this is called **“string interpolation”**.

### Step 3: Create more constants

Create constants for the current time’s components.

You will insert the values as strings instead of integers for the current hour and minutes. This is because it is easier to determine the current time if all of its components are already strings. Don’t worry about the time zone yet.

1.  First, declare a constant for the current hour. For example, let hour equal "6".
2.  Next, create a constant for the minutes. You may call it minutes. Set its value to "15".
3.  Finally, define a constant that stores the current period of the day. Call it period and set its initial value to "PM".

You should now have three constants that you will use in the next step of the exercise.

### Step 4: Determine the current time

Next, determine the current time.

1.  First, create a variable for the current time and call it time.
2.  Then, use **string concatenation** with the **addition operator** to determine the current time from its components.
3.  Finally, assign the result to the time variable.

You should now have a line of code that reads: var time = hour + ":" + minutes + " " + period

**Tip:** Recall that **string concatenation** describes the action of adding components, like other strings, together.

### Step 5: Print the current time

Print the current time to the console and run your code.

The output on the console should read: "It is 6:15 PM."

### Step 6: Print the current time and day

Print the current **time** and **day** to the console. You may print as many custom values as you wish with the same print statement.

Run your code and review the output. The output on the console should read: "It is 6:15 PM on Monday."

### Step 7: Determine the current time zone

Create a constant that stores the current time zone. Call it timezone and set its value to "PST".

### Step 8: Update the current time

Use the addition assignment operator with string interpolation to add the current time zone to the current time.

Your code should read: `time += " \(timezone)"`

### Step 9: Print the updated time

Print the updated time to the console and run your code.

The output on the console should read: "It is 6:15 PM PST."

### Step 10: Print the updated time and current day

Print the updated time and current day to the console.

The output on the console should read: "It is 6:15 PM PST on Monday."

### Step 11: Determine the short name for a given day

Next, configure the calendar app to display the short name of the current day of the week. For example, Wednesday's short name is Wed and Sunday's short name is Sun.

1.  Declare a constant called shortDay.
2.  Use the prefix method on day. In the method parameter, pass in 3 to retrieve the initial three elements of a string.

Your code should read:

`let shortDay = day.prefix(3)`

### Step 12: Print the short name of the current day

Print the short name of the current day of the week to the console and run your code.

The output on the console should read: "Today is Mon."

### Step 13: Print the short name of the current day and the final time

Print the short name of the current day of the week and the final time to the console.

Run your code and review the output. The output on the console should read: "It is 6:15 PM PST on Mon."

## Concluding thoughts

In this exercise, you practiced using string concatenation to add multiple strings together. You also used string interpolation to print custom values to the console.

```swift linenums="1"
let day = "Monday"

print("Today is \(day).")

let hour = "6"
let minutes = "15"
let period = "PM"

var time = hour + ":" + minutes + " " + period

print("It is \(time) on \(day).")

let timezone = "PST"

time += " \(timezone)"

print("It is \(time).")
print("It is \(time) on \(day).")

let shortDay = day.prefix(3)

print("Today is \(shortDay).")

print("It is \(time) on \(shortDay).")
```

---

## Additional resources

The following resources from the Swift Programming Language Guide may be helpful as you continue your learning journey:

- [Swift Basics](https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html)
- [Basic Operators](https://docs.swift.org/swift-book/LanguageGuide/BasicOperators.html)
- [Strings and Characters](https://docs.swift.org/swift-book/LanguageGuide/StringsAndCharacters.html)
