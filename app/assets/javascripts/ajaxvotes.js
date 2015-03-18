$(document).ready(function(){
  var voteModule = asyncVotes();
  voteModule.init()
});

(function() {

  var routeAddress;
  var $eventTrigger;

  var ajaxVotesCall = function(url, callback) {
    $.ajax({
      type: 'GET',
      url: url,
      success: function(response) {
        callback(response);
        // console.log(response)
      }
    });
  };

  var renderNewVoteTotal = function(data) {
      $('.'+data.id).find('.vote-total').text('Votes: '+data.vote_total);
    };

  var upvoteEvents = function() {

    $eventTrigger = $('.upvote-trigger');


    function voteEventListener() {
      $eventTrigger.on('click', function(e) {
        e.preventDefault()
        routeAddress = $(this).data('url');
        ajaxVotesCall(routeAddress, renderNewVoteTotal);
      })
    };

    voteEventListener()
  };

  var downvoteEvents = function() {

    $eventTrigger = $('.downvote-trigger');

    function voteEventListener() {
      $eventTrigger.on('click', function(e) {
        e.preventDefault()
        routeAddress = $(this).data('url');
        ajaxVotesCall(routeAddress, renderNewVoteTotal);
      })
    };

    voteEventListener();

  };


  var init = function() {
    downvoteEvents();
    upvoteEvents();
  };

  window.asyncVotes = function() {

     return {
      init: init,
    }
  };

})()