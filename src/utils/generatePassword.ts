import { customAlphabet } from "nanoid";

const ALPHABETS = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
};

export const generatePassword = () => {
  const alphabet =
    ALPHABETS.lowercase +
    ALPHABETS.uppercase +
    ALPHABETS.numbers +
    ALPHABETS.symbols;

  const nanoid = customAlphabet(alphabet);

  return nanoid(16);
};
