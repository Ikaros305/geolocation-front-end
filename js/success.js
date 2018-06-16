module.exports = {
  alertMessage: function (message) {
    var div = document.getElementsByClassName('success-hide');
    if(div[0].classList.contains('alert-danger')) {
      div[0].classList.remove('alert-danger');
      div[0].classList.add('alert-primary');
    }
    div[0].style.display = "block";
    div[0].innerText = message;
    setTimeout(function(){ 
      div[0].style.display = "none";
     }, 8000);
  }
}