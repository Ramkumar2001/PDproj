window.onload = function() {
    var currentDate = new Date();
    var activationDate = new Date('2024-02-18T00:00:00'); // Set the activation date and time
  
    if (currentDate >= activationDate) {
      document.getElementById('letter2').style.display = 'block';
      document.getElementById('early').style.display = 'none';
    } else {
      startCountdown(activationDate);
    }

    document.addEventListener('contextmenu', function(event) {
      event.preventDefault();
    });

    // Disable keyboard shortcuts
    document.addEventListener('keydown', function(event) {
      // Disable specific keys, such as Ctrl, Shift, and F12
      if (event.ctrlKey || event.shiftKey || event.key === 'F12') {
        event.preventDefault();
      }
    });

    document.addEventListener('keydown', function(event) {
      if (event.key === 'i' || event.key === 'j') {
        event.preventDefault();
      }
    });

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
        document.getElementById('letter2').style.display = 'block';
        document.getElementById('early').style.display = 'none';
        countdownElement.innerHTML = '';

        document.getElementById('early').style.display = 'none';
      }
    }, 1000);
  }

  function toggleContent() {
    var letterDiv = document.getElementById("letter");
    letterDiv.style.maxHeight = letterDiv.style.maxHeight === "50px" ? "none" : "50px";
  }

  function toggleContent1() {
    var letterDiv = document.getElementById("letter2");
    letterDiv.style.maxHeight = letterDiv.style.maxHeight === "50px" ? "none" : "50px";
  }
  
