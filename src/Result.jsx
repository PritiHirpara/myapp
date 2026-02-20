import { useParams } from "react-router-dom"

export function Result(){
    const {name,age} = useParams();
    return (<>
        <h1>Result :</h1>
        <h2>Firstname : {name}</h2>
        <h2>Age : {age}</h2>
    </>)
}