// my old shitty toast system

const notifCont = document.getElementById("notificationContainer");
let notifications = document.getElementsByClassName("notification");

function removeNotif() {

    //notifCont.removeChild(notifCont.childNodes[0]);
    notifications[0].setAttribute("class", "displayNone");

}

function newNotif(text) {

    //var text = prompt("Syötä tekstiä:");
    let notification = document.createElement("p");
    notification.setAttribute("class", "notification");
    notification.innerHTML = text;
    notifCont.appendChild(notification);

    setTimeout(removeNotif, 3000);

}

const toTopBtn = document.getElementById("toTop");

window.onscroll = function() {scrollDetector()};

function scrollDetector() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
}

// Function for the "to top" button functionality
function scrollToTop() {

    document.body.scrollTop = 0; // for safari
    document.documentElement.scrollTop = 0; // for chrome, firefox, etc.

}