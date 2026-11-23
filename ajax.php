<?php

header('Content-type: application/jason; charset=utf-8');

$students = json_decode(file_get_contents('students.json'), true);

$class = $_GET['class']?? '';
if ( $class === 'all'){
    $result = [];
    foreach ($students as $classStudnets){
        $result = array_merge($result, $classStudent);
    }
    
}
elseif (isset($students[$class])){
    $result = $students[$class];
}
echo json_encode($result, JSON_UNESCAPED_UNICODE);