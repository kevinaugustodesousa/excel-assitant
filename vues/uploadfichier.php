<div class="container">
<form action="index.php?uc=upload" method="post" enctype="multipart/form-data">
        <h2>Upload </h2>
        <label for="fileUpload">Fichier:</label>
        <input type="file" name="catalogue" id="fileUpload">
        
        <p><strong>Note:</strong> Seuls les formats .xlsx sont autorisés jusqu'à une taille maximale de 5 Mo.</p>
       
        <button class="btn btn-success" type="submit" name="submit" value="Upload">Upload</button>
        
    </form>
    <h2>Download Supression</h2>
    <label for="sel1">Catalogue :</label>
    <div class="col-3">
  <select class="form-control" name="catalogue2" id="cata" required onchange="verifCatalogue2()">
  <option value="">choisir catalogue</option>
  <?php
  for($j=0;$j<$somme;$j++)
  {
    echo"<option value='".$filetab[$j]."'>".$fileslabel[$j]."</option>";
  }
  ?></select>
  </div>
  <button type="button"  class="btn btn-primary" id="down" onclick="downLoad()" disabled>Telecharger le Catalogue</button>
  <button type="button" class="btn btn-danger" id="dele"  onclick="deLete()" disabled>Supprimer le Catalogue</button>
  

</div>