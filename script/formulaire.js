function fibreverif() {
    var techno = document.getElementById('techno');
    var pair = document.getElementById('pair');
    var value = techno.options[techno.selectedIndex].value;
    switch (value) {
        case '-A':
            pair.removeAttribute("required");
            pair.setAttribute("disabled", "");
            break;
        case '-F':
            pair.removeAttribute("required");
            pair.setAttribute("disabled", "");
            break;
        case '-FTTB':
            pair.removeAttribute("required");
            pair.setAttribute("disabled", "");
            break;
        case '-FTTE':
            pair.removeAttribute("required");
            pair.setAttribute("disabled", "");
            break;
        case '-FTTH':
            pair.removeAttribute("required");
            pair.setAttribute("disabled", "");
            break;
        case '-FTTO':
            pair.removeAttribute("required");
            pair.setAttribute("disabled", "");
            break;
        default:
            pair.removeAttribute("disabled");
            pair.setAttribute("required", "");
            break;
    }
}

function fourniverif() {
    var fournis = document.getElementById("fournis");
    var value = fournis.options[fournis.selectedIndex].value;
    var image = document.getElementById('image');
    var g = document.getElementById("g")
    switch (value) {
        case 'APP':
            image.removeAttribute("src");

            image.setAttribute("src", "Images/APP.jpg");
            g.removeAttribute("value")
            g.setAttribute("value", "G")

            break;
        case 'AXN':
            image.removeAttribute("src");

            image.setAttribute("src", "Images/AXN.jpg");
            g.removeAttribute("value")
            g.setAttribute("value", "G")
            break;
        case 'BYG':
            image.removeAttribute("src");

            image.setAttribute("src", "Images/BYG.jpg");
            g.removeAttribute("value")
            g.setAttribute("value", "G")
            break;
        case 'CON':
            image.removeAttribute("src");

            image.setAttribute("src", "Images/CON.jpg");
            g.removeAttribute("value")
            g.setAttribute("value", "Gb/s")

            break;
        case 'COV':
            image.removeAttribute("src");

            image.setAttribute("src", "Images/COV.jpg");
            g.removeAttribute("value")
            g.setAttribute("value", "G")
            break;
        case 'IEL':
            image.removeAttribute("src");

            image.setAttribute("src", "Images/IEL.jpg");
            g.removeAttribute("value")
            g.setAttribute("value", "G")
            break;
        case 'KOS':
            image.removeAttribute("src");

            image.setAttribute("src", "Images/KOS.jpg");
            g.removeAttribute("value")
            g.setAttribute("value", "G")
            break;
        case 'ORA':
            image.removeAttribute("src");

            image.setAttribute("src", "Images/ORA.jpg");
            g.removeAttribute("value")
            g.setAttribute("value", "G")
            break;
        default:
            image.removeAttribute("src");

            image.setAttribute("src", "Images/logo2.png");
            g.removeAttribute("value")
            g.setAttribute("value", "G")
    }
}

function creerCode() {
    var fournis = document.getElementById('fournis');
    fournis = fournis.options[fournis.selectedIndex].value;
    var techno = document.getElementById('techno');
    techno = techno.options[techno.selectedIndex].value;
    var pair = document.getElementById('pair');
    pair = pair.options[pair.selectedIndex].value;
    var deb = document.getElementById("deb").value;
    var deb2 = document.getElementById("deb2");
    deb2 = deb2.options[deb2.selectedIndex].value;
    var eng = document.getElementById("eng").value;
    var eng2 = document.getElementById("eng2");
    eng2 = eng2.options[eng2.selectedIndex].value;
    if ((eng % 12) == 0 && eng2 == "M") {
        eng = eng / 12
        eng2 = "Y"
    }
    if (pair != '') {
        var res = ":F:" + fournis + ":T:" + techno + ":D:-" + deb + deb2 + ":P:" + pair + ":E:_" + eng + eng2
    } else {
        var res = ":F:" + fournis + ":T:" + techno + ":D:-" + deb + deb2 + ":E:_" + eng + eng2
    }
    return res

}
function creerSuplier() {
    var fournis = document.getElementById('fournis');
    fournis = fournis.options[fournis.selectedIndex].value;
    var techno = document.getElementById('techno');
    techno = techno.options[techno.selectedIndex].value;
    var pair = document.getElementById('pair');
    pair = pair.options[pair.selectedIndex].value;
    var deb = document.getElementById("deb").value;
    var deb2 = document.getElementById("deb2");
    deb2 = deb2.options[deb2.selectedIndex].value;
    if (pair != '') {
        var res = ":F:" + fournis + ":T:" + techno + ":D:-" + deb + deb2 + ":P:" + pair;
    } else {
        var res = ":F:" + fournis + ":T:" + techno + ":D:-" + deb + deb2
    }

    return res
}
function ajouterCode() {

    var fournis = document.getElementById('fournis');
    fournis = fournis.options[fournis.selectedIndex].value;
    var techno = document.getElementById('techno');
    techno = techno.options[techno.selectedIndex].value;
    var deb = document.getElementById("deb").value;
    var deb2 = document.getElementById("deb2");
    deb2 = deb2.options[deb2.selectedIndex].value;
    var eng = document.getElementById("eng").value;
    var eng2 = document.getElementById("eng2");
    eng2 = eng2.options[eng2.selectedIndex].value;

    var res = fournis + techno + deb + deb2 + pair + eng + eng2
    if (fournis == '' || techno == '' || deb == '' || deb2 == '' || eng == '' || eng2 == '') {
        alert("Ils manquent des valeurs")
    } else {
        if (eng <= 0 || deb <= 0) {
            window.alert("Les nombres qui sont inférieur ou égale à 0 sont refusés")
        } else {
            a = creerCode()
            b = creerSuplier()
            resucode.push(a)
            resusuplier.push(b)

            majTableau()
        }
    }
    var sui = document.getElementById('sui')
    console.log(sui)
    sui.removeAttribute("disabled")
}
function majTableau() {
    var tableauhead = '<table class="table"><thead><tr><th scope="col">#</th><th scope="col">Suplier</th><th scope="col">Code</th></tr></thead>'
    var tableaubody = ''
    var i2 = 1
    for (var i = 0; i < resusuplier.length; i++) {
        tableaubody = tableaubody + '<tr><th scope="row">' + i2 + '</th><td>' + resusuplier[i].replaceAll(rex, '') + '</td><td>' + resucode[i].replaceAll(rex, '') + '</td><td><button type="button" class="btn btn-danger" onclick="annulerCode(' + i + ') "><i class="fas fa-times"></i></button><button type="button" class="btn btn-success" onclick="copieCode(' + i + ') "><i class="fas fa-plus"></i></button></td></tr>'
        i2 = i2 + 1
    }
    var tableaufoot = '</tbody></table>'
    var tableaufin = tableauhead + tableaubody + tableaufoot;
    document.getElementById("tab").innerHTML = tableaufin;
}
function transfert1() {
window.location.href = "index.php?uc=renvoie&resusuplier=" + resusuplier + "&resucode=" + resucode;
}
function annulerCode(p) {
    if (window.confirm("Supprimer le code " + resucode[p] + " ?")) {
        resucode[p] = "";
        resusuplier[p] = "";
        resucode = resucode.filter(word => word.length > 0);
        resusuplier = resusuplier.filter(word => word.length > 0);
        majTableau()
        console.log(resusuplier)
    }
}
function copieCode(p) {

    resucode.push(resucode[p])
    resusuplier.push(resusuplier[p])

    majTableau()
    console.log(resusuplier)
}
