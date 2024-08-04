export function Posts() {
    return (
        <main className="max-w-2xl m-auto font-mono text-sm ">
            <header className="text-gray-400 flex items-center">
                <span>date</span>
                <span className="grow pl-2">title</span>
                <span>views</span>
            </header>
            <List />
        </main>
    );
}

function List() {
    return <div>hellog</div>;
}
