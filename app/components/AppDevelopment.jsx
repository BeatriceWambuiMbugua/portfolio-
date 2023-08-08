import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AppDevelopment() {
  return (
    <div class="rounded overflow-hidden shadow-md dark:bg-eerie-black">
              <Link href="https://ideaflow-ruby.vercel.app/" target="_blank">
              <div
          className="relative"
          style={{ paddingBottom: '56.25%', overflow: 'hidden' }}
        >
          <Image
            src="/assets/images/ideaflow.png"
            alt="Mentorship"
            className="transition duration-300 ease-in-out hover:scale-110 object-cover"
            layout="fill"
          />
        </div>
              </Link>
              <div class="px-6 py-4">
                <h4 class="font-bold text-xl mb-2 dark:text-cultured">
                  IdeaFlow
                </h4>
                <p class="text-gray-700 text-base dark:text-cultured">
                  A powerful platform for capturing and sharing AI-Powered Ideas
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 font-raleway text-xs font-semibold text-gray-700 mr-2 mb-2">
                  #webdevelopment
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 font-raleway text-xs font-semibold text-gray-700 mr-2 mb-2">
                  #next.js
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 font-raleway text-xs font-semibold text-gray-700 mr-2 mb-2">
                  #appdevelopment
                </span>
              </div>
            </div>
  )
}
