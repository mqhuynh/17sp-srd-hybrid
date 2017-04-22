<?php
require_once('./core/connection.php');
require_once('core/header.php');
$info_id = urldecode($_GET['id']);
$record = $all_data[$info_id];
$map_index = 0;

foreach ($datatype as $key => $value) {
  if(strpos($value,"map") !== false){
      $map_index = $key;
      break;
  }
}
$address = $record[$map_index];
$name = $name_list[$info_id];
$request_url = "http://maps.googleapis.com/maps/api/geocode/xml?address=".$address."&sensor=true";
$xml = simplexml_load_file($request_url) or die("Google Map did not");
$status = $xml->status;
$lat = "";
$lng = "";
if($status == "OK"){
    $lat = $xml->result->geometry->location->lat;
    $lng = $xml->result->geometry->location->lng;
}
?>
<!DOCTYPE html>
<html>
<head>
<script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyBvA7Bh-sg13p3xi9ZrlIqVAmsLuOZzYVc"></script>
<script>
var name = "<?php echo $name;?>";
var address = "<?php echo $address;?>";
var lat = <?php echo $lat; ?>;
var lng = <?php echo $lng; ?>;
var latLng = new google.maps.LatLng(lat,lng);
function initialize() {
  var mapProp = {
    center:latLng,
    zoom:18,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var marker = new google.maps.Marker({
    position: latLng,
    map:map,
  });
  marker.setMap(map);
  google.maps.event.addListener(marker, 'click', function() {
    map.setCenter(marker.getPosition());
    var info = new google.maps.InfoWindow();
    info.setContent(name+", "+address);
    info.open(map,marker);
  });
}
google.maps.event.addDomListener(window, 'load', initialize);

</script>
</head>
<body>
	<?php require_once('core/topbar.php'); 
		echo '<h3 style="text-align:center">'.$name.'</h3>';
	?>
	<div class="main-content" id="googleMap" style="width:100%; text-align:center"></div>
	<?php require_once("core/footer.php"); ?>
</body>
</html>