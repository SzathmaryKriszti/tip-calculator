interface InputProps{
    bill: number;
    onSetBill: (bill: number) => void;
}

export default function input({bill, onSetBill} : InputProps) {
  return (
    <div>
      <label className="form-label">How much was the bill?</label>
      <input className="form-control" type="text" placeholder="Bill value" />
    </div>
  );
}
