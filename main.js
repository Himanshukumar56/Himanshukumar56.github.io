const countDownDate = new Date("June 14, 2023 12:00:00").getTime();

   
const x = setInterval(function() {


  const now = new Date().getTime();

  const timeRemaining = countDownDate - now;


  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);


  const daysString = ("0" + days).slice(-2);
  const hoursString = ("0" + hours).slice(-2);
  const minutesString = ("0" + minutes).slice(-2);
  const secondsString = ("0" + seconds).slice(-2);

 
  const countdownString = `${daysString}d ${hoursString}h ${minutesString}m ${secondsString}s`;
  document.getElementById("countdown").innerHTML = countdownString;

  const countdownElement = document.getElementById("countdown");
  countdownElement = "#" + secondsString + minutesString + hoursString;

}, 1000);