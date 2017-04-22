<?php require_once('core/config.php');?>
<div data-role="header" id="topbar" style="text-align:center">
<?php

if(isset($topbar_image)){
	echo '<img src="'.$topbar_image.'" style="width:100%" />';

}
else if(isset($topbar_text)){
	if ( $topbar_text_color != null) {
	    echo '<p style="color:'.$topbar_text_color.'">'.$topbar_text.'</p>';
	} else {
	    echo '<p>'.$topbar_text.'</p>';
	} 
}
?>
</div>