
interface WhatsAppPrompt {
  initialMessage: string;
  objections: {
    [key: string]: string;
  };
}

export const whatsappPrompts: Record<string, WhatsAppPrompt> = {
  vergonha: {
    initialMessage: "Olá! Entendi que você está buscando uma solução discreta para as verrugas. 🌿 Nosso tratamento com Barbatimão é 100% natural e já ajudou mais de 23.000 pessoas na mesma situação. Como posso te ajudar hoje?",
    objections: {
      preco: "Entendo sua preocupação com o investimento. Temos ótimas condições de pagamento, e o mais importante: o tratamento é definitivo.",
      eficacia: "O Barbatimão tem eficácia comprovada em mais de 97% dos casos. Agimos diretamente na raiz do problema.",
      tempo: "O tratamento começa a agir desde o primeiro dia! Em 2 semanas você já verá resultados significativos."
    }
  },
  medo: {
    initialMessage: "Olá! Vi que você está preocupado(a) com as verrugas. 🌿 Nosso tratamento é 100% natural e indolor, desenvolvido especialmente para eliminar as verrugas sem causar desconforto. Como posso te ajudar?",
    objections: {
      preco: "Entendo sua preocupação com o valor. Temos excelentes condições de pagamento para você começar hoje mesmo!",
      eficacia: "Nossa taxa de sucesso é de 97%! O diferencial é que eliminamos o problema na raiz.",
      tempo: "Você verá os primeiros resultados em até 7 dias! O tratamento completo leva 30 dias."
    }
  },
  tratamento: {
    initialMessage: "Olá! Entendo que você já tentou outros tratamentos sem sucesso. 🌿 Nossa solução com Barbatimão é diferente: agimos na causa do problema, não apenas nos sintomas. Como posso te ajudar hoje?",
    objections: {
      preco: "Sei que você já investiu em outros tratamentos. Por isso, temos condições especiais para você experimentar nossa solução definitiva.",
      eficacia: "Diferente de outros métodos, nosso protocolo elimina o problema na raiz. Por isso temos 97% de eficácia!",
      tempo: "Entendo sua pressa! Com nosso protocolo, você verá resultados já na primeira semana!"
    }
  },
  negacao: {
    initialMessage: "Olá! É importante tratar as verrugas o quanto antes. 🌿 Nosso tratamento natural já ajudou mais de 23.000 pessoas e pode te ajudar também. Como posso te ajudar hoje?",
    objections: {
      preco: "Investir na sua saúde agora evitará gastos muito maiores no futuro. Temos ótimas condições de pagamento!",
      eficacia: "Nossa taxa de sucesso é de 97%! Quanto mais cedo começar, melhores serão os resultados.",
      tempo: "O tratamento age rápido, com resultados visíveis em 7 dias! Não deixe o problema se agravar."
    }
  }
};
