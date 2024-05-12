class addNoteScreen {
  get skipBtn() {
    return $(`//*[@text='SKIP']`);
  }
}
module.exports = new addNoteScreen();
//export default new addNoteScreen
