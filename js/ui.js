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