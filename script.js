window.onload = function() {
    var currentDate = new Date();
    var activationDate = new Date('2023-06-30T21:06:10'); // Set the activation date and time
  
    if (currentDate >= activationDate) {
      document.getElementById('letter').style.display = 'block';
      document.getElementById('early').style.display = 'none';
    } else {
      startCountdown(activationDate);
    }
  };
  
  function startCountdown(targetDate) {
    var countdownElement = document.getElementById('countdown');
  
    var countdownInterval = setInterval(function() {
      var currentDate = new Date();
      var timeRemaining = targetDate - currentDate;
  
      if (timeRemaining > 0) {
        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
        countdownElement.innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
      } else {
        clearInterval(countdownInterval);
        document.getElementById('letter').style.display = 'block';
        countdownElement.innerHTML = '';
      }
    }, 1000);
  }
  
  
