function extractJson(raw) {
  if (!raw || typeof raw !== "string") return null;

  let s = raw.trim();

  // Remove markdown code fences if they exist
  s = s.replace(/```json|```/g, "").trim();

  try {
    return JSON.parse(s);
  } catch {
    // Fallback: extract first { ... }
    const match = s.match(/\{[\s\S]*\}/);
    if (match) {
      try {
        return JSON.parse(match[0]);
      } catch {}
    }
    return null;
  }
}

module.exports=extractJson;