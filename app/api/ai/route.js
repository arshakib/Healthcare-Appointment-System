// app/api/ai/route.js

export async function POST(req) {
  try {
    // Parse the JSON body
    const body = await req.json();
    const { symptom, area } = body;

    if (!symptom || !area) {
      return new Response(
        JSON.stringify({ error: "No symptom or area provided" }),
        {
          status: 400,
        }
      );
    }

    console.log({ symptom, area });
    // Construct the prompt
    const prompt = `
  Symptom: ${symptom}
  Instructions: Provide a basic prescription and recommend which specialist doctor should be consulted.
  Format the response as a JSON object with the following structure:
  {
    "prescription": "Recommended medication and dosage",
    "specialist": "Select among these specialist 
Allergy and Immunology,
Anesthesiology,
Endocrinology,
Gastroenterology,
Hematology,
Infectious Disease,
Nephrology,
Obstetrics and Gynecology (OB/GYN),
Ophthalmology,
Otolaryngology (ENT - Ear, Nose, and Throat),
Pathology,
Plastic Surgery,
Pulmonology (Lung Specialist),
Radiology,
Rheumatology,
Sports Medicine,
Urology,
Geriatrics (Elderly Care),
Emergency Medicine,
Pain Management,
Sleep Medicine to consult .
any one specialist and you mut put that specialist name in double quotation marks.",
  }
  Disclaimer: This is for informational purposes only and not a substitute for professional medical advice.
`;

    // Make the request to the Gemini API
    const apiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    if (!apiResponse.ok) {
      throw new Error("Error communicating with Gemini API");
    }

    const data = await apiResponse.json();
    const content = data.candidates?.[0]?.content?.parts?.[0]?.text;
    console.log(content);

    if (!content) {
      throw new Error("Invalid response structure from Gemini API");
    }

    try {
      // Clean the response - remove markdown code blocks and trim whitespace
      const cleanedContent = content.replace(/```json|```/g, "").trim();
      console.log("Cleaned content:", cleanedContent); // For debugging

      const result = JSON.parse(cleanedContent);
      return new Response(JSON.stringify(result), { status: 200 });
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError);
      return new Response(
        JSON.stringify({
          error: "Failed to parse AI response",
          rawResponse: content, // Include for debugging
        }),
        { status: 500 }
      );
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
