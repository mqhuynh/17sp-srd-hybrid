<?php 
 if(isset($home_content_image) And isset($home_content_text)){

     echo '<p '.$home_content_text.'</p>';
 	echo '<img width="90%" src="'.$home_content_image.'" />';

 }else if(isset($home_content_text)And (!isset($home_content_image))){

 	echo $home_content_text;

 }else if(isset($home_content_image) And (!isset($home_content_text))) {


     echo '<img width="90%" src="' . $home_content_image . '" />';
 }

?>
