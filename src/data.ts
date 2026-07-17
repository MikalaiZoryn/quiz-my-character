import chaseImage from "../images/chase.png";
import marshallImage from "../images/marshall.png";
import skyeImage from "../images/skye.png";
import rubbleImage from "../images/rubble.png";
import everestImage from "../images/everest.png";
import rockyImage from "../images/rocky.png";
import zumaImage from "../images/zuma.png";
import libertyImage from "../images/liberty.png";
import trackerImage from "../images/tracker.png";
import ryderImage from "../images/ryder.png";
import katieImage from "../images/katie.png";
import paltusImage from "../images/paltus.png";
import goodwayImage from "../images/goodway.png";
import chickalettaImage from "../images/chickaletta.png";
import switieImage from "../images/swetie.png";
import type { QuizPack, QuizQuestion, QuizResult } from "./types";

export const pawPatrolQuestions: QuizQuestion[] = [
  {
    question: "Что тебе нравится больше всего?",
    options: [
      {
        text: "Играть в догонялки",
        scores: { Chase: 2, Liberty: 1 },
      },
      {
        text: "Веселиться в бассейне",
        scores: { Zuma: 2, Everest: 1 },
      },
      {
        text: "Строить из Лего",
        scores: { Rubble: 2, Rocky: 1 },
      },
      {
        text: "Искать сокровища",
        scores: { Tracker: 2, Rocky: 1 },
      },
      {
        text: "Танцевать под музыку",
        scores: { Skye: 2, Marshall: 1 },
      },
    ],
  },
  {
    question: "Куда ты больше любишь ездить с родителями?",
    options: [
      {
        text: "На океан",
        scores: { Zuma: 2, Skye: 1 },
      },
      {
        text: "На хайк",
        scores: { Tracker: 2, Everest: 1 },
      },
      {
        text: "В Сан-Франциско",
        scores: { Liberty: 2, Skye: 1 },
      },
      {
        text: "В парк с аттракционами",
        scores: { Marshall: 2, Liberty: 1 },
      },
      {
        text: "В домик на дереве",
        scores: { Rocky: 2, Tracker: 1 },
      },
    ],
  },
  {
    question: "Если друг потерял игрушку, что ты сделаешь?",
    options: [
      {
        text: "Обниму его",
        scores: { Everest: 2, Skye: 1 },
      },
      {
        text: "Предложу поиграть вместе",
        scores: { Liberty: 2, Marshall: 1 },
      },
      {
        text: "Помогу найти игрушку",
        scores: { Chase: 2, Tracker: 1 },
      },
      {
        text: "Рассмешу его",
        scores: { Marshall: 2, Zuma: 1 },
      },
      {
        text: "Поделюсь своей игрушкой",
        scores: { Rubble: 2, Rocky: 1 },
      },
    ],
  },
  {
    question: "Каким тебя называют чаще всего?",
    options: [
      {
        text: "Смелым",
        scores: { Chase: 2, Everest: 1 },
      },
      {
        text: "Добрым",
        scores: { Everest: 2, Marshall: 1 },
      },
      {
        text: "Весёлым",
        scores: { Marshall: 2, Liberty: 1 },
      },
      {
        text: "Умным",
        scores: { Rocky: 2, Tracker: 1 },
      },
      {
        text: "Красивым",
        scores: { Skye: 2, Liberty: 1 },
      },
    ],
  },
  {
    question: "Что ты любишь есть больше всего?",
    options: [
      {
        text: "Пиццу",
        scores: { Rubble: 2, Marshall: 1 },
      },
      {
        text: "Мороженое",
        scores: { Skye: 2, Everest: 1 },
      },
      {
        text: "Арбуз",
        scores: { Tracker: 2, Zuma: 1 },
      },
      {
        text: "Печенье",
        scores: { Marshall: 2, Rubble: 1 },
      },
      {
        text: "Чипсы",
        scores: { Liberty: 2, Zuma: 1 },
      },
    ],
  },
  {
    question: "Ты любишь играть…",
    options: [
      {
        text: "В большой компании друзей",
        scores: { Liberty: 2, Marshall: 1 },
      },
      {
        text: "С одним другом",
        scores: { Skye: 2, Everest: 1 },
      },
    ],
  },
  {
    question: "Ты любишь…",
    options: [
      {
        text: "Знакомиться с новыми друзьями",
        scores: { Liberty: 2, Zuma: 1 },
      },
      {
        text: "Играть со старыми друзьями",
        scores: { Tracker: 2, Skye: 1 },
      },
    ],
  },
  {
    question: "Что тебе нравится больше?",
    options: [
      {
        text: "Снег",
        scores: { Everest: 2, Tracker: 1 },
      },
      {
        text: "Океан и песок",
        scores: { Zuma: 2, Skye: 1 },
      },
    ],
  },
  {
    question: "Что тебе нравится больше?",
    options: [
      {
        text: "Помогать маме",
        scores: { Chase: 2, Everest: 1 },
      },
      {
        text: "Придумывать новые игры",
        scores: { Rocky: 2, Liberty: 1 },
      },
    ],
  },
  {
    question: "Что ты больше любишь?",
    options: [
      {
        text: "Бегать",
        scores: { Chase: 2, Marshall: 1 },
      },
      {
        text: "Рисовать",
        scores: { Skye: 2, Rocky: 1 },
      },
    ],
  },
];

