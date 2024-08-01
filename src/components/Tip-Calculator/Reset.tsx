interface ResetProps {
  onReset: () => void;
}

export default function Reset({onReset}: ResetProps) {
  return <button onClick={onReset} className="btn btn-primary">Reset</button>
}
