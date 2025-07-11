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
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-1/4">
                            <Postcard post={post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default AllPost;
