'use strict';

var collectionActor = require('../collections/collectionActor'); 

module.exports = function(){
    var _collectionActor = collectionActor();
    
    return {
        update: function() {
            _collectionActor.update();
        },
        addActor: function(actor) {
            _collectionActor.addActor(actor);
        }
    }
};
