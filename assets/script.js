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
    var inputEl = $(rowChild).children()[0]
    var inputElId = $(rowChild).children()[0].id
    

    console.log(inputElId)

    localStorage.setItem(`${inputElId}`, JSON.stringify($(inputEl).val()))

};


function recallStorage (){
    document.getElementById('nineAm').value = localStorage.getItem(nineAm)
    document.getElementById('tenAm').value = localStorage.tenAm
    document.getElementById('elevenAm').value = localStorage.elevenAm
    document.getElementById('twelvePm').value = localStorage.twelvePm
    document.getElementById('onePm').value = localStorage.onePm
    document.getElementById('twoPm').value = localStorage.twoPm
    document.getElementById('threePm').value = localStorage.threePm
    document.getElementById('fourPm').value = localStorage.fourPm
    document.getElementById('fivePm').value = localStorage.fivePm

    console.log(localStorage)
    let testing = JSON.parse(localStorage.getItem(nineAm))
    console.log(JSON.stringify(testing))
  };

recallStorage();


// changing bg color based on current time



