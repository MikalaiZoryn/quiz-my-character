import { useMemo, useState } from "react";
import QuestionCard from "./QuestionCard";
import ResultScreen from "./ResultScreen";
import type { QuizPack, QuizResult } from "./types";
import { quizPacks } from "./data";

type QuizScreenProps = {
  pack: QuizPack;
  onGoHome: () => void;
  showHomeButton?: boolean;
};

const initialScores = (pack: QuizPack) =>
  Object.fromEntries(pack.results.map((result) => [result.name, 0])) as Record<
    string,
    number
  >;

function QuizScreen({
  pack,
  onGoHome,
  showHomeButton = true,
}: QuizScreenProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>(
    initialScores(pack),
  );
  const [answeredQuestions, setAnsweredQuestions] = useState<
    Array<{ questionIndex: number; scores: Partial<Record<string, number>> }>
  >([]);
  const [isFinished, setIsFinished] = useState(false);

  const topResult = useMemo(() => {
    if (!isFinished || !pack) return null;

    return pack.winnerPriority
      .map((name) => pack.results.find((pup) => pup.name === name))
      .reduce<QuizResult | null>((best, current) => {
        if (!best) return current ?? null;
        if (!current) return best;

        const bestScore = scores[best.name] ?? 0;
        const currentScore = scores[current.name] ?? 0;

        return currentScore > bestScore ? current : best;
      }, null);
  }, [pack, isFinished, scores]);

  const handleAnswer = (selectedScores: Partial<Record<string, number>>) => {
    setAnsweredQuestions((prev) => [
      ...prev,
      { questionIndex: currentQuestion, scores: selectedScores },
    ]);
    setScores((prev) => {
      const next = { ...prev };
      Object.entries(selectedScores).forEach(([key, value]) => {
        next[key as string] += value as number;
      });
      return next;
    });

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion >= pack.questions.length) {
      setIsFinished(true);
      return;
    }

    setCurrentQuestion(nextQuestion);
  };

  const goBack = () => {
    if (currentQuestion === 0) {
      return;
    }

    const lastAnswer = answeredQuestions[answeredQuestions.length - 1];
    if (!lastAnswer) {
      setCurrentQuestion((prev) => Math.max(prev - 1, 0));
      return;
    }

    setScores((prev) => {
      const next = { ...prev };
      Object.entries(lastAnswer.scores).forEach(([key, value]) => {
        next[key as string] -= value as number;
      });
      return next;
    });

    setAnsweredQuestions((prev) => prev.slice(0, -1));
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };

  const restart = () => {
    setCurrentQuestion(0);
    setScores(initialScores(pack));
    setAnsweredQuestions([]);
    setIsFinished(false);
  };

  const goHome = () => {
    setCurrentQuestion(0);
    setScores({} as Record<string, number>);
    setAnsweredQuestions([]);
    setIsFinished(false);
    onGoHome();
  };

  return (
    <>
      {!isFinished ? (
        <section id="quiz">
          <h1>{pack.title}</h1>
          <div className="progress">
            Вопрос {currentQuestion + 1} из {pack.questions.length}
          </div>
          <QuestionCard
            question={pack.questions[currentQuestion].question}
            options={pack.questions[currentQuestion].options}
            onAnswer={handleAnswer}
          />
          <div className="screen-actions">
            <button
              className="back-btn"
              style={{
                visibility: currentQuestion == 0 ? "hidden" : "visible",
              }}
              onClick={goBack}
            >
              ← Назад
            </button>

            {quizPacks.length > 1 && (
              <button className="home-btn" onClick={goHome}>
                🏠 На главную
              </button>
            )}
          </div>
        </section>
      ) : (
        <ResultScreen
          result={topResult}
          onRestart={restart}
          onGoHome={goHome}
        />
      )}
    </>
  );
}

export default QuizScreen;
