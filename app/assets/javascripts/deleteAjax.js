$(document).ready(function() {
  deleteAjaxModule = deleteAjax();
  deleteAjaxModule.init()
});

(function() {

  var deleteUrl;
  var targetId;

  var ajaxDeleteCall = function(url) {
    $.ajax({
      type: 'delete',
      url: url,
    });
  };

  var deleteQuestionEvent = function() {
    $('.question-template').on('click', '.delete', function(event) {
      event.preventDefault();
      deleteUrl = $(this).data('url');
      targetId = $(this).data('id');
      ajaxDeleteCall(deleteUrl);
      $('#question_'+targetId).fadeOut();
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