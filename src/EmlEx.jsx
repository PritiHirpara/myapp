import { useState } from "react"

export function EmlEx(){

    const [capital,setCapital] = useState();
    const [month,setMonth] = useState();
    const [rate,setRate] = useState();

    const handelClick = () =>{

        let p = parseFloat(capital);
        let n = parseInt(month);
        let r = parseFloat(rate) / 12 / 100;

        let emlvalue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        let totalamt = emlvalue * n;
        let totalInterest = totalamt - p;

        console.log(emlvalue);
        console.log(totalInterest);
        console.log(totalamt);

        // 4280.374089423373
        // 1364.4890730804764
        // 51364.48907308048

    }

    return (<>
    
        <div className="container mt-5">
            <h1>Emi Calculate</h1>
            {/* <form> */}
            <input type="number" name="capital" id="capital" onChange={(e)=>setCapital(e.target.value)} placeholder="Enter Capital Amount"/>
            <input type="number" name="month" id="month" onChange={(e)=>setMonth(e.target.value)} placeholder="Enter Month"/>
            <input className="mb-2" type="number" name="rate" id="rate" onChange={(e)=>setRate(e.target.value)} placeholder="Enter Rate (%)"/>
            <button onClick={handelClick} className="mb-2 btn btn-primary">Calculate EMI</button>
        {/* </form> */}
        </div>
    
    </>)
}