import { Component3 } from "./component3";

export function Component2(props){
    return (<>
        <h1>Component 2 :{props.name}</h1>
        {/* <h1>Component 2</h1> */}
        <Component3/>
        {/* <Component3 name={props.name}/> */}
    </>)
}