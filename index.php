<?php
require 'classroom-data.php';
$students = generateStudents();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ?>
    <select id="cass">
        <option value="">Válasz osztályt</option>
        <?php foreach(array_keys($students)as $class):?>
            <option value=<?="$class"?>>
            <?=$class?>
            </option>
        <?php endforeach; ?>
    </select>
    <button onclick="showAll()">Teljes iskolanévsor</button>
    <button onclick="showClass()">Kiválasztott osztály</button>
    <div id="result"></div>
    <script src="script.js"></script>
</body>
</html>

