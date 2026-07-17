(function () {
  const quizData = [
    {
      question: "В какую игру ты больше всего любишь играть?",
      options: [
        {
          text: "Играть в спасателей, придумывать план и вести команду за собой.",
          scores: { Chase: 3, Liberty: 1 },
        },
        {
          text: "Бегать, прыгать, шутить и играть в весёлые догонялки.",
          scores: { Marshall: 3, Zuma: 1 },
        },
        {
          text: "Представлять, что ты летаешь высоко в небе.",
          scores: { Skye: 3, Everest: 1 },
        },
        {
          text: "Строить дома, башни, дороги и крепости.",
          scores: { Rubble: 3, Rocky: 1 },
        },
        {
          text: "Кататься с горки, играть в снегу и проходить полосы препятствий.",
          scores: { Everest: 3, Rubble: 1 },
        },
        {
          text: "Исследовать новые места и придумывать приключения в большом городе.",
          scores: { Liberty: 3, Chase: 1 },
        },
      ],
    },
    {
      question: "Какое приключение тебе понравилось бы больше всего?",
      options: [
        {
          text: "Летать среди облаков.",
          scores: { Skye: 3, Marshall: 1 },
        },
        {
          text: "Плавать, кататься на лодке и играть с волнами.",
          scores: { Zuma: 3, Liberty: 1 },
        },
        {
          text: "Кататься по снегу и покорять ледяные горы.",
          scores: { Everest: 3, Skye: 1 },
        },
        {
          text: "Исследовать джунгли и искать тайные тропинки.",
          scores: { Tracker: 3, Rocky: 1 },
        },
        {
          text: "Исследовать большой город, полный новых улиц и приключений.",
          scores: { Liberty: 3, Chase: 1 },
        },
      ],
    },
    {
      question: "Какое угощение ты бы выбрал?",
      options: [
        {
          text: "Большой праздничный торт, которым можно поделиться со всей командой.",
          scores: { Chase: 3, Rubble: 1 },
        },
        {
          text: "Весёлое мороженое с яркой посыпкой и смешным украшением.",
          scores: { Marshall: 3, Zuma: 1 },
        },
        {
          text: "Воздушное пирожное или сладкую вату, похожую на облако.",
          scores: { Skye: 3, Marshall: 1 },
        },
        {
          text: "Большой сытный бутерброд или кусочек пиццы.",
          scores: { Rubble: 3, Zuma: 1 },
        },
        {
          text: "Прохладный фруктовый лёд, который приятно есть после снежного приключения.",
          scores: { Everest: 3, Skye: 1 },
        },
        {
          text: "Хот-дог и поп-корн",
          scores: { Liberty: 3, Rocky: 1 },
        },
      ],
    },
    {
      question: "Какое животное тебе нравится больше всего?",
      options: [
        {
          text: "Собака, которая охраняет дом и помогает людям.",
          scores: { Chase: 3, Liberty: 1 },
        },
        {
          text: "Весёлая обезьянка, которая любит играть и шалить.",
          scores: { Marshall: 3, Tracker: 1 },
        },
        {
          text: "Птица, которая умеет летать высоко в небе.",
          scores: { Skye: 3, Zuma: 1 },
        },
        {
          text: "Сильный медведь, который ничего не боится.",
          scores: { Rubble: 3, Everest: 1 },
        },
        {
          text: "Умная лиса, которая всегда может что-нибудь придумать.",
          scores: { Rocky: 3, Chase: 1 },
        },
        {
          text: "Дельфин, который любит воду, скорость и весёлые игры.",
          scores: { Zuma: 3, Liberty: 1 },
        },
      ],
    },
    {
      question: "Какая суперсила подходит тебе больше всего?",
      options: [
        {
          text: "Быть смелым лидером и защищать друзей.",
          scores: { Chase: 3, Liberty: 1 },
        },
        {
          text: "Рассмешить всех и поднять настроение.",
          scores: { Marshall: 3, Zuma: 1 },
        },
        {
          text: "Быстро летать и не бояться высоты.",
          scores: { Skye: 3, Everest: 1 },
        },
        {
          text: "Быть очень сильным и уметь строить всё на свете.",
          scores: { Rubble: 3, Chase: 1 },
        },
        {
          text: "Изобретать полезные и необычные вещи.",
          scores: { Rocky: 3, Tracker: 1 },
        },
        {
          text: "Находить следы и замечать то, что другие пропустили.",
          scores: { Tracker: 3, Rocky: 1 },
        },
      ],
    },
    {
      question: "Где ты хотел бы выполнять спасательные миссии?",
      options: [
        {
          text: "В большом городе с высокими домами и оживлёнными улицами.",
          scores: { Liberty: 3, Chase: 1 },
        },
        {
          text: "На солнечном пляже рядом с морем.",
          scores: { Zuma: 3, Marshall: 1 },
        },
        {
          text: "Среди снежных гор и сверкающих льдин.",
          scores: { Everest: 3, Marshall: 1 },
        },
        {
          text: "В зелёных джунглях среди лиан и тайных тропинок.",
          scores: { Rubble: 3, Rocky: 1 },
        },
        {
          text: "На большой строительной площадке с экскаваторами и кранами.",
          scores: { Rubble: 3, Tracker: 1 },
        },
        {
          text: "Высоко в небе, где можно летать над облаками.",
          scores: { Skye: 3, Chase: 1 },
        },
      ],
    },
  ];

  const results = [
    {
      name: "Chase",
      image: "./images/chase.png",
      description:
        "Ты смелый, надёжный и всегда готов повести команду за собой, когда впереди особенно важная миссия.",
    },
    {
      name: "Marshall",
      image: "./images/marshall.png",
      description:
        "У тебя доброе сердце, море энергии и такая солнечная улыбка, что рядом с тобой всем становится веселее.",
    },
    {
      name: "Skye",
      image: "./images/skye.png",
      description:
        "Ты обожаешь приключения, веришь в свои силы и всегда готов взлететь навстречу новым высотам.",
    },
    {
      name: "Rubble",
      image: "./images/rubble.png",
      description:
        "Ты весёлый, добрый и умеешь превращать любую идею в полезное и увлекательное приключение.",
    },
    {
      name: "Everest",
      image: "./images/everest.png",
      description:
        "Даже в самые морозные и сложные минуты ты сохраняешь спокойствие, уверенность и настоящий героический дух.",
    },
    {
      name: "Rocky",
      image: "./images/rocky.png",
      description:
        "Ты творческий, сообразительный и всегда находишь необычное решение для любой задачи.",
    },
    {
      name: "Zuma",
      image: "./images/zuma.png",
      description:
        "Ты весёлый, озорной и приносишь радость и смех повсюду, где появляешься.",
    },
    {
      name: "Liberty",
      image: "./images/liberty.png",
      description:
        "Ты отважный, энергичный и всегда готов первым отправиться навстречу новому приключению.",
    },
    {
      name: "Tracker",
      image: "./images/tracker.png",
      description:
        "Ты любознательный, внимательный и умеешь замечать маленькие подсказки, которые другие легко пропускают.",
    },
  ];

  const state = {
    currentQuestion: 0,
    scores: Object.fromEntries(results.map((pup) => [pup.name, 0])),
  };

  const winnerPriority = [
    "Skye",
    "Everest",
    "Liberty",
    "Chase",
    "Rubble",
    "Rocky",
    "Tracker",
    "Zuma",
    "Marshall",
  ];

  function renderQuestion() {
    const quiz = document.getElementById("quiz");
    const progress = document.getElementById("progress");
    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const resultEl = document.getElementById("result");

    if (state.currentQuestion >= quizData.length) {
      quiz.style.display = "none";
      showResult();
      return;
    }

    quiz.style.display = "block";
    resultEl.classList.remove("active");

    const current = quizData[state.currentQuestion];
    progress.textContent = `Вопрос ${state.currentQuestion + 1} из ${quizData.length}`;
    questionEl.textContent = current.question;
    optionsEl.innerHTML = "";

    current.options.forEach((option) => {
      const button = document.createElement("button");
      button.className = "option-btn";
      button.textContent = option.text;
      button.addEventListener("click", () => {
        applyScores(option.scores);
        state.currentQuestion += 1;
        renderQuestion();
      });
      optionsEl.appendChild(button);
    });
  }

  function applyScores(scores) {
    Object.entries(scores).forEach(([pupName, value]) => {
      state.scores[pupName] += value;
    });
  }

  function showResult() {
    const resultEl = document.getElementById("result");
    const topPup = winnerPriority
      .map((name) => results.find((pup) => pup.name === name))
      .reduce((best, current) => {
        if (!best) return current;
        if (!current) return best;

        const bestScore = state.scores[best.name] ?? 0;
        const currentScore = state.scores[current.name] ?? 0;

        if (currentScore > bestScore) return current;
        return best;
      }, null);

    resultEl.classList.add("active");
    resultEl.innerHTML = `
      <h2>Похоже ты</h2>
      <img src="${topPup.image}" alt="${topPup.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
      <div class="image-placeholder">${topPup.image}</div>
      <p class="desc">${topPup.description}</p>
      <button class="restart-btn" id="restart">Ещё разок</button>
    `;

    document.getElementById("restart").addEventListener("click", resetQuiz);
  }

  function resetQuiz() {
    state.currentQuestion = 0;
    state.scores = Object.fromEntries(results.map((pup) => [pup.name, 0]));
    document.getElementById("quiz").style.display = "block";
    renderQuestion();
  }

  function init() {
    renderQuestion();
  }

  window.PupQuiz = { init };
})();
