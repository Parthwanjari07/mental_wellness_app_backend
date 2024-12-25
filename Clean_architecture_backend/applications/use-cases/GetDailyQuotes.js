const UseCaseInterface = require("../interface/UseCaseInterfaces");
const Meditation = require("../../domain/entities/meditation");
const GeminiApi = require("../../infrastructure/gemini/geminiService");

class GetDailyQuotes extends UseCaseInterface {
    constructor(quotesRepository) {
        super();
        this.quotesRepository = quotesRepository;
    }

    async execute() {
        try {
            const geminiApi = new GeminiApi();
            const quotesData = await this.quotesRepository.getDailyQuotes();
            return new Meditation({ text: quotesData });
        } catch (error) {
            console.error("Error executing GetDailyQuotes use case:", error);
            throw error;
        }
    }
}

module.exports = GetDailyQuotes;