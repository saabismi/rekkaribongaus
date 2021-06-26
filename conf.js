function addPlate(number) {

    const elem = document.getElementById(number);

    elem.setAttribute("src", "http://syvis.net/rekkarit/images/" + number + ".jpg");

    let elemParent = elem.parentElement;

    let textElem = document.getElementById(number + "text");

    elemParent.removeChild(textElem);

    const plateList = document.getElementById("platelist");

    let createPlateListItem = document.createElement("li");
    let textForPlateList = document.createTextNode(number);

    createPlateListItem.appendChild(textForPlateList);
    plateList.appendChild(createPlateListItem);

}

addPlate(1);
addPlate(2);
addPlate(3);
addPlate(4);
addPlate(5);
addPlate(7);
addPlate(8);
addPlate(11);
addPlate(13);
addPlate(16);
addPlate(99);
addPlate(420);
addPlate(998);
addPlate(999);