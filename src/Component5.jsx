import { useContext } from "react"
import UserContext from "./UserContext"

export function Component5(){
    const name = useContext(UserContext);
    return (<>
        <h1>Component 5 : {name}</h1>
    </>)
}