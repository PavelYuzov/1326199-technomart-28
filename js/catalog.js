var popupbasket = document.querySelector(".popup-basket");
var popupbasketoff = document.querySelector(".popup-basket-off");
var popupbasketclose = document.querySelector(".popup-basket__close");
var popupbasketbutton = document.querySelector(".popup-basket-button2");
var buttonbasket = document.querySelectorAll(".product-card-choice__link");
var bookmarksplus = document.querySelectorAll(".product-card-choice__button");
var activebookmarks = document.querySelector(".header-bookmarks-catalog-active");
var bookmarks = document.querySelector(".header-bookmarks-catalog");

for (var i = 0; i < buttonbasket.length; i++) {
  buttonbasket[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        popupbasketoff.classList.add("popup-basket-off");
      }
    });

    popupbasketoff.classList.remove("popup-basket-off");
  });
}

popupbasketclose.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupbasketoff.classList.add("popup-basket-off");
});

popupbasketbutton.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupbasketoff.classList.add("popup-basket-off");
});

for (var i = 0; i < bookmarksplus.length; i++) {
  bookmarksplus[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    bookmarks.classList.add("header-bookmarks-catalog-active");
  });
}