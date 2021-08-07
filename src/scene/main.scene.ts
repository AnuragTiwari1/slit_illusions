import Phaser from "phaser";

import { GAME_CONSTANT } from "../../constant";
import { Masking } from "../objects/masking";

export class MainScene extends Phaser.Scene {
  private slitPaper: Masking;
  private velocity = 10;

  constructor() {
    super(GAME_CONSTANT.SCENE.MAIN);
  }

  create() {
    this.scene.launch(GAME_CONSTANT.SCENE.FRAME_ONE);
    this.scene.launch(GAME_CONSTANT.SCENE.FRAME_TWO);
    this.scene.launch(GAME_CONSTANT.SCENE.FRAME_THREE);
    this.scene.launch(GAME_CONSTANT.SCENE.FRAME_FOUR);

    this.slitPaper = new Masking(
      this,
      { fillStyle: { color: GAME_CONSTANT.COLOR.BLACK } },
      0,
      true
    );
  }

  update(time, delta) {
    const translation =
      (this.slitPaper.x + delta * 0.001 * this.velocity) %
      GAME_CONSTANT.CONFIG.width;
    this.slitPaper.setX(translation);
  }
}
