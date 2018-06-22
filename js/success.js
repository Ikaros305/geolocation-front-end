import {
  nameOfUser
} from './checkformsubmited';

module.exports = {
  alertMessage: function (message) {
    // if statement to avoid alert message showing on first screen
    if (nameOfUser.length === 0) {
      //if form not submitted this will take care of it and won't show any alert
    } else {
      var div = document.getElementsByClassName('success-hide');
      if (div[0].classList.contains('alert-danger')) {
        div[0].classList.remove('alert-danger');
        div[0].classList.add('alert-primary');
      }
      div[0].style.display = "block";
      div[0].innerText = message;
      setTimeout(function () {
        div[0].style.display = "none";
      }, 8000);
    }
  }
}