import { ChatMessage } from '../models/ChatMessage';
import OpenAIService from '../models/OpenAIService';

class ChatController {
  private messages: ChatMessage[] = [];

  async processUserInput(userInput: string): Promise<ChatMessage> {
    this.messages.push({ role: 'user', content: userInput });

    const aiResponse = await OpenAIService.generateResponse(this.messages);
    const assistantMessage: ChatMessage = { role: 'assistant', content: aiResponse };
    this.messages.push(assistantMessage);

    return assistantMessage;
  }

  getMessages(): ChatMessage[] {
    return this.messages;
  }
}

export default new ChatController();