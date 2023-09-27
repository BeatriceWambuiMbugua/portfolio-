import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Mentorship() {
  return (
    
      <div class="rounded overflow-hidden shadow-md dark:bg-eerie-black">
        <Link
          href="https://www.linkedin.com/in/beatricewambuimbugua/"
          target="_blank"
        >
          <div
          className="relative"
          style={{ paddingBottom: '56.25%', overflow: 'hidden' }}
        >
          <Image
            src="/assets/images/mentorship.jpeg"
            alt="Mentorship"
            className="transition duration-300 ease-in-out hover:scale-110 object-cover"
            layout="fill"
          />
        </div>
        </Link>

        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 dark:text-cultured">
            Mentorship
          </div>
          <p class="text-gray-700 text-base dark:text-cultured">
            As a technical mentor, I have great joy in sharing my work with
            others.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2 font-raleway text-xs">
            #mentorship
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 font-raleway text-xs">
            #webdevelopment
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 font-raleway text-xs">
            #networking
          </span>
        </div>
      </div>
   
  );
}
