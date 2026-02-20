import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux";

export function Redux_StudentEx() {

    let sub1 = useRef();
    let sub2 = useRef();
    let sub3 = useRef();

    const total = useSelector(state=>state.total);
    const per = useSelector(state=>state.per);


    var dispatch = useDispatch();

    const handelTotal = () => {
        dispatch({type:"GETTOTAL",payload: {
            "sub1":sub1.current.value,
            "sub2":sub2.current.value,
            "sub3":sub3.current.value,
        }});
    }

    const handelPer = () => {
        dispatch({type:"GETPER",payload:{
            "sub1":sub1.current.value,
            "sub2":sub2.current.value,
            "sub3":sub3.current.value,
        }});
    }

    return (<>

        <label
        >Roll No: </label>
        <input type="number" />
        <label>Name: </label>
        <input type="text" />
        <label>Sub1: </label>
        <input type="number" ref={sub1}/>
        <label>Sub2</label>
        <input type="number" ref={sub2}/>
        <label>Sub3</label>
        <input type="number" ref={sub3}/>
        <button type="button" onClick={handelTotal}>Total</button>
        <button type="button" onClick={handelPer}>Per</button>

        <h1>Total = {total}</h1>
        <h1>Per = {per}</h1>

    </>)
}