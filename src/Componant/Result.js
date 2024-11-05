import { Button } from "react-bootstrap";

const Result = ({ score, totalscore, resetAll }) => {
  return (
    <section className="">
      <div className="text-center mt-5">
    <h1>Satendra Kumar</h1>
        <h2>Your Score: {score}</h2>
        <h1>Total Score:{totalscore}</h1>

        <Button className="py-2 px-4" id="next-button" onClick={resetAll}>
          Try Again
        </Button>
      </div>
    </section>
  );
};
export default Result;
