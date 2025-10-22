function openDay(evt, dayName) {
    // Declara todas as variáveis
    var i, tabcontent, tablinks;

    // Pega todos os elementos com class="tab-content" e esconde eles
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Pega todos os elementos com class="tab-link" e remove a classe "active"
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostra a aba atual, e adiciona a classe "active" no botão que abriu a aba
    document.getElementById(dayName).style.display = "block";
    if (evt) {
        evt.currentTarget.className += " active";
    }
}

// Abre a primeira aba por padrão ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("defaultOpen").click();
});