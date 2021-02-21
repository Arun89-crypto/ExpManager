let btn = document.getElementById('burger');
let navbar = document.querySelector('.navbar');
let navitems = document.querySelector('.nav-items');
let items = document.querySelector('.items-nav');

btn.addEventListener('click', function () {
    navbar.classList.toggle('navbar-resp');
    navitems.classList.toggle('nav-items-resp');
    items.classList.toggle('items-nav-resp');
});
