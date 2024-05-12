describe("Add Notes", () => {
  it("Skip Tutorial", async () => {
    await $(`//*[@text='SKIP']`).click();

    expect($(`//*[@text='Add note']`)).toBeDisplayed();
  });

  it("Add node and save and verify", async () => {
    await $(`//*[@text='Add note']`).click();
    await $(`//*[@text='Text']`).click();
    await $(`//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_title']`).addValue("Grocery");
    await $(`//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_note']`).addValue("Potato \n vegetable \n Sugar");
    await driver.back();
    await driver.back();
    // await $(`//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/back_btn']`).click();
    await driver.pause(3000);
    expect($(`//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_btn']`)).toBeDisplayed();
  });

  it("Delete Note", async () => {
    await driver.back();

    const note = await $(`//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/title']`).getText();
    await $(`//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/title']`).click();
    await $(`~More`).click();
    await $(`//*[@text='Delete']`).click();
    await $(`//*[@text='OK']`).click();
    await $(`//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/icon_nav']`).click();
    await $(`//*[@text='Trash Can']`).click();

    expect($(`//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/title']`).getText()).toHaveText(note);
  });
});
