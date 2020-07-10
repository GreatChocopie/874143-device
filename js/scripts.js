var map = document.querySelector(".contact-map");
var popupMap = document.querySelector(".modal-map");
var contacts = document.querySelector(".contact-button");
var popupLetter = document.querySelector(".modal-letter");
var closeMap = popupMap.querySelector(".modal-close");
var closeLetter = popupLetter.querySelector(".modal-close");
var form = popupLetter.querySelector(".form-flex");
var userName = popupLetter.querySelector(".name");
var eMail = popupLetter.querySelector(".e-mail");



map.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");

});
if (popupMap.classList.contains("modal-show")) {
  window.addEventListener("click", function (evt) {
    evt.preventDefault();
    var target = evt.target;
    if (popupMap.classList.contains("modal-show") && target !== popupMap) {
      popupMap.classList.remove("modal-show");
      console.log("lssl;");
    }
  });
};



closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");

});











window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupMap.classList.contains("modal-show")) {
      popupMap.classList.remove("modal-show");
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
