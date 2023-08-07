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

          {/* <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://ideaflow-ruby.vercel.app/" target="_blank">
              <img
                class="rounded-t-lg"
                src="/assets/images/ideaflow.png"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  IdeaFlow
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                A powerful platform designed to Capture & Share AI-Powered Ideas
              </p>
             
            </div>
          </div> */}

          <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            <div class="rounded overflow-hidden shadow-lg">
              <a href="https://ideaflow-ruby.vercel.app/" target="_blank">
                <img
                  class="w-full"
                  src="/assets/images/ideaflow.png"
                  alt="ideaflow"
                />
              </a>
              <div class="px-6 py-4">
                <h4 class="font-bold text-xl mb-2">IdeaFlow</h4>
                <p class="text-gray-700 text-base">
                  A powerful platform for capturing and sharing AI-Powered Ideas
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #webdevelopment
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #next.js
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #appdevelopment
                </span>
              </div>
            </div>

            <div class="rounded overflow-hidden shadow-lg">
              <a href="https://www.figma.com/@beatricewambui" target="_blank">
                <img
                  class="w-full"
                  src="/assets/images/figma_profile.png"
                  alt="Figma Profile"
                />
              </a>

              <div class="px-6 py-4">
                <h4 class="font-bold text-xl mb-2">Figma Profile</h4>
                <p class="text-gray-700 text-base">
                  Crafting visually appealing and intuitive user interfaces
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #UI
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #UI/UX
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #UX
                </span>
              </div>
            </div>

            <div class="rounded overflow-hidden shadow-lg">
              <a href="https://imdb-clone-phi.vercel.app/about" target="_blank">
                <img
                  class="w-full"
                  src="/assets/images/IMDB_clone.png"
                  alt="IMDB image"
                />
              </a>

              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">IMDB</div>
                <p class="text-gray-700 text-base">
                  IMDB, Your ultimate destination for all things movies.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #fall
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
