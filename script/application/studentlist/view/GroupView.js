var GroupView = Backbone.View.extend({
	
	collection: new StudentList(),
		
    initialize: function () {
		this.$el.find("#content").append(listTpl);
		this.render();		
	},

	render: function () {
		this.collection.each(this.renderOneTime, this);
			
	},
	
	renderOneTime: function (person) {
	    var student_view = new StudentListView({model: person});
		this.$el.find("#content").append(student_view.render().el);	
	}
	
});
