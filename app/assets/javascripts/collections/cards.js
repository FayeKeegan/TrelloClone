TrelloClone.Collections.Cards = Backbone.Collection.extend({

	model: TrelloClone.Models.Card,
	url: "/api/cards",

	comparator: function(card){
		return card.get("ord");
	},

	getOrFetch: function(id){
		var card = this.get(id)
		if (!card){
			card = new TrelloClone.Models.card({ id: id })
			this.add(card)
		}
		card.fetch();
		return card;
	}
})