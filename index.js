const grid = document.getElementById("grid");


let counter = 1;


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
