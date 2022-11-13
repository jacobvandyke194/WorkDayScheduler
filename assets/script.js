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
    
    console.log($(rowParent).children()[2])

    var btnParent = $(rowParent).children()[2]
    var thisBtn = $(btnParent).children()[0]

    thisBtn.innerHTML = "Save"
    
    var nineAm = document.getElementById('nineAm')
    nineAm.readOnly = false;

    console.log(inputElId)

    localStorage.setItem(`${inputElId}`, $(inputEl).val())


    

};

const storage = {
saveBtn: $('.saveBtn'),
func: function recallStorage (){
    var rowParent = $(this.saveBtn).parents()[1]
    var rowChild = $(rowParent).children()[0]
    var inputEl = $(rowChild).children()[0]
    var inputElId = $(rowChild).children()[0].id

    var stored = JSON.parse(localStorage.getItem(inputElId));

    console.log(typeof JSON.stringify(stored))

    document.getElementById('nineAm').value = localStorage.nineAm; 
}}
 storage.func();

// changing bg color based on current time



