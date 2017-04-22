<?php 
function linkify($link){
	if(strpos($link, "&") === 0){
		return substr($link, 1);
	}
	if(empty($link) || is_null($link)){
		return "";
	}
	if(!(strpos($link,"http") !== false)){
		$link = "http://".$link;
	}
	return $link;
}
// Test url of the local file. For local file, add & in front of the file path.
//echo linkify("&localhost/my/song.mp4");

function is_good_link($url){
	return !empty($url) || !empty($url) || !($url == "");
}

?>