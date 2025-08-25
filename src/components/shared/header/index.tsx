import Navbar, { links } from "./navbar";
import MobileMenu from "./mobile-menu";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="py-8 fixed left-0 w-full top-0 z-50">
      <div className="container">
        <div
          style={{
            background:
              "linear-gradient(91.81deg, rgba(255, 255, 255, 0.87) 21.24%, rgba(255, 255, 255, 0.87) 109.59%)",
          }}
          className="p-4 backdrop-blur rounded-[20px] flex items-center justify-between shadow-sm"
        >
          <Link to="/" className="font-bold text-2xl font-2">
            Our journey
          </Link>
          <MobileMenu links={links} />
          <Navbar />
        </div>
      </div>
    </header>
  );
}
