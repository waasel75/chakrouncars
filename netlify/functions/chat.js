exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method not allowed' };

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return { statusCode: 500, body: JSON.stringify({ error: 'no key' }) };

  const { messages, ctx } = JSON.parse(event.body || '{}');

  const system = `Tu es l'assistant virtuel de MarocDrive, agence de location de voitures au Maroc.
Reponds dans la meme langue que le client (francais, arabe, anglais, espagnol, darija marocaine).
Sois concis et professionnel. Max 3-4 phrases. Emojis avec moderation.
FLOTTE: ${ctx?.cars || 'Dacia Logan 250 MAD/j, Hyundai Tucson 490 MAD/j'}
OFFRES: ${ctx?.offers || 'aucune'}
INFOS: Livraison gratuite au Maroc. Assurance incluse. Paiement especes/carte. WhatsApp: +212 634 829 085.
Reponds uniquement aux questions liees a MarocDrive.`;

  const contents = messages.map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }]
  }));

  const resp = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: system }] },
        contents,
        generationConfig: { maxOutputTokens: 300, temperature: 0.7 }
      })
    }
  );

  const data = await resp.json();

  if (!resp.ok || data.error) {
    console.error('Gemini error:', JSON.stringify(data));
    return { statusCode: 500, body: JSON.stringify({ error: data.error?.message || 'gemini_error' }) };
  }

  const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
  if (!reply) return { statusCode: 500, body: JSON.stringify({ error: 'empty_response' }) };

  return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ reply }) };
};
