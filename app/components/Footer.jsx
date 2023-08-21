import Link from "next/link";
import React from "react";

export default function Footer() {
  const currentYear = new Date().toISOString().substr(0, 4);
  return (
    <footer>
      
        <p className="dark:text-cultured text-xs md:text-sm">
          &#169; <span className="font-semibold">{currentYear}</span> All Rights
          Reserved by <Link href={"/"} className="hover:text-red dark:hover:text-crayola">Beatrice Wambui</Link>
        </p>
      
    </footer>
  );
}
