import { Posts } from "./posts";
import { PrismaClient } from "@prisma/client";
import { IPost } from "./type";

const prisma = new PrismaClient();

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
