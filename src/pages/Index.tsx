
import { useState } from "react";
import { WelcomeScreen } from "../components/WelcomeScreen";
import { QuizQuestion } from "../components/QuizQuestion";
import { ResultScreen } from "../components/ResultScreen";
import { initialQuestion, maleQuestions, femaleQuestions } from "../data/quizData";
import { QuizState, PersonaType, UserSex } from "../types/quiz";

const determinePersona = (answers: string[]): PersonaType => {
  const secondAnswer = answers[1];
  
  switch (secondAnswer) {
    case "A vergonha e constrangimento em momentos íntimos":
      return "vergonha";
    case "A aparência das verrugas (questão estética)":
      return "estetica";
    case "Medo de complicações graves como câncer":
      return "medo";
    case "Preocupação em transmitir para parceiros":
      return "transmissao";
    case "Tratamentos anteriores que não funcionaram":
      return "tratamento";
    default:
      return "negacao";
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
        
        if (prev.currentQuestion >= currentQuestions.length + 1) {
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
        totalSteps={5}
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
      totalSteps={5}
    />
  );
};

export default Index;

