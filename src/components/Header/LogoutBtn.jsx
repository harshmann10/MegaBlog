import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/auth";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
        navigate("/login");
      })
      .catch((err) => {
        console.error("Logout failed:", err);
      });
  };
  return (
    <button
      className="inline-block px-6 py-2 duration-200 text-gray-200 hover:text-white hover:bg-red-600 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
