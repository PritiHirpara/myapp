import React, { useState } from "react";

function StudentDashboard() {
//   // number state
//   const [marks, setMarks] = useState(50);

//   // string state
//   const [name, setName] = useState("Rahul");

//   // object state
//   const [profile, setProfile] = useState({ course: "React", year: 2025 });

//   // array state
//   const [skills, setSkills] = useState(["HTML", "CSS"]);

//   const addSkill = () => {
//     setSkills([...skills, `Skill ${skills.length + 1}`]);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>🎓 Student Dashboard</h2>

//       <h3>Student Info</h3>
//       <p>Name: {name}</p>
//       <p>Marks: {marks}</p>
//       <p>Course: {profile.course}</p>
//       <p>Year: {profile.year}</p>

//       <h3>Skills</h3>
//       <ul>
//         {skills.map((s, i) => (
//           <li key={i}>{s}</li>
//         ))}
//       </ul>

//       <h3>Actions</h3>
//       <button onClick={() => setName("Pooja")}>Change Name</button>
//       <button onClick={() => setMarks(marks + 10)}>Increase Marks</button>
//       <button onClick={() => setProfile({ ...profile, course: "Flutter" })}>
//         Change Course
//       </button>
//       <button onClick={addSkill}>Add Skill</button>
//     </div>
//   );


// example 2

//   const [student, setStudent] = useState({
//     name: "",
//     age: "",
//     course: ""
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setStudent({
//       ...student,
//       [name]: value, // dynamic key update
//     });
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>🎓 Student Form</h2>

//       <input
//         type="text"
//         name="name"
//         placeholder="Enter Name"
//         value={student.name}
//         onChange={handleChange}
//       />
//       <br /><br />

//       <input
//         type="number"
//         name="age"
//         placeholder="Enter Age"
//         value={student.age}
//         onChange={handleChange}
//       />
//       <br /><br />

//       <input
//         type="text"
//         name="course"
//         placeholder="Enter Course"
//         value={student.course}
//         onChange={handleChange}
//       />
//       <br /><br />

//       <h3>📌 Student Details</h3>
//       <p>Name: {student.name}</p>
//       <p>Age: {student.age}</p>
//       <p>Course: {student.course}</p>
//     </div>
//   );


// example 3

const [students, setStudents] = useState([
    { id: 1, name: "Rahul", age: 20, course: "React" },
    { id: 2, name: "Pooja", age: 22, course: "Flutter" }
  ]);

  // Object state for new student form
  const [newStudent, setNewStudent] = useState({
    name: "",
    age: "",
    course: ""
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  // Add student
  const addStudent = () => {
    if (newStudent.name && newStudent.age && newStudent.course) {
      setStudents([
        ...students,
        {
          id: students.length + 1,
          ...newStudent,
        },
      ]);
      // Reset form
      setNewStudent({ name: "", age: "", course: "" });
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🎓 Student Management System</h2>

      {/* Form */}
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={newStudent.name}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="number"
        name="age"
        placeholder="Enter Age"
        value={newStudent.age}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="text"
        name="course"
        placeholder="Enter Course"
        value={newStudent.course}
        onChange={handleChange}
      />
      <br /><br />

      <button onClick={addStudent}>Add Student</button>

      <h3>📋 Student List</h3>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            <strong>{s.id} {s.name}</strong> ({s.age} years) - {s.course}
          </li>
        ))}
      </ul>
    </div>
  );
 }

export default StudentDashboard;
