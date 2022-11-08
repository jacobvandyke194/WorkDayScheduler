let currentDay = document.getElementById('currentDay');
let currentTime = moment().format("ddd. MMMM Do YYYY, h:mm a")
currentDay.innerHTML = currentTime;