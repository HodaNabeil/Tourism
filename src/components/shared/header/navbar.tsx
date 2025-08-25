import { Link, useLocation } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const links = [
  {
    id: crypto.randomUUID(),
    title: "Home",
    href: "/",
  },
  {
    id: crypto.randomUUID(),
    title: "Destinations",
    href: "/destinations",
  },
  {
    id: crypto.randomUUID(),
    title: "Packages & Offers",
    href: "/packages",
  },
  {
    id: crypto.randomUUID(),
    title: "About Us",
    href: "/about",
  },
  {
    id: crypto.randomUUID(),
    title: "Contact Us",
    href: "/contact",
  },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-4">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              to={link.href}
              className={`${
                location.pathname === link.href
                  ? "text-[#ff681a] font-bold"
                  : "accent-foreground"
              } hover:text-[#ff681a] duration-200 transition-colors`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
