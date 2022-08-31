<script src="script/ajoutchamp.js"></script>
<script src="script/formulaire.js"></script>
<script src="script/catalogue.js"></script>
<?php
$deco=false;

include "header.php" ;


include("Spreadsheet.php");
require 'vendor/autoload.php';
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;




if(empty($_GET["uc"]))
{
    $uc="accueil";
}
else {
    $uc=$_GET["uc"];
}



switch($uc)
{
    case "accueil" :
        include("vues/accueil.php") ;
    break;

    case "renvoie" :
        $i = 0;
        $resusuplier=$_GET["resusuplier"];
        $resucode=$_GET["resucode"];
        $filetab = array();
        $fileslabel= array();
        $dir="catalogues";
        if (is_dir($dir)) {
            if ($dh = opendir($dir)) {
                while (($file = readdir($dh)) !== false) {
                    if ($file != "." && $file != "..") {
                        $filetab[$i]= "catalogues/".$file;
                        $fileslabel[$i] = $file;
                    $i++;
                    }
                }
              
                 $somme = count($filetab);
                 
                closedir($dh);
            }
        }
        include("vues/renvoie.php") ;
        
        

    break;
   
    case "envoi" :
        $nb =100;
        
        $rcode=$_GET["rcode"];
        $rfourniss=$_GET["rfourniss"];
        $rsuplier=$_GET["rsuplier"];
        $rcata=$_GET["rcata"];
        
        $acode =explode(",",$rcode);
        
        $afourniss =explode(",",$rfourniss);
        
        $asuplier =explode(",",$rsuplier);
  

    
           
               ecritureExcel($afourniss, $asuplier, $acode, $rcata);
                
            
           
        
        ?>
        <div class="card">
        <h4 class="card-header">CODE ENRENGISTRÉE !</h4>
        <div class="card-body">
        <p class="card-text"> Les codes est enrengistrés dans <?php echo $rcata?></p>
        <br>
        </div>
        </div>
        <?php
       
    break;   
    case "reaccueil" :  
        $resucode=$_GET["rcode"];
        $resusuplier=$_GET["rsuplier"];
        include("vues/accueil2.php") ;
    break;
    case "catal" : 
        $filetab = array();
        $fileslabel= array();
        $dir="catalogues";
        $i =0 ;
        if (is_dir($dir)) {
            if ($dh = opendir($dir)) {
                while (($file = readdir($dh)) !== false) {
                    if ($file != "." && $file != "..") {
                        $filetab[$i]= "catalogues/".$file;
                        $fileslabel[$i] = $file;
                    $i++;
                    }
                }
                
                 $somme = count($filetab);
                 
                closedir($dh);
            }
        } 
       include("vues/uploadfichier.php") ;
    break;
    case "delete" :  
        if(unlink($_GET["catalogue2"])) 
        { 
            echo "Fichier supprime"; 
        } 
        else 
        { 
            echo "Fichier non supprimé"; 
        } 
        header('Location: index.php?uc=catal');
        exit();
    break;
    case "upload" :  
        if($_SERVER["REQUEST_METHOD"] == "POST"){
            // Vérifie si le fichier a été uploadé sans erreur.
            if(isset($_FILES["catalogue"]) && $_FILES["catalogue"]["error"] == 0){
                $allowed = array("xlsx" => "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
                $filename = $_FILES["catalogue"]["name"];
                $filetype = $_FILES["catalogue"]["type"];
                $filesize = $_FILES["catalogue"]["size"];
        
                // Vérifie l'extension du fichier
                $ext = pathinfo($filename, PATHINFO_EXTENSION);
                if(!array_key_exists($ext, $allowed)) die("Erreur : Veuillez sélectionner un format de fichier valide.");
        
                // Vérifie la taille du fichier - 5Mo maximum
                $maxsize = 5 * 1024 * 1024;
                if($filesize > $maxsize) die("Error: La taille du fichier est supérieure à la limite autorisée.");
        
                // Vérifie le type MIME du fichier
                if(in_array($filetype, $allowed)){
                    // Vérifie si le fichier existe avant de le télécharger.
                    if(file_exists("catalogues/" . $_FILES["catalogue"]["name"])){
                        echo $_FILES["catalogue"]["name"] . " existe déjà.";
                    } else{
                        move_uploaded_file($_FILES["catalogue"]["tmp_name"], "catalogues/" . $_FILES["catalogue"]["name"]);
                        echo "Votre fichier a été téléchargé avec succès.";
                    } 
                } else{
                    echo "Error: Il y a eu un problème de téléchargement de votre fichier. Veuillez réessayer."; 
                }
            } else{
                echo "Error: " . $_FILES["catalogue"]["error"];
            }
        }
         header('Location: index.php?uc=catal');
        exit();
    break;
    }

include "footer.php" ;
?>
