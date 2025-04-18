
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QuizQuestion as QuizQuestionType } from "../types/quiz";

interface QuizQuestionProps {
  question: QuizQuestionType;
  onAnswer: (answer: string) => void;
  currentStep: number;
  totalSteps: number;
}

export const QuizQuestion = ({ 
  question, 
  onAnswer, 
  currentStep, 
  totalSteps 
}: QuizQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    onAnswer(answer);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6 bg-white rounded-lg shadow-lg animate-fade-in">
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
      
      <h2 className="text-xl font-semibold text-gray-900">
        Pergunta {currentStep} de {totalSteps}
      </h2>
      
      <p className="text-gray-700 text-lg">
        {question.question}
      </p>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <Button
            key={index}
            onClick={() => handleAnswer(option)}
            variant={selectedAnswer === option ? "default" : "outline"}
            className={`w-full justify-start text-left p-4 h-auto ${
              selectedAnswer === option 
                ? "bg-blue-600 text-white hover:bg-blue-700" 
                : "hover:bg-blue-50"
            }`}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};
