TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
	template: JST["boards/show"],

	className: "board-show",

	events: {
		"click .create-list-button": "insertListForm",
		"click button.create-list": "createList",
		"click button.delete-board": "deleteBoard"
	},

	initialize: function(){
		this.listenTo(this.model.lists(), "add", this.addListSubview);
		this.listenTo(this.model, "sync", this.render);
		this.model.lists().each(this.addListSubview.bind(this));
	},

	deleteBoard: function(e){
		e.preventDefault();
		this.model.destroy();
		Backbone.history.navigate("", { trigger: true })
	},

	insertListForm: function(e){
		e.preventDefault();
		this.addListNewSubview();
	},

	addListNewSubview: function(){
		var list = new TrelloClone.Models.List({ board_id: this.model.id})
		this.listNewSubView = new TrelloClone.Views.ListNew({ model: list });
		this.addSubview("ul.list-index", this.listNewSubView);
	},

	addListSubview: function(list){
		var listIndexItem = new TrelloClone.Views.ListIndexItem({ model: list });
		this.addSubview("ul.list-index", listIndexItem);
	},

	render: function(){
		var content = this.template({ board: this.model, lists: this.model.lists()})
		this.$el.html(content);
		this.attachSubviews();
		return this;
	},

	createList: function(e){
		e.preventDefault();
		var that = this;
		var listData = $(".new-list-form").serializeJSON();
		var list = new TrelloClone.Models.List(listData);
		list.set("board_id", this.model.id)
		list.set("ord", this.model.lists().last().get("ord") + 1)
		list.save({}, {
			success: function(){
				that.model.lists().add(list);
				that.listNewSubView.remove();
			}
		})
	}
});