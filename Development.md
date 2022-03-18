# Development

A guide for adding to this app, or modifying it to a new year.
The app has been designed to be extremely easy to re-use, adding new buttons should take seconds,
and changing the exports spreadsheet is trivial.

First, make sure you [set up your development environment](./Usage.md). 

Here's a list of important things you should note!
- [/Components/Buttons](./Components/Buttons), which includes most of the buttons you'll need.
- [/Components/Utility/CustomTextBox.js](./Components/Utility/CustomTextBox.js), for any text input.
- [/Components/Utility/GridArena.js](/Components/Utility/GridArena.js), our custom way of placing components on the arena easily.
- [/Config/kpvToCsv.js](./Config/kpvToCsv.js), the exports config file.
- [/Routes/ScoutComponents](/Routes/ScoutComponents), the actual scout page you'll need to update.

## Upgrading

Every now and then, you'll need to update all the dependencies.
Expo in particular sometimes needs to be upgraded. You can see the install guide [here](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/).

After upgrading, try running the app with `expo start --localhost --web`.
If you see any messages like `Some of your project's dependencies are not compatible with currently installed expo package version:`,
just re-install the right version with `expo install nameOfOutdatedPackage`.

Don't bother running `npm audit fix`, the vulnerabilites npm usually complains about don't apply to our app.

## Adding New Input

We have some components you can re-use to add new inputs. Here are the most common ones:

```javascript
<BoolButton id="TimerClicked" bgc="lime" width={100} press={callback}></BoolButton>
```
