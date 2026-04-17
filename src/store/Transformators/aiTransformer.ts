export const buildGroceryPrompt = (userPrompt: string): string =>
  `
Rules:
- Respond ONLY with a valid JSON array of strings
- Allowed items: vegetables, fruits, cool drinks, stationery.
- Include synonym expansion
- No explanation
- If nothing matches, return [].
- One line output only

User query:
${userPrompt}
`.trim();

export const parseAiResponse = (response: string): string[] => {
  try {
    const parsed: unknown = JSON.parse(response);
    return Array.isArray(parsed)
      ? parsed.filter(item => typeof item === 'string')
      : [];
  } catch {
    return [];
  }
};
