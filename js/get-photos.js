// Servun IP 207.180.196.31

//get and set protocol and hostname so that image links are in the same domain as the html
let protocol = window.location.protocol;
    let hostname = window.location.hostname;

    if(protocol == "file:") { //if you run the HTML without a server locally, use images from redirect to external domain
        hostname = "207.180.196.31";
        protocol = "http:";
    } else if (hostname == "localhost" || hostname == "127.0.0.1") { //if the site is running in localhost, use images from external domain
        hostname = "207.180.196.31"; //my VPS address, you should replace this with your own IP.
    } else { //if it's running on a server on the internet, just use the hostname and protocol the JS finds
        hostname = hostname;
        protocol = protocol;
    }

// just in case, show the protocol and hostname in the console
console.log(window.location.protocol);
console.log(window.location.hostname);

// Function for adding a plate on the site, this handles everything as long as you have the image uploaded in the format X.jpg (note the jpg with lower case, and only jpg is allowed)
//hopefully soon uppercase JPG will work as well...
function addPlate(number) {

    const elem = document.getElementById(number); // get the IMG element with the correct ID (number)

    elem.setAttribute("src", `${protocol}//${hostname}/rekkarit/images/${number}.jpg`); // set source attribute, source is the x.jpg link

    let elemParent = elem.parentElement; // parent element of the img 

    let textElem = document.getElementById(number + "text"); //get the element with the id xtext (e.g. 123text) which is a placeholder text until the plate becomes spotted

    elemParent.removeChild(textElem); //remove the no longer needed text element

    const plateList = document.getElementById("platelist"); //unordered list element which contains a list of all the spotted plates

    let createPlateListItem = document.createElement("li"); //create a new li element
    let createPlateListLink = document.createElement("a"); // create a new link (a) element to be around the li
    let textForPlateList = document.createTextNode(number); // create the textNode for housing the number

    createPlateListLink.setAttribute("href", "#" + number); // create a link which takes you to the element with the id containing the number
    //createPlateListLink.setAttribute("onclick", newNotif("Näytetään rekkari " + number)); // I tried to get a notification to pop up when you click on a number link but for some reason the onclick is engaged every time the page loads

    createPlateListLink.appendChild(createPlateListItem); // append li to the a
    createPlateListItem.appendChild(textForPlateList); // append the text to the li
    plateList.appendChild(createPlateListLink); // append the whole helahoito to the unordered list

}

// A function which tests if a certain number image exists in the server, takes one argument which is the number to check
function imgExists(imgNum) {

    // Ugly and probably an old style xmlhttprequest shitshow 
    var request = new XMLHttpRequest(); 
    request.open('GET', `${protocol}//${hostname}/rekkarit/images/${imgNum}.jpg`, true); // url which has protocol + hostname + directory address + number + jpg
    request.send(); // send request, is this in the wrong position...? 
    request.onreadystatechange = function(){
        if (request.status === 200){ // if the status is OK
            console.log(imgNum + " was found"); // image number was found, log to console
            addPlate(imgNum); // ADD THE PLATE!! WOOHOO 
        } else if (request.status == 404) { // if the status is 404 (not found)
            request.abort(); //abort mission, this works in a bad way
            console.log(imgNum + " aborted"); // announce that it is aborted
        }
    };    

}

// Variable for getting the grid element for manipulation
const grid = document.getElementById("grid");

// A simple variable for creating the grid of 999 boxes
let counter = 1;

// Fill the grid with 999 boxes, each one has either a number in itself or a photo
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

    // check if the image exists, if it does the photo will get added, if it doesn't exist, the site will load unnecessarily long and not add the photo
    // so yeah, this part has to become improved. tbh the faulty part is the imgExists(); function but yeah
    imgExists(counter);

    // increase counter value by one
    counter++;
}