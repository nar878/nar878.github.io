// This code runs when the page loads
$(function() {

  $(".thumbnail").on("click", function(event) {
    event.preventDefault();
    var elementThatWasClicked = $(this);
    console.log(elementThatWasClicked);
    //parent to delete actual column div. otherwise would delete photo but would stay in place
    elementThatWasClicked.parent().remove();
  })

})