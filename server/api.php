<?php require_once ('core/connection.php'); ?>

<?php
echo json_encode(
    array('data'=> $all_data,
        'types'=> $datatype));

