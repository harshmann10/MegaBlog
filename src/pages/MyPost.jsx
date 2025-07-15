import { useEffect, useState } from "react";
import databaseService from "../appwrite/database";
import { Container, Postcard } from "../components";
import { useSelector } from "react-redux";
import { Query } from "appwrite";

function MyPost() {
    const [posts, setPosts] = useState([]);
    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        if (userData) {
            databaseService
                .getPosts([Query.equal("userId", userData.$id)])
                .then((posts) => {
                    if (posts) {
                        setPosts(posts.documents);
                    }
                })
                .catch((err) =>
                    console.error("Appwrite service error :: getPosts :: error", err)
                );
        } else {
            setPosts([]);
        }
    }, [userData]);

    if (posts.length === 0) {
        return (
            <div className="w-full py-16 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-700 text-white min-h-[60vh] flex items-center justify-center">
                <Container>
                    <div className="text-center text-gray-400 text-xl font-semibold">
                        No posts found.
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-8 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-700 text-white min-h-[60vh]">
            <Container>
                <h1 className="text-3xl font-bold text-white mb-10 text-center">
                    My Posts
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

export default MyPost;
