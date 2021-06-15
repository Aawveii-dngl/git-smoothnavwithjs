"use strict";
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
console.log(navLinks);
const links = document.querySelectorAll(".nav-links li");
hamburger.addEventListener("click", () => {
  console.log("Yo");
  navLinks.classList.toggle("open");
});
