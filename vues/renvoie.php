
<input type=hidden id=suplier value=<?php echo $resusuplier; ?> />
<input type=hidden id=code value=<?php echo $resucode; ?> />

 
<div class="container">
<br>
<button type="button" class="btn btn-warning"  id ="pre" onclick="transfertPrecedent() ">Precedent</button>
<br>

<div class="card">
  <h4 class="card-header">AFFICHAGE<button type="button" id ="mode" class="btn btn-dark" onclick="changerMode() ">Selection </button><button type="button"  class="btn btn-danger" onclick="annulerAttribut() ">Deselection </button></h4>
  <div class="card-body">
  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="chfo" onclick="choixTable()" > 
  <label class="form-check-label"  >
   Fournisseur
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="chte" onclick="choixTable()">
  <label class="form-check-label"  >
    Technologie
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="chde" onclick="choixTable()">
  <label class="form-check-label"  >
    Debit
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="chpa" onclick="choixTable()">
  <label class="form-check-label"  >
    Paire
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="chen" onclick="choixTable()">
  <label class="form-check-label" >
    Engagement
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="chau" onclick="choixTable()">
  <label class="form-check-label" >
    Autre
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="chto" onclick="choixTable()">
  <label class="form-check-label" >
    Tout
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="chri" onclick="choixTable()">
  <label class="form-check-label" >
    Rien
  </label>
</div>
 
  </div>
</div>
<span id='tablef' hidden></span> 
<span id='tablet' hidden></span> 
<span id='tabled' hidden></span> 
<span id='tablen' hidden></span> 
<span id='tablep' hidden></span>
<span id='tablea'  hidden></span> 
<span id='table'></span> 


<br>
<?php echo "Nombre de champ(s) ajouté(s) :"?>
<span id='affit'></span>


<form method="dialog" enctype='multipart/form-data' id='effacer' >
<button type="button" class="btn btn-primary" id="cp" onclick="coPie()" >Copier</button>
<button type="button" class="btn btn-danger" id="sp" onclick="suPpression()" >Supprimer</button>
<div class="row">
<br>
<label for="sel1">Ajouter des champs (ex: zone) :</label>
<div class="col-2">
<input type="text" class="form-control" name="engagement" placeholder="-" id="modif" required >
</form>
  </div>
  </div>
  <div class="row">
  <div class="col-2">
  <select class="form-control" name="selecta" id="sela" onchange="selectVerif()" >
    <option value="gauche">Gauche</option>
    <option value="droite">Droite</option>
    <option value="debut">Debut</option>
    <option value="fin">Fin</option>
  </select>
  </div>
  <div class="col-3">
  <span id = 'select'></span>

</div>


<div class="col-1">

<button type="button" class="btn btn-success" id="add" onclick="veriFication()" disabled >Insérer</button>

</div>
</div>


  <div class="form-group">
  
 
	<br> <br>
    <button type="button" class="btn btn-danger" id="arr" onclick="arrIere() "disabled >Avant</button>
    <button type="button" class="btn btn-primary" id="avn" onclick="aVant() "disabled >Après</button>

    <br>
    <br>
    <label for="sel1">Catalogue :</label>
    <div class="col-3">
  <select class="form-control" name="catalogue" id="cata" required onchange=" verifCatalogue()"  >
  <option value="">choisir catalogue</option>
  <?php
  for($j=0;$j<$somme;$j++)
  {
    echo"<option value='".$filetab[$j]."'>".$fileslabel[$j]."</option>";
  }
  ?></select>
  </div>
  <br>
    <button type="button" class="btn btn-success"  id ="erg" onclick="transfertPhp()" disabled>Enregistrer dans le fichier </button>
    <br>

   <script>     
                var rex =/:.:|:CHA[^-_]+:/g;
                var index = -1;
                var it =0
                var itblk = 0
                var masque = false;
                var mode =false
               
                var supliers = new Array();
                var codes = new Array();
                getcode = document.getElementById("code").value;
                getsuplier = document.getElementById("suplier").value;
                codes[0] = getcode.split(",")
                supliers[0] = getsuplier.split(",")
                var fournisseur = new Array();
                var techno = new Array();
                var debit = new Array();
                var paire = new Array();
                var engagement = new Array();
                var check = new Array();
                var autre= new Array();
                var exemple = new Array();
                exemple[0] = ":F:-B:T:-B:D:-B:P:-B:E:-B"

                afficherTable()
                afficherIt()
                afficherTableFournisseur()
                afficherTableTechno()
                afficherTableDebit()
                afficherTableEngagement()
                afficherTablePaire()
                afficherSelect()
                </script>
  </div>
  

</div>
