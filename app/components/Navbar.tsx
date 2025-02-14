import Link from "next/link";
import { FaYoutube, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="bg-slate-700 sticky p-4 top-0 drop-shadow z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-white/90 no-underline  hover:text-white"
          >
            Updalla Apshir
          </Link>
        </h1>

        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
          <Link
            className="text-white/90 hover:text-white"
            href="https://www.youtube.com"
          >
            <FaYoutube />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://so.linkedin.com/in/updalla-apshir-boore-090238325"
          >
            <FaLinkedin />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://github.com/updalla-apshir"
          >
            <FaGithub />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://twitter.com"
          >
            <FaTwitter />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
