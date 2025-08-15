import { TAILWIND_HEX_COLORS } from "./constants";

export function getRandomStyle(shade: number) {
  const colorNames = Object.keys(TAILWIND_HEX_COLORS);
  const randomIndex = Math.floor(Math.random() * colorNames.length);
  const randomColorName = colorNames[randomIndex];
  const shades =
    TAILWIND_HEX_COLORS[randomColorName as keyof typeof TAILWIND_HEX_COLORS];
  const hexCode = shades[shade as keyof typeof shades] || shades[500];

  return { backgroundColor: hexCode };
}
