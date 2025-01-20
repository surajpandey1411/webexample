<?php
$username=$_POST['username'];
$password=$_POST['password'];
$gender=$_POST['gender'];
$email=$_POST['email'];
$phoneCode=$_POST['phoneCode'];
$phone=$_POST['phone'];

if(!empty($username)|| !empty($password)|| !empty($gender)|| !empty($email) || !empty($phonecode)|| !empty($phone)){
$host="localhost";
$dbUsername="root";
$dbPassword="";
$dbname="register";

$conn=new mysqli($host, $dbUsername, $dbPassword, $dbname );
if(mysqli_connect_error()){
    die('Connect Error('.mysqli_connect_error().')'.mysqli_connect_error());
}
else{
    $SELECT="SELECT email from registertbl Where email=? Limit 1";
    $INSERT="INSERT Into registertbl (username,password,gender,email,phonecode,phone) values(?,?,?,?,?,?)";

    $stmt=$conn->prepare($SELECT);
    $stmt->bind_param("s",$email);
    $stmt->execute();
    $stmt->bind_result($email);
    $stmt->store_result();
    $rnum=$stmt->num_rows;
    if($rnum==0){
        $stmt->close();
        stmt=$conn->prepare($INSERT);
        stmt->bind_param("ssssii",$username,&password,$gender,$email,$phonecode,$phone);
        $stmt->execute();
        echo "record inserted successfully";   
    } 
    else{
        echo "Someone already register";
    }
    $stmt->close();
    $conn->close();
}
}
else{
    echo "All field are required";
    die();

}
?>