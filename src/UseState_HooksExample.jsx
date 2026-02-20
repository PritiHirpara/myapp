// function HooksExample(){
import { useState } from "react";
// }
// arrow function
const UseState_HooksExample = () => {
    // let name = "ABC";
    const [name, setName] = useState("ABC");
    const [age, setAge] = useState(23);
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [num3, setNum3] = useState();
    let obj = {
        "rollno": 1,
        "name": "ABC",
        "total": 300
    }
    const [student, setStudent] = useState(obj);
    const changeName = () => {
        // name = "XYZ";
        // console.log(name);
        setName("XYZ");
        setAge(25);
        setStudent(preState => ({
            ...preState,
            name: "XYZ",
            total: 400
        }));
    };
    const hendleNum1Input = (e) => {
        // console.log("call");
        // console.log(e);
        console.log(e.target.name);
        setNum1(e.target.value);
    }
    const hendleNum2Input = (e) => {
        // console.log("call");
        // console.log(e);
        // console.log(e.target.value);
        setNum2(e.target.value);
    }



    const[formInput,setFormInput] = useState({
        "firstname":"",
        "mobile":"",
        "email":"",
        "password":""
    });

    const handleInput = (e) =>{
        const {name,value} = e.target;
        setFormInput(prevState=>({
            ...prevState,
            [name]:value
        }));
    };


    const handleClick = (e) =>{
        e.preventDefault();
        console.log(formInput);
    };

    return (<>
        <h1>useState Hook</h1>
        <h2>{name} - {age}</h2>
        <h2>{student.rollno}</h2>
        <h2>{student.name}</h2>
        <h2>{student.total}</h2>
        <input type="text" name="txtnum1" id="txtnum1" onChange={hendleNum1Input} />
        <input type="text" name="txtnum2" id="txtnum2" onChange={hendleNum2Input} />
        <input type="text" name="txtnum3" id="txtnum3" onChange={(e) => { setNum3(e.target.value); }} />
        <button onClick={changeName}>Submit</button>
        <h2>{num1} + {num2} + {num3} = {parseInt(num1) + parseInt(num2) + parseInt(num3)}</h2>


         <form method="POST" onSubmit={handleClick}>
            Name <input type="text" name="firstname" value={formInput.firstname} onChange={handleInput}></input><br></br>
            Mobile <input type="tel"  name="mobile" value={formInput.mobile} onChange={handleInput}></input><br></br>
            Email <input type="email"  name="email" value={formInput.email} onChange={handleInput}></input><br></br>
            Password <input type="password" name="password" value={formInput.password} onChange={handleInput}></input><br></br>
            <button type="submit">Sign up</button>
        </form>
    </>)
}
export default UseState_HooksExample;