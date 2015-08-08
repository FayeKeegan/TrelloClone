TrelloClone.Collections.Lists = Backbone.Collection.extend({

	model: TrelloClone.Models.List,

	initialize: function(options){
		this.board = options.board;
	},

	getOrFetch: function(id){
		var list = this.get(id)
		if (!list){
			list = new TrelloClone.Models.List({ id: id })
			this.add(list)
		}
		list.fetch();
		return list;
	}
})