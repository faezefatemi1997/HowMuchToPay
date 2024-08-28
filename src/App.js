import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [peresentage1, setPeresentage1] = useState(0);
  const [peresentage2, setPeresentage2] = useState(0);

  const tip = bill * ((peresentage1 + peresentage2 / 2) / 100);

  function handleReset() {
    setBill("");
    setPeresentage1(0);
    setPeresentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPeresentage peresentage={peresentage1} onSelect={setPeresentage1}>
        How did you like services?
      </SelectPeresentage>
      <SelectPeresentage peresentage={peresentage2} onSelect={setPeresentage2}>
        How did your firend like services?
      </SelectPeresentage>
      {bill > 0 && (
        <>
          <Output tip={tip} bill={bill} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}
function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill? </label>
      <input
        type="text"
        placeholder="bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
        style={{ textAlign: "center" }}
      />
    </div>
  );
}
function SelectPeresentage({ children, peresentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={peresentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was ok (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">amazing (20%)</option>
      </select>
    </div>
  );
}
function Output({ bill, tip }) {
  return (
    <h3>
      you pay {bill + tip}(${bill} + ${tip} tips)
    </h3>
  );
}
function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
