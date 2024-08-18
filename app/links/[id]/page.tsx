import { PrismaClient } from "@prisma/client";
import { GetServerSidePropsContext } from "next";

const PostContent = async (context: GetServerSidePropsContext) => {
    const prisma = new PrismaClient();
    const { id } = context.params!;

    const post = await prisma.post.findUnique({
        where: { id: Number(id) },
        include: { views: true },
    });
    console.log(post);
    if (!post) {
        return <div>post content is null;</div>;
    }

    return (
        <article className="flex flex-col">
            <span>{post.title}</span>
            <span>{new Date(post.createDate).toLocaleDateString("ko-KR")}</span>
            <span>{post.content}</span>
        </article>
    );
};

export default PostContent;
