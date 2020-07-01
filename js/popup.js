var link = document.querySelector(".contacts-section__link");
var popup = document.querySelector(".popup-off");
var popupclose = document.querySelector(".popup__close");
var name1name2 = document.querySelector(".name1-name2");
var form = document.querySelector(".popup-on__form");
var email = document.querySelector(".email-js");
var comment = document.querySelector(".input-area1");

var isStorageSupport = true;
var storage = "";

try{
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("popup-off");

  if (storage) {
    name1name2.value = storage;
    email.focus();
  } else {
    name1name2.focus();
  }
});

popupclose.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("popup-off");
  popup.classList.remove("popup-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("popup-off")) {
      evt.preventDefault();
      popup.classList.add("popup-off");
      popup.classList.remove("popup-error");
    }
  }
});

form.addEventListener("submit", function(evt) {
  if (!name1name2.value || !email.value || !comment.value) {
    evt.preventDefault();
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error")
  } else {
    localStorage.setItem("name", name1name2.value);
  }
})