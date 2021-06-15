function addImage(number, link) {

    const elem = document.getElementById(number);

    elem.setAttribute("src", link);

    elem.style.maxWidth = "100%";
    elem.style.maxHeight = "100%";

    let elemParent = elem.parentElement;

    let textElem = document.getElementById(number + "text");

    elemParent.removeChild(textElem);

}


addImage(1, "https://is.mediadelivery.fi/img/468/08831b5abd884a0e8f997e83e4f54bbc.jpg");
addImage(474, "https://sites.google.com/site/anttiforsstrom/saab006.jpg");