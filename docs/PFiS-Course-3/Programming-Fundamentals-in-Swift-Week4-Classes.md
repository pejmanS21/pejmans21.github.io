# Classes

> Reference type **shares** copy

**_When a reference type, like a class, is assigned to a variable or a constant, a copy of the data is shared._**

> Variables in `class` needs **initializing**.

> Class instances are unique unlike struct where instances are copied.

> The init() function is not only limited to classes.

```swift hl_lines="2 3"
class Recipe {
  var ingredients: [String]
  init(ingredients: [String]) {
    self.ingredients = ingredients
  }
}
var marioRecipe = Recipe(
  ingredients: ["Cocoa powder", "Flour"]
)
var adrianRecipe = marioRecipe
adrianRecipe.ingredients = ["Chocolate chip"]

print(marioRecipe.ingredients)
// ["Chocolate chip"]
```

#### `computed properties`

```swift hl_lines="5 9"
class Rectangle {
    let width: Int
    let height: Int
    // computed properties
    var area: Int {
        width * height
    }
    // computed properties
    var perimeter: Int {
        width * 2 + height * 2
    }
    init(width: Int, height: Int) {
        self.width = width
        self.height = height
    }
}

let rectangle = Rectangle(width: 12, height: 5)

print(rectangle.perimeter)
// 34
```

---

## Exercise: Create classes with stored and computed properties

### Overview

You have learned that structs are value types while classes are a reference types (important points to remember) and both help encapsulate your code. Understanding how they differ will help you determine which to use in your code.

When a value type, like a struct, is copied, you will have unique copies of the original and the new instance. When a reference type is copied, like a class, you will have one instance of the class that has two references to it.

**Tip:** Structs are lightweight and classes are more involved. A lot happens behind the scenes in the creation of classes because it does a lot more than a struct would.

###  Scenario

The Little Lemon application design is rich with many images and other assets that give users more details about meals, promotions and discounts rather than just text. Your task is to write a class that represents an internal file of the application and can produce a full file name to load it later correctly for the users to review. You will use stored and computed properties in a class to achieve this.


### Instructions

Create a new playground in XCode to complete this exercise. Refer to the [How to complete exercises](https://www.coursera.org/learn/advanced-programming-in-swift/supplement/t89J5/how-to-complete-exercises) reading to refresh your memory on creating and launching a new playground in Xcode.

Once you have created a new playground, follow the steps below to complete the exercise.

#### **Step 1: Create a class to represent a local file with two stored properties**

Create a class with stored properties that contain details about a file on a disk.

1.  Declare a class named LocalFile.
2.  Inside the class, add a constant named name and set its type to String. It will hold the name of the file.
3.  Also, since a file can have a certain extension like .png or .pdf, add another constant called fileExtension and also set its type to String.

You should now have a class with two stored properties.

**Tip**: Remember that variables or constants declared inside the class itself are called **stored properties**.

#### **Step 2: Declare an init method to prepare class for initialization later**

To be able to initialize an instance of the class you just created, declare a custom initializer, also known as a “constructor function”, inside of it.

1.  Inside the class, declare a new constructor function called init and add two arguments to it called name and fileExtension, both of type String.
2.  Inside the body of the constructor function, set its arguments to the stored properties of the class with the same name.
3.  Declare a keyword self followed by the dot and the stored property name and assign to it the argument of the constructor function with the same name. Do this for both stored properties of the class to initialize the values.

To refresh your memory on creating a constructor function, please revisit the videos **Classes in Swift and Creating classes with stored** and **computed properties.**

**Tip**: Remember that the constructor function of the class does not have a keyword func in the beginning and its name is always init. Also, if an argument of the constructor method has the same name as the property of the class, you have to use the keyword self when referencing the class property.

#### **Step 3: Create a computed property that returns a full file name**

So far, the class only contains name and file extension as separate properties. Use a computed property to be able to return a full file name.

1.  Declare a new variable inside the class and call it fullFileName.
2.  Set variable type to String.
3.  Instead of initializing it with a value, or setting it in the constructor function, put an empty block immediately after the type definition. You should end up with: var fullFileName: String {}. You have just created a computed property of the class.
4.  It does not do anything yet, so inside the curly brackets of the property, return the name constant added with the fileExtension constant. Use the addition operator (+) to achieve this.

**Tip**: Recall that the computed property of the class has to be declared as a variable instead of a constant. In this case, it will only return something so we can declare a block of code it should perform right after the declaration of type.

#### **Step 4: Create a class instance to verify that it works as expected**

Create a class object and call the computed property to test that it works correctly

1.  Outside of the class, declare a new constant and call it file.
2.  Initialize the constant with a new LocalFile class instance.
    1.  Call the class constructor method passing the image for the name argument, and .png for the file extension.
3.  Set the result to the file constant.
4.  Add a print statement and pass the fullFileName property of the file object to it as an argument.

**Tip:** remember to use dot syntax in the print statement.

Run the code and verify the output inside the console. The consoles should log: **image.png**

### Conclusion

In this exercise, you created a class that represents a local file on disk and can return the full name of the file combining the information inside the class. You proved your ability to work with a class together with stored and computed properties.

```swift linenums="1"
class LocalFile {
    let name: String
    let fileExtension: String
    var fullFileName: String {
        name + "." + fileExtension
    }

    init(name: String, fileExtension: String) {
        self.name = name
        self.fileExtension = fileExtension
    }
}

let file = LocalFile(name: "Greek_salad", fileExtension: "png")

print(file.fullFileName)
// Greek_salad.png
```

---

## Additional resources

To further your understanding of Classes and how to use Classes review the following resources.

- [Class](https://docs.swift.org/swift-book/LanguageGuide/ClassesAndStructures.html)
- [Value and reference types](https://developer.apple.com/swift/blog/?id=10)
- [Initialization](https://docs.swift.org/swift-book/LanguageGuide/Initialization.html)
