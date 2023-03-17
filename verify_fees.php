<html>
<body>
<?php 

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "student";

// Create a connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Die if connection was not successful
if (!$conn){
    die("Sorry we failed to connect: ". mysqli_connect_error());
}
else{
   // echo "Connection was successful<br>";
}
// Variables to be inserted into the table
$num = $_POST["rooln"];


// Sql query to be executed
$sql = "SELECT  *FROM `student_data` WHERE `roolno`=$num";
$result = mysqli_query($conn, $sql);

// Add a new trip to the Trip table in the database
if($result){
   // echo "submited successfully<br>";
}
else{
    //echo "The record was not inserted successfully because of this error ---> ". mysqli_error($conn);
}


$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $row = mysqli_fetch_assoc($result);
    if($row["fee"]>0)
    {   echo " Due fees " . $row["fee"]."<br>";
        echo"please pay the pending fee";
    } 
    else{
       //echo"<script>location.href='tc.php';</script>";
       echo"name:".$row["name"];
       echo"\n college:".$row["clg"];
        echo"\n Date of birth:".$row["clg"];
        echo"\n phone number:".$row["phno"];
        echo"<body>hello<body>";

    }   
  } else {
    echo "0 results";
  }

mysqli_close($conn);


?>




</body>
</html>
