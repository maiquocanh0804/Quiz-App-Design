import React from 'react';
// Styles
import { Wrapper } from './Instructions.styles';

type Props = {};

const Instructions: React.FC<Props> = () => {
  return (
    <Wrapper>
      <p className="mb-2 text-center">
        <b> Quiz Exam Instructions</b>
      </p>
      <p>1. This quiz exam consists of 10 multiple-choice questions.</p>
      <p>2. You will have a total of 1 minute (60 seconds) to complete the entire quiz.</p>
      <p>3. Each question has four answer options and Only one of the answer options is correct for each question.</p>
      <p>4. Internet connection is required to access and submit the quiz.</p>
      <p>5. Once you select an answer for a question, you cannot go back to change it.</p>
      <p>6. The timer will start as soon as you begin the quiz.</p>
      <p>7. Once the time is up, your quiz will automatically end, and you will receive your final score.</p>
      <p>8. Good luck! Start the quiz when you are ready.</p>
    </Wrapper>
  );
};

export default Instructions;
