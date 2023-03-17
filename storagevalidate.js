function sdetailsvalidate(){
const name=document.getElementById('textname').value;
const lastname=document.getElementById('lastname').value;
sessionStorage.setItem("NAME",name);
sessionStorage.setItem("LASTNAME",lastname);
 return;
  }