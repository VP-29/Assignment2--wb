import { useState } from "react";

export default function AddStudentForm({ onAddStudent }) {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    grade: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !student.firstName ||
      !student.lastName ||
      !student.dob ||
      !student.grade
    ) {
      alert("Please fill out all fields");
      return;
    }
    onAddStudent(student);
    setStudent({ firstName: "", lastName: "", dob: "", grade: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto border p-4 rounded-lg mt-4">
      <h2 className="text-xl font-bold mb-2">Add New Student</h2>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={student.firstName}
        onChange={handleChange}
        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={student.lastName}
        onChange={handleChange}
        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
      />
      <input
        type="date"
        name="dob"
        value={student.dob}
        onChange={handleChange}
        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
      />
      <input
        type="number"
        name="grade"
        placeholder="Grade"
        value={student.grade}
        onChange={handleChange}
        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
      />
      <button
        type="submit"
        className="bg-blue-900 text-white p-2 rounded w-full mt-5"
      >
        Add Student
      </button>
    </form>
  );
}
