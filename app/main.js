'use strict';

var game = new Phaser.Game(640, 344, Phaser.AUTO);
game.transparent = true;

const config = require('././configuration/configuration');
const gameWindows = require(config.windows + 'game.windows');

config.init(Phaser.ScaleManager);
gameWindows.init(game, config.SHOW_ALL);

game.state.add(gameWindows.title, gameWindows.construct);
game.state.start(gameWindows.title);
