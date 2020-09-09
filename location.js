"use strict";

const refs = {
  addressButton: document.querySelector(".addressButton"),
  contactButton: document.querySelector(".contactButton"),
};

if (localStorage.getItem("Address") === "none") {
  document.getElementById("hideAddress").style.display = "none";
  refs.addressButton.classList.toggle("notActive");
}

if (localStorage.getItem("Contacts") === "none") {
  document.getElementById("hideContacts").style.display = "none";
  refs.contactButton.classList.toggle("notActive");
}

const showAddress = function () {
  if (localStorage.getItem("Address") === "none") {
    document.getElementById("hideAddress").style.display = "block";
    refs.addressButton.classList.remove("notActive");
    localStorage.setItem("Address", "block");
  } else if (localStorage.getItem("Address") === "block") {
    document.getElementById("hideAddress").style.display = "none";
    localStorage.setItem("Address", "none");
    refs.addressButton.classList.toggle("notActive");
  } else {
    document.getElementById("hideAddress").style.display = "none";
    localStorage.setItem("Address", "none");
    refs.addressButton.classList.toggle("notActive");
  }
};

const showContacts = function () {
  if (localStorage.getItem("Contacts") === "none") {
    document.getElementById("hideContacts").style.display = "block";
    localStorage.setItem("Contacts", "block");
    refs.contactButton.classList.remove("notActive");
  } else if (localStorage.getItem("Contacts") === "block") {
    document.getElementById("hideContacts").style.display = "none";
    localStorage.setItem("Contacts", "none");
    refs.contactButton.classList.toggle("notActive");
  } else {
    document.getElementById("hideContacts").style.display = "none";
    localStorage.setItem("Contacts", "none");
    refs.contactButton.classList.toggle("notActive");
  }
};
