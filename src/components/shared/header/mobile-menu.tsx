import { Link, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";

interface MobileMenuProps {
  links: Array<{
    id: string;
    title: string;
    href: string;
  }>;
}

export default function MobileMenu({ links }: MobileMenuProps) {
  const location = useLocation();

  return (
    <Sheet>
      {/* زر الفتح */}
      <SheetTrigger asChild>
        <button className="lg:hidden p-2 hover:bg-accent rounded-lg transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </SheetTrigger>

      {/* المحتوى */}
      <SheetContent side="right" className="w-80 p-0 bg-background">
        <div className="flex h-full w-full flex-col p-4">
          {/* الهيدر */}
          <SheetHeader className="flex flex-row justify-between items-center">
            <Link to="/" className="font-bold text-2xl font-2 text-center">
              Our journey
            </Link>

            {/* زر الإغلاق مع أنيميشن */}
            <SheetClose asChild>
              <motion.button
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:bg-accent rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </SheetClose>
          </SheetHeader>

          {/* القائمة */}
          <nav className="mt-8 flex-1 text-right">
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.href}
                    className={`block py-2 px-4 rounded-lg transition-colors ${
                      location.pathname === link.href
                        ? "text-[#ff681a] font-bold bg-orange-50"
                        : "hover:text-[#ff681a] duration-200"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* الأزرار */}
          <div className="py-6 flex flex-col items-stretch gap-4 border-t border-border">
            <Link
              to="/auth/signin"
              className={buttonVariants({
                variant: "outline",
                className: "w-full justify-center",
              })}
            >
              دخول
            </Link>
            <Link
              to="/auth/signup"
              className={buttonVariants({
                className: "w-full justify-center",
              })}
            >
              انضم الان
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
