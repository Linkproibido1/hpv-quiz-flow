
export type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
};

export type PersonaType = 
  | "vergonha"
  | "estetica"
  | "medo"
  | "transmissao"
  | "tratamento"
  | "negacao";

export type UserSex = "male" | "female";

export type QuizState = {
  currentQuestion: number;
  answers: string[];
  persona: PersonaType | null;
  isComplete: boolean;
  userSex: UserSex | null;
};

