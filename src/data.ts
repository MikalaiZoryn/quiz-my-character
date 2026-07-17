import chaseImage from "../images/chase.png";
import marshallImage from "../images/marshall.png";
import skyeImage from "../images/skye.png";
import rubbleImage from "../images/rubble.png";
import everestImage from "../images/everest.png";
import rockyImage from "../images/rocky.png";
import zumaImage from "../images/zuma.png";
import libertyImage from "../images/liberty.png";
import trackerImage from "../images/tracker.png";
import type { QuizPack, QuizQuestion, QuizResult } from "./types";

export const pawPatrolQuestions: QuizQuestion[] = [
  {
    question: "Что тебе нравится больше всего?",
    options: [
      {
        text: "Играть в догонялки.",
        scores: { Chase: 2, Liberty: 1 },
      },
      {
        text: "Веселиться в бассейне.",
        scores: { Zuma: 2, Everest: 1 },
      },
      {
        text: "Строить из Лего.",
        scores: { Rubble: 2, EvRockyerest: 1 },
      },
      {
        text: "Искать сокровища.",
        scores: { Tracker: 2, Everest: 1 },
      },
      {
        text: "Танцевать под музыку.",
        scores: { Skye: 2, Marshall: 1 },
      },
    ],
  },
  {
    question: "Куда ты больше любишь ездить с родителями?",
    options: [
      {
        text: "На океан.",
        scores: { Zuma: 2, Skye: 1 },
      },
      {
        text: "На хайк.",
        scores: { Tracker: 2, Everest: 1 },
      },
      {
        text: "В Сан-Франциско",
        scores: { Liberty: 2, Skye: 1 },
      },
      {
        text: "В парк с аттракционами.",
        scores: { Marshall: 2, Liberty: 1 },
      },
      {
        text: "В домик на дереве.",
        scores: { Rocky: 2, Tracker: 1 },
      },
    ],
  },
  {
    question: "Какое угощение ты бы выбрал?",
    options: [
      {
        text: "Большущий торт.",
        scores: { Chase: 3, Rubble: 1 },
      },
      {
        text: "Разноцветные леденцы.",
        scores: { Marshall: 3, Zuma: 1 },
      },
      {
        text: "Воздушное пирожное.",
        scores: { Skye: 3, Marshall: 1 },
      },
      {
        text: "Большой кусок пиццы.",
        scores: { Rubble: 3, Zuma: 1 },
      },
      {
        text: "Фруктовый лёд.",
        scores: { Everest: 3, Skye: 1 },
      },
      {
        text: "Хот-доги",
        scores: { Liberty: 3, Rocky: 1 },
      },
    ],
  },
  {
    question: "Какое животное тебе нравится больше всего?",
    options: [
      {
        text: "Собака",
        scores: { Chase: 3, Liberty: 1 },
      },
      {
        text: "Обезьяна",
        scores: { Marshall: 3, Tracker: 1 },
      },
      {
        text: "Птица",
        scores: { Skye: 3, Zuma: 1 },
      },
      {
        text: "Медведь",
        scores: { Rubble: 3, Everest: 1 },
      },
      {
        text: "Лиса",
        scores: { Rocky: 3, Chase: 1 },
      },
      {
        text: "Дельфин",
        scores: { Zuma: 3, Liberty: 1 },
      },
    ],
  },
  {
    question: "Какая суперсила подходит тебе больше всего?",
    options: [
      {
        text: "Быть хорошим лидером.",
        scores: { Chase: 3, Liberty: 1 },
      },
      {
        text: "Рассмешить всех.",
        scores: { Marshall: 3, Zuma: 1 },
      },
      {
        text: "Быстро летать.",
        scores: { Skye: 3, Everest: 1 },
      },
      {
        text: "Быть очень сильным.",
        scores: { Rubble: 3, Chase: 1 },
      },
      {
        text: "Изобретать необычные вещи.",
        scores: { Rocky: 3, Tracker: 1 },
      },
      {
        text: "Хорошо находить следы.",
        scores: { Tracker: 3, Rocky: 1 },
      },
    ],
  },
  {
    question: "Где ты хотел бы выполнять спасательные миссии?",
    options: [
      {
        text: "В большом городе.",
        scores: { Liberty: 3, Chase: 1 },
      },
      {
        text: "На пляже рядом с морем.",
        scores: { Zuma: 3, Marshall: 1 },
      },
      {
        text: "Среди снежных гор.",
        scores: { Everest: 3, Marshall: 1 },
      },
      {
        text: "В джунглях.",
        scores: { Rubble: 3, Rocky: 1 },
      },
      {
        text: "На строительной площадке.",
        scores: { Rubble: 3, Tracker: 1 },
      },
      {
        text: "Высоко в небе.",
        scores: { Skye: 3, Chase: 1 },
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
  description: "Узнай, на какой щенка похож ты.",
  questions: pawPatrolQuestions,
  results: pawPatrolResults,
  winnerPriority: pawPatrolWinnerPriority,
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

export const quizPacks: QuizPack[] = [pawPatrolPack, testPack];
