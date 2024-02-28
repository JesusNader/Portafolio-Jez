function toggleMobileMenu(){
    navbarMenuContainer.classList.toggle('inactive');
}

function closeOptions(){
    navbarMenuContainer.classList.add('inactive');
}

const navbarMenuBackgroundOpacity = document.querySelector('.navbar-background-opacity');
const navbarMenuArrowIcon = document.querySelector('.navbar-menu-arrow-icon')
const navbarMenuContainer = document.querySelector('.navbar-menu-container');
const menuIcon = document.querySelector('.menu-icon-container');

navbarMenuBackgroundOpacity.addEventListener('click', closeOptions);
navbarMenuArrowIcon.addEventListener('click', closeOptions)
menuIcon.addEventListener('click', toggleMobileMenu);