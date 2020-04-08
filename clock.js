console.log('this is clock.js');

function updateClock(){
    // Get the current gate
    let currentTime = new Date();

    // Extract hour, minutes and second from the Date
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    // Pad 0 if minut or second is less than 10 (single digit)
    currentMinutes = (currentMinutes < 10 ? '0': '') + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? '0': '') + currentSeconds;
    
    // Convert railway clock to AM/Pm clock
    currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
    currentHour = (currentHour == 0) ? 12 : currentHour;

    // Choose AM/AP as per the time of the day
    let timeofDay = (currentHour <12 ) ? 'AM' : 'PM';
    
    //  Prepare the time string from hour, minutes and second
    let currentTimeStr = currentHour + ":" + currentMinutes + ":" + currentSeconds + " " + timeofDay; 
    
    // Insert the time string inside of the dom
    document.getElementById('clock').innerHTML = currentTimeStr;
}