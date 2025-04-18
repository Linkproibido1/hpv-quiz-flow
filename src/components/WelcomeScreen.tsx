
import { Button } from "@/components/ui/button";
import { Shield, Lock } from "lucide-react";

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6 text-center bg-white rounded-lg shadow-lg animate-fade-in">
      <div className="flex justify-center">
        <Lock className="w-16 h-16 text-blue-600" />
      </div>
      <h1 className="text-2xl font-bold text-gray-900">VERIFICAÇÃO MÉDICA CONFIDENCIAL</h1>
      <p className="text-gray-600">
        Estamos selecionando pessoas para receber nosso tratamento exclusivo à base de Barbatimão que já ajudou mais de 23.000 pessoas a eliminar definitivamente as verrugas do HPV.
      </p>
      <div className="flex items-center justify-center gap-2 p-4 bg-blue-50 rounded-lg">
        <Shield className="text-blue-600" />
        <p className="text-blue-800 font-medium">
          Esta consulta é 100% privada e confidencial.
        </p>
      </div>
      <p className="text-sm text-gray-600">
        Toque em COMEÇAR para verificar se você é elegível para um dos 7 kits que separamos hoje com desconto exclusivo.
      </p>
      <Button 
        onClick={onStart}
        className="w-full max-w-md bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-medium rounded-lg transition-colors"
      >
        COMEÇAR AGORA
      </Button>
    </div>
  );
};
