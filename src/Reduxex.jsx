import { useDispatch, useSelector } from "react-redux"
import About from "./About";

export function Reduxex(){

    const count = useSelector(state=>state);

    const dispatch = useDispatch();

    return (<>
    
    <h1>Count Data</h1>
    <h1>Count :: {count}</h1>
    <button onClick={(e)=>dispatch({type:"ADD",playload:10})}>Add</button>
    <button onClick={(e)=>dispatch({type:"MINUS"})}>Minus</button>

    <About/>
        
    
    </>)
}