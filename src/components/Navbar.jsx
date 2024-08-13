"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const data = [
  { path: "/", name: "home" },
  { path: "/about", name: "about" },
  { path: "/gallery", name: "gallery" },
  { path: "/projects", name: "projects" },
  { path: "/contact", name: "contact" },
];

const Navbar = ({ className }) => {
  const path = usePathname();
  return (
    <nav className={`${className}`}>
      {data.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className="uppercase relative hover:text-orange-500 transition-all font-medium "
        >
          {link.path === path && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              className="absolute left-0 top-full w-full h-[2px] bg-orange-500"
            />
          )}
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
