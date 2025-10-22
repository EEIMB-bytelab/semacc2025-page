

function openDay(evt, dayName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(dayName).style.display = "block";
    if (evt) {
        evt.currentTarget.className += " active";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("defaultOpen").click();
});


document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    // Abre/Fecha o menu ao clicar no hambúrguer
    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });

    // Fecha o menu ao clicar em um link (para navegar para a âncora)
    navLinks.querySelectorAll("a").forEach(function(link) {
        link.addEventListener("click", function() {
            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");
        });
    });
});
