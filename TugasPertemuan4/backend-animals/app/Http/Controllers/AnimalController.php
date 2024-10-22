<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    //
    public $namahewan = ["Teringgiling", "Harimau sumatra", "amuba"];
    public function index() {
        foreach ($this->namahewan as $index => $animal) {
            echo "$index: $animal <br>";
        }
     }
     public function store(Request $request) {
        array_push($this->namahewan, $request->newanimals);
        echo "hewanbaru: $request->newanimals";
     }

     public function update(Request $request, $id) {
        if (isset($this->namahewan[$id])) {
            $this->namahewan[$id] = $request->newanimals;
            echo "hewanganti: $request->newanimals";

        } else {
            echo "hewan pada index $id tidak ditemukan. <br>";
        }
     }
     // Metode destroy untuk menghapus data hewan
     public function destroy($id) {
        if (isset($this->namahewan[$id])) {
          unset($this->namahewan[$id]);
          echo "hewan pada index $id  dihapus. <br>";

          $this->namahewan = array_values($this->namahewan);
     } else {
        echo "hewan pada index $id tidak ditemukan. <br>";
     }
   }



}
