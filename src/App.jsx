import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";

import Welcome from "./components/Welcome";
import Question from "./components/Question";
import GameOver from "./components/GameOver";
import About from "./components/about";
// Sempre importar os componentes necessários

import PickCategory from "./components/PickCategory";

import "./App.css";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      <h1>
        Quiz de <span>Programação</span>
      </h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <PickCategory />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
      {quizState.gameStage === "About" && <About />}
      {/* Nunca esquecer de adicionar o estagio da pagina */}

      <footer>
        <p>
          © ITCDevz {new Date().getFullYear()} - sobre o projeto{" "}
          <button
            onClick={() => dispatch({ type: "CHANGE_STAGE_TO_ABOUT" })}
            style={{
              background: "none",
              border: "none",
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
              padding: 0,
              font: "inherit",
            }}
          >
            Ver mais
          </button>
        </p>
      </footer>
    </div>
  );
}

export default App;
