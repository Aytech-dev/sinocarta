const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

if(menuBtn && mobileMenu){
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if(mobileMenu.classList.contains("active")){
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        }else{
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });
}

mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});