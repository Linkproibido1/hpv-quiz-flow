
import { QuizQuestion } from "../types/quiz";

export const initialQuestion: QuizQuestion = {
  id: 0,
  question: "Por favor, selecione seu sexo para uma análise personalizada:",
  options: ["Masculino", "Feminino"]
};

const commonQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Qual o seu principal problema com as verrugas?",
    options: [
      "Verrugas na região íntima",
      "Verrugas na região anal",
      "Verrugas em ambas regiões"
    ]
  },
  {
    id: 2,
    question: "Há quanto tempo você está com este problema?",
    options: [
      "Menos de 3 meses",
      "Entre 3 e 6 meses",
      "Mais de 6 meses"
    ]
  },
  {
    id: 3,
    question: "Você já tentou algum tratamento anterior?",
    options: [
      "Sim, cauterização",
      "Sim, outros tratamentos",
      "Não, nunca tratei"
    ]
  },
  {
    id: 4,
    question: "Você sente dor ou desconforto por causa das verrugas?",
    options: [
      "Sim, bastante dor",
      "Sim, leve desconforto",
      "Não sinto dor"
    ]
  },
  {
    id: 5,
    question: "As verrugas têm afetado sua vida íntima?",
    options: [
      "Sim, muito",
      "Sim, um pouco",
      "Não afetou"
    ]
  },
  {
    id: 6,
    question: "Como você se sente em relação a este problema?",
    options: [
      "Muito preocupado(a)",
      "Um pouco preocupado(a)",
      "Quero resolver logo"
    ]
  },
  {
    id: 7,
    question: "✅ ATENÇÃO! Nosso tratamento com Barbatimão já ajudou mais de 10.000 pessoas a eliminar as verrugas em menos de 30 dias. Você gostaria de começar seu tratamento:",
    options: [
      "Sim, quero começar logo",
      "Quero mais informações",
      "Preciso pensar mais"
    ]
  }
];

export const maleQuestions = commonQuestions;
export const femaleQuestions = commonQuestions;

export const personaMessages = {
  vergonha: {
    title: "✅ Avaliação Concluída!",
    message: "Com base nas suas respostas, você é elegível para nosso protocolo exclusivo com Barbatimão.\n\nNosso tratamento é discreto, 100% natural e age diretamente na raiz do problema, eliminando as verrugas em até 30 dias.",
    alert: "Entendemos sua situação e garantimos total sigilo. Nossa especialista irá te explicar o protocolo de tratamento ideal para o seu caso."
  },
  estetica: {
    title: "✅ Avaliação Concluída!",
    message: "Com base nas suas respostas, você é elegível para nosso protocolo exclusivo com Barbatimão.\n\nO tratamento age diretamente nas verrugas, eliminando-as sem deixar cicatrizes e devolvendo a saúde da sua pele.",
    alert: "Nossa especialista irá te explicar como o Barbatimão age nas camadas profundas da pele, eliminando as verrugas de forma natural e segura."
  },
  medo: {
    title: "✅ Avaliação Concluída!",
    message: "Com base nas suas respostas, você é elegível para nosso protocolo exclusivo com Barbatimão.\n\nNosso tratamento é 100% natural e indolor, ideal para quem busca uma solução eficaz e segura.",
    alert: "Nossa especialista vai te explicar como o tratamento age de forma suave, eliminando as verrugas sem dor ou desconforto."
  },
  transmissao: {
    title: "✅ Avaliação Concluída!",
    message: "Com base nas suas respostas, você é elegível para nosso protocolo exclusivo com Barbatimão.\n\nNosso tratamento não só elimina as verrugas visíveis, mas também age no sistema imunológico para maior proteção.",
    alert: "Nossa especialista irá te explicar como o tratamento ajuda a proteger você e seu parceiro(a)."
  },
  tratamento: {
    title: "✅ Avaliação Concluída!",
    message: "Com base nas suas respostas, você é elegível para nosso protocolo exclusivo com Barbatimão.\n\nDiferente de outros tratamentos, nossa solução age na causa do problema, não apenas nos sintomas visíveis.",
    alert: "Nossa especialista vai te explicar por que o Barbatimão é mais eficaz que outros tratamentos convencionais."
  },
  negacao: {
    title: "✅ Avaliação Concluída!",
    message: "Com base nas suas respostas, você é elegível para nosso protocolo exclusivo com Barbatimão.\n\nQuanto mais cedo você iniciar o tratamento, mais rápido e eficaz será o resultado.",
    alert: "Nossa especialista irá te explicar a importância de começar o tratamento o quanto antes para evitar o agravamento do problema."
  }
};

