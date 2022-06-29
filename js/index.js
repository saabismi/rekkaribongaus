// Servun IP 207.180.196.31

// Variable for getting the grid element for manipulation
const grid = document.getElementById("grid");

// A simple variable for creating the grid of 999 boxes
let counter = 1;

// Fill the grid with 999 boxes, each one has a number in itself, some have also a picture if it's added in conf.js
while(counter < 1000) {
    let newDiv = document.createElement("DIV");
    let newImg = document.createElement("IMG");
    let newSpan = document.createElement("SPAN");
    newSpan.innerHTML = counter;
    newDiv.setAttribute("class", "grid-item");
    newImg.setAttribute("id", counter);
    newSpan.setAttribute("id", counter + "text");
    newDiv.appendChild(newSpan);
    newDiv.appendChild(newImg);
    grid.appendChild(newDiv);
    counter++;
}

// Function for adding a plate on the site, this handles everything as long as you have the image uploaded in the format X.jpg (note the jpg with lower case, and only jpg is allowed)
function addPlate(number) {

    const elem = document.getElementById(number);
    let protocol = window.location.protocol;
    let hostname = window.location.hostname;

    if(protocol == "file:") {
        hostname = "207.180.196.31";
        protocol = "http:";
    } else if (hostname == "localhost" || hostname == "127.0.0.1") {
        hostname = "207.180.196.31";
    } else {
        hostname = hostname;
        protocol = protocol;
    }

    elem.setAttribute("src", `${protocol}//${hostname}/rekkarit/images/${number}.jpg`);

    let elemParent = elem.parentElement;

    let textElem = document.getElementById(number + "text");

    elemParent.removeChild(textElem);

    const plateList = document.getElementById("platelist");

    let createPlateListItem = document.createElement("li");
    let createPlateListLink = document.createElement("a");
    let textForPlateList = document.createTextNode(number);

    createPlateListLink.setAttribute("href", "#" + number);

    createPlateListLink.appendChild(createPlateListItem);
    createPlateListItem.appendChild(textForPlateList);
    plateList.appendChild(createPlateListLink);

}

//window.onload(newNotif("Testi :D"));

console.log("kakka");
console.log(window.location.protocol);
console.log(window.location.hostname);