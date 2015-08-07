window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var root = $("#root");
    new TrelloClone.Routers.TrelloRouter(root);
    Backbone.history.start();
  }
};

  $(document).ready(function(){

  TrelloClone.initialize();
});
