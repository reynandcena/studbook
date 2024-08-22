import { MoveLeft } from "lucide-react";
import Link from "next/link";

interface BackButtonProps {
  text: string;
  link: string;
}

const BackButton = ({ text, link }: BackButtonProps) => {
  return (
    <Link
      href={link}
      className="text-slate-600 hover:underline flex items-center gap-1 font-normal mb-5"
    >
      <MoveLeft size={18} className="mr-2" /> {text}
    </Link>
  );
};

export default BackButton;
