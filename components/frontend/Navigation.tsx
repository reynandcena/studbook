import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const links = [
  { path: "/about", name: "about us" },
  { path: "/premierships", name: "premierships" },
  { path: "/informationcentre", name: "information centre" },
  { path: "/news", name: "news" },
  { path: "/contact", name: "contact us" },
];

const Navigation = ({
  containerStyles,
  linkStyles,
  underlineStyles,
  closeSheet,
}: any) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`capitalize ${linkStyles} ${
            path === link.path ? "text-primary font-semibold" : "text-gray-600"
          }`}
        >
          {link.name}
        </Link>
      ))}
      <Button asChild>
        <Link href="/auth">Login/Register</Link>
      </Button>
    </nav>
  );
};

export default Navigation;
