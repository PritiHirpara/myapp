import { useEffect, useState } from "react";
export function DarkLight(){
     const [theme,setTheme]=useState(false);

    const handleClick = ()=>{
        setTheme(!theme)
    }

    useEffect(()=>{
        if(theme==true){
            document.body.classList.add("dark");
        }
        else{
            document.body.classList.remove("dark");

        }

    },[theme])
    return (<>
    
     <button className={theme ? "dark" : "light"} onClick={handleClick}>{theme?"Light":"Dark"}</button>
        
    <h1>Hello ' From India</h1>
    {/* <Clock/> */}
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, vero ipsam? Dolorum harum recusandae omnis amet voluptas debitis nesciunt dicta a fugiat molestiae, placeat quis nostrum, animi mollitia esse cumque?</p>
    
    <button className={theme ? "dark" : "light"} type="button">India</button>
    </>)
}