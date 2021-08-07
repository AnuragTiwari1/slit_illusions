export class GAME_CONSTANT {
  public static CONFIG = {
    width: window.innerWidth - 100,
    height: 600,
  };

  public static SCENE = {
    MAIN: "main",
    FRAME_ONE: "frame_one",
    FRAME_TWO: "frame_two",
    FRAME_THREE: "frame_three",
    FRAME_FOUR: "frame_four",
  };

  public static COLOR = {
    WHITE: 0xffffff,
    BLACK: 0x000000,
    YELLOW: 0xff0000,
  };

  public static OBJECTS_SIZE = {
    RECT_SIZE: 150,
    SMALL_SLIT: 4,
    LARGE_SLIT: 12,
  };
}
