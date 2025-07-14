import databaseService from "../appwrite/database";
import { Link } from "react-router-dom";

function Postcard({ $id, title, featuredImage }) {
  const imageUrl = featuredImage
    ? databaseService.getFilePreview(featuredImage)
    : null;
  return (
    <Link to={`/post/${$id}`} className="group">
      <div className="w-full bg-white/10 backdrop-blur rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl border border-gray-700 group-hover:border-blue-500 duration-200">
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg font-medium bg-gray-100">
              No Image Available
            </div>
          )}
        </div>
        <div className="p-5">
          <h2 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default Postcard;
