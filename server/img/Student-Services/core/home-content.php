<?php 
 if(isset($home_content_image)){
 	echo '<img width="90%" src="'.$home_content_image.'" />';
 }else if(isset($home_content_text)){
 	echo $home_content_text;
 }
?>
