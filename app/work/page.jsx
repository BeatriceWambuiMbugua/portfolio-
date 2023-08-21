import Profile from "../components/Profile";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import AppDevelopment from "../components/AppDevelopment";
import WebsiteDevelopment from "../components/WebsiteDevelopment";
import Design from "../components/Design";
import Mentorship from "../components/Mentorship";
import 'animate.css';

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
          {/* Tab Content */}

          <div class="mb-4 border-b border-gray-200 dark:border-eerie-black ">
            <ul
              class="flex flex-wrap -mb-px text-sm font-medium text-center justify-end"
              id="myTab"
              data-tabs-toggle="#myTabContent"
              role="tablist"
            >
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 rounded-t-lg"
                  id="all-tab"
                  data-tabs-target="#all"
                  type="button"
                  role="tab"
                  aria-controls="all"
                  aria-selected="true"
                >
                  All
                </button>
              </li>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="app-tab"
                  data-tabs-target="#appdevelopment"
                  type="button"
                  role="tab"
                  aria-controls="appdevelopment"
                  aria-selected="false"
                >
                  App Development
                </button>
              </li>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="web-tab"
                  data-tabs-target="#webdevelopment"
                  type="button"
                  role="tab"
                  aria-controls="webdevelopment"
                  aria-selected= "false"
                >
                  Web Development
                </button>
              </li>
              <li role="presentation">
                <button
                  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="design-tab"
                  data-tabs-target="#design"
                  type="button"
                  role="tab"
                  aria-controls="design"
                  aria-selected="false"
                >
                  Design
                </button>
              </li>
              <li role="presentation">
                <button
                  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="mentorship-tab"
                  data-tabs-target="#mentorship"
                  type="button"
                  role="tab"
                  aria-controls="mentorship"
                  aria-selected="false"
                >
                  Mentorship
                </button>
              </li>
            </ul>
          </div>
          <div id="myTabContent" class="animate__fadeInUp animate__delay-3s">
            <div
              class="hidden p-4 rounded-lg bg-gray-50 dark:bg-black"
              id="all"
              role="tabpanel"
              aria-labelledby="all-tab"
            >
              <div class=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                <AppDevelopment />
                <Design />
                <WebsiteDevelopment />
                <Mentorship />
              </div>
            </div>
            <div
              class="hidden p-4 rounded-lg bg-gray-50 dark:bg-eerie-black"
              id="appdevelopment"
              role="tabpanel"
              aria-labelledby="app-tab"
            >
              <AppDevelopment />
            </div>
            <div
              class="hidden p-4 rounded-lg bg-gray-50 dark:bg-eerie-black"
              id="webdevelopment"
              role="tabpanel"
              aria-labelledby="web-tab"
            >
              <WebsiteDevelopment />
            </div>
            <div
              class="hidden p-4 rounded-lg bg-gray-50 dark:bg-eerie-black"
              id="design"
              role="tabpanel"
              aria-labelledby="design-tab"
            >
              <Design />
            </div>
            <div
              class="hidden p-4 rounded-lg bg-gray-50 dark:bg-eerie-black"
              id="mentorship"
              role="tabpanel"
              aria-labelledby="mentorship-tab"
            >
              <Mentorship />
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
