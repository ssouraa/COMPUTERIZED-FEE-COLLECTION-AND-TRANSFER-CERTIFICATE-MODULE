window.addEventListener('load',()=>{
const fname=sessionStorage.getItem('NAME');
const lastname=sessionStorage.getItem('LASTNAME');
const fathername=sessionStorage.getItem('FATHERSNAME');

const studentid=sessionStorage.getItem('SID');
const emailid=sessionStorage.getItem('EMAILID');
const dateob=sessionStorage.getItem('DOB');
const mobileno=sessionStorage.getItem('MOBILEN0');
const paddress=sessionStorage.getItem('PERSONALADDRESS');

document.getElementById("first-name").innerHTML=fname;
document.getElementById("last-name").innerHTML=lastname;
document.getElementById("fathers-name").innerHTML=fathername;


document.getElementById("student-id").innerHTML=studentid;

document.getElementById("email-id").innerHTML=emailid;
document.getElementById("date-b").innerHTML=dateob;
document.getElementById("mobile-no").innerHTML=mobileno;
document.getElementById("personal-address").innerHTML=paddress;
})