export const pawPatrolResults: QuizResult[] = [
  {
    name: "Chase",
    image: chaseImage,
    description:
      "Ты смелый, надёжный и всегда готов повести команду за собой, когда впереди особенно важная миссия.",
  },
  {
    name: "Marshall",
    image: marshallImage,
    description:
      "У тебя доброе сердце, море энергии и такая солнечная улыбка, что рядом с тобой всем становится веселее.",
  },
  {
    name: "Skye",
    image: skyeImage,
    description:
      "Ты обожаешь приключения, веришь в свои силы и всегда готов взлететь навстречу новым высотам.",
  },
  {
    name: "Rubble",
    image: rubbleImage,
    description:
      "Ты весёлый, добрый и умеешь превращать любую идею в полезное и увлекательное приключение.",
  },
  {
    name: "Everest",
    image: everestImage,
    description:
      "Даже в самые морозные и сложные минуты ты сохраняешь спокойствие, уверенность и настоящий героический дух.",
  },
  {
    name: "Rocky",
    image: rockyImage,
    description:
      "Ты творческий, сообразительный и всегда находишь необычное решение для любой задачи.",
  },
  {
    name: "Zuma",
    image: zumaImage,
    description:
      "Ты весёлый, озорной и приносишь радость и смех повсюду, где появляешься.",
  },
  {
    name: "Liberty",
    image: libertyImage,
    description:
      "Ты отважный, энергичный и всегда готов первым отправиться навстречу новому приключению.",
  },
  {
    name: "Tracker",
    image: trackerImage,
    description:
      "Ты любознательный, внимательный и умеешь замечать маленькие подсказки, которые другие легко пропускают.",
  },
];

