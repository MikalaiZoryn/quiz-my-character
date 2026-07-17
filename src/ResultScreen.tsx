import { quizPacks } from "./data";
import type { QuizResult } from "./types";

type ResultScreenProps = {
  result: QuizResult | null;
  onRestart: () => void;
  onGoHome: () => void;
};

function ResultScreen({ result, onRestart, onGoHome }: ResultScreenProps) {
  if (!result) {
    return null;
  }

  return (
    <section className="result active">
      <h2>Похоже ты</h2>
      <img
        src={result.image}
        alt={result.name}
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
      <p className="desc">{result.description}</p>
      <div className="result-actions">
        <button className="restart-btn" onClick={onRestart}>
          Ещё разок
        </button>
        {quizPacks.length > 1 && (
          <button className="home-btn" onClick={onGoHome}>
            🏠 На главную
          </button>
        )}
      </div>
    </section>
  );
}

export default ResultScreen;
