import { useState } from "react";
import './assets/Emicalculater.css'
export function EmlCalculater() {


  const [capital, setCapital] = useState("");
  const [months, setMonths] = useState("");
  const [rate, setRate] = useState("");

  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);

  const calculateEMI = () => {
    if (!capital || !months || !rate) {
      alert("Please enter all fields");
      return;
    }

    let P = parseFloat(capital);
    let N = parseFloat(months);
    let annualRate = parseFloat(rate);

    let R = annualRate / 12 / 100; // monthly rate

    // EMI Formula
    let emiValue =
      (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

    let totalAmountPayable = emiValue * N;
    let totalInterestPayable = totalAmountPayable - P;

    setEmi(emiValue.toFixed(2));
    setTotalAmount(totalAmountPayable.toFixed(2));
    setTotalInterest(totalInterestPayable.toFixed(2));
  };

  return (<>

    <div style={{ width: "400px", margin: "50px auto", fontFamily: "Arial" }}>
      <h2>EMI Calculator</h2>

      <label>Capital Amount</label>
      <input
        type="number"
        value={capital}
        onChange={(e) => setCapital(e.target.value)}
        className="form-control"
      />

      <label style={{ marginTop: "10px" }}>Months</label>
      <input
        type="number"
        value={months}
        onChange={(e) => setMonths(e.target.value)}
        className="form-control"
      />

      <label style={{ marginTop: "10px" }}>Annual Interest Rate (%)</label>
      <input
        type="number"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        className="form-control"
      />

      <button
        onClick={calculateEMI}
        style={{
          marginTop: "15px",
          width: "100%",
          padding: "10px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Calculate EMI
      </button>

      {emi && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <h3>📌 EMI Result</h3>
          <p><strong>Monthly EMI:</strong> ₹ {emi}</p>
          <p><strong>Total Interest Payable:</strong> ₹ {totalInterest}</p>
          <p><strong>Total Amount Payable:</strong> ₹ {totalAmount}</p>
        </div>
      )}
    </div>

  </>)
}