<?php require_once('core/config.php');?>
<div data-role="footer" data-position="fixed">
	<div class="ui-btn-left">
    <a href="#" data-role="button" data-ajax="false" data-rel="back" data-icon="back">Back</a>
  </div>

  <?php
if ( $footer_text != null AND $footer_image == null ) {
    echo "<h2 style=\"color:$footer_text_color\">$footer_text</h2>";
} elseif ( $footer_image != null AND $footer_text == null ) {
    echo "<div style=\"height:40px; width:100%; text-align:center;\">
    <img src=\"$footer_image\" height=\"40\" style=\"width:auto;\" />
    </div>";
} else {
    echo "<div style=\"height:40px; width:100%; text-align:center;\">
    <img src=\"$footer_image\" height=\"40\" style=\"width:auto;\" />
    </div>";
}
?> 
  
 
  <div class="ui-btn-right">
    <a href="main.php" data-ajax="false" data-role="button" data-icon="grid">Menu</a>
  </div>
</div><!-- /footer -->
</body>
</html>
