import { useState } from "react";

const StudentEx = () => {

    const [student, setStudent] = useState([
        { id: 1, name: "Priti", age: 23, course: "Flutter" },
        { id: 2, name: "Kriti", age: 23, course: "React" }
    ]);

    const [newstudent, setNewStudent] = useState({
        name: "",
        age: "",
        course: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewStudent(
            (preState) => ({
                ...preState,
                [name]: value
            })
        )
    }

    const addNewStudents = (e) => {

        setStudent(
            (students) => ([
                ...students,
                {

                    id: students.length + 1,
                    ...newstudent,

                }

            ]
            )

        )

        // setStudent(
        //     (students) => ([
        //         ...students,
        //        {
        //          id: students.length + 1,
        //         ...newstudent,
        //        },
        //     ]),

        //     setNewStudent({ name: "", age: "", course: "" }),

        // )


        //      setStudents([
        //     ...students,
        //     {
        //       id: students.length + 1,
        //       ...newStudent,
        //     },
        //   ]);
    }

    return (<>

        <div style={{ padding: "10px" }}>

            <h1>🎓 Student Management System</h1>
            <input type="text" placeholder="Enter Name" name="name" onChange={handleChange} /><br /><br />
            <input type="text" placeholder="Enter Age" name="age" onChange={handleChange} /><br /><br />
            <input type="text" placeholder="Enter Course" name="course" onChange={handleChange} /><br /><br />
            <button onClick={addNewStudents}>Submit</button><br /><br />

            <h3>📋 Student List</h3>

            <ul>
                {student.map((s) => (
                    <li> <b>{s.id} {s.name}  </b> ({s.age} years) - {s.course} </li>
                ))}
            </ul>

        </div>

    </>);
}

export default StudentEx;