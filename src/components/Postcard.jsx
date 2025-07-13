import databaseService from "../appwrite/database";
import { Link } from "react-router-dom";

function Postcard({ $id, title, featuredImage }) {
  const imageUrl = featuredImage
    ? databaseService.getFilePreview(featuredImage)
    : null;
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          {imageUrl ? (
            <img src={imageUrl} alt={title} className="rounded-xl" />
          ) : (
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-xl text-gray-500">
              No Image Available
            </div>
          )}
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default Postcard;
