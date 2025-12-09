import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateImage(prompt: string, cacheKey?: string): Promise<string | null> {
  // 1. Try to get from cache first
  if (cacheKey) {
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        console.log(`[GenAI] Loaded from cache: ${cacheKey}`);
        return cached;
      }
    } catch (e) {
      console.warn("Failed to access localStorage", e);
    }
  }

  // 2. Generate if not in cache
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }]
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const base64Image = `data:image/png;base64,${part.inlineData.data}`;
        
        // 3. Save to cache
        if (cacheKey) {
          try {
            localStorage.setItem(cacheKey, base64Image);
          } catch (e) {
            console.warn("LocalStorage quota exceeded, image not cached.", e);
          }
        }
        return base64Image;
      }
    }
    return null;
  } catch (e) {
    console.error("Failed to generate image", e);
    return null;
  }
}