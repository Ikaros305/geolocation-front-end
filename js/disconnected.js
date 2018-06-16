module.exports = {
  disconnectedMessage: function (message) {
    var div = document.getElementsByClassName('success-hide');
    div[0].style.display = "block";
    div[0].classList.remove('alert-primary');
    div[0].classList.add('alert-danger');
    div[0].innerText = message;
    setTimeout(function(){ 
      div[0].style.display = "none";
     }, 8000);
  }
}