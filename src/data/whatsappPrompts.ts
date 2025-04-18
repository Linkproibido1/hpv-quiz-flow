
interface WhatsAppPrompt {
  initialMessage: string;
  objections: {
    [key: string]: string;
  };
}

export const whatsappPrompts: Record<string, WhatsAppPrompt> = {
  vergonha: {
    initialMessage: "Olá! Vi que você está buscando uma solução discreta para eliminar as verrugas. 🌿 Nossa especialista está pronta para te ajudar com total confidencialidade. Entendo que esse é um assunto sensível, e quero te garantir que temos um protocolo específico que já ajudou mais de 23.000 pessoas na mesma situação. Como posso te ajudar hoje?",
    objections: {
      preco: "Entendo sua preocupação com o investimento. Temos condições especiais e parcelamento em até 12x. O mais importante é que o tratamento é definitivo, então você economiza com outros tratamentos no futuro.",
      eficacia: "O Barbatimão tem eficácia comprovada em mais de 97% dos casos. Nosso protocolo exclusivo age diretamente na raiz do problema, eliminando as verrugas de forma natural e permanente.",
      tempo: "O tratamento começa a agir desde o primeiro dia! A maioria dos nossos pacientes vê resultados significativos em 2 semanas."
    }
  },
  medo: {
    initialMessage: "Olá! Notei que você está preocupado(a) com o HPV. 🌿 Nosso tratamento é 100% natural e indolor, desenvolvido especialmente para quem busca uma solução segura. Mais de 23.000 pessoas já eliminaram o vírus com nosso protocolo. Como posso te ajudar?",
    objections: {
      preco: "Entendo sua preocupação com o valor. Compare com outros tratamentos: nosso protocolo é mais econômico e oferece resultados permanentes. Temos ótimas condições de pagamento!",
      eficacia: "Nossa taxa de sucesso é de 97%! O diferencial é que atacamos o vírus na raiz, não apenas os sintomas visíveis.",
      tempo: "Você verá os primeiros resultados em até 7 dias! O tratamento completo leva 30 dias para eliminar totalmente as verrugas."
    }
  },
  tratamento: {
    initialMessage: "Olá! Vi que você já tentou outros tratamentos sem sucesso. 🌿 Nossa solução com Barbatimão é completamente diferente: age na raiz do problema e já ajudou mais de 23.000 pessoas. Nosso protocolo exclusivo tem 97% de eficácia comprovada. Como posso te ajudar hoje?",
    objections: {
      preco: "Entendo que você já investiu em outros tratamentos. Por isso, temos condições especiais para que você possa experimentar nossa solução definitiva.",
      eficacia: "Diferente de outros tratamentos, nosso protocolo age na causa do problema, não apenas nos sintomas. Por isso temos 97% de eficácia!",
      tempo: "Sei que você já perdeu tempo com outros tratamentos. Com nosso protocolo, você verá resultados já na primeira semana!"
    }
  },
  negacao: {
    initialMessage: "Olá! Entendo que você está há mais de 6 meses com esse desafio. 🌿 É importante agir agora! Nosso tratamento natural já ajudou mais de 23.000 pessoas e pode te ajudar também. Que tal conversarmos sobre uma solução definitiva?",
    objections: {
      preco: "Investir na sua saúde agora evitará gastos muito maiores no futuro. Temos excelentes condições de pagamento para você começar hoje mesmo!",
      eficacia: "O tempo de espera pode agravar o problema. Nosso tratamento tem 97% de eficácia e age desde o primeiro dia!",
      tempo: "Quanto mais tempo passa, mais o problema pode se agravar. Mas não se preocupe: nosso tratamento age rápido, com resultados visíveis em 7 dias!"
    }
  }
};
