<?php
//menciptakan objek
require 'construct.php';
$edo = new Person('Edo Riansyah', 'Depok', 'Teknik Informatika');
$ahmad = new Person('Ahmad Fakhri', 'Bandung', 'Teknik Informatika');

$edo->cetak();
$ahmad->cetak();



?>