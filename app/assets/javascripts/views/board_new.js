TrelloClone.Views.BoardNew = Backbone.View.extend({
	template: JST["boards/new"],

	tagName: "form",

	events: {
		"click .create-board" : "createBoard"
	},

	initialize: function(){
		this.listenTo(this.model, "change", this.saveAndRedirect)
	},

	saveAndRedirect: function(newBoard){
		this.collection.add(newBoard);
		Backbone.history.navigate("", {trigger: true});
	},

	render: function(){
		var content = this.template({ board: this.model });
		this.$el.html(content);
		return this;
	},

	createBoard: function(e){
		e.preventDefault();
		var view = this;
		var boardData = $(e.currentTarget).parent().serializeJSON();
    	this.model.save(boardData);
	}

})