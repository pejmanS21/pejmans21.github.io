# Loops

```swift
for val in 1...5 {
    print(val)
}

/*
1
2
3
4
5
*/
```

## Examples of loops in Swift

Earlier you learned that loops are statements that repeat a block of code a number of times while a certain condition is true. The number of iterations is either well known before the loop is executed, or determined during its execution based on a certain condition. You also discovered that the loop gets executed as long as its condition is true. In this reading, you will explore examples of loops. You will reflect on what they are, why they are used, and most importantly, explore how to use them in your code.

## Types of loops 

You learned that there are different types of loops:

1.  **For in loops** execute a block of code a given number of times. This type of loop is useful when you know the number of iterations beforehand.
2.  **While** and **repeat while loops** execute a block of code while a certain condition is true.

**Tip:** Any for in loop can be converted to a while or repeat while loop, but not the other way round.

You will explore the types of loops with relevant examples next.

## A look at loops in practice

To begin, let’s start by exploring for in loops since they are simpler to implement than while and repeat while loops.

Suppose you are creating a dice game where the game logic uses a for in loop to implement dice rolls. You may create a for in loop that iterates over a range.

```swift
for dice in 1...6 {
    print("Roll a \(dice).")
}
```

The for in loop uses a closed range to roll all of the dice numbers in a row. It repeats itself six times and prints a different number between 1 and 6 each time.

Where the objective of the game is to roll doubles, you can use a while loop to implement that.

```swift hl_lines="3" linenums="0"
var firstDice = Int.random(in: 1...6)
var secondDice = Int.random(in: 1...6)
while firstDice != secondDice {
  firstDice = Int.random(in: 1...6)
  secondDice = Int.random(in: 1...6)
}
print("You rolled a double \(firstDice).")
```

The random(in:) method generates a random number between the lower bound and upper bound of a certain range of integers. You call the method as Int.random(in:) in your code because you have to specify the data type the method works with, which is Int in this case. You first use the random(in:) method of the Int type to generate random numbers between 1 and 6 for the firstDice and secondDice variables. The while loop then checks if the previously generated numbers are different and generates new random numbers for both variables until their values are equal. The code that rolls the dice is repeated twice in this case: once before the while loop and once inside the loop itself. This happens because the while loop first checks if its condition is true and only then performs any iteration. You can fix this by implementing the game logic with a repeat while loop instead.

```swift hl_lines="3 6" linenums="0"
var firstDice = 0
var secondDice = 0
repeat {
  firstDice = Int.random(in: 1...6)
  secondDice = Int.random(in: 1...6)
} while firstDice != secondDice
print("You rolled a double \(firstDice).")
```

You first set the firstDice and secondDice variables to 0 this time. The repeat while loop then generates random dice values as before until they become equal. Its condition is evaluated only after the first iteration since the dice are rolled only inside the loop this time.

## Concluding thoughts 

Loops repeat things for a number of times while a certain condition is true. For in loops know their number of iterations before they are executed, whereas while and repeat while loops are executed as long as their conditions are true.

---

## Exercise: Using conditions and loops

In this exercise, you will have the opportunity to explore how different programming concepts come together. You will be prompted to apply what you have learned to create for in loops, if conditions and break and continue statements. After completing this exercise, you will have created your very first for in loop that uses conditional statements to implement simple game logic for a multi-level game.

## Scenario

Imagine you are creating a game that consists of free, paid and bonus levels. You will use both for in loops and if statements to implement the game logic while considering the relationship between the free, paid and bonus levels of the game.

## Instructions

To begin this exercise, create a new playground in Xcode. Refer to the _“_[How to complete exercises](https://www.coursera.org/learn/programming-fundamentals-swift/item/IH0Fd)” reading to refresh your memory on creating and launching a new playground in Xcode.

Once you have created a new playground, follow the steps below to create your very own game loop with multiple levels.

### Step 1: Create constants

Create constants for the different types of levels for this exercise.

1.  First, declare a constant for the total levels of the game. For example, set levels equal to 10.
2.  Next, create a constant for the free levels. You may call it freeLevels. Set its initial value to 4 since the first 4 levels are free to play.
3.  Finally, create a constant for the bonus level. Call it bonusLevel and set its initial value to 3.

### Step 2: Create a for in loop

Declare the for in loop to implement the main game logic. The loop should use a closed range to go through all the levels of the game.

You should now have a loop that iterates over the "1...levels" range.

### Step 3: Create an if statement to assess if current level is a bonus level

1.  Add an if statement to the for in loop to check if the current level of the game is a bonus level.
2.  Use the print statement to print the current level inside the if statement if it's a bonus level. You can add any custom description to the print statement, for example: “Skip bonus level…”. This will output the description with a value to the console.
3.  Use the continue statement inside the condition itself to skip the current level if it’s a bonus level and automatically advance to the next level instead.

**Tip:** Remember to use backslash with the bonusLevel constant in parentheses in your print statement. This is called **"string interpolation"**.

You should now have an if statement inside a for in loop that uses the equals operator to determine if the current level is equal to the bonus level.

### Step 4: Print the current level

Print "Play level..." with the current level number to the console.

### Step 5: Create an if statement to assess if current level is free

1.  Add another if statement to the for in loop to check if the current level of the game is a free level.
2.  Use the print statement inside the if statement to print the number of free levels and paid levels if all free levels have already been played.
3.  Use the break statement inside the condition itself to finish the game if all of the free levels have been played.

This ensures that players only play the free version of the game. Players have to buy the full version of the game in order to be able to play it entirely.

### Step 6: Run your code

Run your program and note down the output. The first line of the output should be “Play level 1.”.

### Tips

- Implement a for in loop to handle the game logic itself.
- Use the break statement to make only the free versions playable.
- Use the continue statement to skip any bonus levels of the game.

## Concluding thoughts

In this exercise, you used loops, conditions and control flow transfer statements like break and continue to implement game logic for a simple game with multiple levels.

```swift linenums="1"
let levels = 10
let freeLevels = 4
let bonusLevel = 3

for current_level in 1...levels {
    if current_level == bonusLevel {
        print("Skip bonus level \(bonusLevel).")
        continue
    }

    if current_level == freeLevels {
        // print("Number of free levels: \(freeLevels)")
        // print("Number of free levels: \(levels - freeLevels)")
        print("You have played all \(freeLevels) free levels. Buy the game to play the remaining \(levels - freeLevels) levels.")
        break
    }


    print("Play level \(current_level).")
}
```
