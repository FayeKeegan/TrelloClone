TrelloClone.Views.CardNew = Backbone.CompositeView.extend({
	template: JST["cards/new"],

	className: "new-card",

	tagName: "li",

	render: function(){
		var content = this.template({card: this.model})
		this.$el.html(content);
		return this;
	}

})