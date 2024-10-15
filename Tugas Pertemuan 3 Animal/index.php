<?php

require 'Tugas1Animal.php';

$initialData = ["Monyet", "Gajah", "Jerapah"];

$animal = new Animal($initialData);

echo "Index - Menampilkan seluruh hewan yg ada:<br>";
$animal->index();
echo"<br>";

echo "Store - menambahkan hewan baru yaitu Siput: <br>";
$animal->store("Siput");
$animal->index();
echo "<br>";

echo "Update - mengupdate data hewan pada index 0 menjadi Kucing: <br>";
$animal->update(0, "Kucing");
$animal->index();
echo "<br>";

echo "Destroy - menghapus hewan pada index 1: <br>";
$animal->destroy(1);
$animal->index();
echo "<br>";

?>