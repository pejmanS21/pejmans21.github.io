# Optional

???+ info
    Optionals help developers like you make your code safer and more expressive by signaling to Swift that the value of a variable may be absent.

#### UnWrapping

```swift hl_lines="2" linenums="0"
// Optional
var num: Int?

print(num)
// nil
```

#### Forced UnWrapping

```swift hl_lines="2 3" linenums="0"
// Optional
var num: Int?
var age: Int! = num
print(num)
print(age)
// nil
// nil
```

- Developers mainly use this when they need to communicate to things in IOS the implicitly Unwrapped optional acts as something called a promise.

```swift hl_lines="1 2" linenums="0"
var num: Int? = 1
var age: Int! = 2
print(num)
print(age)
// Optional(1)
// Optional(2)
```

## Exercise: Work with optionals in Swift

So far you’ve learned that optionals signal that the value or reference to an object may be absent. You also learned that optionals return a special literal called “nil” in such cases. In this activity, you will practice using forced unwrapping and optional binding to work with optional values.

## Scenario

Suppose you are creating an app that requires a password and a passcode for users to sign in. To achieve this, you will use optionals, the forced unwrapping operator, and simple and multiple optional bindings to generate passcodes from passwords and check if the generated passcodes are valid.

## Instructions

Create a new playground in Xcode to complete this exercise. Refer to the “How to complete exercises” reading to refresh your memory on creating and launching a new playground in Xcode. Once you have created a new playground, follow the steps below to create your very own password and passcode generator.

### Tips

- Use forced unwrapping to unwrap optionals that always have valid values.
- Use optional binding to unwrap optionals that can be “nil”.
- Use multiple optional bindings in the same if let statement if needed.

### Step 1: Create a variable password

Create a variable that stores the generated password. Call it password and assign a string value of "1234". You now have a password that currently only contains digits.

### Step 2: Create a constant passcode

Create a constant for the generated passcode and name it passcode. Cast the password string to an integer value and store the result in the passcode constant.

### Step 3: Print the passcode

Use the print statement to print the passcode to the console. The passcode is an optional value so use the forced unwrapping operator to access its value. This works because the passcode isn’t nil in this case, since it was converted into an integer in the previous step.

???+ Tip
    To force unwrap an optional, you will add an exclamation mark (!) at the end of your optional.

At times the passcode value might be nil, for instance when the value holds letters. You will explore what to do in such scenarios next.

### Step 4: Check if the passcode is valid

Now use optional binding to check if the passcode is valid in case it is nil. To achieve this, you will use an if let statement to evaluate whether the passcode constant is valid, or nil.

- First, change the value of the password variable to "hello world". This means that you will now have a password that only contains letters.
- Then use an if let statement to safely unwrap the converted integer value of the password string. Create a binding constant, call it code and assign the result of the password to passcode conversion to it.
  - **Tip:** The if let statement creates a binding constant. This constant will only be used inside the if let block. The binding constant stores the optional’s unwrapped value in case it’s not nil.
- Print the passcode’s value to the console inside the if let block if the passcode is valid.
- Print the error message "Invalid passcode!" to the console inside the else block if the passcode is invalid.

Run your code and review the output in the console.

Notice that because the value was changed from an integer to a string, the error message defined in the else block is displayed in the console. However, if you were to change the password from a string back to an integer, the statement defined in the if block will be outputted to the console instead.

### Step 5: Set a default passcode

Next, use optional binding to set a default passcode if the generated passcode isn’t valid.

1.  First, create an integer constant and call it accessCode. Set its type to Int since you don’t know its value yet. (In scenarios like this, you can’t rely on type inference to specify the type for you.)
2.  Then use an if let statement to safely unwrap the converted integer value of the password string as before. Create a binding constant, call it code and assign the result of the password to passcode conversion to it.
3.  Set the value of the accessCode constant to the value of the code constant inside the if let block since the passcode is valid in this case.
4.  Set the value of the accessCode constant to 1111 inside the else block since the passcode is not valid in this case. This is the default passcode.
5.  Print the passcode to the console.

