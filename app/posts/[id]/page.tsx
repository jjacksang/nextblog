import { PrismaClient } from "@prisma/client";
import Header from "./header";
import { MDXProvider } from "@mdx-js/react";

const PostContent = async ({ params }: { params: { id: string | string[] } }) => {
    const prisma = new PrismaClient();
    console.log(params.id);
    const post = await prisma.post.findUnique({
        where: { id: Number(params.id) },
        include: { views: true },
    });

    if (post) {
        const existView = await prisma.view.findUnique({
            where: { id: Number(params.id) },
        });

        if (existView) {
            await prisma.view.update({
                where: { postId: Number(params.id) },
                data: {
                    count: {
                        increment: 1,
                    },
                },
            });
        }
    }

    const MdxContent = post?.content as string;

    console.log(post);
    if (!post) {
        return <div>post content is null;</div>;
    }

    return (
        <MDXProvider>
            <article className="flex flex-col">
                <Header post={post} />

                <MdxContent />
            </article>
        </MDXProvider>
    );
};

export default PostContent;
