import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    // create 생성하기
    // const res = await prisma.post.create({
    //     data: {
    //         title: "Prisma 이용하기",
    //         content:
    //             "method : findUnique, fintFirst, findMany, create, createMany, upsert, update, updateMany, deleteMany, count, aggregate, groupBy",
    //         views: {
    //             postId: 1
    //         }
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
    // view 생성하기
    // const res = await prisma.view.create({
    //     data: {
    //         title: "Prisma 이용하기",
    //         content:
    //             "method : findUnique, fintFirst, findMany, create, createMany, upsert, update, updateMany, deleteMany, count, aggregate, groupBy",
    //     },
    // });
    // return Response.json("sucsess!");

    // create 사용하여 error handling
    // const { post } = await req.json();

    // try {
    //     const result = await prisma.post.create({
    //         data: {
    //             content: "testing",
    //             title: "testing prisma",
    //             createDate: "",
    //         },
    //     });
    //     console.log("데이터 생성 성공", result);
    //     return new NextResponse("데이터 조회 성공했음", {
    //         status: 201,
    //     });
    // } catch (error) {
    //     console.error("데이터 입력 오류 발생", error);
    //     return new NextResponse("Internal Server Error!", {
    //         status: 500,
    //     });
    // } finally {
    //     await prisma.$disconnect;

    // const res = await prisma.view.create({
    //     postId: 1,
    // })

    // post view테이블 모두 적용
    const res = await prisma.post.create({
        data: {
            title: "조회수 값 넣기",
            content: "조회수 값이 지정되게끔 테이블 설정을 해보았다.",
            views: {
                create: {
                    count: 1,
                },
            },
        },
    });
    return Response.json("데이터 추가 성공");
}
