const axios = require('axios');
const dotenv = require('dotenv');
const extractJson = require('../helper/validjson');
dotenv.config();
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const evaluation=[];


const evaluateanswer = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || typeof text !== "string") {
      return res.status(400).json({ error: "'text' field is required" });
    }

    const systemPrompt = `
Return ONLY this JSON format:

{
  "score": number,
  "summary": "one line summary",
  "improvement": "one line suggestion"
}
`;
const url =`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;


    const payload = {
      contents: [
        {
          role: "user",
          parts: [
            { text: systemPrompt },
            { text: `Evaluate this answer: ${text}`}
          ]
        }
      ]
    };

const llmRes = await axios.post(url, payload, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    const raw = llmRes.data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!raw) {
      return res.status(500).json({
        error: "Invalid response from Gemini",
        response: llmRes.data
      });
    }

    const parsed = extractJson(raw);

    if (!parsed) {
      return res.status(500).json({
        error: "Failed to parse JSON from Gemini response",
        llm_raw: raw
      });
    }

    // score normalization
    let score = Number(parsed.score);
    if (isNaN(score)) score = 0;
    if (score < 0) score = 0;
    if (score > 10) score = 10;

    const evalData = {
      id: evaluation.length + 1,
      score:parsed.score*10,
      summary: parsed.summary,
      improvement: parsed.improvement
    };

    evaluation.push(evalData);

    return res.json({
      score:parsed.score*10,
      summary: parsed.summary,
      improvement: parsed.improvement
    });

  } catch (err) {
    return res.status(500).json({
      error: "Internal server error",
      details: err.message
    });
}
};


const rank=(req,res)=>{
    try{
 const ranked = [...evaluation].sort((a, b) => b.score - a.score);
  return res.json({
    total: ranked.length,
    ranking: ranked
  });
    }catch(err){
       return res.json({
            message:err.message,
        })
    }


}

module.exports = {evaluateanswer,rank};
