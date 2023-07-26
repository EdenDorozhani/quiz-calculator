import "./App.css";
import QuestionSearch from "./pages/QuestionSearch";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<QuestionSearch />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
}

export default App;
