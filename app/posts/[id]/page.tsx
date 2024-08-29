import { PrismaClient } from "@prisma/client";
import { GetServerSidePropsContext } from "next";
import Header from "./header";

const PostContent = async (context: GetServerSidePropsContext) => {
    const prisma = new PrismaClient();
    const { id } = context.params!;

    const post = await prisma.post.findUnique({
        where: { id: Number(id) },
        include: { views: true },
    });

    if (post) {
        const existView = await prisma.view.findUnique({
            where: { id: Number(id) },
        });

        if (existView) {
            await prisma.view.update({
                where: { postId: Number(id) },
                data: {
                    count: {
                        increment: 1,
                    },
                },
            });
        }
    }

    console.log(post);
    if (!post) {
        return <div>post content is null;</div>;
    }

    return (
        <article className="flex flex-col">
            <Header post={post} />

            <span>{post.content}</span>
        </article>
    );
};

export default PostContent;
