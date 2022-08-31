function arrIere() {
    it = it - 1;
    afficherTable()
    afficherTableAutre()
    annulerTout()
    afficherSelect()
    var verif = document.getElementById("avn");
    verif.removeAttribute("disabled");
    verifArriere()
    afficherIt();

}
function aVant() {


    it = it + 1;
    afficherTable()
    afficherTableAutre()
    annulerTout()
    afficherSelect()

    var verif = document.getElementById("arr");
    verif.removeAttribute("disabled");
    verifAvant();

    afficherIt();

}


function verifAvant() {
    var verif = document.getElementById("avn")
    if (itblk == it) {
        verif.setAttribute("disabled", "")
    } else {
        verif.removeAttribute("disabled")
    }

}

function verifArriere() {
    var verif = document.getElementById("arr")
    if (it == 0) {
        verif.setAttribute("disabled", "")
    } else {
        verif.removeAttribute("disabled")
    }

}
function afficherIt() {
    document.getElementById("affit").innerHTML = it;

}

function transfertPhp() {
    var supliers2 = new Array()
    for (var h = 0; h < codes[it].length; h++) {
        supliers2[h] = codes[it][h].replace(/:E:[^:]+/g, "")
    }
    var cfournis = new Array()
    for (var i = 0; i < codes[it].length; i++) {
        var trouve = new Array();
        trouve = codes[it][i].match(/:F:[^:]+/)
        cfournis[i] = trouve[0]
    }
    for (var j = 0; j < codes[it].length; j++) {
        codes[it][j] = codes[it][j].replaceAll(rex, "")
        cfournis[j] = cfournis[j].replaceAll(rex, "")
        supliers2[j] = supliers2[j].replaceAll(rex, "")
    }
    var cata = document.getElementById('cata');
    cata = cata.options[cata.selectedIndex].value;
    console.log(cata)
    console.log(codes[it])
    console.log(cfournis)
    console.log(supliers2)

    window.location.href = "index.php?uc=envoi&rcode=" + codes[it] + "&rfourniss=" + cfournis + "&rsuplier=" + supliers2 + "&rcata=" + cata;

}


function afficherTable() {



    var tablehead = '<div class="card"><h4 class="card-header">LISTE DES CODES <button type="button" class="btn btn-success" onclick="checkAuto() ">Confirmer </button><button type="button" class="btn btn-danger" onclick="annulerCheck() ">Annuler </button></h4><div class="card-body">'
    var tablebody = ''

    for (var i = 0; i < codes[it].length; i++) {
        tablebody = tablebody + '<div class="form-check"><input class="form-check-input" type="checkbox" value="" id="co' + i + '"><label class="form-check-label" for="flexCheckDefault"> ' + codes[it][i].replaceAll(rex, '') + '</label></div>'
    }
    var tablefoot = '</div></div>'
    var tablefin = tablehead + tablebody + tablefoot
    document.getElementById("table").innerHTML = tablefin;
}

function afficherTableFournisseur() {

    for (var i = 0; i < supliers[it].length; i++) {
        var verif = false
        var trouve = new Array();
        trouve = supliers[it][i].match(/:F:[^:]+/)
        for (var j = 0; j < fournisseur.length; j++) {
            if (trouve[0] == fournisseur[j]) {
                verif = true
            }
        }
        if (verif == false) {
            fournisseur[i] = trouve[0]
        } else {
            fournisseur[i] = '';
        }

    }
    fournisseur = fournisseur.filter(word => word.length > 0);
    var tablehead = '<div class="card"><h4 class="card-header">FOURNISSEUR</h4><div class="card-body">'
    var tablebody = ''

    for (var i = 0; i < fournisseur.length; i++) {
        fo = "'fo" + i + "'"
        tablebody = tablebody + '<div class="form-check"><input class="form-check-input" type="checkbox" value="" id="fo' + i + '" onclick="checkCaseAttribut(' + fo + ')"><label class="form-check-label" for="flexCheckDefault"> ' + fournisseur[i].replaceAll(rex, '') + '</label></div>'
    }
    var tablefoot = ' </div></div>'
    var tablefin = tablehead + tablebody + tablefoot
    document.getElementById("tablef").innerHTML = tablefin;

}

