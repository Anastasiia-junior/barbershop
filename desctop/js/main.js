'use strict';

let loginCloseButton = document.querySelectorAll('.modal-close');


let popUpLogin = document.querySelector('.modal-login');
let popUpMap = document.querySelector('.modal-map');


let сlosePopUp = (evt ) => {
    popUpLogin.classList.toggle('visually-hidden');
}

for (let button of closeButtons) {
    button.addEventListener('click', сlosePopUp);
}


// closeButton.addEventListener('click', popupClose)

