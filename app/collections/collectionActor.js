'use strict';

module.exports = function(){
    var _cab = null,
        _recor = null;
    
    return {
        addActor: function(actor) {
            if(!_cab)
                _cab = actor;
            else {
                _recor = _cab;
                while(_recor.getSuc())
                    _recor = _recor.getSuc();
                _recor.setSuc(actor);
            }
        },
        update: function() {
            _recor = _cab;
            while(_recor) {
                _recor.update();
                _recor = _recor.getSuc();
            }
        }
    }
};
