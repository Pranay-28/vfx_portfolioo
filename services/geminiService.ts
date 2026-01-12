
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getTechnicalBreakdown = async (projectTitle: string, description: string) => {
  if (!API_KEY) return "AI Insights unavailable. Please configure API Key.";

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `As a professional VFX supervisor, provide a short, high-level technical breakdown (3-4 bullet points) for a project titled "${projectTitle}". Focus on industry-standard techniques that would be used based on this description: "${description}". Keep it concise and professional.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Failed to generate technical breakdown.";
  }
};
