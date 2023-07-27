import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state;

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <div className="results-container">
        <h3>Congratulations</h3>
        <p>
          You won {state?.userPoints} points from {state?.total} !
        </p>
        <Button action={() => navigate("/")} content={"TRY AGAIN!"} />
      </div>
    </div>
  );
};
export default Results;
