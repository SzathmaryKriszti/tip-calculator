import Input from './Input';
import Output from './Output';
import Reset from './Reset';
import Select from './Select';
import {useState} from "react";

export default function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) /2 / 100);

  function handleReset() {
    setBill(0);
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title text-center">Tip Calculator</h5>
          <div className="text-center">
            <Input bill={bill} onSetBill={setBill} />
            <Select
                percentage={percentage1}
                onSelect={setPercentage1}
                label={'How did you like a service?'}/>
            <Select
                percentage={percentage2}
                onSelect={setPercentage2}
                label={'How did your friend like a service?'}/>
            <Output bill={bill} tip={tip} />
            <Reset onReset={handleReset} />
          </div>
        </div>
      </div>
    </div>
  );
}
