TrelloClone.Routers.TrelloRouter = Backbone.Router.extend({
	routes: {
		"/" : "boardsIndex"
	},

	initialize: function(root){
		this.root = root;
		this.boards = new TrelloClone.Collections.Boards
	},

	boardIndex: function(){
		var view = new TrelloClone.Views.BoardIndex({collection: this.boards})
		this.swapView(view)
	},

	swapView: function(view){
		this._currentView && this._currentView.remove();
	    this._currentView = view;
	    this.$rootEl.html(view.render().$el);
	}


})