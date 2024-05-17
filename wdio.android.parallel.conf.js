const { parseArgs } = require("util")
const { config } = require("./wdio.shared.conf")
const path = require("path")

// config.port = 4723

config.specs = ["./test/specs/Android/addNote.specs.js"]

config.capabilities = [
  {
    // capabilities for local Appium web tests on an Android Emulator
    "appium:platformName": "Android",
    "appium:platformVersion": "13.0",
    "appium:deviceName": "Pixel 5",
    "appium:udid": "emulator-5554",
    "appium:automationName": "UIAutomator2",
    "appium:app": path.join(process.cwd(), "App/Android/ColorNote+Notepad.apk"),
    "appium:autoGrantPermissions": true,
    port: 6000,
  },
  {
    // capabilities for local Appium web tests on an Android Emulator
    "appium:platformName": "Android",
    "appium:platformVersion": "12.0",
    "appium:deviceName": "Pixel 6",
    "appium:udid": "emulator-5556",
    "appium:automationName": "UIAutomator2",
    "appium:app": path.join(process.cwd(), "App/Android/ColorNote+Notepad.apk"),
    "appium:autoGrantPermissions": true,
    port: 8000,
  },
]

exports.config = config
