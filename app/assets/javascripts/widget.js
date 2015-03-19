$(document).ready(function() {
var model = new ParserModel();
var cont = new Controller(model);

// obviously a terrible design issue if iam am passing the object its own callback
cont.bindEvents()


});


var Controller = function(model, view) {
  this.model = model;
  this.preparsedString = model.preparsedString;
  this.getString = function() {
    model.recieveString();
  }
};

var ParserModel = function() {
  this.preparsedString = '';
};

ParserModel.prototype.recieveString = function() {
  $.ajax({
    type: 'POST',
    url: '/widget',
    data: $('.widget').serialize(),
    success: function(data) {
      console.log(data);
      this.preparsedString = data.title + data.content;
    }
  });
};

Controller.prototype.bindEvents = function() {
  $('.widget').on('submit', function(event) {
    event.preventDefault();
    this.getString();
  })
};


// Sudo.. And yea I always spell it that way

// Viewy Stuff
// html tags open and close
// actually append the parsed string to html doc

// Model suff
// string parser model
// pre parsed will be string recieved from form will be stored there

// controller Stuff
// pass pre parsed string to parser model
// pass parsed string to view
