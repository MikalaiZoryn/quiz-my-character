import { useState } from "react";
import "./styles.css";
import HomeScreen from "./HomeScreen";
import QuizScreen from "./QuizScreen";
import type { QuizPack } from "./types";
import { quizPacks } from "./data";

function App() {
  const [selectedPack, setSelectedPack] = useState<QuizPack | null>(null);

  const activePack = selectedPack ?? quizPacks[0];

  const choosePack = (pack: QuizPack) => {
    setSelectedPack(pack);
  };

  const goHome = () => {
    setSelectedPack(null);
  };

  return (
    <main className="app">
      {!selectedPack ? (
        <HomeScreen packs={quizPacks} onSelectPack={choosePack} />
      ) : (
        <QuizScreen pack={activePack} onGoHome={goHome} />
      )}
    </main>
  );
}

export default App;
