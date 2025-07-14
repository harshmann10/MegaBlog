import { useEffect, useState } from "react";
import databaseService from "../appwrite/database";
import { Container, Postcard, Button } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
    const [posts, setPosts] = useState([]);
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        // Only fetch posts if the user is logged in
        if (authStatus) {
            databaseService.getPosts().then((posts) => {
                if (posts) {
                    setPosts(posts.documents);
                }
            });
        } else {
            // Clear posts if the user logs out or is not logged in
            setPosts([]);
        }
    }, [authStatus]); // Re-run effect when authentication status changes

    if (!authStatus) {
        return (
            <div className="w-full py-20 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 min-h-[70vh] flex items-center justify-center text-white">
                <Container>
                    <div className="text-center">
                        <h1 className="text-6xl font-extrabold mb-6 animate-fade-in-down">
                            Welcome to <span className="text-blue-400">PixelBlog</span>!
                        </h1>
                        <p className="text-2xl mb-10 max-w-2xl mx-auto">
                            Unleash your creativity. Share your stories. Connect with a
                            vibrant community.
                        </p>
                        <div className="flex justify-center space-x-6">
                            <Link to="/login">
                                <Button
                                    bgColor="bg-blue-600"
                                    className="py-3 px-8 text-xl rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
                                >
                                    Login
                                </Button>
                            </Link>
                            <Link to="/signup">
                                <Button
                                    bgColor="bg-green-600"
                                    className="py-3 px-8 text-xl rounded-full font-semibold shadow-lg hover:bg-green-700 transition-all duration-300 ease-in-out transform hover:scale-105"
                                >
                                    Sign Up
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div className="w-full py-16 bg-gradient-to-b from-gray-700 via-gray-600 to-gray-700 min-h-[60vh] flex items-center">
                <Container>
                    <div className="text-center text-gray-400 text-xl font-semibold">
                        No posts available
                    </div>
                </Container>
            </div>
        );
    }
    return (
        <div className="w-full py-8 bg-gradient-to-b from-gray-700 via-gray-600 to-gray-700 min-h-[60vh]">
            <Container>
                <h1 className="text-3xl font-bold text-white mb-8 text-center">
                    Latest Posts
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

export default Home;
