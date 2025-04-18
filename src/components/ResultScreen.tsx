
import { Button } from "@/components/ui/button";
import { PersonaType } from "../types/quiz";
import { personaMessages } from "../data/quizData";
import { whatsappPrompts } from "../data/whatsappPrompts";
import { AlertTriangle, MessageCircle, ShieldCheck, CheckCircle2, Timer } from "lucide-react";

interface ResultScreenProps {
  persona: PersonaType;
  onContact: () => void;
  userAnswers?: string[];
}

export const ResultScreen = ({ persona, onContact, userAnswers = [] }: ResultScreenProps) => {
  const message = personaMessages[persona];
  const whatsappPrompt = whatsappPrompts[persona];

  const createPersonalizedMessage = () => {
    let personalizedMessage = whatsappPrompt.initialMessage;
    
    // Add personalization based on user answers if they exist
    if (userAnswers && userAnswers.length > 0) {
      // Add specific concerns based on answers
      if (userAnswers[0]) {
        personalizedMessage += `\n\nVocê mencionou que está com "${userAnswers[0]}". `;
      }
      
      // Add time with problem if it exists (answer 2)
      if (userAnswers[1]) {
        personalizedMessage += `Entendo que você está enfrentando isso há "${userAnswers[1]}". `;
      }
      
      // Add treatment history if it exists (answer 3)
      if (userAnswers[2]) {
        if (userAnswers[2].includes("Sim")) {
          personalizedMessage += `Vejo que você já tentou outros tratamentos. Nossa solução é diferente! `;
        } else {
          personalizedMessage += `Vejo que você ainda não tentou tratamentos. Temos excelentes resultados para casos como o seu! `;
        }
      }
    }
    
    // Add closing statement
    personalizedMessage += "\n\nEstamos prontos para te ajudar. Quando podemos começar seu tratamento?";
    
    return personalizedMessage;
  };

  const handleContact = () => {
    const personalizedText = encodeURIComponent(createPersonalizedMessage());
    window.location.href = `https://wa.me/5582987666097?text=${personalizedText}`;
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6 bg-white rounded-lg shadow-lg animate-fade-in">
      <div className="text-center space-y-2">
        <div className="flex justify-center">
          <CheckCircle2 className="w-16 h-16 text-green-500" />
        </div>
        <h2 className="text-2xl font-bold text-blue-900">
          {message.title}
        </h2>
      </div>

      <div className="space-y-4 text-gray-700">
        <p className="whitespace-pre-line">{message.message}</p>

        <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg space-y-4">
          <h3 className="text-xl font-bold text-green-800 text-center">
            🎉 OFERTA ESPECIAL DISPONÍVEL AGORA
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-green-700">
              <ShieldCheck className="flex-shrink-0" />
              <span className="font-medium">Tratamento 100% Natural com Barbatimão</span>
            </div>
            <div className="flex items-center gap-2 text-green-700">
              <CheckCircle2 className="flex-shrink-0" />
              <span className="font-medium">Elimina o HPV em até 30 dias</span>
            </div>
            <div className="flex items-center gap-2 text-green-700">
              <Timer className="flex-shrink-0" />
              <span className="font-medium">Resultados já na primeira semana</span>
            </div>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <p className="text-red-600 font-bold text-center">
              ⚠️ ATENÇÃO: Apenas 7 kits disponíveis hoje!
            </p>
          </div>
        </div>

        <div className="p-4 bg-yellow-50 rounded-lg flex gap-3">
          <AlertTriangle className="text-yellow-600 flex-shrink-0" />
          <p className="text-yellow-800 whitespace-pre-line">
            {message.alert}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <Button 
          onClick={handleContact}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg font-medium rounded-lg flex items-center justify-center gap-2 animate-pulse"
        >
          <MessageCircle className="w-5 h-5" />
          GARANTIR MEU TRATAMENTO AGORA
        </Button>

        <p className="text-sm text-gray-500 text-center">
          💡 DICA: Ao falar com nosso especialista, pergunte sobre o protocolo "Desidratação Celular" que elimina o HPV na raiz com eficácia comprovada em 97% dos casos!
        </p>
      </div>
    </div>
  );
};
