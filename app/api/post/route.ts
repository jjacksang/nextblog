import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    const res = await prisma.post.create({
        data: {
            title: "new Data test",
            content: "hello supabase and prisma!!!",
        },
    });
    return Response.json("sucsess!");
}
