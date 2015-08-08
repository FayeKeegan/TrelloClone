TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
	template: JST["boards/show"],

	initialize: function(){
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.model.lists(), "sync add", this.render)
		this.lists().each(function(list){
			this.addListSubview;
		}.bind(this))
	},

	addListSubview: function(list){
		listIndexItem = TrelloClone({ model: list })
		this.addSubview("ul.list-index", listIndexItem)
	},

	render: function(){
		var content = this.template({ board: this.model, lists: this.model.lists()})
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
});