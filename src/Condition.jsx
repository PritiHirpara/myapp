import { useState } from "react";

export function Condition(){
    let age = 20;
    const [isshow,setIsshow] = useState(true);
    // let output;
    // if(age>=18)
    // {
    //     output = <h1>Good</h1>
    // }
    // else
    // {
    //     output = <h1>Not Good</h1>

    // }

    function hendelclick(){
        if(isshow)
        {
            setIsshow(false);
        }
        else
        {
            setIsshow(true);
        }
    }
    return (<>
    
        <h1>Condition</h1>
        {/* {output} */}
        {
            (isshow) && <h1>I Am Visible</h1>

            // (age>=18) && <div>I am 18+</div>
            //  (age>=18) ? <div>I am 18+</div> : <div>Not Allowed</div>
        }
        {/* <button onClick={(e)=>{setIsshow(false)}}>click</button> */}
        <button onClick={hendelclick}>{ isshow ? "HIDE" : "SHOW" }</button>
    </>)
}