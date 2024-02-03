import React, { useState } from "react";
import Modal from "./Modal";
import styles from "./Quiz.module.css";
import SidePanel from "../components/SidePanel";
import { useTranslation } from "react-i18next";

const Quiz = () => {
  const { t } = useTranslation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [showWinModal, setShowWinModal] = useState(false);
  const [showLoseModal, setShowLoseModal] = useState(false);

  const questions = [
    {
      question: t("question-1"),
      options: [
        t("answers-1-1"),
        t("answers-1-2"),
        t("answers-1-3"),
        t("answers-1-4")
      ],
      correctAnswer: t("answers-1-4"),
    },
    {
      question: t("question-2"),
      options: [
        t("answers-2-1"),
        t("answers-2-2"),
        t("answers-2-3"),
        t("answers-2-4"),
      ],
      correctAnswer: t("answers-2-1"),
    },
    {
      question: t("question-3"),
      options: [
        t("answers-3-1"),
        t("answers-3-2"),
        t("answers-3-3"),
        t("answers-3-4"),
      ],
      correctAnswer: t("answers-3-2"),
    },
    {
      question: t("question-4"),
      options: [
        t("answers-4-1"),
        t("answers-4-2"),
        t("answers-4-3"),
        t("answers-4-4"),
      ],
      correctAnswer: t("answers-4-3"),
    },
    {
      question: t("question-5"),
      options: [
        t("answers-5-1"),
        t("answers-5-2"),
        t("answers-5-3"),
        t("answers-5-4"),
      ],
      correctAnswer: t("answers-5-4"),
    },
    {
      question: t("question-6"),
      options: [
        t("answers-6-1"),
        t("answers-6-2"),
        t("answers-6-3"),
        t("answers-6-4"),
      ],
      correctAnswer: t("answers-6-4"),
    },
    {
      question: t("question-7"),
      options: [
        t("answers-7-1"),
        t("answers-7-2"),
        t("answers-7-3"),
        t("answers-7-4"),
      ],
      correctAnswer: t("answers-7-2"),
    },
    {
      question: t("question-8"),
      options: [
        t("answers-8-1"),
        t("answers-8-2"),
        t("answers-8-3"),
        t("answers-8-4"),
      ],
      correctAnswer: t("answers-8-2"),
    },
    {
      question: t("question-9"),
      options: [
        t("answers-9-1"),
        t("answers-9-2"),
        t("answers-9-3"),
        t("answers-9-4"),
      ],
      correctAnswer: t("answers-9-4"),
    },
    {
      question: t("question-10"),
      options: [
        t("answers-10-1"),
        t("answers-10-2"),
        t("answers-10-3"),
        t("answers-10-4"),
      ],
      correctAnswer: t("answers-10-2"),
    },
    // Добавьте дополнительные вопросы по мере необходимости
  ];

  const handleAnswerClick = (selectedAnswer) => {
    // Проверка наличия активного модального окна
    if (showWinModal || showLoseModal) {
      return;
    }

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      setAnswerStatus("correct");
      highlightIncorrectAnswers();
    } else {
      setAnswerStatus("incorrect");
      setShowLoseModal(true);
      return; // Добавлен return для предотвращения дальнейшего выполнения кода при неверном ответе
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
        setAnswerStatus(null);
      }, 1000); // Задержка перед переходом к следующему вопросу
    } else {
      if (score === questions.length - 1) {
        setShowWinModal(true);
      }
    }
  };

  // Новая функция для подсветки неверных ответов
  const highlightIncorrectAnswers = () => {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    const incorrectButtons = document.querySelectorAll(
      `.${styles.button}:not([data-answer="${correctAnswer}"])`
    );

    incorrectButtons.forEach((button) => {
      button.classList.add(styles.incorrectHighlight);
    });
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setAnswerStatus(null);
    setShowWinModal(false);
    setShowLoseModal(false);
  };

  return (
    <div>
      <SidePanel />
      <div className={styles.question}> 
      <p className={styles.name_content}>Вопрос</p>
      <p className={styles.content}>{questions[currentQuestion].question}</p>
      </div>
      <div className={styles.buttonContainer}>
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(option)}
            disabled={showWinModal || showLoseModal || answerStatus === "correct"}
            data-answer={questions[currentQuestion].correctAnswer}
            className={`
              ${styles.button}
              ${
                answerStatus === "correct" &&
                option === questions[currentQuestion].correctAnswer
                  ? styles.correct
                  : answerStatus === "incorrect" &&
                    option !== questions[currentQuestion].correctAnswer
                  ? styles.incorrect
                  : ""
              }
            `}
          >
            {option}
          </button>
        ))}
      </div>
  
      <Modal
        show={showWinModal}
        message={t("win-quiz")}
        onRestart={handleRestart}
      />
      <Modal
        show={showLoseModal}
        message={t("lose-quiz")}
        onRestart={handleRestart}
      />
    </div>
  );
};

export default Quiz;
