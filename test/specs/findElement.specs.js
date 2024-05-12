describe("Android Element Test", () => {
  xit("accessibility id", async () => {
    const app = await $("~App")
    await app.click()

    const actionBar = await $("~Action Bar")

    await expect(actionBar).toBeExisting()
  })

  xit("class Name", async () => {
    const classname = await $("android.widget.TextView")
    console.log(await classname.getText())
    await expect(classname).toHaveText("API Demos")
  })

  xit("xpath", async () => {
    await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click()
    await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click()
    await $('//android.widget.TextView[@text="Command two"]').click()
    const cmdTwo = await $('//android.widget.TextView[@resource-id="android:id/message"]')
    console.log(await cmdTwo.getText())
    await expect(cmdTwo).toHaveText("You selected: 1 , Command two")
  })

  xit("UIAutomator", async () => {
    await $('android=new UiSelector().textContains("Alert")').click()
  })

  xit("Multiple Elements", async () => {
    const textList = await $$("android.widget.TextView")
    for (let element of textList) {
      console.log(await element.getText())
    }
  })

  it("Exercise", async () => {
    await $("~Views").click()
    await $("~Auto Complete").click()
    await $("~1. Screen Top").click()
    await $("android.widget.AutoCompleteTextView").addValue("India")
    await expect($("android.widget.AutoCompleteTextView")).toHaveText("India")
  })
})
