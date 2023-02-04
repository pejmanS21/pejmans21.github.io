# Collections `Dictionaries`

```swift title="exampleDictionaries.swift" hl_lines="1 2 22 26 35 40" linenums="0"
var travelMiles: Dictionary<String, Int> = ["Richie": 500, "Peter": 400, "Deamon": 100]
var emptyDict = Dictionary<String, String>()

print(travelMiles)
print(emptyDict)

if let traveller = travelMiles["Richie"] {
    print(traveller)
    // Because key exists
    // 500
}

if let traveller = travelMiles["Scarlett"] {
    print(traveller)
    // Key doesn't exist
} else {
    print("Key doesn't exist! return 'nil'")
    // Key doesn't exist! return 'nil'
}


travelMiles["Peter"] = 500
print(travelMiles)
// ["Richie": 500, "Peter": 500]

if let oldvalue = travelMiles.updateValue(300, forKey: "Peter") {
    print("The old value for Peter was \(oldvalue)")
}
print(travelMiles)
// ["Richie": 500, "Peter": 300]


// Remove an Item
// No. 1
if let deletedItem = travelMiles.removeValue(forKey: "Richie") {
    print("Item deleted: \(deletedItem).")
}

// No. 2
travelMiles["Richie"] = nil
print(travelMiles)
// ["Peter": 300, "Deamon": 100]
```

---

## Exercise: Dictionaries in Swift

So far you’ve learned that dictionaries allow you to store key-value pairs. In this activity, you will have the opportunity to apply what you’ve learned to use dictionaries in a fictional weather app. You will also be prompted to apply programming concepts that you have learned about previously. This will allow you to have a first-hand experience of how dictionaries may be used in practice together with other Swift programming basics.

After completing this exercise, you will be able to create and use dictionaries to store specific keys and values. You will also be able to use forced unwrapping and optional binding to modify the values within a dictionary.

