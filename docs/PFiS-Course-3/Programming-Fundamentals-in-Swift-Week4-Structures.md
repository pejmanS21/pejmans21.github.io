# Structures

> Value type creates **own** copy

```swift hl_lines="2 4 6"
struct Recipe {
    let name: String
    // Order doesn't matter 👇
    var ingredients: Set<String>
    // Order does matter 👇
    var steps: [String]

    func printDescription() {
        print("Recipe: \(name).")
        print("Ingredients: \(ingredients).")

        for (idx, step) in steps.enumerated() {
            print("\(idx + 1). \(step).")
        }
    }
}

let chocolateCookieRecipe = Recipe(
    name: "Chocolate Cookie",
    ingredients: [
        "Cocoa powder",
        "Chocolate chip",
        "Flour"
    ],
    steps: [
        "First step",
        "Second step",
        "Third step"
    ]
)

chocolateCookieRecipe.printDescription()
```

- Output:

```
Recipe: Chocolate Cookie.
Ingredients: ["Cocoa powder", "Flour", "Chocolate chip"].
1. First step.
2. Second step.
3. Third step.
```

---

> Methods by default can't alter the values of it's properties. but `mutating methods` can!

```swift hl_lines="3 6"
struct numberHandler {
    var order = 0
    mutating func increase (){
        order += 1
    }
    mutating func decrease() {
        order -= 1
    }
}
```

---

## Exercise: Create a structure with a mutating method

### Overview

So far, you’ve learned that a struct creates a value-type instance that allows you to bundle related code into a single package. You’ve also explored how this code encapsulation takes place in the form of properties and methods defined in a struct.

In this activity, you will practice using mutating methods to alter struct properties.

### Scenario

At Little Lemon, customers can book table reservations in various ways. You are tasked with creating a structure to hold the booking information for each person, including their name and the table number. It should also be possible to update the person’s name to accommodate any booking changes.


### Instructions

Create a new playground in Xcode to complete this exercise. Refer to the [How to complete exercises](https://www.coursera.org/learn/advanced-programming-in-swift/supplement/t89J5/how-to-complete-exercises) reading to refresh your memory on creating and launching a new playground in XCode.

Once you have created a new playground, follow the steps below to implement the functionality of storing booking information in a struct.

#### Step 1: Declare a struct to hold table booking information

To store a booking with information you will use a struct type. To do this, declare an empty struct and call it TableReservation.

#### Step 2: Add information inside the struct

Inside the struct, create properties to hold the customer’s name and the table number:

1.  Inside the struct, declare a new variable and call it a name. Set its type to String.
2.  Declare a constant to hold a table number and call it tableNumber. Set its type to Int.

**Tip**: Remember that a struct can be used to group similar information together using properties. To refresh your memory on adding properties to a struct, please revisit the video: [What is a structure?](https://www.coursera.org/learn/advanced-programming-in-swift/lecture/ms7In/what-is-a-structure)

#### Step 3: Create a new table reservation

Next, create a new struct instance to represent a table reservation.

1.  Declare a new variable called johnBooking and initialize it with a new instance of the TableReservation struct.
2.  Pass John to the name argument and 1 to the tableNumber argument.

**Tip**: Recall that a struct provides a default memberwise initializer. You do not have to write the initializer method explicitly.

#### Step 4: Output the reservation to the console

1.  Write a new print statement and pass the johnBooking variable to it as an argument.
2.  Run your code and review the output. All properties with their values of the struct should be logged in the console: TableReservation(name: "John", tableNumber: 1)

#### Step 5: Define a method to update the name of the customer

Suppose that you need to change the name from **John** to **Maria** for table 1. As you may recall, all the functions inside the struct that change its properties have to be in a mutating expression.

In this step, create a mutating method that updates the name of the customer.

1.  Declare a new function inside the struct called updateBooking. It should have one parameter called updatedName of type String.
2.  Insert the mutating keyword before the function definition.

**Tip**: Remember that struct functions that modify their parameters have to be declared as “mutating” by adding a mutating keyword before the function definition begins.

#### Step 6: Implement a method to update the customer’s name

Inside the updateBooking function, add a line that sets the struct name property to a new updatedName value that the function gets as its argument.

**Tip:** To refresh your memory on implementing methods, please revisit the video: [What are mutating methods?](https://www.coursera.org/learn/advanced-programming-in-swift/lecture/6ujcL/what-are-mutating-methods)

#### Step 7: Update the name of the customer for the reservation

1.  On a new line, call the updateBooking method on the johnbooking variable defined before using dot syntax.
2.  Assign Maria to the updatedName argument.

#### Step 8: Output the booking to console to confirm the change

1.  Add a new print statement and pass johnBooking to it as an argument.
2.  Now run the code and review the output. The name property should reflect **Maria** instead of **John**.

### Conclusion

In this exercise, you have practiced creating a struct that holds properties and functions for a table booking. You also created a function inside the struct that modifies its properties and you declared that function as **mutating**. You also initialized the struct and used the function inside it to update struct properties.

```swift hl_lines="5" linenums="1"
struct TableReservation {
  var name: String
  var tableNumber: Int

  mutating func updateBooking(updatedName: String) {
    name = updatedName
  }
}

var johnBooking = TableReservation(name: "John", tableNumber: 1)
print(johnBooking)
// TableReservation(name: "John", tableNumber: 1)

johnBooking.updateBooking(updatedName: "Maria")
print(johnBooking)
// TableReservation(name: "Maria", tableNumber: 1)
```

## Additional resources

To further your understanding of structs, review the following resources:

- [Struct as general-purpose programming blocks](https://docs.swift.org/swift-book/LanguageGuide/ClassesAndStructures.html)
- [Self and mutating methods](https://docs.swift.org/swift-book/LanguageGuide/Methods.html#//apple_ref/doc/uid/TP40014097-CH15-ID234)
