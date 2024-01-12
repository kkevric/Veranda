const pathName = window.location.pathname;
const pageName = pathName.split("/").pop();

if(pageName === "index.html"){
    document.querySelector(".home").classList.add("activeLink");
}
if(pageName === "menu.html"){
    document.querySelector(".menu").classList.add("activeLink");
}
if(pageName === "contact.html"){
    document.querySelector(".contact").classList.add("activeLink");
}