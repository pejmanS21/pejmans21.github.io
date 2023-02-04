# Setting up simulator software

To use the Simulator, ensure you have installed XCode IDE on your computer.

Next, click on **Window Devices and Simulators**.

In the next window, click on the plus button on the bottom left of the window to create a new simulator.

In the new window, you can specify the name of the simulator, device type and OS version.

After creating the simulator, you will be able to see it on the list of available simulators in this window.

---

## Mobile CPU architecture

### What is a CPU?

A CPU is like a middleman that enables software to communicate with the hardware of a device. It can take high-level software instructions and translate them into native machine language that a mobile phone can understand and perform specific operations based on. To deliver the best experience to users, what you most likely want is a CPU that’s a mix of efficiency and power, and doesn't use a lot of resources—something that will be determined by its architecture. A CPU with great architecture provides mobile users with a seamless user experience without consuming a lot of battery resources.

### What’s ARM, ARM64, and x86?

As of now, there are three main CPU architectures used in most smartphones – ARM, ARM64, and x86.

- ARM: ARMv7 or armeabi
- ARM64: AArch64 or arm64
- x86: x86 or x86abi

Of these three, ARM is most used because it is optimized for battery use.

On the other hand, ARM64 is an extension of the original ARM architecture that provides additional support for more powerful computing in the form of 64-bit processing, and it’s gradually becoming the standard in many newer devices.

Another piece of architecture noteworthy to mention is the x86. It is slightly more sophisticated than either type of ARM CPU earlier mentioned but not quite as battery-friendly. Due to this drawback, it is the least common of the three in the computing world.

Overall, ARM is more of an embodiment of the mobile-first mentality, with simple sets of instructions, efficiency, and low energy consumption as its main priorities. The fact that it requires fewer transistors and frees up this hardware space more than compensates for the use of RAM in a mobile phone.

To develop and deploy apps for different mobile devices, the CPU architecture must be considered. For example, building a social network app for a large audience requires that most mobile devices are targeted.

---

## OS versions and images

iOS operating system images are just versions of iOS that you can run on a computer. So, if you wanted to test the very latest features you could download the simulator of the latest Apple OS to see what the operating system is like. Or if you wanted to test your app against the iPhone 11 Pro, you could download the iPhone 11 Pro system image and run that.

The below table shows the evolution of the OS versions and their architectures.

---

## Common libraries and packages

One of the most fundamental lessons every developer should be aware of is, “don’t reinvent the wheel.” And understanding how to use libraries and packages in XCode is a big part of that. When you can use a library that does the job efficiently and faster, why spend hours hitting your head against the wall?

In other words, if a common task needs to be performed, you may not necessarily need to write the code yourself. It might feel like “cheating” to use someone else’s code to resize a bitmap or modify a string but, in truth, it’s all about getting the work done quickly. This approach is useful, especially for independent developers who don't have much time and resources to throw at every project.

Libraries in Xcode extend Xcode SDK capabilities by allowing you to use code written by other developers. The best libraries provide entirely new functionality and let you do some seriously awesome functions with lesser code as a developer. Unlike copying and pasting code, libraries are entirely portable and easy to plug in too. This method makes it easier for developers to access more advanced features with less work and more complexity.

Here are various categories in iOS development and the common libraries used in them.

### iOS Libraries - image loading

Image loading libraries are very useful to avoid high memory consumption caused by loading multiple images simultaneously. A typical scenario is a social media app where a user can see photos posted by other users.

### PINRemoteImage

PINRemoteImage is an image loading library focused on providing a smooth scrolling experience while an image is loading. PINRemoteImage ensures image loading is as swift and smooth as possible by applying smart caching to minimize storage overhead.

### iOS Libraries - videos

Displaying videos is usually a daunting task for developers during development. The processes and details to take care of can be too numerous to handle without the use of a library.

### AVPlayer

AVPlayer is part of the iOS SDK (Software Development Kit). And it provides an additional interface to control the playback and timing of a media asset such as a video. One of AVPlayer biggest benefits is its ease of customization.

### iOS Libraries—Networking

In this internet age, almost every mobile app requires some sort of network request to perform one function or the other. Fortunately, there is a wide range of networking libraries available to help developers optimize this process.

### AFNetworking

AFNetworking is one of the popular networking libraries in iOS development. It provides you with a great way of making internet calls within your iOS application.

---

> Simulators can never perfectly emulate any hardware as changes may have occurred to the hardware during production.

---

The following resources are some additional reading materials that cover what a simulator is and how to configure it.

- [What is a simulator](https://developer.apple.com/library/archive/documentation/IDEs/Conceptual/iOS_Simulator_Guide/Introduction/Introduction.html)
- [Configure simulator](https://developer.apple.com/library/archive/documentation/IDEs/Conceptual/iOS_Simulator_Guide/GettingStartedwithiOSSimulator/GettingStartedwithiOSSimulator.html)

---

## Project structure

### Defaults

- Source code
- Assets
- Test code
- Build configuration

## Project main class

`AppDelegateClass.swift`

> In iOS, a view controller class, which is one thing a user can do is an entry point for interacting with the user. This is where the action happens because view controller allows the user to interact with your app. And iOS app is usually made of multiple ViewControllers, sometimes called screens, that together form the user experience.

## Xcode Build System

> With the build system, the iOS project is managed through a set of build configuration files. This includes defining how a project is to be developed, what dependencies need to exist for the project to build and run successfully, and what the results or results of the compilation process should be.

- **Build System**
  When you click the Run button on the Xcode toolbar, this action automatically triggers the build system activity, which in turn starts building the project. After a successful operation, your app starts running on a simulator or a physical device connected to the computer.

---

## iOS info.plist

This file is where you can store information about your app and configure a number of things. It has a key and a value, as well as a type. The keys and values in the file describe the various behaviors and configuration options you want applied to your app bundle.

---

## Project files

**Learning objective: Identify useful files and directories you can access with Project View.**

To access the entire file structure of a project including all files hidden within folders from the XCode view, select Project from the tab at the top of the Project window.

Choosing Project View allows you to see a lot more files and directories. The most important of these are:

### module-name/

**AppDelegate**

The app delegate is effectively the root object of your app, and it works in collaboration with UIApplication to manage some user interactions with the system.

### SceneDelegate

What is displayed on the screen is the responsibility of SceneDelegate.

### ViewController

The View Controller is the parent of all the views present on a storyboard. Each application has at least one ViewController. It facilitates the transition between various parts of the user interface.

### Main

With the Main.storyboard file you can lay out and design the user interface of your application by adding views such as buttons, table views, and text views onto the editor.

### Assets

This can be used to organize your app's images, icons, colors, and more

### LaunchScreen

Launch screens appear when your app starts up and give the user the impression that your app is fast and responsive.

### Info.plist

Xcode supplies an information property list file when you create a project from a template, as described in "create a project." By default, Xcode names this file Info.plist and adds it to your project as a source file that you can edit.

### module-nameTests/

This folder is responsible for managing code required to test functions within the application.

### module-nameUITests/

This folder keeps test files required for testing user interactions with the app user interface.

---

## Additional resources

The following resources are some additional reading materials that cover AppDelegate, Info Plist, and Build system.

- [AppDelegate](https://developer.apple.com/documentation/uikit/uiapplicationdelegate)
- [Managing your app’s information property list](https://developer.apple.com/documentation/bundleresources/information_property_list/managing_your_app_s_information_property_list)
- [Xcode Build System](https://developer.apple.com/documentation/xcode/build-system)
