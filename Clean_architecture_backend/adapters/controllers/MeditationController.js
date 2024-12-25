const GetAdviceByMood = require("../../applications/use-cases/GetAdviceByMood");
const GeminiApi = require("../../infrastructure/gemini/geminiService");
const GetDailyQuotes = require("../../applications/use-cases/GetDailyQuotes");


class MeditationController {
    static async dailyQuotes(req , res) {
      try{
        const quotesRepository = new GeminiApi();
        const getDailyQuotes = new GetDailyQuotes(quotesRepository);
        const quotes = await getDailyQuotes.execute();
        res.status(200).json({quotes});
      }
      catch(error){
        res.status(500).json({error:error.message});
      }  
    }

    static async myMood(req , res) {
        try{
          const quotesRepository = new GeminiApi();
          const getAdviceByMood = new GetAdviceByMood(quotesRepository);
          const quotes = await getAdviceByMood.execute(req.body.mood);
          res.status(200).json({quotes});
        }
        catch(error){
          res.status(500).json({error:error.message});
        }  
      }
}




module.exports = MeditationController;