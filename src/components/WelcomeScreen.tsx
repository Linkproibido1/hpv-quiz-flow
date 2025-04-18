
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, Check, Stethoscope } from "lucide-react";

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="max-w-md mx-auto p-6 space-y-6 text-center bg-white rounded-lg shadow-lg animate-fade-in">
      <div className="flex items-center justify-center gap-2 bg-blue-50 p-3 rounded-lg mb-4">
        <span className="text-blue-800 text-sm font-medium">Protegido por sigilo médico</span>
      </div>

      <div className="flex justify-center mb-6">
        <img 
          src="https://i.ibb.co/21cgqQk7/Design-sem-nome-17-removebg-preview-1.png" 
          alt="Especialista Médico" 
          className="w-64 h-64 object-contain rounded-full border-4 border-blue-100 shadow-md"
        />
      </div>

      <div className="flex items-center justify-center gap-2 text-blue-600">
        <Stethoscope className="w-5 h-5" />
        <span className="text-sm font-medium">Análise Médica Especializada</span>
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

      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="bg-blue-50 p-3 rounded-lg">
          <div className="font-bold text-blue-900 text-xl">23mil+</div>
          <div className="text-blue-600">Pacientes tratados</div>
        </div>
        <div className="bg-green-50 p-3 rounded-lg">
          <div className="font-bold text-green-900 text-xl">97%</div>
          <div className="text-green-600">Taxa de sucesso</div>
        </div>
      </div>

      <Button 
        onClick={onStart}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-6 text-lg font-medium rounded-lg transition-colors"
      >
        FAZER AVALIAÇÃO GRATUITA 👉
      </Button>

      <div className="flex flex-col items-center gap-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Check className="text-green-600" />
          <span>Aprovado pela ANVISA</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="text-green-600" />
          <span>Recomendado por Médicos</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="text-green-600" />
          <span>Garantia de 30 dias</span>
        </div>
      </div>
      
      <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
        <Shield className="w-4 h-4" />
        <span>Seus dados estão protegidos por criptografia</span>
      </div>
    </div>
  );
};
