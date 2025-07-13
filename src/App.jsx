import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        console.log("userData :", userData);
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .catch((err) => {
        console.log("failed to get current user data in app.jsx : ", err);
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className=" flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-gray-400">
      <div
        className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"
        aria-label="Loading"
      ></div>
      <span className="mt-4 text-blue-700 font-semibold">Loading...</span>
    </div>
  );
}

export default App;
