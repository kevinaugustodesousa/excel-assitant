function downLoad() {
    var cata = document.getElementById('cata');
    cata = cata.options[cata.selectedIndex].value;
    console.log(cata);
    window.location.href = cata;

}

function deLete() {
    var cata = document.getElementById('cata');
    cata = cata.options[cata.selectedIndex].value;
    if (window.confirm("Supprimer le fichier" + cata + "?")) {
        window.location.href = "index.php?uc=delete&catalogue2=" + cata
    }




}
function verifCatalogue2() {
    var dele = document.getElementById('dele');
    var down = document.getElementById('down');
    var cata = document.getElementById('cata');
    cata = cata.options[cata.selectedIndex].value;
    if (cata == "") {
        dele.setAttribute("disabled", "")
        down.setAttribute("disabled", "")
    }
    else {
        dele.removeAttribute("disabled")
        down.removeAttribute("disabled")
    }
}