<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "interviewapplication";

$askedQuestion = $_POST["askedQuestion"];
$correctAnswer = $_POST["correctAnswer"];
$userAnswer = $_POST["userAnswer"];
// $score = rand(1,3);
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT into userquestionanswer (userid,	questions,	correctanswers,	givenanswers) VALUES (1, '".$askedQuestion."' , '".$correctAnswer."' , '".$userAnswer."' )";
if ($conn->query($sql) === TRUE)
{
    echo "Added Responces";
} else {
    echo "Error".$sql."<br>".$conn->error;
}
$conn->close();

?>