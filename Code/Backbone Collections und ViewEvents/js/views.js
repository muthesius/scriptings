var StudentFrontView = Backbone.View.extend({
  el: "#student",
  
  initialize: function(){
    this.model = window.student;
    
    // Wir wollen die View nue rendern, wenn sich die Daten ändern...
    this.model.on("change",this.render, this); // this muss mit! Für den Kontext.
    
    this.template = _.template($('#student-view').html());
    
    this.render();
  },
  
  render: function() {
    var viewHtml = this.template(this.model.attributes);
    this.$el.html( viewHtml );
    return this;
  }
  
});


var VeranstaltungsView = Backbone.View.extend({
  className: "veranstaltung",
  
  index: -1,
  
  events: {
    "click .select":"selectMe"
  },
  
  initialize: function(args){
    if (args.index!=undefined) {
      this.index = args.index;
    }
    this.template = _.template($('#veranstaltungs-view').html());
    this.render();
  },
  
  render: function(){
    var data = this.model.attributes;
    data.index = this.index;
    
    var viewHtml = this.template(data);
    this.$el.html( viewHtml );
  },
  
  selectMe: function(){
    this.$el.toggleClass('selected');
  }
  
});


var VVZView = Backbone.View.extend({
  collection: new Vorlesungsverzeichnis(VVZ.veranstaltungen),
  
  events: {
    "click .select": "selected"
  },
  
  initialize: function(){
    this.template = _.template($('#vorlesungsverzeichnis-view').html());
    window.coll = this.collection;
    this.render();
  },
  
  render: function() {
    
    var viewHtml = this.template({});
    this.$el.html( viewHtml );
    var $html = this.$el;
    
    var modelIndex = 0;
    this.collection.each(function(veranstaltung){
      var vview = new VeranstaltungsView({ model: veranstaltung , index: modelIndex })
      $html.append(vview.el);
      modelIndex++;
    });
  },
  
  selected: function(event) {
    var v = this.collection.at( $(event.currentTarget).data("index"));
    window.student.semesterplan.add(v,{silent: true});
    var studentFrontView = new StudentFrontView($('#student'));
    console.log(studentFrontView.render().el, studentFrontView.model);
    studentFrontView.render();
  }
  
});


var StudentDetailView = Backbone.View.extend({
  collection: window.student.semesterplan,
  
  initialize: function(){
    this.model = this.collection.student;
    
    this.template = _.template($('#studentdetail-view').html());
    this.render();
    
    this.collection.on("add reset remove",this.render, this); // this muss mit! Für den Kontext.
  },
  
  render: function() {
    var viewHtml = this.template(this.model.toJSON());
    this.$el.html( viewHtml );
    
    var $html = this.$el.find('#veranstaltungen');
    $html.empty();
    // rendere _meine_ veranstaltungen
    this.collection.each(this.renderVeranstaltung);
  },
  
  renderVeranstaltung: function(veranstaltung){
    var vview = new VeranstaltungsView({ model: veranstaltung })
    $html.append(vview.el);
  }
});










