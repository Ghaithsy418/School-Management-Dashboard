export function detectLanguage(text: string) {
  const arabicRegex = /[\u0600-\u06FF]/;

  const englishRegex = /[a-zA-Z]/;

  const hasArabic = arabicRegex.test(text);
  const hasEnglish = englishRegex.test(text);

  if (hasArabic && hasEnglish) return "Mixed";
  else if (hasArabic) return "Arabic";
  else if (hasEnglish) return "English";
  else return "Neither";
}
