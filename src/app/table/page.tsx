// components/StudentTable.tsx
import React from "react";

const students = [
  { No: 1, NIM: "220101", Nama: "Budi Santoso", Gender: "L", Prodi: "Informatika", Kelas: "IF-1", Semester: 4, Alamat: "Jakarta", Hobby: "Coding", Citacita: "Software Engineer" },
  { No: 2, NIM: "220102", Nama: "Ani Lestari", Gender: "P", Prodi: "Sistem Informasi", Kelas: "SI-1", Semester: 4, Alamat: "Bandung", Hobby: "Membaca", Citacita: "Data Analyst" },
  { No: 3, NIM: "220103", Nama: "Joko Wijaya", Gender: "L", Prodi: "Teknik Elektro", Kelas: "TE-1", Semester: 4, Alamat: "Surabaya", Hobby: "Olahraga", Citacita: "Network Engineer" },
];

const StudentTable: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">Daftar Mahasiswa</h2>

      {/* Responsive Card for Mobile */}
      <div className="grid gap-4 sm:block lg:hidden mt-4">
        {students.map((student) => (
          <div key={student.NIM} className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
            <p><strong>NIM:</strong> {student.NIM}</p>
            <p><strong>Nama:</strong> {student.Nama}</p>
            <p><strong>Gender:</strong> {student.Gender}</p>
            <p><strong>Prodi:</strong> {student.Prodi}</p>
            <p><strong>Kelas:</strong> {student.Kelas}</p>
            <p><strong>Semester:</strong> {student.Semester}</p>
            <p><strong>Alamat:</strong> {student.Alamat}</p>
            <p><strong>Hobby:</strong> {student.Hobby}</p>
            <p><strong>Cita-cita:</strong> {student.Citacita}</p>
          </div>
        ))}
      </div>

      {/* Table for Larger Screens */}
      <div className="overflow-x-auto hidden lg:block mt-4">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border">No</th>
              <th className="py-2 px-4 border">NIM</th>
              <th className="py-2 px-4 border">Nama</th>
              <th className="py-2 px-4 border">Gender</th>
              <th className="py-2 px-4 border">Prodi</th>
              <th className="py-2 px-4 border">Kelas</th>
              <th className="py-2 px-4 border">Semester</th>
              <th className="py-2 px-4 border">Alamat</th>
              <th className="py-2 px-4 border">Hobby</th>
              <th className="py-2 px-4 border">Cita-cita</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.NIM} className="border-b">
                <td className="py-2 px-4 border">{student.No}</td>
                <td className="py-2 px-4 border">{student.NIM}</td>
                <td className="py-2 px-4 border">{student.Nama}</td>
                <td className="py-2 px-4 border">{student.Gender}</td>
                <td className="py-2 px-4 border">{student.Prodi}</td>
                <td className="py-2 px-4 border">{student.Kelas}</td>
                <td className="py-2 px-4 border">{student.Semester}</td>
                <td className="py-2 px-4 border">{student.Alamat}</td>
                <td className="py-2 px-4 border">{student.Hobby}</td>
                <td className="py-2 px-4 border">{student.Citacita}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
