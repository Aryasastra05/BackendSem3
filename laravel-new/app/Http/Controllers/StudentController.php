<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
class StudentController extends Controller
{
    //
    public function index(){
        //
        //query builder student = DB::('students)=>get
        $students = Student::all(); //menggunakan eloquent
        $data = [
            'message' => 'Berhasil akses data',
            'data' => $students 
        ];
        return response()->json($data, 200);

    }
    public function store(Request $request){
        $input =[
            'nama' => $request->nama,
            'nim'=> $request->nim,
            'jurusan'=> $request->jurusan,
            'email' => $request->email
        ];
        $student = Student::create($input);
        $data = [
            'message' => 'Data Berhasil Ditambah',
            'data' => $student
        ];
        return response()->json($data,200);
    }
    public function update($id, Request $request){
        // cari courses berdasarkan id
        $student = Student::find($id); // SELECT * FROM courses WHERE id = $id;

        

       //simpan perubahan
       $student->update([
        'nama' => $request->nama,
            'nim'=> $request->nim,
            'jurusan'=> $request->jurusan,
            'email' => $request->email
        
       ]);
       $data = [
        'message' => 'Data Berhasil Diupdate',
        'data' => $student
    ];
    return response()->json($data, 200);



    }
    public function destroy($id){
        // cari courses berdasarkan id
        $student = Student::find($id); // SELECT * FROM courses WHERE id = $id;

        $data = [
            'message' => 'Data Berhasil Dihapus',
            'data' => $student
        ];

        // hapus courses
        $student->delete();

        return response()->json($data, 200);

    }
}
