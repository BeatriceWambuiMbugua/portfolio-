import Profile from "../components/Profile";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className=" container mx-auto grid grid-cols-12 md:gap-10 justify-between  px-5  dark:bg-eerie-black">
      <Profile />
      <div className="col-span-12 lg:col-span-8">
        <Navbar />
        <div
          className="lg:rounded-2xl bg-white dark:bg-black pb-6 mb-10 px-6"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          {/* Portfolio heading */}
          <div className="flex gap-4 items-center pt-4 mt-5 ">
            <h3 className="font-normal text-3xl dark:text-cultured  ">
              Portfolio
            </h3>
            <hr className="bg-gradient-to-r from-crayola to-red w-52 h-1 border-0 rounded md:my-10 " />
          </div>

         
          <div className="flex gap-2 justify-end mb-4 dark:text-cultured">
            <p>All</p>
            <p>App Development</p>
            <p>Web Development</p>
            <p>Design</p>
            <p>Mentorship</p>
          </div>

          <div class=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            <div class="rounded overflow-hidden shadow-md dark:bg-eerie-black">
              <a href="https://ideaflow-ruby.vercel.app/" target="_blank">
                <img
                  class="w-full"
                  src="/assets/images/ideaflow.png"
                  alt="ideaflow"
                  className=" transition duration-300 ease-in-out hover:scale-110"
                />
              </a>
              <div class="px-6 py-4">
                <h4 class="font-bold text-xl mb-2 dark:text-cultured">IdeaFlow</h4>
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

            <div class="rounded overflow-hidden shadow-md dark:bg-eerie-black">
              <a href="https://www.figma.com/@beatricewambui" target="_blank">
                <img
                  class="w-full"
                  src="/assets/images/figma_profile.png"
                  alt="Figma Profile"
                  className=" transition duration-300 ease-in-out hover:scale-110 shadow-md"
                />
              </a>

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

            <div class="rounded overflow-hidden shadow-md dark:bg-eerie-black">
              <a href="https://imdb-clone-phi.vercel.app/about" target="_blank">
                <img
                  class="w-full"
                  src="/assets/images/IMDB_clone.png"
                  alt="IMDB image"
                  className=" transition duration-300 ease-in-out hover:scale-110"
                />
              </a>

              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 dark:text-cultured">IMDB</div>
                <p class="text-gray-700 text-base dark:text-cultured">
                  IMDB, Your ultimate destination for all things movies.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
              
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2 font-raleway text-xs">
                  #appdevelopment
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 font-raleway text-xs">
                  #webdevelopment
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 font-raleway text-xs">
                  #ui/ux
                </span>
              </div>
            </div>
            <div class="rounded overflow-hidden shadow-md dark:bg-eerie-black">
              <a href="https://www.linkedin.com/in/beatricewambuimbugua/" target="_blank">
                <img
                  class="w-full h-[175px]"
                  src="/assets/images/mentorship.jpeg"
                  alt="Mentorship"
                  className=" transition duration-300 ease-in-out hover:scale-110"
                  objectFit= "contain"
                />
              </a>

              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 dark:text-cultured">Mentorship</div>
                <p class="text-gray-700 text-base dark:text-cultured">
                  As a technical mentor, I have great joy in sharing my work with others.
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
          </div>
          <div className="text-center pt-4">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
