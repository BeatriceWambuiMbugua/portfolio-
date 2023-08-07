import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";

export default function Resume() {
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
          {/* Resume heading */}
          <div className="flex gap-4 items-center pt-4 mt-5 ">
            <h3 className="font-normal text-3xl dark:text-cultured  ">
              Resume
            </h3>
            <hr className="bg-gradient-to-r from-crayola to-red w-52 h-1 border-0 rounded md:my-10 " />
          </div>
          {/* Education/Experience */}
          <div className="grid grid-cols-2 mb-5 dark:text-cultured ">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
              >
                <path
                  d="M1.15625 10.6821L13.304 5.82812L25.4517 10.6821L13.304 15.5361L1.15625 10.6821Z"
                  stroke="url(#paint0_linear_157_651)"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M25.4492 10.7461V16.0757M6.67578 13.2396V20.4293C6.67578 20.4293 9.45528 23.1643 13.3015 23.1643C17.1483 23.1643 19.9278 20.4293 19.9278 20.4293V13.2396"
                  stroke="url(#paint1_linear_157_651)"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_157_651"
                    x1="13.304"
                    y1="5.82812"
                    x2="13.304"
                    y2="15.5361"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF9C1B" />
                    <stop offset="1" stop-color="#EC1B09" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_157_651"
                    x1="16.0625"
                    y1="10.7461"
                    x2="16.0625"
                    y2="23.1643"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF9C1B" />
                    <stop offset="1" stop-color="#EC1B09" />
                  </linearGradient>
                </defs>
              </svg>

              <h4 className="text-xl font-normal dark:text-cultured">
                Education
              </h4>
            </div>
            <div className="flex gap-2 items-center pr-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
              >
                <path
                  d="M10.2283 9.88068V7.56924C10.2283 6.95621 10.4719 6.36829 10.9053 5.93482C11.3388 5.50134 11.9267 5.25781 12.5398 5.25781H17.1626C17.7757 5.25781 18.3636 5.50134 18.7971 5.93482C19.2305 6.36829 19.4741 6.95621 19.4741 7.56924V9.88068M5.60547 16.815L9.24597 17.7245C12.9262 18.6444 16.7762 18.6444 20.4564 17.7245L24.0969 16.815"
                  stroke="url(#paint0_linear_157_646)"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M5.60547 12.1923C5.60547 11.5793 5.84899 10.9913 6.28247 10.5579C6.71595 10.1244 7.30387 9.88086 7.9169 9.88086H21.7855C22.3985 9.88086 22.9864 10.1244 23.4199 10.5579C23.8534 10.9913 24.0969 11.5793 24.0969 12.1923V21.438C24.0969 22.051 23.8534 22.639 23.4199 23.0724C22.9864 23.5059 22.3985 23.7495 21.7855 23.7495H7.9169C7.30387 23.7495 6.71595 23.5059 6.28247 23.0724C5.84899 22.639 5.60547 22.051 5.60547 21.438V12.1923Z"
                  stroke="url(#paint1_linear_157_646)"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.8471 15.6571C15.4854 15.6571 16.0028 15.1397 16.0028 14.5014C16.0028 13.8631 15.4854 13.3457 14.8471 13.3457C14.2088 13.3457 13.6914 13.8631 13.6914 14.5014C13.6914 15.1397 14.2088 15.6571 14.8471 15.6571Z"
                  fill="url(#paint2_linear_157_646)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_157_646"
                    x1="14.8512"
                    y1="5.25781"
                    x2="14.8512"
                    y2="18.4144"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF9C1A" />
                    <stop offset="1" stop-color="#E80505" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_157_646"
                    x1="14.8512"
                    y1="9.88086"
                    x2="14.8512"
                    y2="23.7495"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF9C1A" />
                    <stop offset="1" stop-color="#E80505" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_157_646"
                    x1="14.8471"
                    y1="13.3457"
                    x2="14.8471"
                    y2="15.6571"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF9C1A" />
                    <stop offset="1" stop-color="#E80505" />
                  </linearGradient>
                </defs>
              </svg>
              <h4 className="text-xl font-normal dark:text-cultured">
                Experience
              </h4>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 justify-around ">
            <div className="bg-[#FFE3BF] rounded-2xl p-3">
              <p className="text-gray-400 text-sm">2020-2021</p>
              <p className="text-black font-medium text-base">
                Software Development{" "}
              </p>
              <p className="text-[14px]">Moringa School</p>
            </div>
            <div className="bg-[#FFEED9] rounded-2xl p-3">
              <p className="text-gray-400 text-sm">2022 - Present</p>
              <p className="text-black font-medium text-base">
                Technical Mentor{" "}
              </p>
              <p className="text-[14px]">Moringa School</p>
            </div>
            <div className="bg-[#FFEED9] rounded-2xl p-3">
              <p className="text-gray-400 text-sm">2012-2016</p>
              <p className="text-black font-medium text-base">
                Disaster Management{" "}
              </p>
              <p className="text-[14px]">Masinde Muliro University </p>
            </div>
            <div className="bg-[#FFE3BF] rounded-2xl p-3">
              {" "}
              <p className="text-gray-400 text-sm">2021-2022</p>
              <p className="text-black font-medium text-base">
                Website Development{" "}
              </p>
              <p className="text-[14px]">Village 2 Nation</p>
            </div>
          </div>

          <div className="container bg-[#f8fbfb] dark:bg-[#0D0D0D] py-12 px-4 sm:px-5 md:px-10 lg:px-20 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="col-span-1">
                <h4 className="text-xl font-normal dark:text-cultured  mb-2">
                  Work Skills
                </h4>
                <div className="flex gap-x-3 gap-y-3 md:gap-y-3 md:gap-x-3 flex-wrap">
                  <button className="resume-btn">NEXT.js</button>
                  <button className="resume-btn">React.js</button>
                  <button className="resume-btn">HTML 5</button>
                  <button className="resume-btn">CSS 3</button>
                  <button className="resume-btn">Tailwind CSS</button>
                  <button className="resume-btn">CSS 3</button>
                  <button className="resume-btn">Figma</button>
                  <button className="resume-btn">JavaScript</button>
                  <button className="resume-btn">Mongo DB</button>
                  <button className="resume-btn">SQL</button>
                  <button className="resume-btn">Angular</button>
                  <button className="resume-btn">Android</button>
                  <button className="resume-btn">Git</button>
                </div>
              </div>
              <div className="col-span-1">
                <h4 className="text-xl font-normal dark:text-cultured mb-2">
                  Soft Skills
                </h4>

                <div className="flex gap-x-3 gap-y-3 md:gap-y-3 md:gap-x-3 flex-wrap">
                  <button className="resume-btn">Time Management</button>
                  <button className="resume-btn">Mentorship</button>
                  <button className="resume-btn">Impeccable Communication</button>
                  <button className="resume-btn">Flexibility</button>
                  <button className="resume-btn">Research</button>
                  <button className="resume-btn">Writing</button>
                  <button className="resume-btn">Adaptability</button>
                  <button className="resume-btn">Team work</button>
                </div>
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
