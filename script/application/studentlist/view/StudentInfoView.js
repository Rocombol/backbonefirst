var StudentInfoView = Backbone.View.extend({
	
	events: {
		"click .closeInfo": "close"
	},
	
    initialize: function () { 
	    this.$el = $("#extraInfo"); 
		this.render();
    },

    render: function () {
	   this.$el.html(_.template(infoViewTpl, this.model.toJSON()));	
	},
    
    close: function () {    
		$("#extraInfo ul").hide();   
	}
	
});