function afficherTableTechno() {
    for (var i = 0; i < supliers[it].length; i++) {
        var verif = false
        var trouve = new Array();
        trouve = supliers[it][i].match(/:T:[^:]+/)
        for (var j = 0; j < techno.length; j++) {
            if (trouve[0] == techno[j]) {
                verif = true
            }
        }
        if (verif == false) {
            techno[i] = trouve[0]
        } else {
            techno[i] = '';
        }

    }
    techno = techno.filter(word => word.length > 0);
    var tablehead = '<div class="card"><h4 class="card-header">TECHONOLOGIE</h4><div class="card-body">'
    var tablebody = ''

    for (var i = 0; i < techno.length; i++) {
        te = "'te" + i + "'"
        tablebody = tablebody + '<div class="form-check"><input class="form-check-input" type="checkbox" value="" id="te' + i + '" onclick="checkCaseAttribut(' + te + ')"><label class="form-check-label" for="flexCheckDefault"> ' + techno[i].replaceAll(rex, '') + '</label></div>'
    }
    var tablefoot = ' </div></div>'
    var tablefin = tablehead + tablebody + tablefoot
    document.getElementById("tablet").innerHTML = tablefin;
}

function afficherTableDebit() {
    for (var i = 0; i < supliers[it].length; i++) {
        var verif = false
        var trouve = new Array();
        trouve = supliers[it][i].match(/:D:[^:]+/)
        for (var j = 0; j < debit.length; j++) {
            if (trouve[0] == debit[j]) {
                verif = true
            }
        }
        if (verif == false) {
            debit[i] = trouve[0]
        } else {
            debit[i] = '';
        }

    }
    debit = debit.filter(word => word.length > 0);
    var tablehead = '<div class="card"><h4 class="card-header">DEBIT</h4><div class="card-body">'
    var tablebody = ''

    for (var i = 0; i < debit.length; i++) {
        de = "'de" + i + "'"
        tablebody = tablebody + '<div class="form-check"><input class="form-check-input" type="checkbox" value="" id="de' + i + '" onclick="checkCaseAttribut(' + de + ')"><label class="form-check-label" for="flexCheckDefault"> ' + debit[i].replaceAll(rex, '') + '</label></div>'
    }
    var tablefoot = ' </div></div>'
    var tablefin = tablehead + tablebody + tablefoot
    document.getElementById("tabled").innerHTML = tablefin;

}

function afficherTableEngagement() {
    for (var i = 0; i < codes[it].length; i++) {
        var verif = false
        var trouve = new Array();
        trouve = codes[it][i].match(/:E:[^:]+/)
        for (var j = 0; j < engagement.length; j++) {
            if (trouve[0] == engagement[j]) {
                verif = true
            }
        }
        if (verif == false) {
            engagement[i] = trouve[0]
        } else {
            engagement[i] = '';
        }

    }
    engagement = engagement.filter(word => word.length > 0);
    var tablehead = '<div class="card"><h4 class="card-header">ENGAGEMENT</h4><div class="card-body">'
    var tablebody = ''

    for (var i = 0; i < engagement.length; i++) {
        en = "'en" + i + "'"
        tablebody = tablebody + '<div class="form-check"><input class="form-check-input" type="checkbox" value="" id="en' + i + '" onclick="checkCaseAttribut(' + en + ')"><label class="form-check-label" for="flexCheckDefault"> ' + engagement[i].replaceAll(rex, '') + '</label></div>'
    }
    var tablefoot = ' </div></div>'
    var tablefin = tablehead + tablebody + tablefoot
    document.getElementById("tablen").innerHTML = tablefin;

}

