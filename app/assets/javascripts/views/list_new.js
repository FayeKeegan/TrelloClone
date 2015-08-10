TrelloClone.Views.ListNew = Backbone.CompositeView.extend({
	template: JST["lists/new"],

	className: "new-list",

	tagName: "li",

	events:{
		"click create-list-button": "removeForm"
	},

	render: function(){
		var content = this.template();
		this.$el.html(content);
		return this;
	},

})