import OpenAI from 'openai';

class OpenAIService {
  private openai: OpenAI;

  constructor() {
    this.openai = null

     // new OpenAI({
 //     apiKey: process.env.OPENAI_API_KEY,
 //   });
  }

  async generateResponse(messages: { role: string; content: string }[]): Promise<string> {

    return 'hello';
    try {
      const completion = await this.openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messages,
      });

      return completion.choices[0].message.content || "I'm sorry, I couldn't generate a response.";
    } catch (error) {
      console.error('Error generating response:', error);
      return "I'm sorry, there was an error processing your request.";
    }
  }
}

export default new OpenAIService();