'use strict';

var collectionActions = require('../collections/collectionActions'); 

module.exports = function(texture, width, height){
    var _collectionActions = collectionActions(), 
        _texture = texture,
        _suc = null;
    
    _texture.width = width;
    _texture.height = height;
    _texture.anchor.setTo(0.5, 0.5);
    
    return {
        getSuc: function() {
            return _suc;
        },
        setSuc: function(suc) {
            _suc = suc;
        },
        update: function() {
            _collectionActions.update();
        },
        addActions: function(action) {
            _collectionActions.addActions(action);
        }
    }
};
