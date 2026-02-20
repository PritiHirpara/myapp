import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export function GetProduct_Api(){

  // const[data,setData]=useState([]);
  const[data,setData]=useState();

  const navigate = useNavigate();


    // useEffect(()=>{

    //     axios.get("https://dummyjson.com/recipes")
    //     .then((response)=>{
    //         if(response.status==200)
    //         {
    //             const jsondata = response.data.recipes;
    //             console.log(jsondata);
    //             setData(jsondata);
    //         }
    //     }).catch((error)=>{
    //         console.log(error);
    //     });
   

    // },[])

    function getdata(){
      
       axios.get("https://studiogo.tech/student/studentapi/getEmployee.php")
        .then((response)=>{
            if(response.status==200)
            {
                const jsondata = response.data.data;
                console.log(jsondata);
                setData(jsondata);
            }
        }).catch((error)=>{
            console.log(error);
        });
    }
    
    useEffect(()=>{
       getdata();
    },[]);

    const handalDelete = (eid) =>{
      // alert(eid)
      // var parms = {
      //   "eid":eid
      // };
      const formdata = new FormData();
        formdata.append("eid", eid);
        axios.post("https://studiogo.tech/student/studentapi/deleteEmployeeNormal.php",formdata)
        .then((response)=>{
            if(response.status==200)
            {
                const jsondata = response.data;
                if(jsondata.status==true)
                {
                  console.log(jsondata.message);
                  // getdata();
                   setData(prev => prev.filter(item => item.eid !== eid)); 
                }
                else
                {
                  console.log(jsondata.message);
                }
                // console.log(jsondata);
                // setData(jsondata);
            }
        }).catch((error)=>{
            console.log(error);
        });
    }

    function handalEdit(eid){
      navigate("/EditEmployee/"+eid);
    }
  
    return (<>

    <table className="table">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          data && data.map((row)=>{
            return (<>
              <tr>
                <td>{row.eid}</td>
                <td>{row.ename}</td>
               <td>{row.salary}</td>
               <td>
                <button onClick={(e)=>handalDelete(row.eid)}>Delete</button>
                <button onClick={(e)=>handalEdit(row.eid)}>Edit</button>
               </td>
              </tr>
            </>)
          })
        }
      </tbody>
    </table>
    </>)
}