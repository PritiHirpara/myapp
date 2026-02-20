import { useEffect, useRef, useState } from "react";
// import "./assets/App.css";
export function TodoListExample() {
    const btn = useRef();
    const [isReadOnly, setIsReadOnly] = useState(false);
    const [operation, setOperation] = useState("add");
    const [formInput, setFormInput] = useState([]);
    const [nameData, setNameData] = useState({
        "id": "",
        "title": "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNameData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleClick = (e) => {
        e.preventDefault();
        if (operation == "add") {
            let obj = {
                id: Date.now(),
                title: nameData.title,
            };
            setFormInput([...formInput, obj]);
            setNameData({
                "id": "",
                "title": "",
            })
        }
        else {
            var Newname = formInput.filter((obj) => {
                if (obj.id == nameData.id) {
                    obj.title = nameData.title;
                    return obj;
                }
                else {
                    return obj;
                }
            })
            setFormInput(Newname);
            btn.current.innerHTML = "Add";
            setIsReadOnly(false);
            setOperation("add");
            setNameData({
                "title": "",
                "id": "",
            })
        }
    };
    useEffect(() => {
        if (localStorage.getItem("add")) {
            setFormInput(JSON.parse(localStorage.getItem("add")))
        }
        else {
            localStorage.setItem("add", JSON.stringify([]))
        }
    }, [])
    useEffect(() => {
        if (localStorage.getItem("add")) {
            localStorage.setItem("add", JSON.stringify(formInput))
        }
    }, [formInput])
    function handleDelete(remove) {
        let Newname = formInput.filter((obj) => {
            if (obj.id != remove) {
                return obj;
            }
        });
        setFormInput(Newname);
    };
    function handleEdit(remove) {
        var index = formInput.findIndex((obj) => obj.id == remove);
        var obj = formInput[index];
        setNameData((prevState) => ({
            ...prevState,
            title: obj.title,
            id: obj.id
        }));
        btn.current.innerHTML = "Submit";
        setIsReadOnly(true);
        setOperation("submit");
    }
    return (<>
        <div className="container">
            <div className="row mt-5">
                <div className="col-12">
                    <form className="todo-form" method="POST" onSubmit={handleClick} >
                        <tr>
                            <h1>Todo App</h1>
                            <td><label className="title-inp"> Title:</label></td>
                            <td><input className="inp-name" type="text" name="title" value={nameData.title} onChange={handleChange} ></input></td>
                            <td><button className="btn-submit" ref={btn} type="submit">Add</button></td>
                        </tr>
                    </form>
                </div>
                <div className="col-12">
                    <table className="todo-table">
                        <thead>
                            <tr>
                                <th colSpan={2} className="text-center">Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                formInput.map((obj) => {
                                    return (
                                        <tr>
                                            <td>{obj.title}</td>
                                            <td><button className="btn-delete" type="button" onClick={(e) => handleDelete(obj.id)}> <img height={20} src="image/delete.png" alt="" /> Delete</button>

                                                <button className="btn-edit" type="button" onClick={(e) => handleEdit(obj.id)}> Edit </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>)
}