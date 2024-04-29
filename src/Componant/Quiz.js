import { FormControl, Form } from "react-bootstrap";
import { quizQuestions } from "../Data/QuizData";
import { useState } from "react";
import Result from "./Result";
import side from "../Images/side.png";

const Quiz = () => {
  console.log("rerendered.......");
  console.log("length.......", quizQuestions.length);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectOption, setSelectOption] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  /*  const [finishButton, setFinishButton] = useState(false); */
  console.log("current", currentQuestion);
  console.log("select", selectOption);
  console.log("score", score);

  const handleOptionChange = (e) => {
    console.log("event", e);
    setSelectOption(e.target.value);
    console.log("value", e.target.value);
  };
  const handleNextClick = (event) => {
    updateScore();
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectOption(selectOption);
    } else {
      //console.log("result Navigate page");
      setShowResult(true);
    }
    /*  event.preventDefault();  */ //for use click button not refresh page
  };
  const updateScore = () => {
    if (selectOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };
  const tryAgain = () => {
    setShowResult(false);
    setScore(0);
    setCurrentQuestion(0);
    setSelectOption(0);
  };

  return (
    <>
      {showResult ? (
        <Result
          score={score}
          totalscore={quizQuestions.length}
          resetAll={tryAgain}
        />
      ) : (
        <div className="container">
          <div className="row">
            <div className="tab-100 order-c col-md-5 p-relative">
              <div className="side-img">
                <img src={side} alt="side-img" />
              </div>
            </div>
            <div className="tab-100 col-md-7">
              <div className="show-section wrapper">
                <section className="steps">
                  <form id="step1">
                    <h2 className="q-heading">
                      {quizQuestions[currentQuestion].question}
                    </h2>

                    <div className="form-inner">
                      {quizQuestions[currentQuestion].options.map(
                        (options, i) => {
                          // console.log('index no',i);
                          return (
                            <div className="bounce-left radio-field" key={i}>
                              <FormControl
                                className="checkmark"
                                type="radio"
                                onChange={handleOptionChange}
                                checked={selectOption === options}
                                value={options}
                                name="options"
                                placeholder={options}
                              />
                              <Form.Label>{options}</Form.Label>
                            </div>
                          );
                        }
                      )}
                    </div>
                    <div className="next-prev">
                      {currentQuestion !== 0 && (
                        <button
                          type="button"
                          className="Previous"
                          id="step1btn"
                          onClick={() => {
                            setCurrentQuestion(currentQuestion - 1);
                          }}
                        >
                          Previous<i className="fa-solid fa-arrow-left"></i>
                        </button>
                      )}
                      <button
                        type="button"
                        className="next"
                        id="step1btn"
                        onClick={handleNextClick}
                      >
                        next question<i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </section>
                <div className="question overflow-hidden">
                  {/* <img src="assets/images/question-sign.png" alt="question">
                   */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Quiz;
