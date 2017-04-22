<html>

<head>
  <meta charset="utf-8" />
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />


</head>

<?php require_once("core/connection.php"); ?>
<?php require_once("core/header.php"); ?>

<div data-role="page" data-theme="a">

    <div style="text-align:center">
        <?php require_once('core/topbar.php'); ?>

    </div>
    <div data-role="main" class="ui-content main-content">


     <select id="searchby">
        <option value="" selected disabled>Search by ... </option>
        <?php
        foreach($search_keys as $key){
          echo "<option value=".$key.">".$fieldname[$key]."</option>";                    
      }
      ?>
  </select>
  <form class="ui-filterable">
    <input id="autocomplete-input" data-type="search" placeholder=<?php echo '"Search by '.$fieldname[$search_category].'"'; ?>>
</form>
 <ul class="data-list" data-role="listview" data-filter="true" data-filter-reveal="true" data-input="#autocomplete-input" data-inset="true">
     <?php
    if($search_category!=NULL){
        $i = 0;
        foreach ($all_data as $names){
            echo "<li id='".$name_keys[$i]."'><a href='info.php?id=".$name_keys[$i++]."'>".$names[$search_category]."<br><span><i>".$names[$name_index]."</i><span></a></li>";
        }
    }
    ?>
</ul>
</div>
<div style="text-align:center">
    <?php echo '<h3 style="color:'.$topbar_text_color.'">'.$topbar_text.'</h3>'; ?>
    <?php require_once('core/home-content.php');?>
</div>
<script type="text/javascript">
$("#searchby").change(function(){
    window.location.href= "main.php?s="+$(this).val();
});
</script>
<?php require_once("core/footer.php"); ?>


</html