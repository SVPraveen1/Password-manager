// app/api/cards/route.ts
import { db, cards } from '@/lib/db/schema';
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const { userId } = await auth(); // Add await here
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const userCards = await db
      .select()
      .from(cards)
      .where(eq(cards.userId, userId));

    return NextResponse.json(userCards);
  } catch (error) {
    console.error(error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = await auth(); // Add await here
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { cardNumber, cardHolder, expiryDate, cvv } = await req.json();

    const newCard = await db
      .insert(cards)
      .values({
        userId,
        cardNumber,
        cardHolder,
        expiryDate,
        cvv,
      })
      .returning();

    return NextResponse.json(newCard[0]);
  } catch (error) {
    console.error(error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}