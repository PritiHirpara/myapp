import { useRef, useState } from "react";

const UseStateExample = () => {


    // var name = "ABC";
    // const [name, setName] = useState("ABC");
    // const [age, setAge] = useState("25");


    // function handleClick() {
    //     //name="XYZ";
    //     setName("XYZ")
    // }
    // console.log("Redner");

    // const handleAge = () => {
    //     setAge("30");
    // };

    // const num1 = useRef();
    // const num2 = useRef();

    
    const[num1,setNum1] = useState();
    const[num2,setNum2] = useState();
    const[output,setOutput] = useState("");

    function handleClick()
    {
        // var n1 = num1.current.value;
        // var n2 = num2.current.value;

        var total = parseInt(num1) + parseInt(num2);
        setOutput(`Total = ${total}`);
        setNum1("");
        setNum2("");
        // num1.current.value="";
        // num2.current.value="";
    }

  


    function handleTextbox1(e)
    {
        setNum1(e.target.value)
    }
    function handleTextbox2(e)
    {
        setNum2(e.target.value)
    }


    return (<>
        <h1>useState</h1>

        Number 1 <input value={num1} type="text" onChange={handleTextbox1}></input><br></br>
        Number 2 <input value={num2} type="text" onChange={handleTextbox2}></input><br></br>
        <button onClick={handleClick}>Add</button>
    
        <h1>{num1}</h1>
        {/* <h1>Welcome, {name} - {age}</h1>
        <button onClick={handleClick}>Submit</button>
        <button onClick={handleAge}>Submit</button>
        <h2>Welcome, {name}</h2> */}
    </>);
};
export default UseStateExample;