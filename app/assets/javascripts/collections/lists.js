TrelloClone.Collections.Lists = Backbone.Collection.extend({

	model: TrelloClone.Models.List,
	url: "/api/lists",

	initialize: function(){
	},

	comparator: function(list){
		return list.get("ord");
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