import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';

let scope;

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})

export class GamePage implements OnInit {

  // GAME PROPERTIES
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  gameWidth = window.innerWidth;
  gameHeight = window.innerHeight;

  constructor() {
    scope = Object.prototype.constructor(this);
    scope.config = {
      type: Phaser.CANVAS,
      height: scope.gameHeight,
      width: scope.gameWidth,
      scale: { isPortrait: true },
      scene: [{ preload: scope.preload, create: scope.create, update: scope.update }],
      backgroundColor: "#eeeeee",
      parent: "gameContainer", // match ID in html
      physics: { default: "arcade", },
    };
  }

  ngOnInit() {
    scope.phaserGame = new Phaser.Game(scope.config); 
  }


  /**
  *  SCENE STARTING FUNCTIONS
  */

  preload() {
    console.warn("Preload");
  }

  create() {
    console.warn("Create");
  }

  update() {
  }

}
