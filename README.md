# react-native-typescript
This project is my personal template project for react-native-typescript and i was bootstrapped with [react-native-template-typescript](https://github.com/react-native-community/react-native-template-typescript)

## System Requirement
- Node 14.6.0
- Yarn 1.17.3
- Android 11

## How To Run
- Clone Project
- Open directory project
- Run `yarn install`
- Connect your device or run your `Android Virtual Device` and active `Developer options`
- Open your first terminal and run `yarn start`
- Open your second terminal and run `yarn android` 

## How To Run Debugger
First, you must install https://github.com/jhen0409/react-native-debugger
- Open your `React Native Debugger`
- Open your project
- In `terminal 1`, run `yarn start`
- In `terminal 2`, run `yarn android`
- And then, in `terminal 1` press `d` to open developer menu
- In emulator, choose `debug`
- Check your `React Native Debugger` and your app will connected

## How To Change App Name
You can check this tutorial for the detail https://stackoverflow.com/questions/38580858/how-to-change-display-name-of-an-app-in-react-native
- Search `app_name`
- Change app display name at `react-native-typescript\android\app\src\main\res\values\strings.xml` and change the value of `<string name="app_name">React Native Typescript</string>`.
  <br>
- Change default app name on Header, open `react-native-typescript\src\config\Constant\Constant.tsx` and change the value of `const APP_NAME`

## How To Change Version
- Search `versionCode 1`
- Open file `react-native-typescript\android\app\build.gradle`
- Change the `versionCode` and `versionName`

## How To Change Icon
You can check this tutorial for the detail https://medium.com/@ansonmathew/app-icon-in-react-native-ios-and-android-6165757e3fdb
- Prepare two image with size (1024px x 1024px, 72PPI). First image with square background for `ic_launcher.png` and the second with round background for `ic_launcher_round.png`
- Generate `App icon` using `https://appicon.co`, and you will get generated files
- Copy and replace generated files into `react-native-typescript\android\app\src\main\res\`

## How To Change Splash Screen
You can check this tutorial for the detail https://blog.logrocket.com/building-a-splash-screen-in-react-native/
- Prepare your image with size (2000px x 3000px, 72PPI). Set the name of file `splash_screen.png`
- Generate `Image Sets` using `https://appicon.co/#image-sets`, and you will get generated files ios and android like this
  - `android\drawable-hdpi`
  - `android\drawable-mdpi`
  - `android\drawable-xhdpi`
  - `android\drawable-xxhdpi`
  - `android\drawable-xxxhdpi`
- Copy generated files into `react-native-typescript\android\app\src\main\res\`
- Change `splash_screen_default` into `splash_screen` at `react-native-typescript\android\app\src\main\res\layout\launch_screen.xml`

## How To Bundle Project
- Android (APK)
  - Run `yarn bundle:android`
  - Open react-native-typescript\android\app\build\outputs\apk\debug\app-debug.apk`
