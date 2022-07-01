// Servun IP 207.180.196.31

//get and set protocol and hostname so that image links are in the same domain as the html
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


// Function for adding a plate on the site, this handles everything as long as you have the image uploaded in the format X.jpg (note the jpg with lower case, and only jpg is allowed)
function addPlate(number) {

    const elem = document.getElementById(number);

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

let imgExistsValue = false;

function imgExists(imgNum) {

    var request = new XMLHttpRequest(); 
    request.open('GET', `${protocol}//${hostname}/rekkarit/images/${imgNum}.jpg`, true);
    request.send(); 
    request.onreadystatechange = function(){
        if (request.status === 200){
            console.log(imgNum + " was found");
            //imgExistsValue = true;
            addPlate(imgNum);
            return true;
            /*if (request.status === 404) {  
                console.log(counter + " photo not found");
            } */ 
        } else if (request.status == 404) {
            request.abort();
            console.log(imgNum + " aborted");
            //imgExists = false;
            return false;
        }
    };    
/*
    if (request.status === 200) {
        addPlate(counter);
        console.log(counter + " added");
    } else if (request.status === 404) {
        console.log(counter + "has not been spotted yet");
    } else {
        console.log("Unknown error occurred");
    }*/

}

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

    /*if (imgExists(counter) === true) {
        addPlate(counter);
        console.log(counter + " was added successfully");
    } else {
        console.log("skip");
    }*/

    imgExists(counter);

    counter++;
}