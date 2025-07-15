import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <div className="py-8 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-700">
      <Container>
        <h1 className="text-3xl font-bold text-white mb-10 text-center">
          Add Post
        </h1>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
