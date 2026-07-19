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
    question: "Что тебе нравится больше?",
    options: [
      {
        text: "Играть в догонялки",
        scores: { Chase: 3, Liberty: 1 },
      },
      {
        text: "Веселиться в бассейне",
        scores: { Zuma: 3, Skye: 1 },
      },
      {
        text: "Строить из Лего",
        scores: { Rubble: 3, Rocky: 1 },
      },
    ],
  },
  {
    question: "Куда ты любишь ездить?",
    options: [
      {
        text: "На океан",
        scores: { Zuma: 3, Skye: 1 },
      },
      {
        text: "На хайк",
        scores: { Tracker: 3, Everest: 1 },
      },
      {
        text: "В парк аттракционовв",
        scores: { Marshall: 2, Liberty: 1 },
      },
    ],
  },
  {
    question: "Друг потерял игрушку. Что ты сделаешь?",
    options: [
      {
        text: "Помогу найти",
        scores: { Chase: 3, Tracker: 1 },
      },
      {
        text: "Обниму его",
        scores: { Everest: 2, Skye: 1 },
      },
      {
        text: "Поделюсь своей игрушкой",
        scores: { Rubble: 3, Marshall: 1 },
      },
    ],
  },
  {
    question: "Что тебе нравится делать?",
    options: [
      {
        text: "Рисовать",
        scores: { Skye: 2, Rocky: 1 },
      },
      {
        text: "Делать поделки",
        scores: { Rocky: 3, Rubble: 1 },
      },
      {
        text: "Танцевать",
        scores: { Marshall: 2, Liberty: 1 },
      },
    ],
  },
  {
    question: "Какой ты чаще всего?",
    options: [
      {
        text: "Смелый",
        scores: { Everest: 2, Chase: 1 },
      },
      {
        text: "Весёлый",
        scores: { Marshall: 3, Liberty: 1 },
      },
      {
        text: "Спокойный",
        scores: { Zuma: 2, Everest: 1 },
      },
    ],
  },
  {
    question: "Что ты любишь есть?",
    options: [
      {
        text: "Пиццу",
        scores: { Rubble: 3, Marshall: 1 },
      },
      {
        text: "Мороженое",
        scores: { Skye: 2, Everest: 1 },
      },
      {
        text: "Арбуз",
        scores: { Tracker: 3, Zuma: 1 },
      },
    ],
  },
  {
    question: "Как ты любишь играть?",
    options: [
      {
        text: "Когда много друзей",
        scores: { Liberty: 3, Marshall: 1 },
      },
      {
        text: "С одним другом",
        scores: { Skye: 2, Everest: 1 },
      },
      {
        text: "Что-нибудь строить самому",
        scores: { Rocky: 2, Rubble: 1 },
      },
    ],
  },
  {
    question: "Что тебе нравится больше?",
    options: [
      {
        text: "Снег",
        scores: { Everest: 3, Tracker: 1 },
      },
      {
        text: "Океан и песок",
        scores: { Zuma: 3, Skye: 1 },
      },
      {
        text: "Большая шумная площадка",
        scores: { Liberty: 3, Marshall: 2 },
      },
    ],
  },
  {
    question: " Что ты выберешь?",
    options: [
      {
        text: "Знакомиться с новыми друзьями",
        scores: { Liberty: 2, Marshall: 1 },
      },
      {
        text: " Искать сокровища",
        scores: { Tracker: 3, Rocky: 1 },
      },
      {
        text: "Играть в воде",
        scores: { Zuma: 3, Everest: 1 },
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
      { text: "Собачку", scores: { Ryder: 3, Katie: 1 } },
      { text: "Корону", scores: { Swetie: 3, "Mayor Goodway": 1 } },
      { text: "Кораблик", scores: { "Captain Paltus": 3, Chickaletta: 1 } },
    ],
  },
  {
    question: "Какое задание ты выберешь?",
    options: [
      {
        text: "Помочь другу в беде",
        scores: { Ryder: 3, Katie: 1 },
      },
      {
        text: "Позаботиться о животных",
        scores: { Katie: 3, "Captain Paltus": 1 },
      },
      {
        text: "Отправиться в путешествие",
        scores: { "Captain Paltus": 2, Chickaletta: 1 },
      },
    ],
  },
  {
    question: "Что тебе нравится делать?",
    options: [
      { text: "Красиво одеваться", scores: { Swetie: 3, Chickaletta: 1 } },
      {
        text: "Устраивать праздники",
        scores: { "Mayor Goodway": 3, Swetie: 1 },
      },
      {
        text: "Играть целый день",
        scores: { Chickaletta: 3, Ryder: 1 },
      },
    ],
  },
  {
    question: "Как ты любишь проводить время?",
    options: [
      {
        text: "Путешествовать",
        scores: { "Captain Paltus": 3, Chickaletta: 1 },
      },
      { text: "Играть дома", scores: { Katie: 2, Swetie: 1 } },
      { text: "Играть с друзьями", scores: { Ryder: 2, Chickaletta: 1 } },
    ],
  },
  {
    question: "Куда бы ты хотел пойти?",
    options: [
      { text: "В зоопарк", scores: { Katie: 2, "Captain Paltus": 1 } },
      {
        text: "На день рождения друга",
        scores: { Chickaletta: 2, "Mayor Goodway": 1 },
      },
      {
        text: "В музей",
        scores: { "Mayor Goodway": 2, Ryder: 1 },
      },
    ],
  },
  {
    question: "Кем ты хочешь быть в игре?",
    options: [
      { text: " Капитаном команды", scores: { Ryder: 3, "Captain Paltus": 2 } },
      {
        text: "Принцем или принцессой",
        scores: { Swetie: 3, "Mayor Goodway": 1 },
      },
      {
        text: "Путешественником",
        scores: { "Captain Paltus": 3, Chickaletta: 1 },
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
  description: "Узнай, кто ты из друзей Щенячьего патруляю",
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
