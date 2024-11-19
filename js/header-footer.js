window.addEventListener("scroll", function(){
    var navbar = document.querySelector("header");
    navbar.classList.toggle("sticky", window.scrollY > 0);
})
function redirectToMenu(){  
    window.location.href = "menu.html";
}
function redirectToFacebook(){
    window.location.assign("https://www.facebook.com/people/Kainan-En-La-Kanto/61568619036341/");
}
function redirectToDiscord(){
    window.location.assign("https://www.facebook.com/khirstenadrian.flora.5");
}
function redirectToInstagram(){
    window.location.assign("https://www.instagram.com/kainan_en_la_kanto/?fbclid=IwZXh0bgNhZW0CMTEAAR2ViMAD1sJm4H_ZP6yynwJCnDnlCBEW4k22c2O4pVwo2AarL4-3M7tsGug_aem_0ubQGQwAoowBTMGbfEGCIA");
}
function redirectToTwitter(){
    window.location.assign(" ");
}