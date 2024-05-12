describe("Android Native Feature Test", () => {
  it("Access Activity Directly", async () => {
    await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");
    await driver.pause(3000);
  });

  it("Alert", async () => {
    await $('//android.widget.Button[@content-desc="OK Cancel dialog with a message"]').click();

    console.log(await driver.getAlertText());
    await driver.acceptAlert();
    // await driver.dismissAlert()

    await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
  });

  it(" Vertical scrolling", async () => {
    await $("~App").click();
    await $("~Activity").click();

    // await $("android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)")
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")');
    await $("~Secure Surfaces").click();
  });

  it("Horizontal Scrolling", async () => {
    await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.Gallery1");
    await $("android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()");
    await $("android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()");
  });

  it.only("Exxercise 1", async () => {
    await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.DateWidgets1");

    await $("~change the date").click();
    await $("android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()");
    await $("~10 June 2024").click();
    await $('//*[@text="OK"]');
  });
});
