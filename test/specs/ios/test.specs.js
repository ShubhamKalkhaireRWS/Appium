describe("Test", () => {
  it("Todo List", async () => {
    await $('//*[@name="Create list"]').click();
    const textField = 'value == "List Name"';
    await $(`-ios predicate string:${textField}`).addValue("Schedule");
    await $(`~Create`).click();

    await expect(await $(`~Schedule`)).toBeExisting();
  });

  it("exercise", async () => {
    await $(`~Schedule`).click();
    await $(`//*[@value='Create item']`).click();
    await $(`//*[@value='Title']`).addValue("Work");
    await $(`//*[@value='Due']`).click();
    await driver.pause(2000);
    await $(`~Date Picker`).click();

    const date = 'label == "16"';
    await $(`-ios predicate string:${date}`).click();
    await driver.back();
    await $(`//*[@label='Create']`).click();

    await expect(await $(`~Work`)).toBeExisting();
  });
});
