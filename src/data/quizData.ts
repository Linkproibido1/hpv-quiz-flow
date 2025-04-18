import { QuizQuestion } from "../types/quiz";

export const initialQuestion: QuizQuestion = {
  id: 0,
  question: "Por favor, selecione seu sexo para uma análise personalizada:",
  options: ["Masculino", "Feminino"]
};

const commonQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Quantas verrugas você possui atualmente?",
    options: [
      "1-3 verrugas",
      "4-6 verrugas",
      "Mais de 6 verrugas"
    ]
  },
  {
    id: 2,
    question: "Em quais regiões as verrugas estão localizadas?",
    options: [
      "Região genital externa",
      "Região anal",
      "Ambas as regiões"
    ]
  },
  {
    id: 3,
    question: "Há quanto tempo as verrugas surgiram?",
    options: [
      "Menos de 3 meses",
      "3-6 meses",
      "Mais de 6 meses"
    ]
  },
  {
    id: 4,
    question: "✅ EXCLUSIVO: 10.000 pessoas já eliminaram TODAS as verrugas em 30 DIAS com nosso tratamento REVOLUCIONÁRIO! 🔥 Quer descobrir como?",
    options: [
      "SIM! Quero conhecer o tratamento agora",
      "Tenho dúvidas, preciso de mais informações",
      "Não estou interessado(a)"
    ]
  },
  {
    id: 5,
    question: "Você já tentou algum outro tratamento?",
    options: [
      "Sim, cauterização",
      "Sim, outros tratamentos",
      "Não, nunca tratei"
    ]
  },
  {
    id: 6,
    question: "Você tem parceiro(a) fixo(a) ou é casado(a)?",
    options: [
      "Sim, tenho parceiro(a) fixo(a)",
      "Sim, sou casado(a)",
      "Não tenho parceiro(a) fixo(a)"
    ]
  },
  {
    id: 7,
    question: "Você já fez exame para confirmar o HPV?",
    options: [
      "Sim, tenho confirmação",
      "Não, apenas suspeita",
      "Aguardando resultado"
    ]
  }
];

export const maleQuestions = commonQuestions;
export const femaleQuestions = commonQuestions;

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