Run your code and review the output. Notice that Int(password) generates an integer from the password which is a string. It either returns a valid integer if the password contains only digits or nil if the password contains at least one character that isn't a digit. It then assigns the result to the passcode. Since the password was previously changed to "hello world", the else block is executed and sets the default to 1111.

### Step 6: Implement two-factor authentication with passcodes

Now use multiple optional bindings in the same if let statement to implement two-factor authentication with passcodes. Two-factor authentication is the process of verifying a login request and granting access based on two different sets of credentials, which increases the security of the app.

1.  First create constants for the two passwords. Call the first constant firstPassword and set its value to "hello". Name the second constant secondPassword and set its value to "world". Both passwords contain only letters in this case.
2.  Then use an if let statement to safely unwrap the converted integer values of the string passwords. Create binding constants for the two passcodes separated by a comma.
    1.  Call the first constant firstPasscode and assign the result of the first password to first passcode conversion to it.
    2.  Name the second constant secondPasscode and assign the result of the second password to second passcode conversion to it.
3.  Print the values of the passcodes to the console inside the if let block if both passcodes are valid.
4.  Print an error message to the console inside the else block if at least one passcode isn’t valid.

Run your code and review the output in the console.

### Step 7: Set default passcodes for two-factor authentication

Next use optional binding to set default passcodes in case something goes wrong during the two-factor authentication.

1.  First create two integer constants for the default passcodes. Call the first one firstAccessCode and name the second one secondAccessCode. Set their types to Int since you don’t know their values yet.
2.  Then use an if let statement to safely unwrap the converted integer values of the string passwords as before. Create binding constants for the two passcodes separated by a comma.
    1.  Call the first constant firstPasscode and assign the result of the first password to first passcode conversion to it.
    2.  Name the second constant secondPasscode and assign the result of the second password to the second passcode conversion to it.
3.  Set the value of the firstAccessCode constant to the value of the firstPasscode constant and the value of the secondAccessCode constant to the value of the secondPasscode constant inside the if let block since both passcodes are valid in this case.
4.  Set the value of the firstAccessCode constant to 1111 and the value of the secondAccessCode constant to 2222 inside the else block if at least one passcode isn’t valid. These are the default passcodes.
5.  Print both passcodes to the console and run your program.

Run your program and review the output to the console. Compare your code with the snippet below.

The image above provides the output for steps 7 and 8 only. You will have the opportunity to review the solution code for the entire exercise in the following reading.

## Concluding thoughts

In this exercise you used the forced unwrapping operator, simple and multiple optional bindings to unwrap optionals safely and create a password and passcode generator with two-factor authentication.

```swift linenums="1"

var password = "1234"
let passcode = Int(password)

print("The passcode of the app is \(passcode!).")

password = "hello world"

if let code = Int(password) {
    // code is not nil
    print("The passcode is \(code).")
} else {
    // code is nil
    print("Invalid passcode!")
}

let accessCode: Int

if let code = Int(password) {
    accessCode = code
} else {
    accessCode = 1111
}

print("The passcode of the app is \(accessCode).")
// ------------------------------------------------

let firstPassword = "hello"
let secondPassword = "world"

if let firstPasscode = Int(firstPassword), let secondPasscode = Int(secondPassword) {
    print("First Passcode is \(firstPasscode) & Second Passcode is \(secondPasscode).")
} else {
    print("Invalid passcode!")
}

let firstAccessCode: Int
let secondAccessCode: Int

if let firstPasscode = Int(firstPassword), let secondPasscode = Int(secondPassword) {
    firstAccessCode = firstPasscode
    secondAccessCode = secondPasscode
} else {
    firstAccessCode = 1111
    secondAccessCode = 2222
}

print("The first passcode is \(firstAccessCode), and second passcode is \(secondAccessCode).")
```

---

> The if let statement is used in optional binding.

## Additional resources

The following resource from the Swift Programming Language Guide may be helpful as you continue your learning journey:

- [Swift Basics](https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html)
