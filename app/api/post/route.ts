import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    // create 생성하기
    // const res = await prisma.post.create({
    //     data: {
    //         title: "Prisma 이용하기",
    //         content:
    //             "method : findUnique, fintFirst, findMany, create, createMany, upsert, update, updateMany, deleteMany, count, aggregate, groupBy",
    //     },
    // });
    // return Response.json("sucsess!");
    // update 하기
    // const res = await prisma.post.update({
    //     where: {
    //         id: 3,
    //     },
    //     data: {
    //         title: "update를 활용한 메소드 내용 추가",
    //         content:
    //             "method : findUnique, fintFirst, findMany, create, createMany, upsert, update, updateMany, deleteMany, count, aggregate, groupBy / option : select, include, where, orderBy, distinct",
    //     },
    // });
    // return Response.json("updated!!");
}
