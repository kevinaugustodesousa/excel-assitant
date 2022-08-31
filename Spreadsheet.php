<?php
function trouverLigne($onglet,$a){


    $inputFileType = 'Xlsx';
    $inputFileName = $a;
    $sheetname = $onglet;
    
    /**  Create a new Reader of the type defined in $inputFileType  **/
    $reader = \PhpOffice\PhpSpreadsheet\IOFactory::createReader($inputFileType);
    /**  Advise the Reader of which WorkSheets we want to load  **/
    $reader->setLoadSheetsOnly($sheetname);
    /**  Load $inputFileName to a Spreadsheet Object  **/
    $spreadsheet = $reader->load($inputFileName);
 
    foreach ($spreadsheet->getSheetByName($sheetname)->getCoordinates() as $coord) {
        $cell = $spreadsheet->getSheetByName($sheetname)->getCell($coord);
        $valcell =$cell->getValue();
        $valcell =trim($valcell);

        if(!empty($valcell)){
            $cellplein=$cell;
             $row = $cellplein->getRow();
             

             }
             
            
        }
       
        $row=$row+1;
        
        
       
    }
function trouvetOnglet($fournis){
    $resultat="";
switch($fournis){
    case "APP":
        $resultat="APPLIWAVE";
    break;
    case "AXN":
        $resultat="AXIONE";
    break;
    case "BYG":
        $resultat="BOUYGTEL";
    break;
    case "CON":
        $resultat="CONNEXY";
    break;
    case "COV":
        $resultat="COVAGE";
    break;
    case "KOS":
        $resultat="KOSC";
    break;
    case "IEL":
        $resultat="LIAZO";
    break;
    case "ORA":
        $resultat="ORANGE";
    break;

}
return $resultat;
}
function ecritureExcel($afourniss,$suplier,$code,$cata){

    
    $inputFileType = 'Xlsx';
    $inputFileName = $cata;
   
    
    /**  Create a new Reader of the type defined in $inputFileType  **/
    $reader = \PhpOffice\PhpSpreadsheet\IOFactory::createReader($inputFileType);
   
    /**  Advise the Reader of which WorkSheets we want to load  **/
    $reader->setLoadAllSheets();
    /**  Load $inputFileName to a Spreadsheet Object  **/
    $spreadsheet = $reader->load($inputFileName);
    for ($i = 0; $i < count($code); $i++) {
        $row=0;
        $sheetname=trouvetOnglet($afourniss[$i]);
        enleverVide($sheetname,$cata);
        foreach ($spreadsheet->getSheetByName($sheetname)->getCoordinates() as $coord) {
            $cell = $spreadsheet->getSheetByName($sheetname)->getCell($coord);
            $valcell =$cell->getValue();
            //$valcell =trim($valcell);
            //$cell->setValue($valcell);

            if (!empty($valcell)) {
                $cellplein=$cell;
                $row = $cellplein->getRow();
            }
        }

        $row=$row+1;

    
        $writer = \PhpOffice\PhpSpreadsheet\IOFactory::createWriter($spreadsheet, "Xlsx");
        $cord="A.$row";
    
        if ($sheetname != "CONNEXY") {
            $cell = $spreadsheet->getSheetByName($sheetname)->getCell("A".$row);
    
            $cell->setValue($suplier[$i]);
        }
        $cell = $spreadsheet->getSheetByName($sheetname)->getCell("B".$row);
        $cell->setValue($code[$i]);
    }
    $fd =microtime(true);
    $writer->save($inputFileName);
    $fs=microtime(true); 
    $f=$fs-$fd;
    
    
    $spreadsheet->disconnectWorksheets();
    unset($spreadsheet);

   
}



    
    function enleverVide($onglet,$a){


        $inputFileType = 'Xlsx';
        $inputFileName = $a;
        $sheetname = $onglet;
        
        /**  Create a new Reader of the type defined in $inputFileType  **/
        $reader = \PhpOffice\PhpSpreadsheet\IOFactory::createReader($inputFileType);
        /**  Advise the Reader of which WorkSheets we want to load  **/
        $reader->setLoadAllSheets();
        /**  Load $inputFileName to a Spreadsheet Object  **/
        $spreadsheet = $reader->load($inputFileName);
        
        $writer = \PhpOffice\PhpSpreadsheet\IOFactory::createWriter($spreadsheet, "Xlsx");
        foreach ($spreadsheet->getSheetByName($sheetname)->getCoordinates() as $coord) {
            $cell = $spreadsheet->getSheetByName($sheetname)->getCell($coord);
            $valcell =$cell->getValue();
            $valcell =trim($valcell);
            $cell->setValue($valcell);
            

                                 
            }
            $writer->save($inputFileName);
            $spreadsheet->disconnectWorksheets();
            unset($spreadsheet);
        }

        
      

?>