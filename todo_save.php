<h1>todo</h1>
<?php
$todo = $_POST["todo"];
$working = $_POST["working"];
$done = $_POST["done"];
$name = $_POST["name"];

$json = file_get_contents(__DIR__ . 'user.json');
if ($json === false) {echo "<h1>file not found</h1>";}
$data = json_decode($json, true);

$data["user"]["name"] = $name;
$data["user"]["tasklist"]["todo"] = $todo;
$data["user"]["tasklist"]["working"] = $working;
$data["user"]["tasklist"]["done"] = $done;
print_r($data);

$data = json_encode($data, JSON_UNESCAPED_UNICODE);
$result = file_put_contents('user.json' , $data);
if ($result) {
    echo "書き込みました";
} else {
    echo "書き込みできませんでした";
}
?>