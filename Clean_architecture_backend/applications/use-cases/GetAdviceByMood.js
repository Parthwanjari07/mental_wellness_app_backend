const UseCaseInterface = require("../interface/UseCaseInterfaces");
const Meditation = require("../../domain/entities/meditation");
const GeminiApi = require("../../infrastructure/gemini/geminiService");

class GetAdviceByMood extends UseCaseInterface {
    async execute(mood) {
        const geminiApi = new GeminiApi();
        const quotesData = await geminiApi.getAdviceByMood(mood);
        return new Meditation({ text: quotesData });
    }
}

module.exports = GetAdviceByMood;

