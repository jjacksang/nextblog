import { GetServerSideProps } from "next";
import { Posts } from "./posts";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface IPost {
    id: number;
    title: string;
    content: string;
    createDate: Date;
    views: IView[];
}

interface IView {
    id: number;
    postId: number;
    count: number;
}

// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//     const posts = await prisma.post.findMany();

//     return {
//         props: {
//             posts,
//         },
//     };
// };

const Home = async () => {
    const posts: IPost[] = await prisma.post.findMany({
        include: {
            views: true,
        },
    });
    console.log(posts);
    return <Posts posts={posts} />;
};

export default Home;
