# Client-Server Chat Application for Basic Customer Interaction

## Problem Statement

A **marketing agency** needs a simple chat system on its website to engage with potential clients. The chat should automate responses to basic inquiries such as greetings and farewells, helping users feel connected before a human representative takes over, if necessary.

The agency wants a **client-server chat system** where a bot responds to common greetings, farewells, and generic queries. This allows potential clients to receive a response instantly, even outside working hours.

The solution must be simple, effective, and scalable, with the possibility of expanding to handle more complex interactions in the future.

## Solution Overview

This project implements a basic **client-server chat application** using **Next.js**, where users can chat with a simple bot. The bot provides basic responses based on predefined rules for certain keywords, such as greetings like "hello" and farewells like "bye."

While currently limited to basic conversation, this setup can be expanded to include more complex interactions or hand off conversations to a human agent.

### Technical Details

1. **Client-side (PageClient.tsx)**:
    - The **client** manages the user interface using **React**. Users enter messages, which are displayed along with the bot's responses in a simple, user-friendly interface.
    - When a user sends a message, it triggers a **POST** request to the server via the `/api/chat` endpoint.
    - The client then updates the chat log with both the user's message and the bot's response, which are returned by the server.
    - A loading state is displayed while waiting for the bot's reply to simulate real-time interaction.

2. **Server-side (chat.ts - API Route)**:
    - The **server** processes the user input and sends a bot response based on specific keywords in the message.
        - If the user says "hello", the bot responds with a greeting: `"Hello! How can I assist you today?"`
        - If the user says "bye", the bot responds with a farewell: `"Goodbye! Have a great day!"`
        - For other inputs, the bot responds with: `"I'm not sure how to respond to that. Can you please rephrase or ask something else?"`
    - The server introduces a short delay to simulate the bot "thinking" and provide a smoother user experience.

3. **Scalability**:
    - The current setup allows for simple conversation logic but can be extended to handle more complex interactions or integrate AI-based services.
    - The **client-server separation** provides flexibility for future improvements, such as adding more keywords, enabling NLP, or integrating with other customer management systems.

### Architecture

- **Client-Server Model**: The **client** handles the user interface and chat log, while the **server** processes incoming messages and provides appropriate responses. This ensures the system can be easily expanded to include more sophisticated functionality.
- **Next.js API Routes**: The server-side logic is implemented using **Next.js API routes**, offering a clean and efficient way to manage requests and responses.

---

## Installation and Setup

To run this project locally, follow these steps:

### Prerequisites
- **Node.js** (v16 or higher)
- **Yarn** (Package manager)

### Installation Steps

1. **Clone the repository and go to the this folder**:
   ```bash
   cd software-archirecture/activity_4_development_of_a_client_based_architecture
   ```

2. **Install dependencies**:
   ```bash
   yarn install
   ```

3. **Run the development server**:
   ```bash
   yarn dev
   ```

4. **Running the Chat Application**:
    - Open your browser and navigate to `http://localhost:3000`
    - You can now send a message in the chat interface, and the bot will respond based on predefined keywords.

### Example Usage

- Send a message like `"hello"` to receive the bot's greeting.
- Send `"bye"` to receive a farewell.
- Any other input will prompt the bot to ask you to rephrase your question.

---
## Future Improvements

- **More Complex Conversations**: Integrate Natural Language Processing (NLP) services to enable more meaningful and varied responses.
- **Human Agent Integration**: Add functionality to seamlessly hand off conversations from the bot to a human representative if necessary.
- **UI Enhancements**: Improve the chat interface with more advanced design components and features such as file uploads, notifications, and user avatars.

This client-server chat application provides a foundational architecture that can be easily expanded to meet more advanced needs as the marketing agency grows.

