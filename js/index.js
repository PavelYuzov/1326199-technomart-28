var link = document.querySelector(".contacts-section__link");
var popup = document.querySelector(".popup-off");
var popupclose = document.querySelector(".popup__close");
var name1name2 = document.querySelector(".name1-name2");
var form = document.querySelector(".popup-on__form");
var buttonpopup = document.querySelector(".popup__button");
var email = document.querySelector(".email-js");
var comment = document.querySelector(".input-area1");
var linkmap = document.querySelector(".contacts-section__img");
var map = document.querySelector(".popup-map-off");
var mapclose = document.querySelector(".map__close");
var error = document.querySelector(".popup-error");
var buttonactive = document.querySelector(".button-active");
var button1 = document.querySelector(".services-section-item__button1");
var button2 = document.querySelector(".services-section-item__button2");
var button3 = document.querySelector(".services-section-item__button3");
var delivery = document.querySelector(".delivery-wrap");
var guarantee = document.querySelector(".guarantee-wrap");
var credit = document.querySelector(".credit-wrap");
var services = document.querySelectorAll(".services-section-item");
var services1 = document.querySelectorAll(".services-section-item");
var hidden = document.querySelector(".section-hidden");
var perfo = document.querySelector(".promo-perforator");
var drill = document.querySelector(".promo-drill");
var none = document.querySelector(".promo-none");
var next = document.querySelector(".widget-promo__slide-next");
var previous = document.querySelector(".widget-promo__slide-previous");
var bgperfo = document.querySelector(".widget-promo-perfo");
var radio1 = document.querySelector(".widget-promo-radio1");
var radio2 = document.querySelector(".widget-promo-radio2");
var popupbasket = document.querySelector(".popup-basket");
var popupbasketoff = document.querySelector(".popup-basket-off");
var popupbasketclose = document.querySelector(".popup-basket__close");
var popupbasketbutton = document.querySelector(".popup-basket-button2");
var buttonbasket = document.querySelectorAll(".product-card-choice__link");

var isStorageSupport = true;
var storage = "";

try{
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault(evt);
  popup.classList.remove("popup-off");
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      popup.classList.add("popup-off");
      popup.classList.remove("popup-error");
    }
  })

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

form.addEventListener("submit", function(evt) {
  if (!name1name2.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("name", name1name2.value);
  }
});

linkmap.addEventListener("click", function(evt) {
  evt.preventDefault();
  map.classList.remove("popup-map-off");
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      map.classList.add("popup-map-off");
      popup.classList.remove("popup-error");
    }
  })
});

mapclose.addEventListener("click", function(evt) {
  evt.preventDefault();
  map.classList.add("popup-map-off");
});

next.addEventListener("click", function(evt) {
  evt.preventDefault();
  perfo.classList.toggle("promo-perforator");
  perfo.classList.toggle("promo-none");

  drill.classList.toggle("promo-none");
  drill.classList.toggle("promo-drill");

  bgperfo.classList.toggle("widget-promo-perfo");
  bgperfo.classList.toggle("widget-promo-drill");

  radio2.classList.toggle("widget-promo-radio2");
  radio1.classList.toggle("widget-promo-radio1");
});

previous.addEventListener("click", function(evt) {
  evt.preventDefault();
  perfo.classList.toggle("promo-perforator");
  perfo.classList.toggle("promo-none");

  drill.classList.toggle("promo-none");
  drill.classList.toggle("promo-drill");

  bgperfo.classList.toggle("widget-promo-perfo");
  bgperfo.classList.toggle("widget-promo-drill");

  radio2.classList.toggle("widget-promo-radio2");
  radio1.classList.toggle("widget-promo-radio1");
});

services[0].addEventListener("click", function(evt) {
  evt.preventDefault();
  delivery.classList.remove("section-hidden");
  guarantee.classList.add("section-hidden");
  credit.classList.add("section-hidden");
});

services[1].addEventListener("click", function(evt) {
  evt.preventDefault();
  delivery.classList.add("section-hidden");
  guarantee.classList.remove("section-hidden");
  credit.classList.add("section-hidden");
});

services[2].addEventListener("click", function(evt) {
  evt.preventDefault();
  delivery.classList.add("section-hidden");
  guarantee.classList.add("section-hidden");
  credit.classList.remove("section-hidden");
});

services1[0].addEventListener("click", function(evt) {
  evt.preventDefault();
  button1.classList.add("button-active");
  button2.classList.remove("button-active");
  button3.classList.remove("button-active");
});

services1[1].addEventListener("click", function(evt) {
  evt.preventDefault();
  button1.classList.remove("button-active");
  button2.classList.add("button-active");
  button3.classList.remove("button-active");
});

services1[2].addEventListener("click", function(evt) {
  evt.preventDefault();
  button1.classList.remove("button-active");
  button2.classList.remove("button-active");
  button3.classList.add("button-active");
});

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