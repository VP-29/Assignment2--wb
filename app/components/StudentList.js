import { useState, useEffect } from "react";

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("/students.json")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-xl font-bold my-4">Student List</h2>
      <ul className="border p-4 rounded">
        {students.map((student) => (
          <li key={student.id} className="p-2 border-b">
            {student.firstName} {student.lastName} - Grade {student.grade}
          </li>
        ))}
      </ul>
    </div>
  );
}
