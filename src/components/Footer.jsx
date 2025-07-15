import { Link } from "react-router-dom";
import { Logo } from "./index";

function Footer() {
  return (
    <footer className="py-10 bg-gray-800 text-white mt-auto border-t border-gray-700">
      <div className="mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap justify-center text-center md:text-left">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex flex-col">
              <div className="mb-4 inline-flex items-center justify-center md:justify-start gap-4">
                <Logo width="100px" />
                <span className="text-xl font-bold tracking-tight text-white">
                  PixelBlog
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-400">
                  &copy; Copyright {new Date().getFullYear()}. All Rights
                  Reserved by PixelBlog.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div>
              <h3 className="tracking-wider mb-9 text-sm font-semibold uppercase text-gray-400">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <a
                    className="inline-flex"
                    href="https://github.com/harshmann10/PixelBlog"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="text-gray-400 hover:text-gray-300"
                    >
                      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div>
              <h3 className="tracking-wider mb-9 text-sm font-semibold uppercase text-gray-400">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <a
                    href="mailto:harshmann8008@gmail.com"
                    className="inline-flex"
                  >
                    <svg
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="text-gray-400 hover:text-pink-400"
                    >
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div>
              <h3 className="tracking-wider mb-9 text-sm font-semibold uppercase text-gray-400">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
