
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, Check, Star, Stethoscope, BadgeCheck, FileLock2 } from "lucide-react";

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="max-w-md mx-auto p-6 space-y-6 text-center bg-white rounded-lg shadow-lg animate-fade-in">
      <div className="flex justify-center items-center gap-2">
        <Stethoscope className="w-16 h-16 text-blue-800" />
      </div>

      <div className="flex items-center justify-center gap-2 text-blue-600">
        <BadgeCheck className="w-5 h-5" />
        <span className="text-sm font-medium">Análise Médica Especializada</span>
      </div>

      <h1 className="text-2xl font-bold text-blue-900">VERIFICAÇÃO MÉDICA CONFIDENCIAL</h1>
      
      <div className="flex items-center justify-center gap-2 bg-blue-50 p-3 rounded-lg">
        <FileLock2 className="text-blue-600" />
        <p className="text-blue-800 text-sm font-medium">Protegido por sigilo médico</p>
      </div>

      <p className="text-gray-600">
        Estamos selecionando pessoas para receber nosso tratamento exclusivo à base de Barbatimão que já ajudou mais de 23.000 pessoas a eliminar definitivamente as verrugas do HPV.
      </p>
      
      <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg flex items-center gap-3">
        <AlertTriangle className="text-yellow-600 flex-shrink-0" />
        <p className="text-yellow-800 text-sm">
          IMPORTANTE: Esta consulta é 100% privada e confidencial.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center gap-2">
          <div className="flex -space-x-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center">
                <Star className="w-4 h-4 text-yellow-500" />
              </div>
            ))}
          </div>
          <span className="text-sm text-gray-600">4.9/5 de satisfação</span>
        </div>

        <div className="text-sm text-gray-500 flex items-center justify-center gap-2">
          <Check className="text-green-600" />
          <span>Restam apenas 7 kits com desconto exclusivo hoje</span>
        </div>
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
          <span>Tratamento Patenteado</span>
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
        FAZER AVALIAÇÃO GRATUITA 👉
      </Button>

      <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
        <Shield className="w-4 h-4" />
        <span>Seus dados estão protegidos por criptografia</span>
      </div>
    </div>
  );
};
