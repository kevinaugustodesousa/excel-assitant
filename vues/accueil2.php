<input type=hidden id=suplier value=<?php echo $resusuplier; ?> />
<input type=hidden id=code value=<?php echo $resucode; ?> />
<br>
<div class="container">
<img src="Images/logo.png" id="image">


<form method="POST" action="index.php?uc=renvoie"enctype='multipart/form-data' >

<div class="row">
<div class="col-4">
  <label for="sel1">Fournisseur :</label>
  <select class="form-control" name="fournisseur" id="fournis" width="550" height="80" required onchange="fourniverif()"  >
    <option value="">choisir</option>
    <option value="APP">APPLIWAVE</option>
    <option value="AXN">AXIONE</option>
    <option value="BYG">BOUYGTEL</option>
    <option value="CON">CONNEXY</option>
    <option value="COV">COVAGE</option>
    <option value="KOS">KOSC</option>
    <option value="IEL">LIAZO</option>
    <option value="ORA">ORANGE</option>
  </select>
  </div>
 
</div>

<div class="row">
<div class="col-4">
<label for="sel1">Technologie :</label>
  <select class="form-control" name="technologie" id="techno" required onchange="fibreverif()"  >
    <option value="">choisir</option>
    <option value="-A">ADSL</option>
    <optgroup label ="FIBRE">
    <option value="-F">F</option>
    <option value="-FTTB">FTTB</option>
    <option value="-FTTE">FTTE</option>
    <option value="-FTTH">FTTH</option>
    <option value="-FTTO">FTTO</option>
    </optgroup>
    <option value="-S">SDSL</option>
    <option value="-V">VDSL</option>
  </select>
  </div>
  
</div>

<div class="row" id ="pa">
<div class="col-2">
<label for="sel1">Nombre de paire :</label>
  <select class="form-control" name="paire" id="pair" >
   <option value="">choisir</option>
    <option value="_1P">1</option>
    <option value="_2P">2</option>
    <option value="_3P">3</option>
    <option value="_4P">4</option>
  </select>
  </div>
 
</div>
  
  <div class="row" id="de">
  <div class="col-3">
      <label for="formGroupExampleInput">Debit :</label>
    <input type="number" class="form-control" name="debit" id="deb" required >
    </div>
    <div class="col-2" >
    <br>
    <select class="form-control" name="debit_unit" id="deb2" required >
    <option value="">choisir</option>
    <option value="M">Mbit/s</option>
    <option id="g" value="G">Gbit/s</option>
  </select>
  </div>
 
  </div>

  <div class="row" id ="en">
  <div class="col-3">
    <label for="formGroupExampleInput">Engagement :</label>
    <input type="number" class="form-control" name="engagement"id="eng" required >
    </div>
    <div class="col-2">
    <br>
    <select class="form-control" name ="engagement_unit"id="eng2" required >
    <option value="">choisir</option>
    <option value="M">Mois</option>
    <option value="Y">Année</option>
  </select>
  </div>
 
</div>

  <div class="form-group">
 
	<br> <br>
  <button type="button" class="btn btn-info" onclick="ajouterCode()">Ajouter le code</button>
	<button type="button" class="btn btn-success"  onclick="transfert1()">Suivant</button>
  
  </div>
  
</form>
<span id="tab"></span>
<script>     
                var ir = 0;
                var rex =/:.:|:CHA[^-_]+:/g;
                var ift =1;
                var ifd =1;
                var ifp=1;
                var ife=1;
                var resusuplier = new Array
                var resucode = new Array
                getcode = document.getElementById("code").value;
                getsuplier = document.getElementById("suplier").value;
                console.log(getcode)
                resusuplier = getcode.split(",")
                resucode = getsuplier.split(",")
                majTableau()
                </script>

</div>