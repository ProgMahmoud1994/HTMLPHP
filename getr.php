<?php
//$data = fopen("TextFile.txt", "r") or die("Unable to open file!");
// echo fread($data,filesize("TextFile.txt"));
//fclose($data);


// $data[]=$cat;
// echo json_encode($data);

// $data= array("1","2");
// echo count($data);

//$lines = file("TextFile.txt", FILE_IGNORE_NEW_LINES);
//echo json_encode($lines);
// echo ($lines[2]);

$data[]=["123","1234"];
echo json_encode($data);
?>
