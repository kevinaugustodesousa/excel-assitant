<?php
class Reference{
    private $fournisseur;
    private $technologie;
    private $paire;
    private $debit;
    private $debit_unit;
    private $engagement;
    private $engagementunit;
    
    
    public function getFournisseur() {
       return $this->fournisseur;
    }
       
     public function getTechnologie(){
        return $this->technologie ;
    }
    public function getPaire() {
        return $this->paire;
     }
    function getDebit() {
        return $this->debit ;
    }
    function getDebit_unit(){
        return $this->debit_unit ;
    }
    function getEngagement(){
        return $this->engagement ; 
    }
    function getEngagement_unit(){
    
       return  $this->engagement_unit;
    }



 public function setFournisseur($unfournisseur) {
    $this->fournisseur = $unfournisseur;
}
   
 public function setTechnologie($untechnologie){
    $this->technologie = $untechnologie;
}
function setPaire($unpaire) {
    $this->paire = $unpaire;
}
function setDebit($undebit) {
    $this->debit = $undebit;
}
function setDebit_unit($undebit_unit){
    $this->debit_unit = $undebit_unit;
}
function setEngagement($unengagement){
    $this->engagement = $unengagement; 
}
function setEngagement_unit ($unengagement_unit){

    $this->engagement_unit = $unengagement_unit;
}
public function creerReference(){
$debit2="-".$this->debit.$this->debit_unit;
 $suplier_ref=$this->fournisseur.$this->technologie.$debit2.$this->paire; 
return $suplier_ref;
}
public function creerCode(){
    $debit2="-".$this->debit.$this->debit_unit;
    $engagement2="_".$this->engagement.$this->engagement_unit;
    $code=$this->fournisseur.$this->technologie.$debit2.$this->paire.$engagement2; 
   return $code;
   }
}