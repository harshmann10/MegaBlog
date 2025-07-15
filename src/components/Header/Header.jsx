import { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Logo, LogoutBtn } from "..";
import { Link } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "My Posts",
      slug: "/my-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="py-2.5 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg sticky top-0 z-50">
      <Container>
        <nav className="flex items-center justify-between">
          <div className="mr-4">
            <Link to="/" className="flex items-center gap-2">
              <Logo width="55px" />
              <span className="text-xl font-bold text-white tracking-tight">
                PixelBlog
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex ml-auto items-center gap-2">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <Link
                    to={item.slug}
                    className="inline-block px-5 py-2 rounded-full font-medium text-gray-200 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ) : null
            )}
            {authStatus && (
              <li className="ml-2">
                <LogoutBtn />
              </li>
            )}
          </ul>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-4">
            <ul className="flex flex-col items-center gap-4">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <Link
                      to={item.slug}
                      onClick={() => setMenuOpen(false)}
                      className="block w-full text-center px-5 py-2 rounded-full font-medium text-gray-200 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li className="mt-2">
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Header;