function afficherTablePaire() {
    for (var i = 0; i < supliers[it].length; i++) {
        var verif = false
        var trouve = new Array();
        trouve = supliers[it][i].match(/:P:[^:]+/)
        if (trouve == null) {
            trouve = [""]
        }
        for (var j = 0; j < paire.length; j++) {
            if (trouve[0] == paire[j]) {
                verif = true
            }
        }
        if (verif == false) {
            paire[i] = trouve[0]
        } else {
            paire[i] = '';
        }

    }
    paire = paire.filter(word => word.length > 0);
    if (paire[0] != null) {
        var tablehead = '<div class="card"><h4 class="card-header">NOMBRE DE PAIRE(S)</h4><div class="card-body">'
        var tablebody = ''

        for (var i = 0; i < paire.length; i++) {
            pa = "'pa" + i + "'"
            tablebody = tablebody + '<div class="form-check"><input class="form-check-input" type="checkbox" value="" id="pa' + i + '" onclick="checkCaseAttribut(' + pa + ')"><label class="form-check-label" for="flexCheckDefault"> ' + paire[i].replaceAll(rex, '') + '</label></div>'
        }
        var tablefoot = ' </div></div>'
        var tablefin = tablehead + tablebody + tablefoot
        document.getElementById("tablep").innerHTML = tablefin;
    }

}

