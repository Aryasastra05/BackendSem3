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
       
        if ($students->isEmpty()) {
            
            $data = [
                'message' => 'Data tidak ditemukan',
                
            ];
        }else {
            $data = [
                'message' => 'Data Berhasil DI akses',
                'data' => $students
            ];

        }
        return response()->json($data, 200);

    }
    public function store(Request $request){
      if(!$request->has('nama', 'nim', 'jurusan', 'email')){
        $data = [
            'message' => 'Data Gagal Di tambahkan',
            
        ];
        return response()->json($data,404);
    
    } else {
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
       
    }
    public function update($id, Request $request){
        // cari courses berdasarkan id
        $student = Student::find($id); // SELECT * FROM courses WHERE id = $id;

        if ($student) {
            //simpan perubahan
            $student->update([
             'nama' => $request->nama ?? $student->nama,
                 'nim'=> $request->nim ?? $student->nim,
                 'jurusan'=> $request->jurusan ?? $student->jurusan,
                 'email' => $request->email ?? $student->email
             
            ]);
            $data = [
             'message' => 'Data Berhasil Diupdate',
             'data' => $student
         ];
         return response()->json($data, 200);
            
        }else{
            $data = [
                'message' => 'Data tidak diubah',
                
            ];
            return response()->json($data, 404);
        }







    }
    public function destroy($id){
        // cari courses berdasarkan id
        $student = Student::find($id); // SELECT * FROM courses WHERE id = $id;

        if($student){
            $data = [
                'message' => 'Data Berhasil Dihapus',
                'data' => $student
            ];
    
            // hapus courses
            $student->delete();
    
            return response()->json($data, 200);

        }else{
            $data = [
                'message' => 'Data tidak ditemukan',
                
            ];
            return response()->json($data, 404);
        }

        

    }
    public function show($id){
       $student = Student::find($id);
       if ($student){
           $data= [
            'message' => 'Menampilkan detail Data',
            'data' => $student
        ];
        return response()->json($data, 200);

        }else{
            $data = [
                'message' => 'Data tidak ditemukan',
                
            ];
            return response()->json($data, 404);
        }
    }
}
