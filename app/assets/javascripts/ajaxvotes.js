$(document).ready(function(){
  var test = asyncVotes();
  test.init()
});

(function() {

  var ajaxVotesCall = function(url, callback) {
    $.ajax({
      type: 'GET',
      url: url,
      success: function(response) {
        console.log(response);
      }
    });

  };


  var upvoteEvents = function() {

    var routeAddress;
    var $eventTrigger = $('.upvote-trigger');

    function renderNewVoteTotal() {

    };

    function voteEventListener() {
      $('span').on('click', $eventTrigger, function(e) {
        routeAddress = $(this).data('url');
        e.preventDefault()
        ajaxVotesCall(routeAddress);
      })
    };

    voteEventListener()
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