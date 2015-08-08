TrelloClone.Routers.TrelloRouter = Backbone.Router.extend({
	routes: {
		"" : "boardsIndex",
		"boards/new" : "boardsNew",
		"boards/:id" : "boardShow"
	},

	initialize: function(rootEl){
		this.$rootEl = $(rootEl);
		this.boards = new TrelloClone.Collections.Boards();
	},

	boardShow: function(id){
		var board = this.boards.getOrFetch(id);
		var view = new TrelloClone.Views.BoardShow({model: board});
		this.swapView(view);
	},

	boardsIndex: function(){
		this.boards.fetch()
		var view = new TrelloClone.Views.BoardIndex({collection: this.boards})
		this.swapView(view)
	},

	boardsNew: function(){
		var newBoard = new TrelloClone.Models.Board()
		var view = new TrelloClone.Views.BoardNew({model: newBoard, collection: this.boards})
		this.swapView(view)
	},

	swapView: function(view){
		this._currentView && this._currentView.remove();
	    this._currentView = view;
	    this.$rootEl.html(view.render().$el);
	}

})