import { Button } from "@/components/ui/button";
import { Shield, Lock, AlertTriangle, Check } from "lucide-react";

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="max-w-md mx-auto p-6 space-y-6 text-center bg-white rounded-lg shadow-lg animate-fade-in">
      <div className="flex justify-center">
        <Shield className="w-16 h-16 text-blue-800" />
      </div>
      <h1 className="text-2xl font-bold text-blue-900">VERIFICAÇÃO MÉDICA CONFIDENCIAL</h1>
      
      <p className="text-gray-600">
        Estamos selecionando pessoas para receber nosso tratamento exclusivo à base de Barbatimão que já ajudou mais de 23.000 pessoas a eliminar definitivamente as verrugas do HPV.
      </p>
      
      <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg flex items-center gap-3">
        <AlertTriangle className="text-yellow-600 flex-shrink-0" />
        <p className="text-yellow-800 text-sm">
          IMPORTANTE: Esta consulta é 100% privada e confidencial.
        </p>
      </div>

      <div className="text-sm text-gray-500 flex items-center justify-center gap-2">
        <Check className="text-green-600" />
        <span>Restam apenas 7 kits com desconto exclusivo hoje</span>
      </div>

      <div className="flex flex-col items-center gap-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Check className="text-green-600" />
          <span>Aprovado por médicos</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="text-green-600" />
          <span>Venda autorizada</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="text-green-600" />
          <span>Garantia de 30 dias</span>
        </div>
      </div>

      <Button 
        onClick={onStart}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-6 text-lg font-medium rounded-lg transition-colors"
      >
        COMEÇAR VERIFICAÇÃO 👉
      </Button>

      <p className="text-xs text-gray-500">Seus dados estão protegidos</p>
    </div>
  );
};
