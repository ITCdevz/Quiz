import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import "./Styles.css";

const About = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="about">
      <h2>Sobre o Quiz</h2>
      <div className="about-section">
        <h3>Descrição</h3>
        <p>
          Este é um quiz desenvolvido para testar seus conhecimentos em
          programação.
        </p>
        <p>
          Explore questões sobre Programação Genérica, Orientação a Objetos,
          Java e Análise de Sistemas.
        </p>
        <p>Projecto da comunidade (ITC Devz)</p>
      </div>

      <div className="about-section">
        <h3>Direitos Autorais</h3>
        <p>© {new Date().getFullYear()} Quiz de Programação</p>
        <p>Desenvolvido pelos Founders da comunidade</p>
        <p>Programador do projecto: Shelton Matsinhe(SaMMy)</p>
        <p>Head of project: Pedro Guiamba</p>
        <p>Hospedado por: Bruce Wate</p>
      </div>

      <div className="about-section">
        <h3>Tecnologias</h3>
        <div className="tech-list">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML5</span>
          <span>CSS3</span>
        </div>
      </div>

      <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}>
        Voltar ao Início
      </button>
    </div>
  );
};

export default About;
