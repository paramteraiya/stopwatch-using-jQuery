$(document).ready(function () {
  var mySeconds, intervalHandler, currentlog;
  var cSeconds = 0;

  //timerFunction
  function timerFunction() {
    var mySec = mySeconds % 60;
    var myMinutes = Math.floor(mySeconds / 60) % 60;
    var myHours = Math.floor(mySeconds / 3600);

    $("#hours").text(myHours);
    $("#minutes").text(myMinutes);
    $("#seconds").text(mySec);
    $("#cSeconds").text(cSeconds);
    if (cSeconds === 99) {
      cSeconds = 0;
      mySeconds++;
    } else {
      cSeconds++;
    }
  }
  //timerFunction

  //START COUNTER
  function startCounter() {
    mySeconds = 0;
    intervalHandler = setInterval(timerFunction, 10);
    $("#peraText").show().text("STARTED AT:"+" "+ $("#hours").text()+" " + "HH" + ","+" " + $("#minutes").text()+" " + "MM" + ","+" " +$("#seconds").text()+ "SS").css('color','green').css('border-color','green');
    log('started'); //current log
  }
  //START COUNTER

  //RESET function
  $("#resetButton").click(function reset() {
    $("#hours, #minutes, #seconds, #cSeconds").text("00");
    clearInterval(intervalHandler);
    mySeconds = 0;
    $("#peraText").show().text("RESET AT:"+" "+ $("#hours").text()+" " + "HH" + ","+" " + $("#minutes").text()+" " + "MM" + ","+" " +$("#seconds").text()+ "SS").css('color','#654321').css('border-color','#654321');
    log('reset'); //current log
  });
  //RESET function

  // PAUSE function
  $("#pauseButton").click(function pause() {
    $("#startButton").not($("#resumeButton, #peraText").show()).hide();
    clearInterval(intervalHandler);
    $("#peraText").text("PAUSE AT:"+" "+ $("#hours").text()+" " + "HH" + ","+" " + $("#minutes").text()+" " + "MM" + ","+" " +$("#seconds").text()+ "SS").css('color', 'skyblue').css('border-color','skyblue');
    log('paused'); //current log
  });
  // PAUSE function

  //RESUME function
  $("#resumeButton").click(function resume() {
    intervalHandler = setInterval(timerFunction, 10);
    $("#peraText").show().text("RESUMED AT:"+" "+ $("#hours").text()+" " + "HH" + ","+" " + $("#minutes").text()+" " + "MM" + ","+" " +$("#seconds").text()+ "SS").css('color','green').css('border-color','green');
    log('resumed'); //current log    
  });
  //RESUME function

  //STOP function
  $("#stopButton").click(function stop() {
    $("#restartButton,#peraText").not($("#startButton, #resumeButton").hide()).show();
    clearInterval(intervalHandler);
    $("#peraText").text("STOPPED AT:"+" "+ $("#hours").text()+" " + "HH" + ","+" " + $("#minutes").text()+" " + "MM" + ","+" " +$("#seconds").text()+ "SS").css('color','red').css('border-color','red');
    log('stopped'); //current log
  });
  //STOP function

  //RESTART function
  $("#restartButton").click(function restart() {
    clearInterval(intervalHandler);
    startCounter();
    $("#peraText").show().text("RESTRATED AT:"+" "+ $("#hours").text()+" " + "HH" + ","+" " + $("#minutes").text()+" " + "MM" + ","+" " +$("#seconds").text()+ "SS").css('color','green').css('border-color','green');
    log('restarted'); //current log
    });
  //RESTART function.

  //main function
  $("#startButton").click(startCounter);
  //main function

  //log function
  function log(text){
    if(text!=currentlog){
      currentlog = text;
      $("#logText").html(currentlog.toUpperCase());
      $(".userLogs").show().append( '<br>' + currentlog.toUpperCase() + " AT:"+" "+ $("#hours").text()+" " + "HH" + ","+" " + $("#minutes").text()+" " + "MM" + ","+" " +$("#seconds").text()+ "SS");
    }
  }
  //log function

});

