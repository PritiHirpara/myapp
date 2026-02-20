import { Component2 } from "./component2";
import UserContext from "./UserContext";

export function Component1(){
    let name = "ABC";
    return (<>
        <h1>Component 1 </h1>
        {/* <h1>Component 1 : {name}</h1> */}
        {/* <Component2/> */}
        {/* <Component2 name={name}/> */}
        <UserContext.Provider value={name}>
            <Component2/>
        </UserContext.Provider>
    </>)
}