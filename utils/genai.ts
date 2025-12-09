import { GoogleGenAI } from "@google/genai";

// Safely get the API key without crashing if 'process' is undefined
const getApiKey = () => {
  // 1. Try Vite standard (import.meta.env)
  try {
    // @ts-ignore
    if (import.meta && import.meta.env && import.meta.env.VITE_API_KEY) {
      // @ts-ignore
      return import.meta.env.VITE_API_KEY;
    }
  } catch (e) {}

  // 2. Try Node/Webpack standard (process.env)
  try {
    if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
      return process.env.API_KEY;
    }
  } catch (e) {}

  return "";
}

const apiKey = getApiKey();

// Initialize with the resolved key. If empty, specific AI calls will fail but app won't crash.
const ai = new GoogleGenAI({ apiKey });

export async function generateImage(prompt: string, cacheKey?: string): Promise<string | null> {
  // 1. Try to get from cache first
  if (cacheKey) {
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        return cached;
      }
    } catch (e) {
      console.warn("Failed to access localStorage", e);
    }
  }

  // 2. Generate if not in cache
  if (!apiKey) {
    console.warn("GenAI: No API Key found. Skipping generation.");
    return null;
  }

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