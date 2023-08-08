"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Design() {
  return (
  

     <div class="rounded overflow-hidden shadow-md dark:bg-eerie-black">
      <Link href="https://www.figma.com/@beatricewambui" target="_blank">
        <div
          className="relative"
          style={{ paddingBottom: "56.25%", overflow: "hidden" }}
        >
          <Image
            src="/assets/images/figma_profile.png"
            alt="Mentorship"
            className="transition duration-300 ease-in-out hover:scale-110 object-cover"
            layout="fill"
          />
        </div>
      </Link>

      <div class="px-6 py-4 ">
        <h4 class="font-bold text-xl mb-2 dark:text-cultured">Figma Profile</h4>
        <p class="text-gray-700 text-base dark:text-cultured">
          Crafting visually appealing and intuitive user interfaces
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 font-raleway text-xs font-semibold text-gray-700 mr-2 mb-2">
          #UI
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2 font-raleway text-xs">
          #UI/UX
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2 font-raleway text-xs">
          #UX
        </span>
      </div>
    </div> 
  );
}
