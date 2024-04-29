import { Route, Routes } from "react-router-dom";
import Start from "./Componant/Start";
import Quiz from "./Componant/Quiz";

const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
};
export default AppRouters;
