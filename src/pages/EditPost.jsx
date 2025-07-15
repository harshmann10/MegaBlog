import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import databaseService from "../appwrite/database";
import { Container, PostForm } from "../components";

function EditPost() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            databaseService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                }
            });
        } else {
            navigate("/");
        }
    }, [slug, navigate]);
    return post ? (
        <div className="py-10 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-700 min-h-screen">
            <Container>
                <h1 className="text-3xl font-bold text-white mb-10 text-center">
                    Edit Post
                </h1>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null;
}

export default EditPost;
