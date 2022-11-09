//displays current time and date at top of page and refreshes every second
function displayTime() {
    let currentDay = document.getElementById('currentDay');
    let currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    currentDay.innerHTML = currentTime;
}
setInterval(displayTime, 1000);

// grabbing DOM elements

var saveBtn = $('.saveBtn');


saveBtn.on('click', test) 


function test(){
    var rowParent = $(this).parents()[1]
    var rowChild = $(rowParent).children()[0]
    var input = $(rowChild).children()[0]
    console.log($(input).val())
};




