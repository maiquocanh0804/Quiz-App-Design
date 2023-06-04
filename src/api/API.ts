import { shuffleArray } from './utils';

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export type QuestionsState = Question & { answers: string[] };

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty): Promise<QuestionsState[]> => {
  try {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error('Failed to fetch quiz questions');
    }

    const data = await response.json();
    return data.results.map((question: Question) => ({
      ...question,
      answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
    }));
  } catch (error) {
    // Handle the error gracefullyx
    console.error('Error fetching quiz questions:', error);
    throw error; // Rethrow the error to propagate it to the caller
  }
};
