'use client'; 
import { useState } from "react";

export default function AddStudentForm({ onAddStudent }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [currentGrade, setCurrentGrade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      firstName,
      lastName,
      dateOfBirth,
      currentGrade,
    };

    onAddStudent(newStudent);

    setFirstName("");
    setLastName("");
    setDateOfBirth("");
    setCurrentGrade("");
  };

  return (
    <div className="w-full md:w-1/3 p-6">
      <h2 className="text-xl font-bold mb-4">Add New Student</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-gray-600">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-gray-600">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-gray-600">Date of Birth</label>
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-gray-600">Current Grade</label>
          <input
            type="text"
            value={currentGrade}
            onChange={(e) => setCurrentGrade(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Student
        </button>
      </form>
    </div>
  );
}