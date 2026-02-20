import { useEffect, useState } from "react";
import { Menu } from "./Menu";

export function Contact() {

    const [name, setName] = useState("ABC");
    const [age, setAge] = useState(25);

    const changename = () => {
        setName("XYZ");
    }

    const changeage = () => {
        setAge(23)
    }

    useEffect(() => {
        console.log("All time");
    },)

    useEffect(() => {
        console.log("first time only");
    }, [])

    useEffect(() => {
        console.log("first time only and when name change");
    }, [name])

    useEffect(() => {
        console.log("first time only and when age change");
    }, [age])

    useEffect(() => {
        console.log("first time only and when name and age change");
    }, [name, age])
    
    return (<>
        <h1>Contact</h1>
        <h2>My Name Is {name}</h2>
        <button type="button" onClick={changename}>click</button>
        <h2>My Age Is {age}</h2>
        <button type="button" onClick={changeage}>click</button>
    </>)

}