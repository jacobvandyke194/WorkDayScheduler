//displays current time and date at top of page and refreshes every second
function displayTime() {
    let currentDay = document.getElementById('currentDay');
    let currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    currentDay.innerHTML = currentTime;
}
setInterval(displayTime, 1000);

// grabbing DOM elements
// var DOMobj = {
//     saveButton: $('.saveBtn'),
//     rowParent : $(this.saveButton).parents()[1],
//      rowChild : $(this.rowParent).children()[0],
//      inputEl : $(this.rowChild).children()[0],
//      inputElId :$(this.rowChild).children()[0].id
// }

var saveBtn = $('.saveBtn');


saveBtn.on('click', test) 



function test(){
    var rowParent = $(this).parents()[1]
    var rowChild = $(rowParent).children()[0]
    var inputEl = $(rowChild).children()[0]
    var inputElId = $(rowChild).children()[0].id
    
   

    var btnParent = $(rowParent).children()[2]
    var thisBtn = $(btnParent).children()[0]

    thisBtn.innerHTML = "Save"
    

    inputEl.readOnly = false;
   
    
    localStorage.setItem(`${inputElId}`, $(inputEl).val())
    
 
    
    colorChanger(rowParent, inputEl);
    
};

const storage = {
    saveBtn: $('.saveBtn'),
    func: function recallStorage (){
        let rowParent = $(this.saveBtn).parents()[1]
        let rowChild = $(rowParent).children()[1]
        let inputEl = $(rowChild).children()[0]
        let inputElId = $(rowChild).children()[0].id
        
        
        document.getElementById('nineAm').value = localStorage.nineAm; 
        document.getElementById('tenAm').value = localStorage.tenAm; 
        document.getElementById('elevenAm').value = localStorage.elevenAm; 
        document.getElementById('twelvePm').value = localStorage.twelvePm; 
        document.getElementById('onePm').value = localStorage.onePm; 
        document.getElementById('twoPm').value = localStorage.twoPm; 
        document.getElementById('threePm').value = localStorage.threePm; 
        document.getElementById('fourPm').value = localStorage.fourPm; 
        document.getElementById('fivePm').value = localStorage.fivePm; 

             

        
}}

 storage.func();

// changing bg color based on current time


function colorChanger(rowParent, inputEl){
    var rowChild = $(rowParent).children()[1]
    var labelEl = $(rowChild).children()[0]
    

    if(labelEl.innerHTML !== moment().format('hh A')){
        inputEl.style.backgroundColor = 'red';
    } else if(labelEl.innerHTML = moment().format('hh A')){
        inputEl.style.backgroundColor = 'green';
    }

   
    
}

