/*

Pixel Art Maker

JavaScript code that lets the user create a grid of squares representing their
design, and apply colors to those squares to create a digital masterpiece!

As a result the users are able to:

>> Dynamically set the size of the table as an _N_ by _M_ grid.
>> Choose a color.
>> Click a cell in the grid to fill that cell with the chosen color.

*/


// Selecting color input & storing it in a variable
const color = document.querySelector("#colorPicker");
let newColor = "";

color.addEventListener("change", function(event) {
    newColor = event.target.value;
    // console.log(newColor);
});

// Selecting size input for both height and width
// Storing it in variables

const height = document.querySelector("#inputHeight");
let newHeight = 1;

height.addEventListener("change", function(event) {
    newHeight = event.target.value;
    // console.log(newHeight);
});

const width = document.querySelector("#inputWidth");
let newWidth = 1;

width.addEventListener("change", function(event) {
    newWidth = event.target.value;
    // console.log(newWidth);
});

const submitButton = document.querySelector("input[type=submit]");

// Making a grid utilizing makeGrid() fuction

function makeGrid() {
    const body = document.getElementsByTagName("body")[0];
    const table = document.querySelector("#pixelCanvas");
    const tableBody = document.createElement("tbody");

    // Removing the previous grid (if any)
    if (table.firstChild) {
        table.firstChild.remove();
    };

    // Making a grid using user input
    for (let i = 0; i < newHeight; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < newWidth; j++) {
            const cell = document.createElement("td");
            row.appendChild(cell);
        };

        tableBody.appendChild(row);
    };

    table.appendChild(tableBody);
    body.appendChild(table);

    // Adding an event which changes background color for individual cells
    const td = document.getElementsByTagName("td");

    for (let i = 0; i < td.length; i++) {
        td[i].onclick = function() {
           this.style.backgroundColor = newColor;
        };
    };
}

// The code below prevents the grid from disappearing upon submitting the form
const form = document.getElementById("sizePicker");
form.addEventListener("submit", function(event) {
    event.preventDefault();
});

// The final line which runs the makeGrid() function
submitButton.addEventListener("click", makeGrid, false);