interface SelectProps {
    label: string;
    percentage: number;
    onSelect: (percentage: number) => void;
}

export default function Select({label, percentage, onSelect} : SelectProps) {
  return (
    <div>
      <label className="form-label">{label}</label>
      <select
          value={percentage}
          onChange={(event) => onSelect(Number(event.target.value))}
          className="form-select"
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
