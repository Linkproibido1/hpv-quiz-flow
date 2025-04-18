
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QuizQuestion as QuizQuestionType } from "../types/quiz";
import { ArrowRight, MessageCircle } from "lucide-react";

interface QuizQuestionProps {
  question: QuizQuestionType;
  onAnswer: (answer: string) => void;
  currentStep: number;
  totalSteps: number;
}

const messages = {
  1: "Não importa há quanto tempo você está com o problema, nosso tratamento age desde o primeiro dia! 💪",
  2: "Entendemos seu desconforto. Nosso tratamento te devolverá a confiança! 🌟",
  3: "Estamos aqui para te ajudar a resolver isso o quanto antes! ⚡",
  4: "Nossa solução natural é diferente de tudo que você já tentou! 🌿"
};

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
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
      
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        Pergunta {currentStep} de {totalSteps}
      </h2>
      
      <p className="text-gray-700 text-lg mb-4">
        {question.question}
      </p>

      {messages[currentStep as keyof typeof messages] && (
        <div className="bg-blue-50 p-4 rounded-lg mb-4 flex items-center gap-2">
          <MessageCircle className="text-blue-600 flex-shrink-0" />
          <p className="text-blue-800 text-sm">
            {messages[currentStep as keyof typeof messages]}
          </p>
        </div>
      )}

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

      {selectedAnswer && (
        <Button
          onClick={() => onAnswer(selectedAnswer)}
          className="w-full bg-green-600 hover:bg-green-700 text-white mt-4 py-6 text-lg font-medium rounded-lg flex items-center justify-center gap-2"
        >
          Continuar
          <ArrowRight className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
};
