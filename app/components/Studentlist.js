//this will display the students in the server side
export default function Studentlist({ students }) {
    return (
      <div className="w-full bg-gray-100 p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-600">Student List</h2>
        <ul>
          {students.map((student) => (
            <li key={student.id} className="mb-4 p-4 text-gray-600 rounded-lg shadow">
              <p className="font-semibold">
                {student.firstName} {student.lastName}
              </p>
              <p className="text-sm text-gray-600">
                <strong>DOB:</strong> {student.dateOfBirth}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Grade:</strong> {student.currentGrade}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }