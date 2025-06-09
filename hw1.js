/*
Name: Braden Abramowitz
Date Created: 2025-08-06
Date Last Edited: 2025-08-06
Version: 1.0
Description: Homework 1 JavaScript file
*/

//dynamic date js code
const d = new Date();
let text= d.toLocaleDateString();
document.getElementById("current_date").innerHTML = text;

//name slider js code
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function() {output.innerHTML = this.value;};