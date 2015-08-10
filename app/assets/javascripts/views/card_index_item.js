TrelloClone.Views.CardIndexItem = Backbone.View.extend({
	template: JST["cards/index_item"],

	className: "card-index-item list-group-item",

	tagName: "li",


	initialize: function() {
		this.listenTo(this.model, "sync", this.render);;
	},

	render: function () {
		var content = this.template({ card: this.model })
		this.$el.html(content)
		return this;
	}
});