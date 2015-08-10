TrelloClone.Views.ListIndexItem = Backbone.CompositeView.extend({
	template: JST["lists/list_index_item"],

	className: "list-index-item list-group-item",

	tagName: "li",

	events: {
		"click button.add-card" : "addNewCardView",
		"click button.create-card": "createCard"
	},

	addNewCardView: function(){
		var card = new TrelloClone.Models.Card()
		this.newCardView = new TrelloClone.Views.CardNew({ model: card })
		this.addSubview("ul.cards", this.newCardView);
	},

	createCard: function(e){
		e.preventDefault();
		var that = this;
		var cardData = $(".new-card-form").serializeJSON();
		var card = new TrelloClone.Models.Card(cardData);
		card.set("list_id", this.model.id)
		if (!this.model.cards().last() ){
			card.set("ord", 1)
		} else {
			card.set("ord", this.model.cards().sort().last().get("ord") + 1)
		}
		card.save({}, {
			success: function(){
				that.model.cards().add(card);
				that.newCardView.remove();
			}
		})
	},

	initialize: function() {
		this.listenTo(this.model.cards(), "add", this.addCardSubview);
		this.listenTo(this.model, "sync", this.render);
		this.model.cards().each(this.addCardSubview.bind(this));
		this.model.fetch();
	},

	addCardSubview: function(card){
		var cardSubview = new TrelloClone.Views.CardIndexItem({ model: card });
		this.addSubview("ul.cards", cardSubview)
	},

	render: function () {
		var content = this.template({ list: this.model })
		this.$el.html(content)
		this.attachSubviews();
		return this;
	}
});