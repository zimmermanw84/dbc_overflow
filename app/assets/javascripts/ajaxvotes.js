$(document).ready(function(){
  var voteModule = asyncVotes();
  voteModule.init()
});

(function() {

  var ajaxVotesCall = function(url, callback) {
    $.ajax({
      type: 'GET',
      url: url,
      success: function(response) {
        callback(response);
      }
    });

  };


  var upvoteEvents = function() {

    var routeAddress;
    var questionId;
    var $eventTrigger = $('.upvote-trigger');

    function renderNewVoteTotal(data) {
      $('.'+data.id).find('.vote-total').text('Votes: '+data.vote_total);
    };

    function voteEventListener() {
      $('span').on('click', $eventTrigger, function(e) {
        routeAddress = $(this).data('url');
        e.preventDefault()
        ajaxVotesCall(routeAddress, renderNewVoteTotal);
      })
    };

    voteEventListener()
  };

  var downvoteEvents = function() {

  };


  var init = function() {

    upvoteEvents()
  };

  window.asyncVotes = function() {

     return {
      init: init,
    }
  };

})()