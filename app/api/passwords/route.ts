// // app/api/passwords/route.ts
// // import { db, passwords } from '@/lib/db/schema';
// import { auth } from '@clerk/nextjs/server';
// import { NextResponse } from 'next/server';
// import { eq } from 'drizzle-orm';

// export async function GET() {
//   try {
//     const { userId } = await auth(); // Add await here
//     if (!userId) {
//       return new NextResponse('Unauthorized', { status: 401 });
//     }

//     const userPasswords = await db
//       .select()
//       .from(passwords)
//       .where(eq(passwords.userId, userId));

//     return NextResponse.json(userPasswords);
//   } catch (error) {
//     console.error(error);
//     return new NextResponse('Internal Server Error', { status: 500 });
//   }
// }

// export async function POST(req: Request) {
//   try {
//     const { userId } = await auth(); // Add await here
//     if (!userId) {
//       return new NextResponse('Unauthorized', { status: 401 });
//     }

//     const { title, username, password } = await req.json();

//     const newPassword = await db
//       .insert(passwords)
//       .values({
//         userId,
//         title,
//         username,
//         password,
//       })
//       .returning();

//     return NextResponse.json(newPassword[0]);
//   } catch (error) {
//     console.error(error);
//     return new NextResponse('Internal Server Error', { status: 500 });
//   }
// }