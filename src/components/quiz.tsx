'use client';

import { useState } from 'react';

type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
};

type QuizProps = {
  questions: QuizQuestion[];
  title: string;
};

export function Quiz({ questions, title }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    // Check if answer is correct and update score
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    // Show result briefly
    setShowResult(true);
    
    setTimeout(() => {
      setShowResult(false);
      setSelectedAnswer(null);
      
      // Move to next question or end quiz
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizCompleted(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <div className="bg-white dark:bg-ai-dark rounded-xl shadow-lg p-8 max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white gradient-text-enhanced">{title}</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Quiz Terminé!</h3>
          <div className="mb-8 bg-ai-light dark:bg-gray-700 p-6 rounded-xl">
            <p className="text-lg mb-3 text-gray-700 dark:text-gray-300">
              Votre score: 
            </p>
            <div className="flex items-center justify-center">
              <div className="bg-gradient-ai rounded-full w-24 h-24 flex items-center justify-center mb-4">
                <span className="font-bold text-3xl text-white">{score}/{questions.length}</span>
              </div>
            </div>
            <div className="mb-4 text-gray-700 dark:text-gray-300">
              {score === questions.length ? (
                <p className="text-green-600 dark:text-green-400 font-bold">Excellent! Score parfait!</p>
              ) : score >= questions.length * 0.7 ? (
                <p className="text-blue-600 dark:text-blue-400 font-bold">Très bien! Continuez comme ça!</p>
              ) : (
                <p className="text-orange-600 dark:text-orange-400 font-bold">Continuez à apprendre, vous vous améliorerez!</p>
              )}
            </div>
          </div>
          <button
            onClick={resetQuiz}
            className="bg-gradient-ai bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-medium py-3 px-8 rounded-md transition duration-300 shadow-ai hover:shadow-ai-hover"
          >
            Recommencer le Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-ai-dark rounded-xl shadow-lg p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white gradient-text-enhanced">{title}</h2>
      
      <div className="flex justify-between items-center mb-6">
        <span className="px-4 py-1 bg-ai-light dark:bg-gray-700 rounded-full text-sm font-medium text-ai-primary dark:text-ai-light">
          Question {currentQuestion + 1}/{questions.length}
        </span>
        <span className="px-4 py-1 bg-ai-light dark:bg-gray-700 rounded-full text-sm font-medium text-ai-primary dark:text-ai-light">
          Score: {score}
        </span>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-6 text-gray-800 dark:text-white">{questions[currentQuestion].question}</h3>
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full text-left p-4 rounded-lg transition duration-300 ${selectedAnswer === index
                ? showResult
                  ? index === questions[currentQuestion].correctAnswer
                    ? 'bg-green-100 border-2 border-green-500 text-green-800 dark:bg-green-900/50 dark:border-green-500 dark:text-green-100'
                    : 'bg-red-100 border-2 border-red-500 text-red-800 dark:bg-red-900/50 dark:border-red-500 dark:text-red-100'
                  : 'bg-blue-100 border-2 border-blue-500 text-blue-800 dark:bg-blue-900/50 dark:border-blue-500 dark:text-blue-100'
                : 'bg-ai-light hover:bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 border-2 border-transparent hover:border-ai-secondary'}`}
              disabled={showResult}
            >
              <div className="flex items-center">
                <div className={`w-6 h-6 rounded-full mr-3 flex-shrink-0 flex items-center justify-center ${selectedAnswer === index
                  ? index === questions[currentQuestion].correctAnswer && showResult
                    ? 'bg-green-500 text-white'
                    : index !== questions[currentQuestion].correctAnswer && showResult
                      ? 'bg-red-500 text-white'
                      : 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                }`}>
                  {String.fromCharCode(65 + index)}
                </div>
                <span className="font-medium">{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex justify-end">
        <button
          onClick={handleNextQuestion}
          disabled={selectedAnswer === null}
          className={`py-3 px-8 rounded-md font-medium transition duration-300 ${selectedAnswer === null
            ? 'bg-gray-300 cursor-not-allowed text-gray-500 dark:bg-gray-700 dark:text-gray-400'
            : 'bg-gradient-ai bg-size-200 bg-pos-0 hover:bg-pos-100 text-white shadow-ai hover:shadow-ai-hover'}`}
        >
          {currentQuestion < questions.length - 1 ? 'Suivant' : 'Terminer'}
        </button>
      </div>
    </div>
  );
}