export const pawPatrolWinnerPriority: string[] = [
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

const pawPatrolPack: QuizPack = {
  id: "paw-patrol",
  title: "Щенячий патруль",
  description: "Узнай, на какого щенка ты похож.",
  questions: pawPatrolQuestions,
  results: pawPatrolResults,
  winnerPriority: pawPatrolWinnerPriority,
};

const pawPatrolCitizenQuestions: QuizQuestion[] = [
  {
    question: "Что бы ты взял с собой в путешествие?",
    options: [
      { text: "Собаку", scores: { Ryder: 2, Katie: 1 } },
      { text: "Птичку", scores: { "Mayor Goodway": 2, Chickaletta: 1 } },
      { text: "Корону", scores: { Swetie: 3, "Mayor Goodway": 1 } },
      { text: "Кораблик", scores: { "Captain Paltus": 2, Ryder: 1 } },
      { text: "Игрушку", scores: { Chickaletta: 2, Swetie: 1 } },
      { text: "Сладости", scores: { Chickaletta: 2, "Mayor Goodway": 1 } },
    ],
  },
  {
    question: "Какое задание ты бы выбрал?",
    options: [
      {
        text: "Помочь другу в беде",
        scores: { Ryder: 2, "Captain Paltus": 1 },
      },
      {
        text: "Позаботиться о животных",
        scores: { Katie: 2, "Captain Paltus": 1 },
      },
      {
        text: "Помочь взрослым украсить праздник",
        scores: { "Mayor Goodway": 2, Katie: 1 },
      },
      {
        text: "Отправиться в путешествие",
        scores: { "Captain Paltus": 2, Chickaletta: 1 },
      },
      { text: "Играть целый день", scores: { Chickaletta: 2, Swetie: 1 } },
      { text: "Устроить бал", scores: { Swetie: 3, "Mayor Goodway": 1 } },
    ],
  },
  {
    question: "Что тебе нравится больше?",
    options: [
      { text: "Играть с животными", scores: { Katie: 2, "Captain Paltus": 1 } },
      { text: "Командовать", scores: { Ryder: 2, "Mayor Goodway": 1 } },
      {
        text: "Исследовать новые места",
        scores: { "Captain Paltus": 2, Chickaletta: 1 },
      },
      { text: "Красиво одеваться", scores: { Swetie: 3, Chickaletta: 1 } },
      { text: "Помогать другим", scores: { Ryder: 2, Katie: 1 } },
      {
        text: "Устраивать праздники",
        scores: { "Mayor Goodway": 2, Swetie: 1 },
      },
    ],
  },
  {
    question: "Что тебе нравится больше?",
    options: [
      {
        text: "Путешествовать",
        scores: { "Captain Paltus": 2, Chickaletta: 1 },
      },
      { text: "Играть дома", scores: { Katie: 2, Swetie: 1 } },
    ],
  },
  {
    question: "Что тебе нравится больше?",
    options: [
      { text: "Играть с друзьями", scores: { Ryder: 2, Chickaletta: 1 } },
      { text: "Ходить в зоопарк", scores: { Katie: 2, "Captain Paltus": 1 } },
    ],
  },
  {
    question: "Что тебе нравится больше?",
    options: [
      { text: "Быть главным", scores: { Ryder: 2, "Mayor Goodway": 1 } },
      {
        text: "Играть всей командой",
        scores: { Ryder: 2, "Captain Paltus": 1 },
      },
    ],
  },
];

const pawPatrolCitizenResults: QuizResult[] = [
  {
    name: "Ryder",
    image: ryderImage,
    description:
      "Ты лидер, который помогает другим и берёт на себя ответственность.",
  },
  {
    name: "Katie",
    image: katieImage,
    description:
      "Ты заботливый, добрый и умеешь заботиться о животных и друзьях.",
  },
  {
    name: "Mayor Goodway",
    image: goodwayImage,
    description:
      "Ты организованный, заботливый и любишь делать праздники особенными.",
  },
  {
    name: "Swetie",
    image: switieImage,
    description: "Ты быстрый, энергичный и любишь яркие приключения.",
  },
  {
    name: "Captain Paltus",
    image: paltusImage,
    description:
      "Ты любознательный, смелый и мечтаешь исследовать новые места.",
  },
  {
    name: "Chickaletta",
    image: chickalettaImage,
    description: "Ты яркая, любопытная и любишь всё необычное.",
  },
];

export const pawPatrolCitizenPriorities = [
  "Ryder",
  "Katie",
  "Mayor Goodway",
  "Swetie",
  "Captain Paltus",
  "Chickaletta",
];

const pawPatrolCitizenPack: QuizPack = {
  id: "paw-patrol-citizen-pack",
  title: "Жители бухты приключений",
  description: "Узнай, на какого жителя бухты приключений ты похож.",
  questions: pawPatrolCitizenQuestions,
  results: pawPatrolCitizenResults,
  winnerPriority: pawPatrolCitizenPriorities,
};

export const testQuestions: QuizQuestion[] = [
  {
    question: "Кто ты по масти?",
    options: [{ text: "Чёрт", scores: { imp: 10 } }],
  },
  { question: "Уверен?", options: [{ text: "Да", scores: { imp: 10 } }] },
];

const testResults: QuizResult[] = [
  {
    name: "imp",
    image: rubbleImage,
    description: "Ну ты совсем чёрт.",
  },
];

export const testPriorities = ["imp"];

const testPack: QuizPack = {
  id: "test-pack",
  title: "Тестовый Пак",
  description: "Узнай, кто ты из тестового пака.",
  questions: testQuestions,
  results: testResults,
  winnerPriority: testPriorities,
};

export const quizPacks: QuizPack[] = [pawPatrolPack, pawPatrolCitizenPack];
