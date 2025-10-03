
import { GoogleGenAI, Type } from "@google/genai";
import { LifeStage } from "../types";

const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_API_KEY as string,
  });  

export async function generateMessages(): Promise<Record<LifeStage['id'], string>> {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Generate a short, heartfelt, and respectful message for a memorial website for a young man who loved scooters. Provide one message for each of the following life stages: Childhood, Early Teens, Late Teens, Young Adulthood, and Legacy. The tone should be warm and commemorative.`,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        childhood: {
                            type: Type.STRING,
                            description: 'A message about his childhood adventures, perhaps his first bike.',
                        },
                        earlyTeens: {
                            type: Type.STRING,
                            description: 'A message about growing friendships and developing his passion for riding.',
                        },
                        lateTeens: {
                            type: Type.STRING,
                            description: 'A message about freedom, getting his license, and his scooter as a companion.',
                        },
                        youngAdulthood: {
                            type: Type.STRING,
                            description: 'A message about navigating life and finding clarity on the road.',
                        },
                        legacy: {
                            type: Type.STRING,
                            description: 'A message about the lasting impact of his spirit and the memories he left behind.',
                        },
                    },
                },
            },
        });

        const jsonText = response.text.trim();
        const parsedMessages = JSON.parse(jsonText);
        
        return parsedMessages as Record<LifeStage['id'], string>;

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Failed to generate messages from Gemini API.");
    }
}
