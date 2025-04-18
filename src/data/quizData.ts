
import { QuizQuestion } from "../types/quiz";

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Há quanto tempo você percebeu as primeiras verrugas?",
    options: [
      "Menos de 1 mês",
      "1-3 meses",
      "3-6 meses",
      "Mais de 6 meses",
      "Ainda não tenho certeza se é HPV"
    ]
  },
  {
    id: 2,
    question: "Qual destes é seu MAIOR incômodo em relação às verrugas genitais?",
    options: [
      "A vergonha e constrangimento em momentos íntimos",
      "A aparência das verrugas (questão estética)",
      "Medo de complicações graves como câncer",
      "Preocupação em transmitir para parceiros",
      "Tratamentos anteriores que não funcionaram",
      "Não me incomoda muito, só quero eliminar"
    ]
  },
  {
    id: 3,
    question: "De 0 a 10, qual a URGÊNCIA em resolver este problema agora?",
    options: [
      "8-10 (Alta urgência)",
      "5-7 (Média urgência)",
      "1-4 (Baixa urgência)"
    ]
  },
  {
    id: 4,
    question: "Você já tentou outros tratamentos para as verrugas?",
    options: [
      "Sim, fiz cauterização (queimagem)",
      "Sim, usei ácidos/cremes",
      "Sim, outros procedimentos médicos",
      "Não, nunca tratei",
      "Tentei remédios caseiros"
    ]
  }
];

export const personaMessages = {
  vergonha: {
    title: "✅ Verificação concluída!",
    message: "Com base nas suas respostas, você É ELEGÍVEL para o tratamento discreto com Barbatimão.\n\nNossa equipe médica desenvolveu um protocolo específico que elimina as verrugas sem necessidade de exposição constrangedora em consultórios.",
    alert: "Para sua privacidade, nosso especialista irá te atender em uma conversa 100% confidencial, sem julgamentos."
  },
  estetica: {
    title: "✅ Verificação concluída!",
    message: "Com base nas suas respostas, você É ELEGÍVEL para nosso protocolo de Remoção Sem Cicatrizes.\n\nNosso tratamento elimina as verrugas sem deixar marcas, preservando a estética natural das suas áreas íntimas.",
    alert: "Nosso especialista já separou informações sobre como o Barbatimão atua nas camadas profundas da pele para resultados perfeitos."
  },
  medo: {
    title: "✅ Verificação concluída!",
    message: "Com base nas suas respostas, você É ELEGÍVEL para nosso Protocolo de Prevenção Avançada.",
    alert: "Estudos recentes mostram que o HPV não tratado pode evoluir para complicações sérias como câncer.\n\nNossa especialista vai explicar como o Barbatimão pode eliminar o vírus na raiz, prevenindo complicações futuras."
  },
  transmissao: {
    title: "✅ Verificação concluída!",
    message: "Com base nas suas respostas, você É ELEGÍVEL para nosso Protocolo de Proteção Dupla.\n\nNossa especialista já preparou informações sobre como o tratamento elimina o vírus HPV e protege você e seu parceiro(a).",
    alert: "A transmissão do HPV ocorre mesmo sem verrugas visíveis. Vamos te explicar tudo."
  },
  tratamento: {
    title: "✅ Verificação concluída!",
    message: "Com base nas suas respostas, você É ELEGÍVEL para nosso Protocolo Indolor e Definitivo.\n\nEntendemos sua frustração com tratamentos anteriores. Nossa especialista vai explicar por que o Barbatimão é diferente de qualquer outro método que você já tentou.",
    alert: "Tratamentos convencionais eliminam apenas 25% do problema. Vamos mostrar como chegar na raiz."
  },
  negacao: {
    title: "✅ Verificação concluída!",
    message: "Com base nas suas respostas, você É ELEGÍVEL para nosso Protocolo de Tratamento Rápido.",
    alert: "Mesmo pequenas verrugas podem conter o vírus HPV completo sob a pele (como um iceberg).\n\nNossa especialista vai explicar como eliminar o problema de forma definitiva e rápida, evitando complicações futuras."
  }
};
