var StudentListView = Backbone.View.extend({

	tagName: "tr",

	events: {
	    "click .editInfo": "editStudent",
        "click .showInfo": "showStudent"	
    },

    render: function () {

	    this.$el.html(_.template(listItemTpl, this.model.toJSON()));	
		return this;
	},
	
	editStudent: function () {
	    var person = this.model,
		    edit_view = new StudentEditView({model: person});	
	    this.model.on("change", this.render, this);
	},
	
	showStudent: function () {	
	   var person = this.model,
		   studentInfoView = new StudentInfoView({model: person});	
	}	
});
