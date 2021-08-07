import { GAME_CONSTANT } from "../../constant";

export class Masking extends Phaser.GameObjects.Graphics {
  constructor(
    scene: Phaser.Scene,
    options: Phaser.Types.GameObjects.Graphics.Options,
    offset?: number,
    reverse?: boolean
  ) {
    super(scene, options);
    const { SMALL_SLIT, LARGE_SLIT } = GAME_CONSTANT.OBJECTS_SIZE;

    for (
      let i = -GAME_CONSTANT.CONFIG.width / (SMALL_SLIT + LARGE_SLIT);
      i < GAME_CONSTANT.CONFIG.width / (SMALL_SLIT + LARGE_SLIT);
      i++
    ) {
      if (reverse) {
        this.fillRect(
          i * (SMALL_SLIT + LARGE_SLIT) + SMALL_SLIT + (offset ?? 0),
          0,
          LARGE_SLIT,
          GAME_CONSTANT.CONFIG.height
        );
      } else {
        this.fillRect(
          i * (SMALL_SLIT + LARGE_SLIT) + (offset ?? 0),
          0,
          SMALL_SLIT,
          GAME_CONSTANT.CONFIG.height
        );
      }
    }
    // scene.add.existing(this);
    scene.add.existing(this);
  }
}
