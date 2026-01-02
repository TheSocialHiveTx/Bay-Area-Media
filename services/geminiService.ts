
import { GoogleGenAI } from "@google/genai";

export async function getMediaStrategyAdvice(prompt: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a professional Media Strategist for Bay Group Media, an agency in Seabrook, TX. 
      Clients ask you for advice on marketing, print advertising, and video production.
      Respond professionally, keeping in mind the local Bay Area Houston market.
      
      User Question: ${prompt}`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my creative brain right now. Please try again or contact our human team!";
  }
}
