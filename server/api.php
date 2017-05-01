<?php require_once ('core/connection.php'); 
header('Access-Control-Allow-Origin: *');  

echo json_encode(
    array(
        'data'=> $all_data,
        'types'=> $datatype,
        'search_keys' => $search_keys,
        'fieldname' => $fieldname,
        'name_keys' => $name_keys
), JSON_PRETTY_PRINT);

