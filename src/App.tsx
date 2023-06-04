/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { fetchQuizQuestions } from './api/API';
// Components
import QuestionCard from './components/QuestionCard/QuestionCard';

// types
import { QuestionsState, Difficulty } from './api/API';
// Styles
import CountDown from './components/countdown';
import Results from './components/Results/Results';
import { GlobalStyle, Wrapper } from './App.styles';
import Instructions from './components/Instructions/Instructions';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [minutes, setMinutes] = useState(0);
  const [stop, setStop] = useState(true);
  const [start, setStart] = useState(false);
  const [reset, setReset] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [totalTime, setTotalTime] = useState({ min: 0, sec: 0 });
  const [result, setResult] = useState(false);

  useEffect(() => {
    if (minutes === 1) {
      setStop(false);
      setTotalTime({ min: 1, sec: 0 });
    }
  }, [minutes]);

  useEffect(() => {
    if (userAnswers.length === TOTAL_QUESTIONS) {
      setTotalTime({ min: minutes, sec: seconds });
      console.log(totalTime);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAnswers.length === TOTAL_QUESTIONS]);

  const startTrivia = async () => {
    setReset(false);
    setStop(true);
    setLoading(true);
    setGameOver(false);
    setStart(true);
    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
    setResult(false);
  };

  const listQuestions = questions.map((que) => {
    // eslint-disable-next-line react/jsx-key
    return <div>{que.question}</div>;
  });
  const lisAnswer = questions.map((que) => {
    // eslint-disable-next-line react/jsx-key
    return <div>{que.correct_answer}</div>;
  });
  const checkAnswer = (e: any) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };
  const nextQuestion = () => {
    const nextQ = number + 1;
    if (nextQ === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>QUIZ APP</h1>
        {gameOver || reset ? <Instructions /> : null}
        {gameOver || reset ? (
          <button className="start" onClick={startTrivia}>
            Start
          </button>
        ) : null}
        {stop && start && userAnswers.length !== TOTAL_QUESTIONS && !loading && (
          <CountDown setMinutes={setMinutes} minutes={minutes} setSeconds={setSeconds} seconds={seconds} />
        )}
        {loading ? <p>Loading Questions...</p> : null}

        {!loading && !gameOver && stop && userAnswers.length !== TOTAL_QUESTIONS && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver && !loading && stop && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
        {(userAnswers.length === TOTAL_QUESTIONS || !stop) && !loading && !reset && (
          <Results
            score={score}
            setGameOver={setGameOver}
            setReset={setReset}
            reset={reset}
            setMinutes={setMinutes}
            totalTime={totalTime}
            setSeconds={setSeconds}
            question={listQuestions}
            answer={lisAnswer}
            result={result}
            setResult={setResult}
          />
        )}
      </Wrapper>
    </>
  );
};

export default App;
