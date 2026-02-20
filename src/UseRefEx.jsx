import { useRef } from "react";

const UseRefEx = () => {

    const firstname = useRef();
    const title = useRef();

    const hendelClick = () => {

        // let fname = firstname.current.value;
        // alert(fname);
        // firstname.current.focus();
        // firstname.current.style.backgroundColor="red";
        // alert(firstname.current.type);
        // alert(firstname.current.placeholder);
        //    firstname.current.placeholder = "Good"
        title.current.innerHTML = "Hello Use Ref";

    }

    return (<>

        <h1 ref={title}>Use Ref</h1>
        <input type="text" ref={firstname} placeholder="Enter Name"></input>
        <button onClick={hendelClick}>click</button>

    </>);

}

export default UseRefEx;