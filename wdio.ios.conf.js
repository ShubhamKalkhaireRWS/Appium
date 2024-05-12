const { config } = require("./wdio.shared.conf")
const path = require("path")

config.port = 4723

config.specs = ["./test/specs/ios/test.specs.js"]

config.capabilities = [
  {
    // capabilities for local Appium web tests on an iOS Emulator
    "appium:platformName": "ios",
    "appium:platformVersion": "16.0",
    "appium:deviceName": "iPhone 14",
    "appium:automationName": "XCUITest",
    "appium:app": path.join(process.cwd(), "App/ios/MVCTodo.app"),
    "appium:autoGrantPermissions": true,
  },
]

config.services = [
  ["appium"],
  {
    args: {
      address: "localhost",
      port: 4723,
      relaxedSecurity: true,
    },
    logPath: "./",
  },
]
exports.config = config
