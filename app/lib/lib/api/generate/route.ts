import { openai } from "@/lib/openai";

export async function POST(req: Request) {
  const body = await req.json();

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are a professional web developer"
      },
      {
        role: "user",
        content: body.prompt
      }
    ]
  });

  return Response.json(response.choices[0].message);
}
