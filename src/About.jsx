import { useSelector } from "react-redux";

function About(){
     const count = useSelector(state=>state);
    return (<>  
        <h1>Count :: {count}</h1>
    </>)
};

export default About;