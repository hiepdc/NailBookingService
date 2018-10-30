<?php
function showStatus($status, $sizeOfTime)
{
    $arr = explode(',', $status);
    sort($arr);
    $arr2chieu = array();

    for ($i = 0; $i <= sizeof($arr) - 1; $i++) {
        $arr1chieu = array();
        array_push($arr1chieu, $arr[$i]);

        while ($i < sizeof($arr) - 1 && $arr[$i + 1] == $arr[$i] + 1) {
            array_push($arr1chieu, $arr[$i + 1]);
            $i++;
        }
        array_push($arr2chieu, $arr1chieu);
        unset($arr1chieu);
    }


    $statusArr = array();
    foreach ($arr2chieu as $key => $value) {
        if (sizeof($value) >= $sizeOfTime) {
            for ($i = 0; $i <= sizeof($value) - $sizeOfTime; $i++) {
                array_push($statusArr, $value[$i]);
            }
        }
    }

    echo "<br>Khung gio ranh (Status): " . $status . "<br>";
    echo "n = " . $sizeOfTime . " , Mau Xanh hien thiiiiiiiiii: ";
    echo $statusArr . " ";

}

showStatus("0", 4);
showStatus("0,1", 4);
showStatus("0,1,2", 4);
showStatus("0,1,2,3", 4);
showStatus("0,1,2,3,4", 4);
showStatus("0,1,2,3,4,5", 4);
showStatus("0,1,2,3,4,5,6", 4);
showStatus("10", 4);
showStatus("10,11", 4);
showStatus("10,11,12", 4);
showStatus("10,11,12,13", 4);
showStatus("10,11,12,13,14", 4);
showStatus("10,11,12,13,14,15", 4);
showStatus("0,1,2,3,6,7,8,10,11,12,13,14,15,16,17,18,19,20,26", 4);
showStatus("0,1,2,3,5,6,7,8,11,12,18,19,20,26", 4);
showStatus("0,1,2,3,4,6,7,8,11,12,18,19,20,26", 4);
showStatus("0,1,11,12,18,19,20,21,22,23,24,25,26", 4);
showStatus("0,1,2,3,4,5,6,7,8,9,10,11,12,18,19,20,26", 8);

?>