function addPlate(number) {

    const elem = document.getElementById(number);

    elem.setAttribute("src", "http://syvis.net/rekkarit/images/" + number + ".jpg");

    elem.style.maxWidth = "100%";
    elem.style.maxHeight = "100%";

    let elemParent = elem.parentElement;

    let textElem = document.getElementById(number + "text");

    elemParent.removeChild(textElem);

}

addPlate(1);
addPlate(3);
addPlate(5);
addPlate(7);
addPlate(16);
addPlate(99);
addPlate(998);
addPlate(999);