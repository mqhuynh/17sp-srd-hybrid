<!DOCTYPE html>
<html>
    <head>
	    <title>CDCS App</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
		
		<link rel="stylesheet" href="lib/css/customCdcs.css" />
		<link rel="stylesheet" href="lib/css/jquery.mobile.icons.min.css" />
		<link rel="stylesheet" href="lib/css/jquery.mobile.structure-1.4.5.min.css" />
		<link href="lib/css/custom.css" rel="stylesheet" type="text/css"/>
		<script src="lib/js/jquery-1.11.1.min.js" type="text/javascript"></script>
		<script src="lib/js/jquery.mobile-1.4.5.min.js"></script>
		<script src="lib/js/custom.js" type="text/javascript"></script>

<style type="text/css">
<?php
if ( $background_color != null ) {
    echo "
div.ui-content, .ui-page-theme-a .ui-bar-inherit, #searchby-button.ui-btn {
background-color: $background_color; 
}
    ";
    }
if ( $topbar_text_opacity != null ) {
    echo "  
#topbar p {
    opacity:".($topbar_text_opacity/100)."; 
    -moz-opacity:".($topbar_text_opacity/100)."; 
    filter:alpha(opacity=".($topbar_text_opacity/100)."); }
";
    }
    
    
if ( $footer_text_opacity != null ) {
    echo "  
.ui-footer .ui-title {
    opacity:".($footer_text_opacity/100)."; 
    -moz-opacity:".($footer_text_opacity/100)."; 
    filter:alpha(opacity=".($footer_text_opacity/100)."); }
";
    }
    
    
if ( $button_opacity != null ) {
    echo "
    #searchby-button.ui-btn { 
background: url(img/bgb_$button_opacity.png) repeat left top;
border-width:0;
}
.ui-page-theme-a .ui-btn, html .ui-bar-a .ui-btn, html .ui-body-a .ui-btn, html body .ui-group-theme-a .ui-btn, html head + body .ui-btn.ui-btn-a, .ui-page-theme-a .ui-btn:visited, html .ui-bar-a .ui-btn:visited, html .ui-body-a .ui-btn:visited, html body .ui-group-theme-a .ui-btn:visited { 
background: url(img/bgb_$button_opacity.png) repeat left top;
border-width:0;
}
html .ui-btn.ui-btn-icon-left:hover, .ui-btn.ui-btn-icon-right.ui-icon-carat-r:hover { 
background: url(img/bgb_$button_opacity.png) repeat left top;
}
    ";
} 
?> 

	    	    
	</style>
	
	
    </head>
	<body>
	<?php $search_category = isset($_GET['s'])? $_GET['s']:$name_index; ?>
