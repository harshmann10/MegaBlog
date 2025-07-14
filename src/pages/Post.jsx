import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import databaseService from "../appwrite/database";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            databaseService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        databaseService.deletePost(post.$id).then((status) => {
            if (status) {
                databaseService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-10 bg-gray-900 text-white min-h-screen">
            <Container>
                <div className="w-full flex justify-center mb-6 relative border border-gray-700 rounded-xl p-4 shadow-lg bg-gray-800">
                    <img
                        src={databaseService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl w-full h-auto max-h-[600px] object-contain"
                    />

                    {isAuthor && (
                        <div className="absolute right-8 top-8 flex space-x-4">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button
                                    bgColor="bg-green-600"
                                    className="py-2 px-5 rounded-full font-semibold text-white shadow-lg hover:bg-green-700 transition-all duration-300 ease-in-out transform hover:scale-105"
                                >
                                    Edit
                                </Button>
                            </Link>
                            <Button
                                bgColor="bg-red-600"
                                onClick={deletePost}
                                className="py-2 px-5 rounded-full font-semibold text-white shadow-lg hover:bg-red-700 transition-all duration-300 ease-in-out transform hover:scale-105"
                            >
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-8">
                    <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-400">
                        {post.title}
                    </h1>
                </div>
                <div className="browser-css text-lg leading-relaxed text-gray-300 bg-gray-800 p-6 rounded-lg shadow-inner">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}
