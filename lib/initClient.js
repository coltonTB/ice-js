var Backbone = require('backbone'),
    IceHistory = require('../classes/History'),
    router = require('user-router-instance');

module.exports = (function(){

  Backbone.$ = require('jquery');

  (function(){
    window.r = router.exportClient();
    IceHistory.start({pushState:true});
  })();

})();
