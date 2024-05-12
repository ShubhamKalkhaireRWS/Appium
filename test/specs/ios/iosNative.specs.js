describe("Native", () => {
  it("Alert", async () => {
    await $(`~Alert Views`).click();
    await $(`~Okay / Cancel`).click();

    // await $(`~OK`).click();
    // await $(`~CANCEL`).click();
    // await driver.acceptAlert();
    await driver.dismissAlert();
  });

  it("Scroll", async () => {
    await driver.execute("mobile: scroll", { direction: "down" });
    await driver.execute("mobile: scroll", { direction: "up" });
  });

  it.only("Picker View", async () => {
    await $(`~Picker View`).click();
    const R = await $(`~Red color component value`);
    const G = await $(`~Green color component value`);
    const B = await $(`~Blue color component value`);
    // await driver.execute("mobile: scroll", { element: R.elementId, direction: "up" });
    // await driver.execute("mobile: scroll", { element: G.elementId, direction: "down" });
    // await driver.execute("mobile: scroll", { element: B.elementId, direction: "up" });

    await R.addValue("100");
    await G.addValue("100");
    await B.addValue("100");
    await driver.pause(3000);
  });
});
