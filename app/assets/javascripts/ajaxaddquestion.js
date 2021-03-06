$(document).ready(function(){
  var questionModule = asyncAddQuestion();
  questionModule.init();
});

(function() {

  function doEverything() {
    $('.new_question').on('submit', function(e) {
      e.preventDefault();
      $.ajax({
        type:'POST',
        url: '/questions',
        data: $(this).serialize(),
        success: function(data) {
          $('.question-template ul').prepend(
            "<li class='question' id='question_"+data.id+"'>" +
          "<section class="+data.id+">" +
          "<a href='/questions/"+data.id+"/answers'><h2>"+data.title+"</a></h2>" +
          "<p>" + data.content + "<p>" +
          "<h3 class='vote-total'>Votes: 0</h3>" +
          "<button class='upvote-trigger' data-url='/questions/"+data.id+"/upvote'> " +
          "<a href>Upvote!</a></button> " +
          "<button class='downvote-trigger' data-url='/questions/"+data.id+"/downvote'> " +
          "<a href>Downvote!</a></button> " +
          "<button><a href='/questions/"+data.id+"/edit'>Edit</a></button> " +
          "<button class='delete' data-id='"+data.id+"' data-url='/questions/"+data.id+"'><a>Delete</a>" +
          "</button>" +
          "</section></li>"
            )
          $('#question_title').val('');
          $('textarea').val('');
        },
        error: function() {
         console.log("No soup for you!")
       }
     });
    });

};

var init = function() {
    doEverything();
  };

  window.asyncAddQuestion = function() {
    return {
      init: init,
    }
  };

})();

