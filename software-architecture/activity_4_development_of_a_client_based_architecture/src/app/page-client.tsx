'use client'
import {useState} from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    Button,
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    Input,
    ScrollArea
} from "@lifespikes/ui"

interface Message {
    id: number
    text: string
    sender: 'user' | 'bot'
}

export default function PageClient() {
    const [messages, setMessages] = useState<Message[]>([
        {id: 1, text: "Hello! How can I assist you today?", sender: 'bot'}
    ])
    const [inputMessage, setInputMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault()
        if (inputMessage.trim() === '' || isLoading) return

        const newUserMessage: Message = {
            id: messages.length + 1,
            text: inputMessage,
            sender: 'user'
        }

        setMessages(prevMessages => [...prevMessages, newUserMessage])
        setInputMessage('')
        setIsLoading(true)

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({message: inputMessage}),
            })

            if (!response.ok) {
                throw new Error('Failed to get response from server')
            }

            const data = await response.json()
            const botResponse: Message = {
                id: messages.length + 2,
                text: data.response,
                sender: 'bot'
            }

            setMessages(prevMessages => [...prevMessages, botResponse])
        } catch (error) {
            console.error('Error:', error)
            const errorMessage: Message = {
                id: messages.length + 2,
                text: "Sorry, I couldn't process your request. Please try again.",
                sender: 'bot'
            }
            setMessages(prevMessages => [...prevMessages, errorMessage])
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Chat with Server</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[400px] pr-4">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex items-start mb-4 ${
                                message.sender === 'user' ? 'justify-end' : 'justify-start'
                            }`}
                        >
                            {message.sender === 'bot' && (
                                <Avatar className="mr-2">
                                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Bot"/>
                                    <AvatarFallback>Bot</AvatarFallback>
                                </Avatar>
                            )}
                            <div
                                className={`rounded-lg p-2 max-w-[70%] ${
                                    message.sender === 'user'
                                        ? 'bg-primary text-primary-foreground'
                                        : 'bg-muted'
                                }`}
                            >
                                {message.text}
                            </div>
                            {message.sender === 'user' && (
                                <Avatar className="ml-2">
                                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User"/>
                                    <AvatarFallback>You</AvatarFallback>
                                </Avatar>
                            )}
                        </div>
                    ))}
                </ScrollArea>
            </CardContent>
            <CardFooter>
                <form onSubmit={handleSendMessage} className="flex w-full items-center space-x-2">
                    <Input
                        id="message"
                        placeholder="Type your message..."
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        className="flex-1 w-full"
                        containerClassName='flex-1 w-full'
                        disabled={isLoading}
                    />
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? 'Sending...' : 'Send'}
                    </Button>
                </form>
            </CardFooter>
        </Card>
    )
}