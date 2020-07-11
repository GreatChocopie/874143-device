var map = document.querySelector(".contact-map");
var popupMap = document.querySelector(".modal-map");
var contacts = document.querySelector(".contact-button");
var popupLetter = document.querySelector(".modal-letter");
var closeMap = popupMap.querySelector(".modal-close");
var closeLetter = popupLetter.querySelector(".modal-close");
var form = popupLetter.querySelector(".form-flex");
var userName = popupLetter.querySelector(".name");
var eMail = popupLetter.querySelector(".e-mail");

function open(evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");

};

function close(evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
  document.removeEventListener("click", close);
}
map.addEventListener("click", open);
document.addEventListener("click", function (evt) {
  var target = evt.target;
  if (popupMap.closest(".modal-show") && (target !== popupMap) || (target === closeMap)) {
    document.addEventListener("click", close);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupMap.classList.contains("modal-show")) {
      window.addEventListener("keydown", close);
    }
  }
});



contacts.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupLetter.classList.add("modal-show");
  userName.focus();
});
closeLetter.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupLetter.classList.remove("modal-show");
  popupLetter.classList.remove("modal-error");

});



window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupLetter.classList.contains("modal-show")) {
      popupLetter.classList.remove("modal-show");
      popupLetter.classList.remove("modal-error");
    }
  }
});
form.addEventListener("submit", function (evt) {
  if (!userName.value || !eMail.value) {
    evt.preventDefault();
    popupLetter.classList.add("modal-error");
  }
});
