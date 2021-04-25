// State variables. Save reference to important DOM elements. 
var timeDisplayEl = $('#time-display');

// Displays current time.
function displayTime() {
    var rightNow = moment().format('MMMM Do YYYY, [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}
