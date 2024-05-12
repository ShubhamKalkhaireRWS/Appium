require("dotenv").config()
const { config } = require("./wdio.shared.conf")

config.user = process.env.BROWSERSTACK_USER
config.key = process.env.BROWSERSTACK_KEY

config.specs = ["./test/specs/Android/addNote.specs.js"]

config.capabilities = [
  {
    // capabilities for local Appium web tests on an Android Emulator
    platformName: "Android",
    platformVersion: "12.0",
    deviceName: "Google Pixel 5",
    automationName: "UIAutomator2",
    app: "bs://bfe4d829dbd1683b98c1553758e3de282b06f436",
    autoGrantPermissions: true,
  },
]
config.services = ["browserstack"]
exports.config = config
