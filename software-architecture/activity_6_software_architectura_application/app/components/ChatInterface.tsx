"use client"

import React, { useState, useRef, useEffect } from 'react';
import { useChat } from 'ai/react';
import { ExpandableChat, ExpandableChatHeader, ExpandableChatBody, ExpandableChatFooter } from "@/components/ui/chat/expandable-chat"
import { ChatInput } from "@/components/ui/chat/chat-input"
import { ChatMessageList } from "@/components/ui/chat/chat-message-list"
import { ChatBubble, ChatBubbleMessage, ChatBubbleAvatar } from "@/components/ui/chat/chat-bubble"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send } from 'lucide-react';

export default function ChatInterface() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <ExpandableChat>
      <ExpandableChatHeader>
        <h2 className="text-lg font-semibold">Customer Support Chatbot</h2>
      </ExpandableChatHeader>
      <ExpandableChatBody>
        <ScrollArea ref={scrollAreaRef} className="h-full">
          <ChatMessageList>
            {messages.map((message, index) => (
              <ChatBubble key={index} variant={message.role === 'user' ? 'sent' : 'received'}>
                <ChatBubbleAvatar
                  src={message.role === 'user' ? '/user-avatar.png' : '/bot-avatar.png'}
                  fallback={message.role === 'user' ? 'U' : 'B'}
                />
                <ChatBubbleMessage>
                  {message.content}
                </ChatBubbleMessage>
              </ChatBubble>
            ))}
            {isLoading && (
              <ChatBubble variant="received">
                <ChatBubbleAvatar src="/bot-avatar.png" fallback="B" />
                <ChatBubbleMessage isLoading={true} />
              </ChatBubble>
            )}
          </ChatMessageList>
        </ScrollArea>
      </ExpandableChatBody>
      <ExpandableChatFooter>
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <ChatInput
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </ExpandableChatFooter>
    </ExpandableChat>
  );
}