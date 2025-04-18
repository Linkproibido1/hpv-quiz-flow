
import { useState } from "react";
import { WelcomeScreen } from "../components/WelcomeScreen";
import { QuizQuestion } from "../components/QuizQuestion";
import { ResultScreen } from "../components/ResultScreen";
import { initialQuestion, maleQuestions, femaleQuestions } from "../data/quizData";
import { QuizState, PersonaType, UserSex } from "../types/quiz";

const determinePersona = (answers: string[]): PersonaType => {
  const timeWithIssue = answers[2]; 
  const hasTreatment = answers[3]; 
  
  if (hasTreatment.includes("Sim")) {
    return "tratamento";
  } else if (timeWithIssue.includes("Mais de 6 meses")) {
    return "negacao";
  } else {
    return "medo";
  }
};

const Index = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: [],
    persona: null,
    isComplete: false,
    userSex: null
  });

  const handleStart = () => {
    setQuizState(prev => ({ ...prev, currentQuestion: 1 }));
  };

  const handleAnswer = (answer: string) => {
    setTimeout(() => {
      setQuizState(prev => {
        const newAnswers = [...prev.answers, answer];
        
        // Handle sex selection
        if (prev.currentQuestion === 1 && !prev.userSex) {
          const sex: UserSex = answer === "Masculino" ? "male" : "female";
          return {
            ...prev,
            userSex: sex,
            currentQuestion: prev.currentQuestion + 1,
            answers: []
          };
        }

        const currentQuestions = prev.userSex === "male" ? maleQuestions : femaleQuestions;
        
        // Check if we've reached the end (8 questions total)
        if (prev.currentQuestion >= 8) {
          return {
            ...prev,
            answers: newAnswers,
            persona: determinePersona(newAnswers),
            isComplete: true,
          };
        }

        return {
          ...prev,
          currentQuestion: prev.currentQuestion + 1,
          answers: newAnswers,
        };
      });
    }, 500);
  };

  const handleContact = () => {
    window.location.href = "https://wa.me/SEU_NUMERO?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20tratamento";
  };

  if (quizState.isComplete && quizState.persona) {
    return <ResultScreen persona={quizState.persona} onContact={handleContact} />;
  }

  if (quizState.currentQuestion === 0) {
    return <WelcomeScreen onStart={handleStart} />;
  }

  if (quizState.currentQuestion === 1) {
    return (
      <QuizQuestion
        question={initialQuestion}
        onAnswer={handleAnswer}
        currentStep={1}
        totalSteps={8}
      />
    );
  }

  const questions = quizState.userSex === "male" ? maleQuestions : femaleQuestions;
  const currentQuestion = questions[quizState.currentQuestion - 2];

  return (
    <QuizQuestion
      question={currentQuestion}
      onAnswer={handleAnswer}
      currentStep={quizState.currentQuestion}
      totalSteps={8}
    />
  );
};

export default Index;
