
import { Button } from "@/components/ui/button";
import { PersonaType } from "../types/quiz";
import { personaMessages } from "../data/quizData";
import { AlertTriangle, MessageCircle } from "lucide-react";

interface ResultScreenProps {
  persona: PersonaType;
  onContact: () => void;
}

export const ResultScreen = ({ persona, onContact }: ResultScreenProps) => {
  const message = personaMessages[persona];

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6 bg-white rounded-lg shadow-lg animate-fade-in">
      <h2 className="text-2xl font-bold text-center text-blue-900">
        {message.title}
      </h2>

      <div className="space-y-4 text-gray-700">
        <p className="whitespace-pre-line">{message.message}</p>

        <div className="p-4 bg-yellow-50 rounded-lg flex gap-3">
          <AlertTriangle className="text-yellow-600 flex-shrink-0" />
          <p className="text-yellow-800 whitespace-pre-line">
            {message.alert}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <Button 
          onClick={onContact}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg font-medium rounded-lg flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          FALAR COM ESPECIALISTA
        </Button>

        <p className="text-sm text-gray-500 text-center">
          💡 DICA: Quando falar com nosso especialista, pergunte sobre o protocolo de "Desidratação Celular" que elimina o HPV na raiz!
        </p>
      </div>
    </div>
  );
};
