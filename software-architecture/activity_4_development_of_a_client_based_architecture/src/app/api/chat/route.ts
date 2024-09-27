import {NextRequest, NextResponse} from 'next/server';

export async function POST(req: NextRequest) {
    const {message} = await req.json();

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simple response logic
    let response;
    if (message.toLowerCase().includes('hello')) {
        response = "Hello! How can I assist you today?";
    } else if (message.toLowerCase().includes('bye')) {
        response = "Goodbye! Have a great day!";
    } else {
        response = "I'm not sure how to respond to that. Can you please rephrase or ask something else?";
    }

    return NextResponse.json({response});
}