<?php

class person{
    public $nama;
    public $alamat;
    public $jurusan;

    public function __construct($nama, $alamat, $jurusan)
    {
        $this->nama = $nama;
        $this->alamat = $alamat;
        $this->jurusan = $jurusan;
    }
    public function cetak(){
        echo 'Nama'.$this->nama;
        echo 'Alamat'.$this->alamat;
        echo 'Jurusan'.$this->jurusan;
    }

}
$edo = new Person('Edo Riansyah:', 'Depok', 'Teknik Informatika');
$ahmad = new Person('Ahmad Fakhri:', 'Bandung', 'Teknik Informatika');

?>