# Project Planning

The decisions you make before you start to code, your project will determine to a great extent the amount of time you spend coding or manipulating libraries or packages. A clear idea allows you to break the app down into principal components of functionality, which is also known as requirements gathering.

You need to think about exactly what you want your app to do, asking yourself questions to help guide you and determine the components. Your app will need to make your project idea a reality.

> The correct approach starts with planning in the form of requirements gathering this involves answering as many questions as possible to determine the necessary components.

## Basic project planning

Project planning is one of the most critical stages of software development. It is an important part of commencing any new project. That's because it serves as a roadmap that shows the phases of the project, as well as their start and end dates, and dependencies. By the end of this reading, you should recognize the importance of project planning.

### 1. Project performance and success rates

Project planning involves comprehensive mapping and organization of project goals, tasks, schedules and resources before anyone assigns project roles and the team starts implementing the plan. With proper planning in place, you can boost the project performance and success rates of a team.

### 2. Clear objectives

Having a clear idea of what needs to be achieved greatly increases the likelihood that you will do it. But, without a concise objective from the start, the project will be complicated. If the team isn't clear on what they are working on, it’s almost impossible to know when the project is completed. Proper planning helps the team focus on the most important things: the objectives and the end goal.

### 3. Resource allocation

Planning out a project will tell you how many team members you need to execute the project. The plan also allows project managers to monitor which resources have been allocated and thus avoid excessive allocation.

### 4. Communication

Planning helps communication. With good communication, every team member knows exactly what is required of them ahead of time. A well-written plan will help you communicate key details, making it seamless for you and your entire team to complete specific tasks. Listening to their input and ideas is also a great way to achieve buy-in and foster the commitment of every team member.

### 5. Project-specific training

Project planning ensures team members have the required technical know-how to execute the assigned tasks and identifies talent pipelines to provide an adequate supply of trained talents throughout the lifecycle of the project.

And those are the basics of project planning!

---

## AVPlayer

One of the primary uses for smartphones and tablets is to entertain the user by offering them access to quality content. Video is a key form of widely-used content, especially for tablet devices.

To achieve this on Apple devices, you can use an AVPlayer, which plays video files on iOS. Read on to learn more!

### AVPlayer for video playback

The iOS software development kit (SDK) includes two classes that make video playback implementation on iOS devices extremely easy to implement when developing applications.

The AVPlayer is the most efficient way to display and play a video in an Apple app. Whenever you add this component to the layout of an activity, it provides a surface onto which a video may be played.

The following video formats are currently supported on iOS:

- H.263
- H.264 AVC
- MPEG-4 SP
- VP8

Aside from the surface to display a video, it has a wide range of methods that may be called in order to control the playback of video.

### Methods for controlling video playblack

Some of the more commonly used methods for controlling the playback of video include:

#### AVPlayer(url: URL(fileURLWithPath: path))

This specifies the path (as a URI) of the video media to be played. This can be either a remote video file URL or a local video file on the device.

#### play()

When this function is used, it plays the video.

#### currentTime()

When this function is used, it gets the current time of playback.

#### pause()

This function pauses video playback.

#### isMuted ()

This function returns a Boolean value that indicates whether a video is currently muted.

#### AVPlayerViewController

The AVPlayerViewController is the UI to control the video. Specifically, it is a view that contains media controls such as "Play/Pause", "Rewind", "Fast Forward" and a progress slider. It synchronizes the controls with the state of the MediaPlayer. By default, the AVPlayerViewController comes with a default set of controls. If you want to make changes to it, you must implement the AVPlayerViewController programmatically within your Swift code.

---

## Storyboards versus SwiftUI

An iOS developer today has more options for creating a user interface (UI) layout on iOS than ever before. Most developers are familiar with an interface builder called Storyboard and a toolkit released by Apple called SwiftUI.

Let's explore the differences between Storyboards and SwiftUI and the benefits of using Storyboard for creating UI for the time being.

### Storyboard

Storyboard is the most popular way to create a UI for iOS applications after its release with iOS 5. By default, any new iOS project created has a Main.storyboard file included in the generated files.

A storyboard in Xcode is an empty canvas screen that helps you to create various UIs for an application. This file allows you to move different types of views such as a button and text on its surface. With this interface builder, you can create anything from controllers used to manage interactions on the UI to text and image views. You can add controller screens like a TableView controller or navigation controller by simply dragging and dropping from the object library.

