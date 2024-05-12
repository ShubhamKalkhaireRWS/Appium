const { config } = require("./wdio.shared.conf");
const path = require("path");

config.port = 4723;

config.specs = ["./test/specs/Android/addNote.specs.js"];

config.capabilities = [
  {
    // capabilities for local Appium web tests on an Android Emulator
    "appium:platformName": "Android",
    "appium:platformVersion": "13.0",
    "appium:deviceName": "Pixel 5",
    "appium:automationName": "UIAutomator2",
    "appium:app": path.join(process.cwd(), "App/Android/ColorNote+Notepad.apk"),
    "appium:autoGrantPermissions": true,
  },
];
config.services["appium"];
exports.config = config;
