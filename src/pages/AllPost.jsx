import { useEffect, useState } from "react";
import databaseService from "../appwrite/database";
import { Container, Postcard } from "../components";

function AllPost() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        databaseService
            .getPosts([])
            .then((posts) => {
                if (posts) {
                    setPosts(posts.documents);
                }
            })
            .catch((err) =>
                console.error("Appwrite service error :: getPosts :: error", err)
            );
    }, []);
    return (
        <div className="w-full py-8 bg-gradient-to-b from-gray-700 via-gray-600 to-gray-700 min-h-[60vh]">
            <Container>
                <h1 className="text-3xl font-bold text-white mb-10 text-center">
                    All Posts
                </h1>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {posts.map((post) => (
                        <Postcard key={post.$id} {...post} />
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default AllPost;
