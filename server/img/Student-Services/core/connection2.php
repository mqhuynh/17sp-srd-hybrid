<?php
// connection setting
require_once('core/config.php');
require_once('core/utility-methods.php');
$connection = new mysqli($server, $username, $password, $database);
if(mysqli_connect_errno()){
    echo "Connection could not be established";
    exit();
}
$url_id = isset($_GET["id"])?$_GET["id"]:NULL;
$query = 'SELECT * FROM '.$table;
mysqli_set_charset($connection,'utf8'); // this is what does the magic to display foreign characters!
$result = $connection->query($query);
$all_data =array();
$specific = array();
$name_list = array();
$fieldname = array();
$datatype = array();
$searchable = array();
$search_keys = array();
$name_keys = array();
$i = 0;
$m = 0;
while ($row = $result->fetch_array(MYSQLI_NUM))
{
    if($i == 0){
        $fieldname = $row;
    }
    else if($i == 1){
        $datatype = $row;
    }
    else{
        $all_data[$row[0]]= $row;
        $name_keys[$m++] = $row[0];
    }
    $i++;
}
foreach ($all_data as $each_service){
    if(!strcmp($url_id, $each_service[0])){
        $specific = $each_service;
       break;
    }
}
for($i = 0; $i < count($datatype); $i++){
    if(strpos($datatype[$i], "search_")!== FALSE){
        $searchable[$i] = $datatype[$i];
        $search_keys[$i] = $i;
    }
}
$name_index = 0;
foreach ($datatype as $key) {
    if(strpos($key,"name") !== false){
        break;
    }
    $name_index++;
}

foreach ($all_data as $key=>$value) {
    $name_list[$key] = $value[$name_index];
}
//echo $name_index;
//print_r($names);
//var_dump($all_data);
//print_r($name_list);
//print_r($specific);
//print_r($fieldname);
//print_r($datatype);
//print_r($searchable);
//print_r($search_keys);
//print_r($name_keys);
$connection->close();
?>