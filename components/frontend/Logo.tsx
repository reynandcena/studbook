import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      {/* <Image src='/logo.svg' width={54} height={54} priority alt="" /> */}
      <div className="font-bold text-4xl text-gray-900 dark:text-white flex items-center ">
        Stud<h3 className="text-primary">book</h3>.
      </div>
    </Link>
  );
};

export default Logo;
