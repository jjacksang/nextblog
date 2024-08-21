export interface IPost {
    id: number;
    title: string;
    content: string;
    createDate: Date;
    update_at?: Date | null;
    views: IView[];
}

interface IView {
    id: number;
    postId: number;
    count: number;
}
