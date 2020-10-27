<?php

function determineStatus($array, $index){

    if (($index + 2) < count($array)){
        //check 
        if(($array[$index + 2] - $array[$index + 1] > 0) && ($array[$index + 1] - $array[$index] > 0)){
            return ['uptrend' => true, 'downtrend' => false, 'index' => $index];
        }
        //uptrend
        if(($array[$index] - $array[$index + 1] > 0) && ($array[$index + 1] - $array[$index + 2] > 0)){
            return ['uptrend' => false, 'downtrend' => true, 'index' => $index];
        }

        return false;


    }

    return ['uptrend' => false, 'downtrend' => false, 'index' => -1];
    
}



function UptrendOrDowntrend($array){
       
            for($i = 0; $i < count($array); $i++){

               $result = determineStatus($array, $i);
              
                
               if($result){
                   return $result;
               }
            }
        }
      


$array1 = [2, 3, 1, 19, 18, 12, 7, 18, 22, 32, 20, 11, 8, 5];
$array2= [32, 12, 11, 21, 5, 10, 11, 18, 5, 2];
$array3= [32, 12, 15, 11, 22, 11, 18, 18, 15, 7];

print json_encode((UptrendOrDowntrend($array1)));
print json_encode((UptrendOrDowntrend($array2)));
print json_encode((UptrendOrDowntrend($array3)));

?>