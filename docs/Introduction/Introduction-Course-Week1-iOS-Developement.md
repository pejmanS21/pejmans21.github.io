# iOS languages: Objective-C vs Swift

Swift is a general purpose multi paradigm that was introduced by Apple in 2014 and is now a supported language in X code, the development environment for Apple's operating system multi paradigm means Swift supports multiple programming paradigms, for example, object oriented programming as well as functional programming.

### Why Swift?

1.  Swift is **fast**
2.  Scalability
3.  Safety

> Unlike objective C. Swift has a strong typing system and error handling, which prevents occurrence of code crashes and errors in production.

## The iOS OS

**Objective: Identify the key features and characteristics of iOS and iOS Architecture.**

iOS is one of the most used operating systems across the world. In recent years, it has been powering billions of devices. This OS has now become a complete set of operating systems for various devices such as wearables, mobiles, smart TVs, tablets and so on.

### What is iOS?

iOS is an operating system primarily designed for touch screen mobile devices such as smartphones. The operating system has evolved in recent years from a mobile OS to an operating system running on other devices such as wearables and smart TVs. It is the basis for three other operating systems made by Apple: iPadOS, tvOS, and watchOS.

Below are features and characteristics of the iOS, such as:

- It's more secure than other operating systems.
- iOS provides multitasking features. For example, while working in one application you can easily switch to another one.
- iOS’s user interface includes multiple gestures like swipe, tap, pinch and reverse pinch.
- iBooks, iStore, iTunes, Game Center, and Email are all user-friendly.
- It supplies Safari as the default web browser.
- It has a powerful API and camera.
- It has deep hardware and software integration.

### The iOS architecture

The Apple architecture is comprised of different components that any iOS device would need to effectively function. iOS software is built on top of Unix, a multitasking operating system and many other C/C++ libraries exposed via application framework services.

Among all the components, Unix provides the main operating system functions for smartphones. An iOS is a stack of software components roughly divided into five sections.

1.  **Core Bluetooth framework**: The core Bluetooth framework provides the functions needed for your apps to communicate with Bluetooth devices.
2.  **External accessories framework**: It’s used to communicate with accessories that connect to a device with Bluetooth wireless technology.
3.  **Accelerate framework**: Accelerate performs optimized large-scale mathematical computations and image calculations so you can write apps that leverage machine learning, data compression and signal processing.
4.  **Security services framework**: This can be used to protect information, establish trust and control access to software.
5.  **Local authorization framework**: This is used to authenticate a user via Touch ID or Face ID within an app.

---

## Project templates

1.  Apps
    1.  iOS
    2.  WatchOS
2.  Games, Software Development Kit (SDK)
    1.  SpriteKit
    2.  Metal
3.  Sticker iMessage
4.  Framework
5.  Metal Library

### Why Templates?

1.  Clear projects structure
2.  Platform preview
3.  Build quickly

---

## iOS X Code

> Apple’s Official IDE

### Supported languages

- Objective-c
- Swift
- C++

### Benefits

- Complete build system
- Fast emulator
- Different devices
- Free projects template
- 3rd party integrations

### Key Functions

- Toolbar
- Navigation area
- Editor area
- Utility area
- Debug area

---

## iOS App Cheat Sheet

Building an app requires that you have a clear understanding of relevant concepts needed to start with development. The following concepts will help you get started in development.

### AppDelegate

The app delegate is effectively the foundation of an app and manages some interactions with the system.

### SceneDelegate

Starting from iOS 13 and later, SceneDelegate takes some responsibilities from AppDelegate. SceneDelegate is responsible for what’s displayed on the screen in terms of user interface (UI) and data.

### ViewControllers

ViewControllers present content users can interact with on the screen. These are the only components that deliver interactive content to the user. A ViewController represents something an application can do, and an application often “does” several things – meaning, most applications provide more than one ViewController.

### UIViews

In iOS, UIViews are almost indivisible elements that draw themselves to the screen. They can display images, text and more. A combination of all these views forms a design interface that serves a purpose for the user.

### Storyboard files

In XCode, each storyboard is represented by a .storyboard (dot storyboard) file. These user interface files serve as blueprints for the interface that an application presents to the user.

### Project files

Xcode project files belong to one of three main categories: configuration, code, and resource. Configuration files define the project structure, code files provide the logic, and resource files are pretty much everything else.

### Clicks and long clicks

By default, all Views detect clicks and long clicks. Users can tap and interact with them.

---

## Anatomy of an iOS App

## Components

- UIApplication
- UIApplicationDelegate
- UserDefaults
- ViewController

### UIApplication

The UIApplication is an iOS application starting point and is responsible for initializing and displaying your applications window. It is also responsible for loading your applications first view into the window. Every iOS app has only one instance of UIApplication, and without this component, it's impossible for an iOS app to run successfully.

### UIApplicationDelegate

Set of methods to maintain the overall shared behavior of your app. This delegate can be referred to as the root of an app. It works in conjunction with the UIApplication to manage every communication with the operating system.

### UIDocument

The iOS UIDocument class is designed to provide an easy to use interface to create and manage documents and content. While UIDocument is used for handling local file systems, such as a read and write operation of data in the app background, it's purpose is primarily to ease the process of storing files using iCloud.

### UIViewController

The UIViewController is the basic building block of your iOS app. This component oversees the activities that happen on screen, from user interfaces to animation, from interaction to navigation, and more. Defines the shared behavior and properties for all types of ViewController that are used in the iOS application.

---

## Additional Resources

The following resources are some additional reading materials that cover the iOS and iOS languages.

- [The iOS](https://en.wikipedia.org/wiki/IOS)
- [Swift vs Objective C](https://www.geeksforgeeks.org/difference-between-swift-vs-objective-c/)
