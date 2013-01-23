var StudentFrontView = Backbone.View.extend({
  el: "#student",
  
  initialize: function(){
    this.model = new Student(window.semester.student);
    
    // Wir wollen die View nue rendern, wenn sich die Daten ändern...
    this.model.on("change",this.render, this); // this muss mit! Für den Kontext.
    
    this.template = _.template($('#student-view').html());
    
    this.render();
  },
  
  render: function() {
    var viewHtml = this.template(this.model.attributes);
    this.$el.html( viewHtml );
  }
  
});


var VeranstaltungsView = Backbone.View.extend({
  className: "veranstaltung",
  
  events: {
    "click .select":"selectMe"
  },
  
  initialize: function(){
    this.template = _.template($('#veranstaltungs-view').html());
    this.render();
  },
  
  render: function(){
    var viewHtml = this.template(this.model.attributes);
    this.$el.html( viewHtml );
  },
  
  selectMe: function(){
    this.$el.toggleClass('selected');
  }
  
});


var VVZView = Backbone.View.extend({
  collection: new Vorlesungsverzeichnis(VVZ.veranstaltungen),
  
  initialize: function(){
    this.template = _.template($('#vorlesungsverzeichnis-view').html());
    this.render();
  },
  
  render: function() {
    var viewHtml = this.template({});
    this.$el.html( viewHtml );
    var $html = this.$el;
    
    this.collection.each(function(veranstaltung){
      var vview = new VeranstaltungsView({ model: veranstaltung })
      $html.append(vview.el);
    })
  }
});