If you’d like to refresh your memory on what these concepts entail, please revisit the lesson on [optionals](https://www.coursera.org/learn/programming-fundamentals-swift/lecture/695xt/introduction-to-optionals).

## Scenario

Weather apps are handy tools that allow users to review the weather forecast for a specific timeline. For this activity, you will use dictionaries to store the daily temperatures of a specific week.


## Instructions

Create a new playground in Xcode to complete this exercise. Refer to the “[How to complete exercises](https://www.coursera.org/learn/programming-fundamentals-swift/supplement/IH0Fd/how-to-complete-exercises)” reading to refresh your memory on creating and launching a new playground in Xcode.

Once you have created a new playground, follow the steps below to create your very own weather app.

### **Tips**

- Use the count property to determine the number of elements in a dictionary.
- Use forced unwrapping to access dictionary elements with valid keys.
- Use optional binding to check if a certain element exists in the dictionary.

### **Step 1: Create a dictionary**

To start this exercise, you will begin by creating an empty dictionary.

1.  First, create a variable that stores the daily temperatures of the current week. Call it weeklyTemperatures and set its value to [:] to indicate that it’s an empty dictionary.
2.  Set the variable’s type to [String: Int]. The dictionary’s keys are strings that will store the name of the day, while the values are integers that will store the daily temperature of a given day.

**Note:** You set the dictionary’s type explicitly because type inference doesn’t work with empty dictionaries.

### **Step 2: Set the daily temperatures in the dictionary**

Update the weeklyTemperatures variable’s value to: ["Monday": 70, "Tuesday": 75, "Wednesday": 80, "Thursday": 85, "Friday": 90, "Saturday": 95]

**Note:** Each key is separated by its value with a colon. The pairs of keys and values are separated by commas.

### **Step 3.1: Update the first day’s temperature**

Next, you will change the temperature value of the first day in the weekly temperatures dictionary.

Use the addition assignment operator and the forced unwrapping operator to add a certain value to the daily temperature for the first day of the week.

**Tip:** Since the temperature’s value is an optional, you first have to unwrap it before you can use its value properly. The first day of the week’s temperature is already in the weekly temperatures dictionary. This means that you can access its value with the forced unwrapping operator. Use the first key in the weeklyTemperatures dictionary to retrieve the temperature value of the first day; namely "Monday".

### **Step 3.2: Evaluate the changed value**

Then, to evaluate that you have successfully retrieved and changed the value, print the daily temperature for the first day of the week to the console.

Run your code and review the output. Depending on the value you changed it to, the updated temperature for the given day should display in the console.

For example, if you added 20 to the initial value, the output to the console should be: "The temperature on Monday is 90°F."


The print statement retrieves the temperature value from the weekly temperatures dictionary using the first key in the dictionary. The forced unwrapping operator safely unwraps the temperature’s value before printing it out.

### **Step 4: Add a new key-value pair**

For the purpose of this exercise, you will use optional binding to evaluate if the dictionary contains the key and value for the last day of the week, namely "Sunday". More specifically, you will use the else block of the if let statement to define the key-value pair for the last day of the week in the weeklyTemperature dictionary.

1.  Use an if let statement with optional binding to check if Sunday is already stored in the weeklyTemperature dictionary.
    1.  Create a binding constant, call it temperature and assign the unwrapped value of the last day of the week to it.
2.  Next, include a print statement inside the if block that prints the key and the value to the console. This means that if the value already exists in the dictionary, the print statement will be executed.
3.  Then in the else block, set Sunday's temperature to 100. This means that if the key, the associated value, or both don't already exist in the dictionary, the else block will add it.
4.  Finally, print the daily temperature for the last day of the week to the console inside the else block. Use the forced unwrapping operator to retrieve the last day of the week’s temperature from the weekly temperatures dictionary since the last day of the week’s temperature now exists in the weekly temperatures dictionary.

Run your program and review the output to the console. You should now have a new printed line that reflects the temperature value on Sunday.

### **Step 5: Reset the dictionary for a new week**

To conclude this exercise, you will now prepare the weekly temperatures dictionary for the next week’s weather forecast for when the current week ends.

1.  Use an if statement with the count property of the weeklyTemperatures dictionary to check if the weekly temperatures dictionary already contains all the daily temperatures for all the days of the week.
2.  Print the weather forecast’s status for the whole week inside the if block.
3.  Assign an empty dictionary to the weeklyTemperatures dictionary inside the if block. This means that you are preparing the weekly temperatures dictionary for next week’s weather forecast now that the weather forecast of the current week is ending.
4.  Print the weather forecast’s status for the next week inside the if block.

### **Step 6: Run your code**

Run your program and note down the output.

The first printed statement should be: "The temperature on Monday is 90°F."

## **Concluding thoughts**

In this exercise, you created a dictionary with several key-value pairs. You then went on to use forced unwrapping to access dictionary elements with valid keys. Thereafter, you used optional binding to check if an element exists in the dictionary and then you moved on to use the count property to determine the number of elements in the dictionary.

By completing this exercise, you have demonstrated your ability to use dictionaries in hand with other programming concepts to configure a weather app. Well done!

???+ Note
    If you got stuck along the way, don’t worry! You have come a long way on your learning journey and practicing takes time, grit and patience. And since you’ve come this far, you likely already possess those characteristics.

Take a break to enjoy your favorite beverage, then refer to the solution code in the following reading and try again. You might just be surprised by what you learn after completing the exercise again.

```swift hl_lines="1 2" linenums="0"
//var weeklyTemperatures = Dictionary<String, Int>()
var weeklyTemperatures: [String: Int] = [:]

print(weeklyTemperatures)

weeklyTemperatures = ["Monday": 70, "Tuesday": 75, "Wednesday": 80, "Thursday": 85, "Friday": 90, "Saturday": 95]

print(weeklyTemperatures)

weeklyTemperatures["Monday"]! += 20

print(weeklyTemperatures)
print("The temperature on Monday is \(weeklyTemperatures["Monday"]!)ºF")

if let temperature = weeklyTemperatures["Sunday"] {
    print("The temperature on Sunday was \(temperature)ºF.")
}
else {
    weeklyTemperatures["Sunday"] = 100
}

print("The temperature on Sunday was \(weeklyTemperatures["Sunday"]!)ºF.")

if weeklyTemperatures.count == 7 {
    print("Week complete!")
    weeklyTemperatures = [:]
    print("Weather forecast’s status for the next week: \(weeklyTemperatures).")
}
```

> **_When accessing a key's associated value in a dictionary by force unwrapping, your program will terminate code execution if the key's associated value isn't present._**

#### For loop in dictionaries

```swift
var vehicles = ["unicycle": 1, "bike": 2]

for (vehName, vehWheel) in vehicles {
    print("A \(vehName) has \(vehWheel) wheel(s).")
}
```

---

## Exercise: Using loops with collection types

So far you’ve learned that developers use loops to continually execute repeated blocks of code while a certain condition is satisfied. You have also learned that data structures like arrays, tuples and dictionaries allow you to store a collection of values. In this exercise, you will practice using loops with these collection types.

After completing this exercise, you will be able to use for in loops to loop over arrays, tuples and dictionaries. If you need a refresher on how to use loops in your code, please refer to the lesson on [loops](https://www.coursera.org/learn/programming-fundamentals-swift/lecture/zpbGm/basic-loops-in-swift).

## **Scenario**

In this exercise, you will practice iterating through arrays and dictionaries. Also, you will learn to incorporate tuples in your for loops.

You will iterate through game levels and increase the game score at each level. Furthermore, you will report the weather forecast for each day of the week.


## **Instructions**

Create a new playground in Xcode to complete this exercise. Refer to the “[How to complete exercises](https://www.coursera.org/learn/programming-fundamentals-swift/supplement/IH0Fd/how-to-complete-exercises)” reading to refresh your memory on creating and launching a new playground in Xcode.

Once you have created a new playground, follow the steps below to implement the logic for a multi-level game that also uses a weather widget.

### **Step 1: Display individual game level scores**

For the first step in this exercise, you will create an array to store the score the player achieved for each game level. You will then use a for in loop and the enumerated() method to print each level with its respective score to the console.

1.  Start by creating a constant for the level scores array. Name it levelScores and set its value to [10, 20, 30, 40, 50, 60, 70].
2.  Use a for in loop with the enumerated() method applied on levelScores. The enumerated() method returns a tuple of the iteration's index and value in levelScores. **Tip:** Include the keyword for followed by (level, score). This creates a tuple. Then insert the keyword in followed by the array name appended with the enumerated() method.
3.  Next, use string interpolation to print the level and score at each iteration. Make sure you add 1 to level because zero-based indexing starts at one. This way, the first loop iteration indicates level 1 instead of level 0.

Run your code and review the output in the console. You should now have individual lines that increment the level number with the player’s score for that level. For example:

_The score of level 1 is 10. The score of level 2 is 20. The score of level 3 is 30._

### **Step 2: Display final game score**

Next, you will use the addition assignment operator to tally up the scores currently stored in the levelScores array to reflect the final game score. You will then print the final game score to the console once the game is finished.

1.  Create a variable for the game’s score. Call it gameScore and set its initial value to 0.
2.  Use a for in loop to go through all elements in the levelScores array. The loop uses a constant that stores the score of the current game level.
3.  Add the individual level scores to the game’s score with the addition assignment operator inside the for in loop.
4.  Print the final game’s score to the console.

Run your code and review the output. The output should display that the final game score is 280.

### **Step 3: Display the weather forecast while the game is played**

Now you will create a dictionary for the weather widget that displays the weather forecast in-game for the current week.

1.  Create a constant for the dictionary that will store the daily temperatures of the current week. Name it weeklyTemperatures and set its value to: ["Monday": 70, "Tuesday": 75, "Wednesday": 80, "Thursday": 85, "Friday": 90, "Saturday": 95, "Sunday": 100]. The dictionary’s keys represent the days of the week and the values represent the daily temperatures.
2.  Use a for in loop to iterate weeklyTemperatures. And you a tuple to access the key and value at each iteration, for example: (day, temperature).
3.  Print the current day of the week and its daily temperature inside the for in loop.

Run your code and review the output in the console.

Notice that the days of the week aren’t printed in their natural order. This is because dictionaries aren’t ordered by default like arrays. You will fix this in the next step of the exercise.

### **Step 4: Sequence the weather forecast accurately** 

In this final step of the exercise, you will use what is known as **synchronized arrays** to store the days of the week and temperatures in an ordered manner.

1.  Start by creating a constant for the first array. Name it days and set its value to ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].
2.  Next, create another constant for a second array. This array will store the daily temperatures of the current week. Call it temperatures and set its value to [70, 75, 80, 85, 90, 95, 100].
3.  Use a for in loop with a closed range to go through all the elements in the range. The loop uses a constant that stores the current element in the range. The range’s current element is the array index you use to synchronize the days array with the temperatures array during each loop iteration.
4.  Print the current day of the week and its daily temperature inside the for in loop. Reference both the days and temperatures arrays inside the print statement. Remember to include [index] in the string interpolation.

Run your code and review the output. Notice that the days of the week are printed in their natural order since **arrays are ordered by default**.

## **Concluding thoughts**

By completing this exercise, you demonstrated your ability to use for in loops with different collection types. You created arrays and dictionaries to store specific values, practiced using for in loops to iterate over the elements in the collection type, and learned how to use tuples to unpack the values stored in arrays.

You should now be able to describe that the key difference between an array and a dictionary is that arrays use indices that order their elements properly, while dictionaries use keys that don't have a natural order for their values.

```swift linenums="1"
let levelScores = [10, 20, 30, 40, 50, 60, 70]

for (level, score) in levelScores.enumerated() {
    print("The score of level \(level + 1) is \(score).")
}

var gameScore = 0

for levelScore in levelScores {
    gameScore += levelScore
}

print("The game's score is \(gameScore).")

let weeklyTemperatures = [
    "Monday": 70, "Tuesday": 75, "Wednesday": 80, "Thursday": 85,
    "Friday": 90, "Saturday": 95, "Sunday": 100,
]

for (day, temperature) in weeklyTemperatures {
    print("The temperature on \(day) is \(temperature)°F.")
}

let days = [
    "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday", "Sunday"]

let temperatures = [70, 75, 80, 85, 90, 95, 100]

for index in 0...6 {
    print("The temperature on \(days[index]) is \(temperatures[index])°F.")
}
```

---

## Additional resources

The following resource from the Swift Programming Language Guide may be helpful as you continue learning about collections:

[Collection Types](https://docs.swift.org/swift-book/LanguageGuide/CollectionTypes.html)
