'use strict';

var config = require('../../configuration/configuration');
var stages = require('../stages/stage.js');
var actors = require('../actors/actor.js');

(function(window){
    window.title = 'gameWindow';
    window.init = function(game, layout){
        this.game = game;
        this.layout = layout;
    };
    window.construct = {
        preload: function() {
            this.game.load.image('logo', config.assets + 'logo.svg'); 
            this.game.load.image('fondo', config.assets + 'fondo.png'); 
        },
        create: function() {
            this.scale.scaleMode = window.layout;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.setScreenSize(true);
            
            this.actor = actors(window.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo'), 50, 50);
            
            this.stage = stages();
            this.stage.addActor(this.actor);
        },
        update: function() {
            this.stage.update();
        }
    }
    return window;
})(typeof exports === "undefined" ? utilidades = {} : exports);
