# Activity 6: Software Architecture Application

This project is a customer support chatbot built with **Next.js** using **TypeScript**. The chatbot leverages the *
*OpenAI API** to provide intelligent and natural language responses to user queries. It is designed to help automate
customer service by providing quick and accurate answers.

## Project Overview

This chatbot provides a user-friendly interface where customers can type questions, and the bot, powered by OpenAI's
language model, generates appropriate responses. The architecture follows the **Model-View-Controller (MVC)** pattern to
ensure clean separation of concerns.

## Technologies Used

- **Next.js**: Framework for building server-rendered React applications.
- **TypeScript**: Strongly typed programming language for writing scalable and maintainable code.
- **OpenAI API**: Natural language processing to generate human-like responses.
- **Vercel**: For deployment and hosting.

## Features

- Intelligent chatbot using OpenAI API.
- Server-side rendering for better performance.
- TypeScript for static typing.
- Easy to deploy with Vercel.

## Getting Started

### Prerequisites

Before you start, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **OpenAI API Key**: You need an API key from OpenAI, which you can obtain by signing up
  at [OpenAI](https://beta.openai.com/signup/).

### Installation

1. **Clone the repository and go to the this folder**:
   ```bash
   cd software-archirecture/activity_6_software_architectura_application
   ```
2. **Install dependencies**:
   ```bash
   yarn install
   ```

### Environment Variables Setup

To use the **OpenAI API**, you'll need to create an `.env.local` file in the root of your project. This file will store
your environment variables, including your **OpenAI API Key**.

1. **Create a `.env.local` file** in the root directory of your project:

   ```bash
   touch .env.local
   ```

2. **Add the following environment variables** to the `.env.local` file:

   ```bash
   OPENAI_API_KEY=your-openai-api-key-here
   ```

   Replace `your-openai-api-key-here` with your actual OpenAI API key.

### Running the App

Now that you’ve set up the environment variables, you can run the app locally.

To start the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app running.

## How it Works

- **Frontend**: Users interact with the chatbot interface in the browser, sending their questions via a simple text
  input form.

- **Backend**: The Next.js API routes handle the communication between the chatbot frontend and the OpenAI API.

- **API Call**: When a user submits a question, the backend sends a request to OpenAI with the user's query. OpenAI
  processes the request and sends back a response.

- **Response Handling**: The response from OpenAI is displayed in the chatbot interface, simulating a conversation with
  a real customer service agent.
