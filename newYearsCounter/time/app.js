const divContainer = document.querySelector(".contdwon-l");
const dad = document.querySelector(".contdown-container");
const daysLE = document.querySelector("#days");
const hoursLE = document.querySelector("#hours");
const minsLE = document.querySelector("#mins");
const secondsLE = document.querySelector("#seconds");
const newYears = "1 jan 2022";

function countDown(){
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) /1000;
  const days = Math.floor(totalSeconds / 3600 /24);
   const hours = Math.floor(totalSeconds /60) % 24;
   const minutes =  Math.floor(totalSeconds /60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
  // console.log(days , hours, minutes, seconds);

daysLE.innerHTML= days;
hoursLE.innerHTML=hours;
minsLE.innerHTML=minutes;
secondsLE.innerHTML = seconds;
   

    
     
    
}

countDown();
setInterval(countDown , 1000);