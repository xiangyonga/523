<?php
	$username = $_POST["username"];
	$password = $_POST["password"];

	include "conn.php";

	$sql = "INSERT INTO users (username,password,phonenumber) VALUES ('$username','$password','phonenumber')";

	$result = mysql_query($sql);

	if($result){
		echo "用户注册成功！";
	}else{
		echo "用户注册失败：" . mysql_error();
	}
	mysql_close();
?>