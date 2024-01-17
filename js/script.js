
const pathName = window.location.pathname;
const pageName = pathName.split("/").pop();

if(pageName === "menu.html"){
    document.querySelector(".home").classList.add("activeLink");
}
if(pageName === "vege.html"){
    document.querySelector(".katjak").classList.add("activeLink");
}
if(pageName === "starters.html"){
    document.querySelector(".katjake").classList.add("activeLink");
}

const navLinkEls =document.querySelectorAll(".ketikaproba");
const windowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEls=>
    {
        if(navLinkEl.href.includes(windowPathname)){
            navLinkEl.classList.add("active");
        }

    });
