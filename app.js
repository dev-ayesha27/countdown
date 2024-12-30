const endDate = new Date("March 1, 2025 12:00 PM");  
const daysElement = document.querySelector("#Days");  
const hoursElement = document.querySelector("#Hours");  
const minutesElement = document.querySelector("#Minutes");  
const secondsElement = document.querySelector("#seconds");  

// Update countdown time  
function updateCountdownTime() {  
    const currentTime = new Date();  
    const difference = endDate - currentTime;  

    // Calculate time components  
    const totalSeconds = Math.floor(difference / 1000);  
    const days = Math.floor(totalSeconds / 3600 / 24);  
    const hours = Math.floor((totalSeconds / 3600) % 24);  
    const minutes = Math.floor((totalSeconds / 60) % 60);  
    const seconds = totalSeconds % 60;  

    // Update the HTML elements  
    daysElement.value = days;  
    hoursElement.value = hours;  
    minutesElement.value = minutes;  
    secondsElement.value = seconds;  

    console.log(`Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);  
}  

// Call the function every second  
setInterval(updateCountdownTime, 1000);
