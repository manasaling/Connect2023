<?php 
/* Attempt MySQL server connection. Assuming you are running MySQL 
server with default setting (user 'root' with no password) */ 
$link = mysqli_connect("localhost", "root", "", "demo"); 
  
// Check connection 
if($link === false){ 
    die("ERROR: Could not connect. " . mysqli_connect_error()); 
} 
  
// Escape user inputs for security 
//$first_name = mysqli_real_escape_string($link, $_REQUEST['first_name']); 
//$last_name = mysqli_real_escape_string($link, $_REQUEST['last_name']); 
$email = mysqli_real_escape_string($link, $_REQUEST['email']); 
$username = mysqli_real_escape_string($link, $_REQUEST['uname']); 
$password = mysqli_real_escape_string($link, $_REQUEST['pass']); 
  
  
// attempt insert query execution 
$sql = "INSERT INTO persons (email, uname, pass) VALUES ('$email', '$username', '$password')"; 
if(mysqli_query($link, $sql)){ 
    echo "Records added successfully."; 
} else{ 
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link); 
} 
  
// close connection 
mysqli_close($link); 
?> 