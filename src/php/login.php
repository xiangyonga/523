<?php
 		$username = $_POST["username"];
 		$password = $_POSET["password"];
	 		include "conn.php";
	 		$sql = "SELECT username,password FROM users WHERE username='$username' AND password='$password'" ;
	 		$result = mysql_query($sql);
	 		$row = mysql_fetch_array($result, MYSQL_ASSOC);
	 		echo "<meta charset='utf-8>";
	 		if ($row){
	 			echo "登陆成功：" .json_encode($row);
	 		}else {
	 			echo "用户名或密码错误"；
	 		}
 		mysql_close();
?>