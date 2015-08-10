TrelloClone.Collections.Boards = Backbone.Collection.extend({
	url: "api/boards",

	model: TrelloClone.Models.Board,

	comparable: function(board){
		return board.get("ord");
	},


	getOrFetch: function(id){
		var board = this.get(id)
		if (!board){
			board = new TrelloClone.Models.Board({ id: id })
			this.add(board)
		}
		board.fetch();
		return board;
	}
})