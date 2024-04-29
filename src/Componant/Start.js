import { Card, Button } from "react-bootstrap";
import quiz from "../Images/DSAcvC.jpg";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const Navigate = useNavigate();
  return (
    <Card className="start-card">
      <div className="row no-gutters">
        <div className="col-md-8">
          <Card.Title as="h1" className="text-center">
            Quiz App
          </Card.Title>
          <Card.Body>
            <Card.Text as="h2" className="p-10 text-center welcome">
              Welcome to our family!
            </Card.Text>
            <Card.Text className="p-4">
              Are you ready to test your knowledge and challenge yourself with
              our exciting quizzes? Our Quiz App is designed to provide you with
              a fun and engaging way to learn and have fun at the same time
            </Card.Text>
          </Card.Body>
          <div className="text-center mb-3">
            <Button
              variant="primary"
              size="lg"
              className="m-auto fs-4 col-4"
              onClick={() => Navigate("/quiz")}
            >
              Start Now!
            </Button>
          </div>
        </div>
        <div className="col-md-4">
          <Card.Img className="bg-image" src={quiz} alt="..." />
        </div>
      </div>
    </Card>
  );
};

export default Start;
