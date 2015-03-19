$(document).ready(function() {
  deleteAjaxModule = deleteAjax();
  deleteAjaxModule.init()
});

(function() {

  var deleteUrl;
  var targetId;

  var ajaxDeleteCall = function(url, id) {
    $.ajax({
      type: 'delete',
      url: url,
      success: function() {
      $('#question_'+id).fadeOut();
      },
      error: function() {
        console.log('Ajax Data Error');
      },
    });
  };

  var deleteQuestionEvent = function() {
    $('.question-template').on('click', '.delete', function(event) {
      event.preventDefault();
      deleteUrl = $(this).data('url');
      targetId = $(this).data('id');
      ajaxDeleteCall(deleteUrl, targetId);
    })
  };

  var init = function() {
    deleteQuestionEvent()
  };

  window.deleteAjax = function() {
    return {
      init: init,
    }
  };

})();