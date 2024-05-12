describe("Find Elements", () => {
  it("Accessibility ID", async () => {
    await $(`~Alert Views`).click();
    await $(`~Simple`).click();
    await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
  });

  it("Tagname", async () => {
    console.log(await $(`XCUIElementTypeStaticText`).getText());

    const txtElements = await $$(`XCUIElementTypeStaticText`);
    for (const element of txtElements) {
      console.log(await element.getText());
    }
  });

  it("Xpath", async () => {
    await $(`//XCUIElementTypeStaticText[@name="Alert Views"]`).click();
    await $(`//XCUIElementTypeStaticText[@label="Simple"]`).click();
    await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
  });

  it("Class Chain", async () => {
    const alerttext = '**/XCUIElementTypeStaticText[`label == "Alert Views"`]';
    await $(`-ios class chain:${alerttext}`).click();
    const simple = '**/XCUIElementTypeStaticText[`label CONTAINS "Simple"`]';
    await $(`-ios class chain:${simple}`).click();
    await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
  });
  it("Predicate string", async () => {
    const alerttext = 'label == "Alert Views"';
    await $(`-ios predicate string:${alerttext}`).click();
    const simple = 'value BEGINSWITH[c] "Sim"';
    await $(`-ios predicate string:${simple}`).click();
    await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
  });

  it.only("Exercise2", async () => {
    await $(`//XCUIElementTypeStaticText[@name="Search"]`).click();
    await $(`//XCUIElementTypeStaticText[@label="Default"]`).click();
    const searchField = 'type == "XCUIElementTypeSearchField"';
    await $(`-ios predicate string:${searchField}`).setValue("Udemy");
    const closeBtn = '**/XCUIElementTypeButton[`label == "Clear text"`]';
    await $(`-ios class chain:${closeBtn}`).click();
    await expect($(`-ios predicate string:${searchField}`)).not.toHaveAttr("value");
  });
});
