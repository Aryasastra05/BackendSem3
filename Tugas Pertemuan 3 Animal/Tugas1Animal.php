<?php

class animal{
   
    public function __construct($namahewan)
    {
        $this->namahewan = $namahewan;
        
    }
    // Metode index ini untuk menampilkan semua data hewan
     public function index() {
        foreach ($this->namahewan as $index => $animal) {
            echo "$index: $animal <br>";
        }
     }
     // Metode store untuk menambahkan data hewaN
     public function store($newAnimal) {
        array_push($this->namahewan, $newAnimal);
     }
    // Metode update untuk memebarui data hewan
     public function update($index, $newData) {
        if (isset($this->namahewan[$index])) {
            $this->namahewan[$index] = $newData;

        } else {
            echo "hewan pada index $index tidak ditemukan. <br>";
        }
     }
     // Metode destroy untuk menghapus data hewan
     public function destroy($index) {
        if (isset($this->namahewan[$index])) {
          unset($this->namahewan[$index]);

          $this->namahewan = array_values($this->namahewan);
     } else {
        echo "hewan pada index $index tidak ditemukan. <br>";
     }
   }
}


?>