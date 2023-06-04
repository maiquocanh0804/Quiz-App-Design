import React from 'react';
import { Difficulty, fetchQuizQuestions } from '../../api/API';
type Props = {
  score: number;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  setReset: React.Dispatch<React.SetStateAction<boolean>>;
  reset: boolean;
  setMinutes: React.Dispatch<React.SetStateAction<number>>;
  totalTime: { min: number; sec: number };
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  question: any;
  answer: any;
  result: boolean;
  setResult: React.Dispatch<React.SetStateAction<boolean>>;
};

const Results: React.FC<Props> = ({
  score,
  setGameOver,
  setReset,
  reset,
  setMinutes,
  totalTime,
  setSeconds,
  question,
  answer,
  result,
  setResult,
}) => {
  const handleResult = () => {
    result ? setResult(false) : setResult(true);
  };
  return (
    <div>
      <div className=" text-center ">
        {!reset && (
          <>
            {score > 4 ? (
              <div className=" flex flex-col items-center rounded-lg p-5  ">
                <img
                  className="mb-4 h-[70px] w-[70px]"
                  src="https://vinpearlphuquocresort.com/wp-content/uploads/2021/09/icon-thanh-cong-300x300.png"
                  alt=""
                />
                <p className="mt-2 pb-6 text-[30px] text-LGblue">Congratulations!!</p>
                <p className="text-gray-600">You are amazing!!</p>
                <p className="text-gray-600">
                  {score}/10 correct answers in {totalTime.min < 10 ? '0' + totalTime.min : totalTime}:
                  {totalTime.sec < 10 ? '0' + totalTime.sec : totalTime.sec}
                </p>
                {/* <p className="text-gray-600">Total Questions: 10 </p>
                <p className="text-gray-600">Correct Answers: {score}</p>
                <p className="text-gray-600">Score: {score * 10}%</p>
                <p className="text-gray-600">
                  Total Time Taken: {totalTime.min < 10 ? '0' + totalTime.min : totalTime}:
                  {totalTime.sec < 10 ? '0' + totalTime.sec : totalTime.sec}
                </p> */}
              </div>
            ) : (
              <div className=" flex flex-col items-center rounded-lg p-5  ">
                <img
                  className="mb-4 h-[70px] w-[70px]"
                  src="https://icon-library.com/images/failed-icon/failed-icon-7.jpg"
                  alt=""
                />
                <p className="mt-2 pb-6 text-[30px] text-LGblue">Failure!!</p>
                <p className="text-gray-600">Better luck next time!</p>
                <p className="text-gray-600">
                  {score}/10 correct answers in {totalTime.min < 10 ? '0' + totalTime.min : totalTime}:
                  {totalTime.sec < 10 ? '0' + totalTime.sec : totalTime.sec}
                </p>
                {/* <p className="text-gray-600">Total Questions: 10 </p>
                <p className="text-gray-600">Correct Answers: {score}</p>
                <p className="text-gray-600">Score: {score * 10}%</p>
                <p className="text-gray-600">
                  Total Time Taken: {totalTime.min < 10 ? '0' + totalTime.min : totalTime}:
                  {totalTime.sec < 10 ? '0' + totalTime.sec : totalTime.sec}
                </p> */}
              </div>
            )}
            <>
              <button
                onClick={() => {
                  setReset(true);
                  setGameOver(true);
                  setMinutes(0);
                  setSeconds(0);
                }}
                className="mb-2 rounded-lg bg-blue-700 px-8 py-[10px] text-[18px] font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Back to Home{' '}
              </button>{' '}
              <button onClick={handleResult}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </button>
            </>
            {result && (
              <div className="relative overflow-x-auto">
                <table className="w-full text-left text-lg text-gray-500 dark:text-gray-400">
                  <thead className="text-xs uppercase text-gray-900 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3"></th>
                      <th scope="col" className="px-6 py-3">
                        Question
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Answer
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="d bg-white">
                      <td className="px-6 py-4 text-gray-500">
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                        <p>7</p>
                        <p>8</p>
                        <p>9</p>
                        <p>10</p>
                      </td>

                      <th scope="col" className="whitespace-nowrap px-6 py-4 font-medium text-gray-500">
                        {question}
                      </th>
                      <td className="px-6 py-4 text-gray-500">{answer}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Results;
