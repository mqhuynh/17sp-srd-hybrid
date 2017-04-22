<html>

<head>
  <meta charset="utf-8" />

</head>

<?php 
?>
<?php require_once ('core/connection.php'); ?>
<?php require_once('core/header.php'); ?>
<?php require_once('core/topbar.php'); ?>

<?php 
?>
<div class="info main-content">

    <?php
    $info_id = isset($_GET['id'])?$_GET['id']:NULL;
    if($info_id != NULL){
        foreach ($all_data as $record)
        {
            if($record[0] == $info_id){
                $i = 0;
                foreach ($record as $data)
                {                  

                    if(strpos($datatype[$i],"name") !== false){
                        echo '<h3>'.$data.'</h3>';
                    }
                    else if(strpos($datatype[$i],"map") !== false){
                        echo '<a id="map-link" href="" onclick="openMap('.$info_id.');">'.$data.'</a>';
                    }
                    else if(strpos($datatype[$i],"phone") !== false){
                        echo '<a href="tel:'.$data.'">'.$data.'</a>';
                    }
                    else if(strpos($datatype[$i],"email") !== false){
                        echo '<a href="mailto:'.$data.'">'.$data.'</a>';

                    }
                    else if(strpos($datatype[$i],"url") !== false){
                        echo '<a target="_blank" href="'.linkify($data).'">'.linkify($data).'</a>';
                    }
                    else if(strpos($datatype[$i],"image") !== false){
                        if(is_good_link($data)){
                            $data = linkify($data);
                            echo '<div class="center image"><img src="'.$data.'"/></div>';
                        }
                    }
                    else if(strpos($datatype[$i],"video") !== false){
                        if(is_good_link($data)){
                            $data = linkify($data);
                            echo '<div class="center video">';
                            if(strpos($data,".") != false){
                                echo 
                                '<video controls>
                                <source src="'.$data.'" type="video/mp4">
                                <source src="'.$data.'" type="video/ogg">
                                Your browser does not support the video tag.
                                </video>';
                            }
                            else{
                                echo '<embed src="http://www.youtube.com/v/'.$data.'"">';
                            }
                            echo '</div>';
                        }
                        
                    }
                    else if(strpos($datatype[$i],"audio") !== false){
                        if(is_good_link($data)){
                            $data = linkify($data);
                            echo
                            '<div class="center audio"><audio controls>
                            <source src="'.$data.'" type="audio/ogg">
                            <source src="'.$data.'" type="audio/mpeg">
                            Your browser does not support the audio element.
                            </audio></div>';
                        }
                    }
                    else if(strpos($datatype[$i],"text") !== false){
                        echo $data;
                    }
                    else{
                    }
                    if(strlen($data)>1){
                        echo "<hr>";
                    }
                    $i++;
                }
            }
        }
    }
    ?>
</div>
<?php require_once("core/footer.php"); ?>

</html>