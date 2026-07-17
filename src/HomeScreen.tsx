import type { QuizPack } from "./types";

type HomeScreenProps = {
  packs: QuizPack[];
  onSelectPack: (pack: QuizPack) => void;
};

function HomeScreen({ packs, onSelectPack }: HomeScreenProps) {
  return (
    <section className="home-screen">
      <h1>Выбери набор вопросов</h1>
      <p className="home-description">
        Выбери пакет вопросов и узнай, на кого ты похож.
      </p>
      <div className="pack-list">
        {packs.map((pack) => (
          <button
            key={pack.id}
            className="pack-card"
            onClick={() => onSelectPack(pack)}
          >
            <h2>{pack.title}</h2>
            <p>{pack.description}</p>
          </button>
        ))}
      </div>
    </section>
  );
}

export default HomeScreen;
