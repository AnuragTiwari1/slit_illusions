import Phaser from "phaser";

import { GAME_CONSTANT } from "./constant";
import { FrameOne } from "./src/scene/frameOne.scene";
import { FrameTwo } from "./src/scene/frameTwo.scene";
import { FrameThree } from "./src/scene/frameThree.scene";
import { MainScene } from "./src/scene/main.scene";
import { FrameFour } from "./src/scene/frameFour.scene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: GAME_CONSTANT.CONFIG.width,
  height: GAME_CONSTANT.CONFIG.height,
  scene: [MainScene, FrameOne, FrameTwo, FrameThree, FrameFour],
  parent: "game",
  backgroundColor: GAME_CONSTANT.COLOR.WHITE,
};

new Phaser.Game(config);
