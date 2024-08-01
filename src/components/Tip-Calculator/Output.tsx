interface OutputProps {
    bill: number;
    tip: number;

}

export default function Output({bill, tip} : OutputProps) {
  return (
    <>
      <h5 className="card-subtitle mt-3 text-center">Tip amount: {tip}</h5>
      <p className="card-text text-center">
          You pay {bill} + {tip} Sum: {bill + tip}
      </p>
    </>
  );
}
