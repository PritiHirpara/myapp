import { useState } from "react"
import { useNavigate } from "react-router-dom";

export function DashBoard (){

    const navigate = useNavigate();

    const [inputData,setinputData] = useState({
        "firstname":"",
        "age":"",
    }); 

    

    function hendalInput(e){
          const {name,value} = e.target;
        setinputData(
            preData=>({
                ...preData,
                [name]:value
            })
        )
      
    }
    
    function hendalclick(){
        // alert("Hello Dashboard")
        //   console.log(inputData);
        navigate("/result/"+inputData.firstname + "/" + inputData.age );
    }

    return (<>
   
        <h1>Dashboard</h1>
        <input type="text" name="firstname" id="firstname" onChange={hendalInput} placeholder="Enter Name!" />
        <input type="text" name="age" id="age" onChange={hendalInput} placeholder="Enter Age!" />
        <button onClick={hendalclick}>click</button>
    </>)
    
}