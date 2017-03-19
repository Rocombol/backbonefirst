var StudentEditView = Backbone.View.extend({
	
	events: {
	    "click #edit_student": "saveStudent",
		"click .closeInfo": "close"
	},
	
    initialize: function () { 
	    this.$el = $("#extraInfo");

		this.render();
    },

    render: function () {	
		this.$el.html(_.template(editViewTpl, this.model.toJSON()));	
	},
    
	saveStudent: function () {
	    var values = {},
            $inputs = $("#person_input").find("input"),
			key = [];	
		
	    _.each($inputs, function(input, i) {
		    key[i] = input.id;
			values[key[i]] = input.value;
		});	
		
		this.model.set(values);

	},

    close: function () {
		
		$("#person_input").hide();	
	}
	
});