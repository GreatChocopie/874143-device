var map = document.querySelector(".contact-map");
var popupMap = document.querySelector(".modal-map");
var contacts = document.querySelector(".contact-button");
var popupLetter = document.querySelector(".modal-letter");
var closeMap = popupMap.querySelector(".modal-close");
var closeLetter = popupLetter.querySelector(".modal-close");
var form = popupLetter.querySelector(".form-flex");
var userName = popupLetter.querySelector(".name");
var eMail = popupLetter.querySelector(".e-mail");

function openMap(evt) {
  if (popupMap.classList.contains("modal-show")) {
    console.log("already opened map");
    evt.preventDefault();
    return false;
  }
  console.log("opening map");
  evt.preventDefault();
  evt.stopPropagation();
  popupMap.classList.add("modal-show");
  document.addEventListener("click", close);
};

// Ищем среди родителей elem присутствует ли neelde
function elemHasParent(elem, needle) {
  while (elem != null) {
    elem = elem.parentNode;
    if (elem == needle)
      return true;
  }
  return false;
}



function close(evt) {
  console.log("close start");
  console.log(evt.target);
  var target = evt.target;
  // если это кнопка закрытия или элемент среди родителей которого нет popupMap и
  // то закрываем
  if (!elemHasParent(target, popupMap) || target == closeMap) {
    console.log("closing map");
    evt.preventDefault();
    popupMap.classList.remove("modal-show");
    document.removeEventListener("click", close);
    console.log("listener removed");
  } else {
    console.log("close - wrong elem, do nothing");
  }
}
map.addEventListener("click", openMap);
console.log("js is painful");



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
