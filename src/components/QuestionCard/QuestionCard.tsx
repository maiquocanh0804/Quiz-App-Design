import React from 'react';
// Types
import { AnswerObject } from '../../App';
// Styles
import { ButtonWrapper } from './QuestionCard.styles';

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNr, totalQuestions }) => (
  <div className="flex max-w-[1250px] flex-col">
    <div className="pt-10">
      <div className="min-h-[60px] w-full rounded-2xl border-2 border-solid border-gray-500 ">
        <div className="mx-auto mt-[-25px] flex h-[50px] max-w-[210px] items-center justify-center rounded-full bg-LGblue text-[25px]  text-white">
          <span className="font-bold">Question {questionNr}</span>
          <span className="">/{totalQuestions}</span>
        </div>
        <div className="relative flex h-full w-auto items-center justify-center">
          <p
            dangerouslySetInnerHTML={{ __html: question }}
            className="p-5 text-center text-[30px] font-bold leading-[35px] text-gray-800 "
          />
        </div>
      </div>
    </div>
    <div className="mt-[25px] flex flex-wrap justify-center sm:justify-center md:justify-center  xl:justify-between  ">
      {answers.map((answer) => (
        <ButtonWrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button
            className="mb-5 min-h-[70px] w-[300px] rounded-2xl border-2 border-solid border-gray-500 p-6 text-[34px] font-bold leading-[35px] md:w-[600px] "
            disabled={userAnswer ? true : false}
            value={answer}
            onClick={callback}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </div>
);

export default QuestionCard;
