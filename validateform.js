function validateHTMlform()
{
  let form = document.StudenSignupForm;
   if( form.textnames.value == "" )
   {
     alert( "Enter Your First Name!" );
     form.textnames.focus() ;
     return false;
   }
   if( form.lastnames.value == "" )
   {
     alert( "Enter Your Last Name!" );
     form.textnames.focus() ;
     return false;
   }
  
   if( form.fathername.value == "" )
   {
     alert( "Enter Your Father Name!" );
     form.fathername.focus() ;
     return false;
   }  
 
   if( form.paddress.value == "" )
   {
     alert( "Enter Your Personal Address!" );
     form.paddress.focus() ;
     return false;
   }
   if ( ( StudenSignupForm.sex[0].checked == false ) && ( StudenSignupForm.sex[1].checked == false ) )
   {
   alert ( "Choose Your Gender: Male or Female" );
   return false;
   }  
  
   if( form.student_id.value == "" )
   {
     alert( "Select Your id!" );
	      form.student_id.focus() ;
     return false;
   }
   
var email = form.emailid.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
if (email == "" || atpos < 1 || ( dotpos - atpos < 2 ))
{
     alert("Enter your correct email ID")
     form.emailid.focus() ;
     return false;
}
  if( form.dob.value == "" )
   {
     alert( "Enter your DOB!" );
     form.dob.focus() ;
     return false;
   }
  if( form.mobileno.value == "")
   {
     alert( "Enter your Mobile No. in the format 123." );
     form.mobileno.focus() ;
     return false;
   }
 


//session storage
 const name=document.getElementById('textname').value;
const lastname=document.getElementById('lastname').value;
const sid=document.getElementById('student_id').value;
const eid=document.getElementById('emailid').value;
const dob=document.getElementById('dob').value;
const mno=document.getElementById('mobileno').value;
const fathersname=document.getElementById('fathername').value;
const peadderss=document.getElementById('paddress').value;



sessionStorage.setItem("NAME",name);
sessionStorage.setItem("LASTNAME",lastname);
sessionStorage.setItem("FATHERSNAME",fathersname);
sessionStorage.setItem("SID",sid);
sessionStorage.setItem("EMAILID",eid);
sessionStorage.setItem("DOB",dob);
sessionStorage.setItem("MOBILEN0",mno);
sessionStorage.setItem("PERSONALADDRESS",peaddress);


 return true;
   

}