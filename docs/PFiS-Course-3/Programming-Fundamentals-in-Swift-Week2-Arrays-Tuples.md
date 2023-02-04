# Arrays & Tuples

> you can create an array of integers, floats, or strings, but you cannot mix them.

```swift hl_lines="1 2" linenums="0"
var colors: [String] = ["red", "yellow", "blue"]
var numbers = [10, 34, 5]

colors[1] = "green"
print(colors)
// ["red", "green", "blue"]

print(colors.count)
// 3

colors.append("black")
print(colors)
// ["red", "green", "blue", "black"]

colors.insert("white", at: 2)
print(colors)
//["red", "green", "white", "blue", "black"]

colors.remove(at: 2)
print(colors)
// ["red", "green", "blue", "black"]
```

---

## Exercise: Arrays in Swift

In this exercise, you will practice using arrays to store information. You will also practice using the count property to determine the number of elements in an array. You will use the append method to add values to an existing array and use the addition assignment operator to add arrays together.

## Scenario

Suppose you are creating a very basic game with multiple levels. The first three levels are free, while players need to pay to access the remaining levels. The game dashboard displays the player's score for each individual level. In this exercise, you will use arrays to store the scores of the levels while the game is played.

## Instructions

Create a new playground in Xcode to complete this exercise. Refer to the [“How to complete exercises” reading](https://www.coursera.org/learn/programming-fundamentals-swift/supplement/IH0Fd/how-to-complete-exercises) to refresh your memory on creating and launching a new playground in Xcode. Once you have created a new playground, follow the steps below to create your very own game with multiple levels.

### Tips

- Use the **count property** to determine the number of elements in an array.
- Use the **append method** to add a certain value to an array.
- Use the **addition assignment operator** to add an array to another array.

### Step 1: Create an empty array

1.  Create a variable to store the scores of the game levels. Call it levelScores.
2.  Since the game hasn’t been played yet and there are no score values to store, set its value to []. This indicates that the array is currently empty.
3.  Set the variable’s type to [Int]. You have to specify the type since the level scores are integers and type inference doesn’t work with empty arrays.

### Step 2: Use the count property to determine if the game has started

Suppose you want to welcome new players to the game if it’s their first time playing. You will create a print statement to display a message in the console if the game hasn’t been attempted yet.

To achieve this, create an if statement to check if the array is empty, then add a print statement with your welcome message.

1.  Use the count property to create an if statement that compares the number of elements in the levelScores array (using the count property) with 0. The count property counts the number of elements in the array and the if statement checks if they are equal to 0.
2.  Next, print a welcome message of your choice to the console inside the if block if there are no levels in the level scores array yet.

### Step 3: Add the first level’s score

Now that players have been welcomed and are playing the game, you will start tracking the scores in the levelScores array. Suppose players completed the first level with a score of 10 and also received a bonus score of 40.

For this step, start by adding the first level’s score to the array. Don't worry about the bonus right now.

1.  Create a constant that stores the first level’s score. Name it firstLevelScore and set its value to 10.
2.  Use the append() method of the levelScores array to add the value of the firstLevelScore constant to the levelScore variable. This adds the first level’s score to the level scores array.
3.  Print the first level's score to the console by referencing its index number in the levelScores array.

!!! tip
    Since arrays use zero-based indexing to access their elements, the index of the first element of the levelScores array is 0. You will need to use this index number to print the first level’s score to the console. Run your code and review the output. You should now have a line in the console that reads: “The first level's score is 10.”

### Step 4: Add the bonus score to the first level’s score

Next, add the bonus score to the first level’s score in the levelScores array.

1.  Create a constant that stores the bonus score. Name it levelBonusScore and set its value to 40.
2.  Use the addition assignment operator to add the value of the levelBonusScore constant to the value of the first level’s score in the levelScores array. **Note:** You are adding the bonus score to the first level's score. which is already in the levelScores array.
3.  Print the updated value of the first level’s score to the console.

Run your code and review the output. The value should now reflect a score of 50.

!!! Note
    The above code works because the levelScores array is defined as a **variable**. If you declared it as a **constant** instead you would then get the following error when running the code: _"Left side of mutating operator isn’t mutable: ‘levelScores’ is a ‘let’ constant"_. This means that you can’t modify the scores of the levels in the levelScores array because the levelScores array is defined as a constant.

### Step 5: Add more values to the array

You can add more than one score to the levelScores array in one go. To demonstrate this, you will create a new array to store all the scores of the free levels. You will then add the array to the existing levelScores array.

> **Note:** The first three levels are free.


1.  Create a constant that stores the scores of the other free levels inside a new array. Name it freeLevelScores and set its value to [20, 30]. **Note:** The values of the array are separated by commas.
2.  Use the addition assignment operator to add the freeLevelScores array to the levelScores array. This updates the levelScores array with the scores of the other free levels that have been played.

### Step 6: Check if free version of the game has been played

Finally, check if all the free levels of the game have been played.

1.  Create a constant that stores the number of free levels. Call it freeLevels and set its value to 3.
2.  Use an if statement with the "equals to" operator to compare the number of levels stored by the count property of the levelScores array with the value of the freeLevels constant. This checks if all the free levels of the game have been played.
3.  Print the following message to the console inside the if block if all the free levels have been played: "You have to buy the game in order to play its full version."
4.  Next, assign an empty array to the levelScores array inside the if block. This means that you are restarting the free version of the game.
5.  Include a print statement inside the if block that prints the message “Game restarted!” to the console after the game has been restarted.


### Step 7: Run your code

Run your program and note down the output.  The first printed statement should be your welcome message, for example: "Start playing the game!"

## Concluding thoughts

In this exercise, you used arrays to implement the game logic of a very simple game with multiple levels. You practiced different approaches to adding elements to an array, and also explored how to use the array’s index value to print to the console if a certain condition is true.

```swift hl_lines="1" linenums="0"
var levelScore: [Int] = []

if levelScore.count == 0 {
    print("Start playing the game!")
}

let firstLevelScore = 10

levelScore.append(firstLevelScore)

print("First level's score is \(levelScore[0]).")

let levelBonusScore = 40

levelScore[0] += levelBonusScore

print("First level's score is \(levelScore[0]).")

let freeLevelScores = [20, 30]

levelScore += freeLevelScores

print("Your score is \(levelScore)")
// [50, 20, 30]

let freeLevels = 3

if levelScore.count == freeLevels {
    print("You have to buy the game in order to play its full version.")
    levelScore = []
    print("Game restarted!")
}
```

---

## Tuples

```swift hl_lines="1 4" linenums="0"
var vegtables = ("Carrot", 3, true)

// Access to tuple's elements
var (vegName, quantity, inStock) = vegtables

print(quantity)
// 3
var veg = (vegtableName: "Carrot", quantity: 3, inStock: true)

print(veg.vegtableName)
// Carrot
print(vegtables.2)
// true
```

---

## Exercise: Tuples

You've learned that tuples are used to store multiple values of different data types. You also explored how developers use tuples when they want to assign a variable with multiple values or return multiple values from a function. In this exercise, you will have the opportunity to apply what you've learned to create and use tuples to store multiple values of different types.

## Scenario

For this activity, suppose you are creating a basic login feature for a banking app. You will use tuples to store the credentials for logging into the banking app.


## Instructions

Create a new playground in Xcode to complete this exercise. Refer to the “How to complete exercises” reading to refresh your memory on creating and launching a new playground in Xcode.

Once you have created a new playground, follow the steps below to create your very own login feature.

### Tips

- Tuples can store elements of different types.
- Tuples use zero-based indexing to access their elements by default.
- Tuples may have custom labels that identify their elements.

### Step 1: Store the app credentials

1.  First create a constant that stores the credentials of the banking app. Call it credentials and set its value to a tuple that contains the password and passcode for logging into the app. Set the password’s value to an empty string and the passcode’s value to -1111.

!!! Tip ""
    You set an empty string as the password’s value by assigning `""` to the tuple’s password credential.

### Step 2: Evaluate credentials

Next, check if the previously created credentials are valid.

1.  Use an if else statement with the OR operator to test the values of the password and passcode.

    > **Take note:** The password shouldn’t be an empty string and the passcode should be a positive number. The credentials tuple uses zero-based indexing to access its password and passcode which are separated by a comma inside the tuple.

2.  Inside the if block, print the status of the app’s credentials to the console. Your print statement should read: “Invalid credentials!”. This means that if one of the credentials isn’t valid, the user can’t log in to the banking app.
3.  Inside the else block, print the password and passcode to the console to indicate that the credentials are valid. Your print statement may read: "The username is… and the passcode is…"

!!! Tip ""
    Remember that zero-based indexing means that the index of the tuple’s first element is 0 rather than 1. Review the [arrays exercise](https://www.coursera.org/learn/programming-fundamentals-swift/item/J2xu9) if you aren’t sure how this feature works exactly.

Run your code and review the output in the console. The print statement in the if block should display since the credentials are currently invalid.


Notice that it isn’t clear what the credentials tuple’s elements represent exactly. You will fix this in the next step of the exercise.

### Step 3: Store the app’s full credentials

1.  Create a constant that stores the full credentials of the banking app. Call it fullCredentials and set its value to a tuple that contains the password and passcode for logging into the app.
2.  Set the password’s value to "pass" and the passcode’s value to 1111. The fullCredentials tuple’s elements have labels that identify them properly: a password label for the app’s password and a passcode label for the app’s passcode.

### Step 4: Revaluate credentials

Finally, check if the full credentials are valid.

1.  Use an if else statement with the OR operator to test the values of the password and passcode. **Take note:** The password shouldn’t be an empty string and the passcode should be a positive number. Use the password and passcode **properties** of the fullCredentials tuple to access the values of the app’s password and passcode.
2.  Print the status of the app’s credentials to the console inside the if block. Your print statement should indicate that if at least one of the credentials isn’t valid, the user can’t log in to the banking app.
3.  Print the password and passcode to the console inside the else block. Your print statement should indicate that since both credentials are valid, the user may successfully log in to the banking.

Run your code and review the output in the console. The else block’s print statement should display in the console.


## Concluding thoughts

In this exercise, you practiced creating tuples while exploring how to use zero-based indexing and labels to compare values.

```swift linenums="1"
let credentials = ("", -1111)

if credentials.0 == "" || credentials.1 < 0 {
    print("Invalid credentials!")
}
else {
    print("The password is \(credentials.0) and the passcode is \(credentials.1)")
}

let fullCredentials = (password: "pass", passcode: 1111)

if fullCredentials.password == "" || fullCredentials.passcode < 0 {
    print("Invalid credentials!")
}
else {
    print("The password is \(fullCredentials.password) and the passcode is \(fullCredentials.passcode).")
}
```
