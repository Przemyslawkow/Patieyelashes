const CERTY = document.querySelector(".certy");
const CERTYPOPUP = document.querySelector(".certypopup");
const CERTYPOPUP__CLOSE = document.querySelector(".certypopup__close");
const HOME = document.querySelector(".home__button");
const HOME__SITE = document.querySelector(".home");
const ABOUTME = document.querySelector(".aboutme__button");
const ABOUTME__SITE = document.querySelector(".aboutme");
const PRICELIST = document.querySelector(".pricelist__button");
const PRICELIST__SITE = document.querySelector(".pricelist");
const GALLERY = document.querySelector(".gallery__button");
const GALLERY__SITE = document.querySelector(".gallery");
const CONTACT = document.querySelector(".contact_button");
const CONTACT__SITE = document.querySelector(".contact");

CERTY.addEventListener("click", () => {
  CERTYPOPUP.classList.remove("hidden");
});

CERTYPOPUP__CLOSE.addEventListener("click", () => {
  CERTYPOPUP.classList.add("hidden");
});

HOME.addEventListener("click", () => {
  HOME__SITE.classList.remove("hidden");
  ABOUTME__SITE.classList.add("hidden");
  PRICELIST__SITE.classList.add("hidden");
  GALLERY__SITE.classList.add("hidden");
  CONTACT__SITE.classList.add("hidden");
});

ABOUTME.addEventListener("click", () => {
  ABOUTME__SITE.classList.remove("hidden");
  HOME__SITE.classList.add("hidden");
  PRICELIST__SITE.classList.add("hidden");
  GALLERY__SITE.classList.add("hidden");
  CONTACT__SITE.classList.add("hidden");
});
PRICELIST.addEventListener("click", () => {
  PRICELIST__SITE.classList.remove("hidden");
  ABOUTME__SITE.classList.add("hidden");
  HOME__SITE.classList.add("hidden");
  GALLERY__SITE.classList.add("hidden");
  CONTACT__SITE.classList.add("hidden");
});
GALLERY.addEventListener("click", () => {
  GALLERY__SITE.classList.remove("hidden");
  PRICELIST__SITE.classList.add("hidden");
  ABOUTME__SITE.classList.add("hidden");
  HOME__SITE.classList.add("hidden");
  CONTACT__SITE.classList.add("hidden");
});
CONTACT.addEventListener("click", () => {
  CONTACT__SITE.classList.remove("hidden");
  GALLERY__SITE.classList.add("hidden");
  PRICELIST__SITE.classList.add("hidden");
  ABOUTME__SITE.classList.add("hidden");
  HOME__SITE.classList.add("hidden");
});
