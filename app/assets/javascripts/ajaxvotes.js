$(document).ready(function(){
  var voteModule = asyncVotes();
  voteModule.init();
});

(function() {

  var routeAddress;

  var ajaxVotesCall = function(url, callback) {
    $.ajax({
      type: 'GET',
      url: url,
      success: function(response) {
        callback(response);
      }
    });
  };

  var renderNewVoteTotal = function(data) {
      $('.'+data.id).find('.vote-total').text('Votes: '+data.vote_total);
    };

  var upvoteEvents = function() {
    $('.question-template').on('click', '.upvote-trigger', function(event) {
      event.preventDefault();
      routeAddress = $(this).data('url');
      ajaxVotesCall(routeAddress, renderNewVoteTotal);
    })
  };

  var downvoteEvents = function() {
    $('.question-template').on('click', '.downvote-trigger', function(event) {
      event.preventDefault();
      routeAddress = $(this).data('url');
      ajaxVotesCall(routeAddress, renderNewVoteTotal);
    });
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