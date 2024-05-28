window.addEventListener("load", (evt) => {
  const board = new Board("game");
  const setting = new Settings();

  setting.init();
  board.init(setting);

  board.renderBoard();
});
