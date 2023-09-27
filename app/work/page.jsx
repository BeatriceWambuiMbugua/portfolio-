"use client";
import React, { useState } from "react";
import AppDevelopment from "../../components/AppDevelopment";
import Design from "../../components/Design";
import Footer from "../../components/Footer";
import Mentorship from "../../components/Mentorship";
import Navbar from "../../components/Navbar";
import Profile from "../../components/Profile";
import WebsiteDevelopment from "../../components/WebsiteDevelopment";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="container mx-auto grid grid-cols-12 md:gap-10 justify-between px-5 dark:bg-eerie-black">
      <Profile />
      <div className="col-span-12 lg:col-span-8">
        <Navbar />
        <div
          className="rounded-2xl bg-white dark:bg-black pb-6 mb-10 px-6"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          {/* Portfolio heading */}
          <div className="flex gap-4 items-center pt-4 mt-5">
            <h3 className="font-normal text-3xl dark:text-cultured">
              Portfolio
            </h3>
            <hr className="bg-gradient-to-r from-crayola to-red w-52 h-1 border-0 rounded md:my-10 md:block hidden" />
          </div>
          {/* Tab Content */}
          <div className="mb-4 border-b border-gray-200 dark:border-eerie-black">
            <ul
              className="flex flex-wrap -mb-px text-sm font-medium text-center justify-end"
              id="myTab"
              role="tablist"
            >
              <li className="mr-2" role="presentation">
                <button
                  className={`inline-block p-4 border-b-2 rounded-t-lg ${
                    activeTab === "all"
                      ? "border-crayola"
                      : "border-transparent"
                  }`}
                  onClick={() => handleTabClick("all")}
                  role="tab"
                  aria-controls="all"
                  aria-selected={activeTab === "all"}
                >
                  All
                </button>
              </li>
              <li className="mr-2" role="presentation">
                <button
                  className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                    activeTab === "appdevelopment" ? "border-crayola" : ""
                  }`}
                  onClick={() => handleTabClick("appdevelopment")}
                  role="tab"
                  aria-controls="appdevelopment"
                  aria-selected={activeTab === "appdevelopment"}
                >
                  App Development
                </button>
              </li>
              <li className="mr-2" role="presentation">
                <button
                  className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                    activeTab === "webdevelopment" ? "border-crayola" : ""
                  }`}
                  onClick={() => handleTabClick("webdevelopment")}
                  role="tab"
                  aria-controls="webdevelopment"
                  aria-selected={activeTab === "webdevelopment"}
                >
                  Web Development
                </button>
              </li>
              <li role="presentation">
                <button
                  className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                    activeTab === "design" ? "border-crayola" : ""
                  }`}
                  onClick={() => handleTabClick("design")}
                  role="tab"
                  aria-controls="design"
                  aria-selected={activeTab === "design"}
                >
                  Design
                </button>
              </li>
              <li role="presentation">
                <button
                  className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                    activeTab === "mentorship" ? "border-crayola" : ""
                  }`}
                  onClick={() => handleTabClick("mentorship")}
                  role="tab"
                  aria-controls="mentorship"
                  aria-selected={activeTab === "mentorship"}
                >
                  Mentorship
                </button>
              </li>
            </ul>
          </div>
          <div id="myTabContent">
            <div
              className={`p-4 rounded-lg ${
                activeTab === "all"
                  ? "bg-gray-50 dark:bg-black"
                  : "bg-gray-50 dark:bg-eerie-black"
              }`}
              role="tabpanel"
              aria-labelledby="all-tab"
            >
              {activeTab === "all" && (
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                  <AppDevelopment />
                  <Design />
                  <WebsiteDevelopment />
                  <Mentorship />
                </div>
              )}
              {activeTab === "appdevelopment" && <AppDevelopment />}
              {activeTab === "webdevelopment" && <WebsiteDevelopment />}
              {activeTab === "design" && <Design />}
              {activeTab === "mentorship" && <Mentorship />}
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
