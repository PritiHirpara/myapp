// import { useState } from "react";

import { useEffect, useRef, useState } from "react";

export function ListExample() {

    // let name = ["abc","xyz","pqr"];
    // let students = {
    //     "fname":"ABC",
    //     "age":23
    // }

    let array = [1, 2, 3, 4, 5];

    // let students = [
    //     {
    //         "rollno": 1,
    //         "name": "ABC",
    //         "s1": 90,
    //         "s2": 80,
    //         "s3": 70,
    //     },
    //     {
    //         "rollno": 2,
    //         "name": "PQR",
    //         "s1": 90,
    //         "s2": 80,
    //         "s3": 70,
    //     },
    //     {
    //         "rollno": 3,
    //         "name": "XYZ",
    //         "s1": 90,
    //         "s2": 80,
    //         "s3": 70,
    //     },
    //     {
    //         "rollno": 4,
    //         "name": "XXX",
    //         "s1": 90,
    //         "s2": 80,
    //         "s3": 70,
    //     },
    // ]

    const btn = useRef();
    const rno = useRef();
    const [isReadOnly, setisReadOnly] = useState(false);
    const [opration, setOpration] = useState("add");

    const [students, setstudents] = useState([
        {
            "rollno": 1,
            "name": "ABC",
            "gujrati": 90,
            "english": 80,
            "hindi": 70,
        },
        {
            "rollno": 2,
            "name": "PQR",
            "gujrati": 95,
            "english": 85,
            "hindi": 75,
        },
    ]);

    const [formInput, setFormInput] = useState({
        "rollno": "",
        "name": "",
        "gujrati": "",
        "english": "",
        "hindi": ""
    });

    const handelInput = (e) => {
        const { name, value } = e.target;
        setFormInput(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handelClick = (e) => {
        e.preventDefault();
        // console.log(formInput);

        if (opration == "add") {
            let obj = {
                "rollno": formInput.rollno,
                "name": formInput.name,
                "gujrati": formInput.gujrati,
                "english": formInput.english,
                "hindi": formInput.hindi,
            };

            setstudents([...students, obj]);

            setFormInput({
                "rollno": "",
                "name": "",
                "gujrati": "",
                "english": "",
                "hindi": ""
            })
        }
        else {
            // alert("Update");
            var newarray = students.filter((obj) => {
                if (obj.rollno == formInput.rollno) {
                    obj.name = formInput.name;
                    obj.gujrati = formInput.gujrati;
                    obj.hindi = formInput.hindi;
                    obj.english = formInput.english;
                    return obj;
                }
                else {
                    return obj;
                }
            });
            setstudents(newarray);
            btn.current.innerHTML = "Submit";
            setisReadOnly(false);
            setOpration("add");
            setFormInput({
                "rollno": "",
                "name": "",
                "gujrati": "",
                "english": "",
                "hindi": ""
            })
        }
    };

    const handeldelete = (rno) => {
        let newlist = students.filter((obj) => {
            if (obj.rollno == rno) {
                return obj;
            }
        });
        setstudents(newlist);
    }

    // const handeledit = (rno) => {
    //     var index = students.findIndex((obj) => obj.rollno == rno);
    //     //    alert(index);
    //     var obj = students[index];
    //     // console.log(obj);
    //     setFormInput(prevState => ({
    //         ...prevState,
    //         name: obj.name
    //     }));
    //     // formInput.name = obj.name;
    // }

    function handeledit(rno) {
        var index = students.findIndex((obj) => obj.rollno == rno);
        //    alert(index);
        var obj = students[index];
        // console.log(obj);
        setFormInput(prevState => ({
            ...prevState,
            rollno: obj.rollno,
            name: obj.name,
            gujrati: obj.gujrati,
            english: obj.english,
            hindi: obj.hindi,
        }));

        btn.current.innerHTML = "Update";
        setisReadOnly(true);
        setOpration("update");

    }

    useEffect(() => {
        if (localStorage.getItem("stud")) {
            setstudents(JSON.parse(localStorage.getItem("stud")));
        }
        else {
            localStorage.setItem("stud", JSON.stringify([]));
        }
    }, []);

    useEffect(() => {
        if (localStorage.getItem("stud")) {
            localStorage.setItem("stud", JSON.stringify(students));
        }
    }, [students]);

    return (<>
        <h1>List Example</h1>
        {/* <h2>{name[3]}</h2> */}
        {/* <h2>{students.age}</h2> */}
        {/* <h2>{students[2].age}</h2> */}

        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h4>Form</h4>

                    <form method="POST" onSubmit={handelClick}>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Roll No</label>
                            <div class="col-sm-10">
                                <input ref={rno} readOnly={isReadOnly} type="number" name="rollno" onChange={handelInput} id="rollno" value={formInput.rollno} placeholder="Enter Roll No" class="form-control"></input>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-10">
                                <input type="text" value={formInput.name} name="name" id="name" onChange={handelInput} placeholder="Enter Name" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Gujrati</label>
                            <div class="col-sm-10">
                                <input type="number" name="gujrati" id="gujrati" onChange={handelInput} value={formInput.gujrati} placeholder="Enter Marks Of Gujrati" class="form-control"></input>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">English</label>
                            <div class="col-sm-10">
                                <input type="number" name="english" id="english" onChange={handelInput} value={formInput.english} placeholder="Enter Marks Of English" class="form-control"></input>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Hindi</label>
                            <div class="col-sm-10">
                                <input type="number" value={formInput.hindi} name="hindi" id="hindi" onChange={handelInput} placeholder="Enter Marks Of Hindi" class="form-control"></input>
                            </div>
                        </div>
                        <div class="mb-3">
                            <button type="submit" ref={btn} class="btn btn-primary mb-3">Submit</button>
                        </div>
                    </form>
                    
                </div>
                <div className="col-6">
                    <h4>Student List</h4>
                    <table className="table">
                        <thead>
                            <th>Roll No</th>
                            <th>Name</th>
                            <th>S1</th>
                            <th>S2</th>
                            <th>S3</th>
                            <th>Total</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            {
                                students.map((obj) => {
                                    var total = obj.gujrati + obj.english + obj.hindi;
                                    return (
                                        <tr>
                                            <td>{obj.rollno}</td>
                                            <td>{obj.name}</td>
                                            <td>{obj.gujrati}</td>
                                            <td>{obj.english}</td>
                                            <td>{obj.hindi}</td>
                                            <td>{total}</td>
                                            <td>
                                                <button type="button" onClick={(e) => handeldelete(obj.rollno)} style={{
                                                    marginRight:
                                                        "10px"
                                                }} className="btn btn-danger">Delete</button>

                                                <button type="button" onClick={(e) => handeledit(obj.rollno)} className="btn btn-primary">Edit</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <h1>Array Table</h1>
            <table className="table text-center">
                <thead>
                    <th>Roll No</th>
                </thead>
                <tbody>
                    {
                        array.map((item) => {
                            return (
                                <tr>
                                    <td>{item}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </>);
}

