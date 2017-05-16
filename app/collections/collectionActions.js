'use strict';

module.exports = function(){
    var _cab = null,
        _recor = null;
    
    return {
        addActions: function(action) {
            if(!_cab)
                _cab = action;
            else {
                _recor = _cab;
                while(_recor.getSuc())
                    _recor = _recor.getSuc();
                _recor.setSuc(action);
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
