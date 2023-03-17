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
    echo "Connection was successful<br>";
}
// Variables to be inserted into the table
$num = $_POST["rooln"];


// Sql query to be executed
$sql = "SELECT  *FROM `student_data` WHERE `roolno`=$num";
$result = mysqli_query($conn, $sql);

// Add a new trip to the Trip table in the database
if($result){
    echo "submited successfully<br>";
}
else{
    echo "The record was not inserted successfully because of this error ---> ". mysqli_error($conn);
}


$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $row = mysqli_fetch_assoc($result);
    echo"name:".$row["name"];
    
    
}

mysqli_close($conn);


?>




</body>
</html>