function afficherTableAutre() {
    var tablehead = '<div class="card"><h4 class="card-header">CHAMPS ADDITIONNEL(S)</h4><div class="card-body">'
    var tablebody = ''

    for (var i = 0; i < autre.length; i++) {
        au = "'au" + i + "'"
        tablebody = tablebody + '<div class="form-check"><input class="form-check-input" type="checkbox" value="" id="au' + i + '" onclick="checkCaseAttribut(' + au + ')"><label id="lb' + i + '" class="form-check-label" for="flexCheckDefault"> ' + autre[i].replaceAll(rex, '') + '</label></div>'
    }
    var tablefoot = ' </div></div>'
    var tablefin = tablehead + tablebody + tablefoot
    document.getElementById("tablea").innerHTML = tablefin;
    for (var i = 0; i < autre.length; i++) {
        var autre2 = autre[i].replace(/[0-9]+:-/g, ":-")
        autre2 = autre2.replace(/[[0-9]+:_/g, ":_")
        for (var j = i + 1; j < autre.length; j++) {
            var autre3 = autre[j].replace(/[0-9]+:-/g, ":-")
            autre3 = autre3.replace(/[[0-9]+:_/g, ":_")
            if (autre2 == autre3) {
                var ele = document.getElementById("au" + j)
                ele.setAttribute("hidden", "")
                var ele2 = document.getElementById("lb" + j)
                ele2.setAttribute("hidden", "")
            }
        }

    }
}

function choixTable() {
    var chfo = document.getElementById("tablef")
    var chte = document.getElementById("tablet")
    var chde = document.getElementById("tabled")
    var chen = document.getElementById("tablen")
    var chpa = document.getElementById("tablep")
    var chau = document.getElementById("tablea")
    if (document.getElementById("chfo").checked == true) {
        chfo.removeAttribute("hidden");
        chte.setAttribute("hidden", "");
        chde.setAttribute("hidden", "");
        chen.setAttribute("hidden", "");
        chpa.setAttribute("hidden", "");
        chau.setAttribute("hidden", "");
    }
    if (document.getElementById("chte").checked == true) {
        chte.removeAttribute("hidden");
        chfo.setAttribute("hidden", "");
        chde.setAttribute("hidden", "");
        chen.setAttribute("hidden", "");
        chpa.setAttribute("hidden", "");
        chau.setAttribute("hidden", "");
    }

    if (document.getElementById("chde").checked == true) {
        chde.removeAttribute("hidden");
        chte.setAttribute("hidden", "");
        chfo.setAttribute("hidden", "");
        chen.setAttribute("hidden", "");
        chpa.setAttribute("hidden", "");
        chau.setAttribute("hidden", "");
    }

    if (document.getElementById("chen").checked == true) {
        chen.removeAttribute("hidden");
        chte.setAttribute("hidden", "");
        chde.setAttribute("hidden", "");
        chfo.setAttribute("hidden", "");
        chpa.setAttribute("hidden", "");
        chau.setAttribute("hidden", "");
    }
    if (document.getElementById("chpa").checked == true) {
        chpa.removeAttribute("hidden");
        chte.setAttribute("hidden", "");
        chde.setAttribute("hidden", "");
        chen.setAttribute("hidden", "");
        chfo.setAttribute("hidden", "");
        chau.setAttribute("hidden", "");

    }
    if (document.getElementById("chau").checked == true) {
        chau.removeAttribute("hidden");
        chte.setAttribute("hidden", "");
        chde.setAttribute("hidden", "");
        chen.setAttribute("hidden", "");
        chfo.setAttribute("hidden", "");
        chpa.setAttribute("hidden", "");

    }
    if (document.getElementById("chto").checked == true) {
        chau.removeAttribute("hidden");
        chte.removeAttribute("hidden");
        chde.removeAttribute("hidden");
        chen.removeAttribute("hidden");
        chfo.removeAttribute("hidden");
        chpa.removeAttribute("hidden");

    }
    if (document.getElementById("chri").checked == true) {
        chau.setAttribute("hidden", "");
        chte.setAttribute("hidden", "");
        chde.setAttribute("hidden", "");
        chen.setAttribute("hidden", "");
        chfo.setAttribute("hidden", "");
        chpa.setAttribute("hidden", "");
    }

}

function checkCaseAttribut(id) {
    var cas = document.getElementById(id)
    var idl = id.slice(0, 2)
    var idn = id.slice(2)
    var checke = cas.checked
    if (checke == true) {
        switch (idl) {
            case 'fo':
                check.push(fournisseur[idn])
                break;
            case 'te':
                check.push(techno[idn])
                break;
            case 'de':
                check.push(debit[idn])
                break;
            case 'en':
                check.push(engagement[idn])
                break;
            case 'pa':
                check.push(paire[idn])
                break;
            case 'au':
                var autre2 = autre[idn].replace(/[0-9]+:-/g, ":-")
                autre2 = autre2.replace(/[[0-9]+:_/g, ":_")
                check.push(autre2)

                break;



        }
        console.log(check)
    }
    if (checke == false) {
        var cont = -1

        switch (idl) {
            case 'fo':
                cont = check.indexOf(fournisseur[idn])
                break;
            case 'te':
                cont = check.indexOf(techno[idn])
                break;
            case 'de':
                cont = check.indexOf(debit[idn])
                break;
            case 'en':
                cont = check.indexOf(engagement[idn])
                break;
            case 'pa':
                cont = check.indexOf(paire[idn])
                break;
            case 'au':
                var autre2 = autre[idn].replace(/[0-9]+:-/g, ":-")
                autre2 = autre2.replace(/[[0-9]+:_/g, ":_")
                cont = check.indexOf(autre[idn])
                break;


        }
        check.splice(cont, 1, "")
        check = check.filter(word => word.length > 0);
    }

}
function checkAuto() {
    if (mode == true) {
        var coche = true
        var contient
        for (var i = 0; i < codes[it].length; i++) {
            coche = true
            var codes2 = codes[it][i].replaceAll(/[0-9]+:-/g, ":-")
            codes2 = codes2.replaceAll(/[0-9]+:_/g, ":_")

            for (var j = 0; j < check.length; j++) {
                var re = new RegExp(check[j] + "$|" + check[j] + ":", "g");
                contient = codes2.search(re)
                if (contient == -1) {
                    coche = false;
                }
            }
            if (coche == true) {
                var cas2 = document.getElementById("co" + i)
                cas2.checked = true

            }
        }
    }
    else if (mode == false) {

        var contient
        for (var i = 0; i < codes[it].length; i++) {
            contient = -1
            var codes2 = codes[it][i].replaceAll(/[0-9]+:-/g, ":-")
            codes2 = codes2.replaceAll(/[0-9]+:_/g, ":_")
            for (var j = 0; j < check.length; j++) {
                var re = new RegExp(check[j] + "$|" + check[j] + ":", "g");
                console.log(check[j])
                contient = codes2.search(re)
                console.log(contient)
                if (contient != -1) {

                    var cas2 = document.getElementById("co" + i)
                    cas2.checked = true

                }
            }
        }


    }

}
function annulerTout() {
    for (var i = 0; i < codes[it].length; i++) {
        var cas2 = document.getElementById("co" + i)


        cas2.checked = false
        cas2.removeAttribute("disabled", "")
    }




    for (var i = 0; i < fournisseur.length; i++) {
        var cas2 = document.getElementById("fo" + i)


        cas2.checked = false
        cas2.removeAttribute("disabled", "")
    }

    for (var i = 0; i < techno.length; i++) {
        var cas2 = document.getElementById("te" + i)


        cas2.checked = false
        cas2.removeAttribute("disabled", "")
    }

    for (var i = 0; i < debit.length; i++) {
        var cas2 = document.getElementById("de" + i)


        cas2.checked = false
        cas2.removeAttribute("disabled", "")
    }

    for (var i = 0; i < engagement.length; i++) {
        var cas2 = document.getElementById("en" + i)


        cas2.checked = false
        cas2.removeAttribute("disabled", "")
    }

    for (var i = 0; i < paire.length; i++) {
        var cas2 = document.getElementById("pa" + i)

        cas2.checked = false

        cas2.removeAttribute("disabled", "")
    }
    if (it != 0) {
        for (var i = 0; i < autre.length; i++) {
            var cas2 = document.getElementById("au" + i)

            cas2.checked = false

            cas2.removeAttribute("disabled", "")
        }

    }

    check.splice(0)

}

function afficherSelect() {
    var selecthead = '<select class="form-control" name="sel_placement" id="sel" onchange="selectVerif()" ><option value=":F:">Fournisseur</option><option value=":T:">Technologie</option><option value=":D:">Debit</option><option value=":E:">Engagement</option><option value=":P:">Paires</option>'
    var selectbody = ''
    if (it != 0) {
        for (i = 0; i < autre.length; i++) {
            var trouve = new Array()
            trouve = autre[i].match(/:CHA[0-9]+:/g)
            var label = autre[i].replace(rex, '')
            selectbody = selectbody + '<option value="' + trouve[0] + '">' + label + '(' + i + ')</option>'
        }
    }

    selectfoot = "</select>"

    var selectfin = selecthead + selectbody + selectfoot;
    document.getElementById("select").innerHTML = selectfin;
}


function choixSelect(a, ic) {
    var sela = document.getElementById("sela").value

    var modif = ':CHA' + ic + ':' + document.getElementById("modif").value
    var b = ''

    switch (sela) {
        case 'gauche':
            var sel = document.getElementById("sel").value
            b = a.replace(sel, modif + sel)
            break;
        case 'droite':
            var sel = document.getElementById("sel").value
            var re = new RegExp(sel + "[^:]+", "g");
            var trouve = new Array();
            trouve = codes[it][i].match(re)
            b = a.replace(re, trouve[0] + modif)
            break;
        case 'debut':
            b = modif + a
            break;
        case 'fin':
            b = a + modif
            break;


    }

    return b
}


function ajouterTempo() {
    var verifex = false

    itt = it + 1
    codes[itt] = []

    for (i = 0; i < codes[it].length; i++) {

        var cas2 = document.getElementById("co" + i)
        if (cas2.checked == true) {
            ic = checkDoublon(codes[it][i])
            console.log(i)
            codes[itt][i] = choixSelect(codes[it][i], ic)
            if (ic == it && verifex == false) {
                exemple[itt] = choixSelect(exemple[it], ic)
                verifex = true
            }
        } else {
            console.log("a" + i)
            codes[itt][i] = codes[it][i]

        }

    }

    if (verifex == false) {
        exemple[itt] = exemple[it]
    }


    autreTrie()
    it = it + 1
    itblk = it
    afficherIt()
    afficherTable()
    afficherTableAutre()
    annulerTout()
    afficherSelect()
    var ins = document.getElementById("add")
    ins.setAttribute("disabled", "")
    var verif = document.getElementById("arr");
    verif.removeAttribute("disabled");
    verifAvant()

}
function changerMode() {
    var md = document.getElementById("mode")

    if (mode == false) {

        for (var i = 0; i < fournisseur.length; i++) {
            var cas2 = document.getElementById("fo" + i)


            cas2.checked = false

        }

        for (var i = 0; i < techno.length; i++) {
            var cas2 = document.getElementById("te" + i)


            cas2.checked = false

        }

        for (var i = 0; i < debit.length; i++) {
            var cas2 = document.getElementById("de" + i)


            cas2.checked = false

        }

        for (var i = 0; i < engagement.length; i++) {
            var cas2 = document.getElementById("en" + i)


            cas2.checked = false

        }

        for (var i = 0; i < paire.length; i++) {
            var cas2 = document.getElementById("pa" + i)

            cas2.checked = false


        }

        if (it != 0) {
            for (var i = 0; i < autre.length; i++) {
                var cas2 = document.getElementById("au" + i)

                cas2.checked = false

            }

        }
        mode = true
        md.removeAttribute("class")
        md.setAttribute("class", "btn btn-primary")

    }

    else {

        for (var i = 0; i < fournisseur.length; i++) {
            var cas2 = document.getElementById("fo" + i)
            cas2.checked = false

        }

        for (var i = 0; i < techno.length; i++) {
            var cas2 = document.getElementById("te" + i)


            cas2.checked = false

        }

        for (var i = 0; i < debit.length; i++) {
            var cas2 = document.getElementById("de" + i)


            cas2.checked = false

        }

        for (var i = 0; i < engagement.length; i++) {
            var cas2 = document.getElementById("en" + i)


            cas2.checked = false

        }

        for (var i = 0; i < paire.length; i++) {
            var cas2 = document.getElementById("pa" + i)

            cas2.checked = false


        }
        if (it != 0) {
            for (var i = 0; i < autre.length; i++) {
                var cas2 = document.getElementById("au" + i)

                cas2.checked = false

            }

        }
        mode = false
        md.removeAttribute("class")
        md.setAttribute("class", "btn btn-dark")
    }

    check.splice(0)

}

function annulerCheck() {
    for (var i = 0; i < codes[it].length; i++) {
        var cas2 = document.getElementById("co" + i)


        cas2.checked = false
        cas2.removeAttribute("disabled", "")
    }

}


function veriFication() {
    var accepte = true
    var modifverif = document.getElementById("modif").value
    var modifverif2 = modifverif.substr(0, 1)
    var modifverif3 = modifverif.substr(1)
    var uncheked = true
    var selverif = document.getElementById("sel").value
    for (h = 0; h < codes[it].length; h++) {
        var cas3 = document.getElementById("co" + h)
        if (cas3.checked == true) {
            uncheked = false
        }
        console.log(uncheked)
    }
    if (uncheked == true) {
        alert("Aucune case n'est cochée ")
    }
    else if (modifverif2 != "-" && modifverif2 != "_") {
        alert("Le format du champ n'est pas correct. Veillez ce que votre champ à un tirer ('-' ou '_') comme premier caractère")


    } else if (modifverif.includes(":") == true || modifverif.includes(",") == true || modifverif.includes("&") == true) {
        alert('Les caractère ":","&" et "," ne sont pas acceptés')
    }
    else if (modifverif3.includes("-") == true || modifverif3.includes("_") == true) {
        alert('Les tirets("-","_") sont accepté seulement au debut du champ')
    }

    else {

        for (i = 0; i < codes[it].length; i++) {
            var cas3 = document.getElementById("co" + i).checked
            selverifbool = codes[it][i].includes(selverif)
            if (selverifbool == false && cas3 == true) {
                accepte = false
            }

        }
        if (accepte == true) {
            ajouterTempo()
        }
        else {
            alert("Un de vos codes ne contient pas l'element du select")
        }

    }
}
function selectVerif() {
    var selv = document.getElementById("sela").value
    var selw = document.getElementById("sel")
    var selu = document.getElementById("sel").value
    var isr = document.getElementById("add")
    if (selv == "debut" || selv == "fin") {
        selw.setAttribute("disabled", "");
    }
    else {
        selw.removeAttribute("disabled");

    }
    if (selu == ":F:" && selv == "gauche") {
        isr.setAttribute("disabled", "");
    } else {
        isr.removeAttribute("disabled");
    }

}
function autreTrie() {
    var itt = it + 1
    var trouve = new Array()
    trouve = exemple[itt].match(/:CHA[0-9]+:[^:]+/g)

    autre.splice(0)
    for (i = 0; i < trouve.length; i++) {
        autre[i] = trouve[i]
    }

}
function checkDoublon(c) {
    var modif = document.getElementById("modif").value
    var re = new RegExp(":CHA[0-9]+:" + modif + "$|:CHA[0-9]+:" + modif + ":", "g");
    var temp = ''
    var trouve2 = new Array()
    var resu
    for (j = 0; j < autre.length; j++) {
        if (autre[j].search(re) != -1) {
            console.log(c)
            console.log(autre[j])
            temp = autre[j]
            console.log(temp)

            trouve2 = temp.match(/[0-9]+:/g)
            temp = trouve2[0].replace(":", "")
            break;
        }

    }
    console.log(temp)
    var id = c.search(re)

    if (temp != '') {
        if (id != -1) {
            resu = it
        } else {
            resu = temp
        }

    } else {
        resu = it
    }
    return resu
}
function annulerAttribut() {


    for (var i = 0; i < fournisseur.length; i++) {
        var cas2 = document.getElementById("fo" + i)


        cas2.checked = false
        cas2.removeAttribute("disabled", "")
    }

    for (var i = 0; i < techno.length; i++) {
        var cas2 = document.getElementById("te" + i)


        cas2.checked = false
        cas2.removeAttribute("disabled", "")
    }

    for (var i = 0; i < debit.length; i++) {
        var cas2 = document.getElementById("de" + i)


        cas2.checked = false
        cas2.removeAttribute("disabled", "")
    }

    for (var i = 0; i < engagement.length; i++) {
        var cas2 = document.getElementById("en" + i)


        cas2.checked = false
        cas2.removeAttribute("disabled", "")
    }

    for (var i = 0; i < paire.length; i++) {
        var cas2 = document.getElementById("pa" + i)

        cas2.checked = false

        cas2.removeAttribute("disabled", "")
    }
    if (it != 0) {
        for (var i = 0; i < autre.length; i++) {
            var cas2 = document.getElementById("au" + i)

            cas2.checked = false

            cas2.removeAttribute("disabled", "")
        }

    }


    check.splice(0)

}
function transfertPrecedent() {
    var supliers2 = new Array()
    for (var h = 0; h < codes[0].length; h++) {
        supliers2[h] = codes[it][h].replace(/:E:[^:]+/g, "")
    }
    window.location.href = "index.php?uc=reaccueil&rcode=" + codes[0] + "&rsuplier=" + supliers2;
}
function coPie() {
    var ib = itblk + 1

    for (var k = 0; k < ib; k++) {
        long = codes[k].length
        for (var j = 0; j < long; j++) {
            var coche = document.getElementById("co" + j)
            if (coche.checked == true) {
                codes[k].push(codes[k][j])
            }

        }

    }
    afficherTable()
}

function suPpression() {

    var ib = itblk + 1
    if (window.confirm("Supprimer le(s) code(s) cochée(s) ?")) {
        for (var k = 0; k < ib; k++) {
            long = codes[k].length
            for (var j = 0; j < long; j++) {
                var coche = document.getElementById("co" + j)
                if (coche.checked == true) {
                    codes[k][j] = ""
                    codes[k] = codes[k].filter(word => word.length > 0);
                }

            }
            console.log(codes[k])
        }
        afficherTable()


    }
}
function verifCatalogue() {
    var erg = document.getElementById('erg');
    var cata = document.getElementById('cata');
    cata = cata.options[cata.selectedIndex].value;
    if (cata == "") {
        erg.setAttribute("disabled", "")
    }
    else {
        erg.removeAttribute("disabled")
    }
}