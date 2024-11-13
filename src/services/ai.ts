import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'api btw'; 
const genAI = new GoogleGenerativeAI(API_KEY);

export async function generateResponse(prompt: string, model: string) {
  try {
    const modelInstance = genAI.getGenerativeModel({ model });
    const result = await modelInstance.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating response:', error);
    throw new Error('Failed to generate response');
  }
}