#### Advantages

- It's easy to learn, even for beginners
- With storyboard you can create a prototype of an app in a few hours, which makes it easy to visualize the app without writing too much code at an early stage of development.
- The storyboard object library has a wide range of Views such as button and text.
- The developer community is large so it’s easy to get help whenever you hit a roadblock.

#### Disadvantages

- Source control may be intimidating since the storyboard code is in an xml type format. It may be difficult to resolve conflicts during code merging with another developer.
- As the number of screens keeps growing, managing storyboards can become chaotic as there may be too many files.

### SwiftUI

SwiftUI was released alongside iOS 13. It is basically a toolkit released by Apple to help developers create UI in a declarative way using Swift language.

#### Advantages

- It’s easy to build and target multiple iOS platform apps (such as macOS, iOS and iPad apps).
- It offers a combination of drag and drop through Xcode as well as writing code in a Swift file.
- The code is basic and clean.
- SwiftUI views can be easily reused by creating smaller module files.

#### Disadvantages

- It supports only iOS 13+ and Xcode 11+, so you cannot build apps with lower OS versions using this.
- It is still relatively new so there aren't as many component options in the SwiftUI as there are in the Storyboard development kit. This means that, to meet app requirements, you must create custom views, such as a search bar.
- There is no seamless way of switching from Storyboard to SwiftUI. This means developers have to continue using Storyboard for existing apps.
- The community is small and, as a result, there is less ongoing support for developers for now.

After evaluation the advantages and disadvantages of Storyboard and SwiftUI, it is recommended that you choose Storyboard to create UIs rather than SwiftUI, which is still fairly new.

---

> The `guard` keyword allows you to check a particular statement. If it's valid, then perform the next operation. If not, then just throw an exception.

`AVkit` helps you to create interfaces for media playback, which will enable you to create the interface for your video player. The `AVkit` has an in built AV player that you'll make reference to in order to load or play video.

`AVFoundation`, gives you control over different things such as device cameras or processing audio. For your video player app, you'll need to be able to process videos. The `AVfoundation` helps you configure the audio and video interactions within your UI.

---

## iOS UIView

The main building block for the user interface (UI) of an app is a View object that is created from the View class. The View object occupies a rectangular screen area - like the one highlighted below - and is responsible for the processing of drawings and events. The UIView is the base class for widgets that are used to create interactive components of the UI such as buttons and text fields.

So, simply put, UIView can be considered a rectangle on the screen that displays a certain type of content. This can be a label, a text, an image, or anything that an iOS app can display. In an actual sense, a view occupies a rectangular shape on any mobile device screen.

---

## Additional resources

### Learn more

Here is a list of additional reading material that may consolidate some of the knowledge you've gained so far and be helpful as you continue your learning journey.

- [AVPlayer](https://developer.apple.com/documentation/avfoundation/avplayer)
- [SwiftUI vs Storyboard](https://blog.shipbook.io/swiftui-vs-storyboard)

---

## Exercise: Create the player

### Aims

#### Goal

Create a video player that plays a video file

#### Objectives

- Create an iOS project
- Add an mp4 video file to your new project
- Add import statements AVKit and AVFoundation to your ViewController class
- Add an override function to ViewController
- Create a function that plays the video file
- Call the play function in the override function initially created

### Steps

Step 1: Create a new project using the Xcode App Template and call it video_player
Step 2: Add an mp4 video file to the  video_player module in the project
Step 8: Run the app on either an simulator or physical device.

**Note:** The the app should have a controller with features such as play, pause and volume as shown in the screenshot above. You should be able to control the playback of the video.

### Tips

1.  Remember to add the video file to the project before running the app.
2.  If you want to choose a simulator, ensure that you setup your simulator properly. You can learn more about simulators in the Simulators section of this course.

```swift title="ViewController.swift" linenums="1"
//  ViewController.swift
//  video_player

import UIKit
import AVKit
import AVFoundation

class ViewController: UIViewController  {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        playVideo()
    }

    private func playVideo(){
        guard let path=Bundle.main.path(forResource: "test", ofType:"mp4") else {
            debugPrint("test.mp4 not found")
            return
        }
        let player = AVPlayer(url: URL(fileURLWithPath: path))
        let playerController = AVPlayerViewController()
        playerController.player=player
        present(playerController, animated: true) {
            player.play()
        }
    }
}
```
