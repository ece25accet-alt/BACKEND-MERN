function StudentProfile() {
  return (
    <>
    <div className="w-80 p-5 bg-blue-100 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-blue-700 mb-3 text-center">
        Student Profile
      </h1>

      <ul className="space-y-2">
        <li><b>Student Name:</b> Manikandan</li>
        <li><b>Course:</b> MERN Stack</li>
        <li><b>City:</b> Chennai</li>
        <li><b>Institute:</b> ABC Institute</li>
      </ul>
    </div>
    </>
  );
}

export default StudentProfile;