var loader = document.getElementById("pre-loader");

window.addEventListener("load", function () {
    setTimeout(function () {
        loader.style.transform = "translateY(-100%)"; 
                
        setTimeout(function () {
            loader.style.display = "none";
        },750); 
    }, 1100);
})