import type { Option } from "./types";

type QuestionCardProps = {
  question: string;
  options: Option[];
  onAnswer: (scores: Partial<Record<string, number>>) => void;
};

function QuestionCard({ question, options, onAnswer }: QuestionCardProps) {
  return (
    <>
      <div className="question">{question}</div>
      <div>
        {options.map((option, index) => (
          <button
            key={`${option.text}-${index}`}
            className="option-btn"
            onClick={() => onAnswer(option.scores)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </>
  );
}

export default QuestionCard;
