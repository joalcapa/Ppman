'use strict';

(function(config){
    config.init = function(scaleManager){
        this.SHOW_ALL = scaleManager.SHOW_ALL;
    };
    config.assets = './app/assets/';
    config.windows = './app/windows/';
    config.stages = './app/stages/';
    return config;
})(typeof exports === "undefined" ? utilidades = {} : exports);
