import Phaser from "phaser";

import { GAME_CONSTANT } from "../../constant";
import { Masking } from "../objects/masking";

export class FrameFour extends Phaser.Scene {
  constructor() {
    super(GAME_CONSTANT.SCENE.FRAME_FOUR);
  }

  create() {
    const { width, height } = GAME_CONSTANT.CONFIG;
    const { RECT_SIZE } = GAME_CONSTANT.OBJECTS_SIZE;

    const image = new Masking(
      this,
      {
        fillStyle: { color: GAME_CONSTANT.COLOR.BLACK },
      },
      12
    );

    const shape = this.make.graphics({
      fillStyle: { color: GAME_CONSTANT.COLOR.WHITE },
    });

    shape.beginPath();

    shape.setPosition(width / 2, height / 2);
    // shape.translateCanvas(width / 2, height / 2);
    shape.fillRect(-RECT_SIZE / 2, -RECT_SIZE / 2, RECT_SIZE, RECT_SIZE);

    const mask = shape.createGeometryMask();

    image.setMask(mask);
  }
}
