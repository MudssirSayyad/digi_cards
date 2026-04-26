import { writeFile, readFile } from 'fs/promises';
import { join } from 'path';
import { NextRequest, NextResponse } from 'next/server';

const messagesFile = join(process.cwd(), 'public', 'messages.json');

interface ContactMessage {
  id: string;
  fullName: string;
  email: string;
  company: string;
  message: string;
  createdAt: string;
}

async function getMessages(): Promise<ContactMessage[]> {
  try {
    const data = await readFile(messagesFile, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveMessages(messages: ContactMessage[]): Promise<void> {
  await writeFile(messagesFile, JSON.stringify(messages, null, 2), 'utf-8');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, company, message } = body;

    if (!fullName || !email || !company || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const messages = await getMessages();
    const newMessage: ContactMessage = {
      id: Date.now().toString(),
      fullName,
      email,
      company,
      message,
      createdAt: new Date().toISOString(),
    };

    messages.push(newMessage);
    await saveMessages(messages);

    return NextResponse.json({ success: true, message: newMessage }, { status: 201 });
  } catch (error) {
    console.error('Error saving message:', error);
    return NextResponse.json({ error: 'Failed to save message' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const messages = await getMessages();
    return NextResponse.json(messages);
  } catch (error) {
    console.error('Error reading messages:', error);
    return NextResponse.json({ error: 'Failed to read messages' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing message ID' }, { status: 400 });
    }

    let messages = await getMessages();
    messages = messages.filter((msg) => msg.id !== id);
    await saveMessages(messages);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting message:', error);
    return NextResponse.json({ error: 'Failed to delete message' }, { status: 500 });
  }
}
