import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Styles.css";

import Quiz from "../img/quiz.svg";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Seja bem-vindo ao quiz</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}>
        Iniciar
      </button>
      <img src={Quiz} alt="Início do Quiz" />

      <button onClick={() => dispatch({type: "CHANGE_STAGE_TO_ABOUT"})}>About</button>
    </div>
  );
};

export default Welcome;
