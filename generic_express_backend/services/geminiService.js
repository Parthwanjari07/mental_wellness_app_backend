const { GoogleGenerativeAI } = require("@google/generative-ai");

class GeminiService {
    constructor() {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            throw new Error("GEMINI_API_KEY is not set in the environment variables.");
        }
        this.genAI = new GoogleGenerativeAI(apiKey);
        this.model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    }

    async getDailyQuotes() {
        const prompt = `Please provide three inspirational quotes for meditation, one for each part of the day: morning, noon, and evening.
        The response should be in the following format:
        {
            "morningQuote": "quote for morning",
            "noonQuote": "quote for noon",
            "eveningQuote": "quote for evening"
        }`;
        
        try {
            const result = await this.model.generateContent(prompt);
            const response = await result.response;
            return response.text();
        } catch (error) {
            console.error("Error generating daily quotes:", error);
            throw error;
        }
    }

    async getAdviceByMood(mood) {
        const prompt = `Given the current mood of the user: ${mood}, provide an appropriate meditation advice or mental health exercise. 
        The response should be in format:
        {
            "advice": "specific advice or exercise based on the user's mood"
        }`;

        try {
            const result = await this.model.generateContent(prompt);
            const response = await result.response;
            return response.text();
        } catch (error) {
            console.error("Error generating advice by mood:", error);
            throw error;
        }
    }
}

module.exports = new GeminiService();