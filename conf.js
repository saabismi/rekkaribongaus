function addPlate(number) {

    const elem = document.getElementById(number);

    elem.setAttribute("src", "http://syvis.net/rekkarit/images/" + number + ".jpg");

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

addPlate(1);
addPlate(2);
addPlate(3);
addPlate(4);
addPlate(5);
addPlate(7);
addPlate(8);
addPlate(9);
addPlate(10);
addPlate(11);
addPlate(12);
addPlate(13);
addPlate(14);
addPlate(16);
addPlate(20);
addPlate(81);
addPlate(99);
addPlate(420);
addPlate(998);
addPlate(999);