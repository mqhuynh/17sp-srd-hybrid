<?php require_once ('core/connection.php'); 
header('Access-Control-Allow-Origin: *');  

echo json_encode(
    array('data'=> $all_data,
        'types'=> $datatype));

