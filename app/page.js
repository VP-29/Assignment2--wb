'use client'; 
import { useState } from "react";
import Navbar from '../app/components/Navbar'; 
import StudentList from './components/StudentList';
import students from '../public/students.json'; 
import Footer from '../app/components/Footer';
import AddStudentForm from '../app/components/AddStudentForm';

export default function Home() {
  const [studentsList, setStudentsList] = useState(students);

  const addStudent = (newStudent) => {
    setStudentsList([...studentsList, { ...newStudent, id: studentsList.length + 1 }]);
  };

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-2/3">
          <StudentList students={studentsList} />
        </div>
        <AddStudentForm onAddStudent={addStudent} />
      </div>
      <Footer />
    </div>
  );
}