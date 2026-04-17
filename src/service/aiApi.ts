import { GoogleGenAI } from '@google/genai';
import { GOOGLE_AI_API_KEY } from '@env';

const ai = new GoogleGenAI({
  apiKey: GOOGLE_AI_API_KEY,
});

export const aiApi = {
  async fetchResponse(prompt: string): Promise<string> {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        {
          role: 'user',
          parts: [{ text: prompt }],
        },
      ],
      config: {
        temperature: 0.2,
        maxOutputTokens: 1024,
      },
    });

    return response.text ?? '';
  },
};
