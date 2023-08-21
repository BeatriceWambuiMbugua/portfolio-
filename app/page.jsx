"use client";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import 'animate.css';


export default function Home() {
  return (
    <div className=" container mx-auto grid grid-cols-12 md:gap-10 justify-between  px-5  dark:bg-eerie-black">
      <Profile />
      <div className="col-span-12 lg:col-span-8">
        <Navbar />
        <div
          className="rounded-2xl bg-white dark:bg-black pb-6 mb-10 px-6 animate__animated animate__fadeInUp animate__delay-2s "
          data-aos="fade-up"
          data-aos-duration="3000"
          
        >
          {/* About Me heading */}
          <div className="flex gap-4 items-center pt-4 mt-5 ">
            <h3 className=" font-normal text-3xl  dark:text-cultured  ">
              About Me!
            </h3>
            <hr className="bg-gradient-to-r from-crayola to-red w-52 h-1 border-0 rounded md:my-10 md:block hidden  " />
          </div>
          <div>
            <p className="leading-relaxed tracking-wide dark:text-cultured ">
              Hello there! I'm thrilled to welcome you to my portfolio. I am a
              passionate and versatile full-stack developer with a keen interest
              in exploring the latest cutting-edge technologies. My journey in
              the world of web development has been nothing short of
              exhilarating, and I constantly strive to enhance my skills and
              embrace emerging trends in the industry.
            </p>
          </div>
          <div className=" py-4">
            <h4 className="font-normal text-2xl dark:text-cultured  ">
              What I do!
            </h4>
          </div>

          <div className="grid grid-cols-1  gap-8 md:grid-cols-2 xl:grid-cols-2 ">
            {/* Web development details */}
            <div className="bg-[#FFEBD1] rounded-2xl p-3">
              <div className="flex items-center gap-2 pb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-red"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                </svg>
                <h5 className="font-normal text-xl dark:text-[#0D0A06]">
                  Web Development
                </h5>
              </div>
              <p className="leading-relaxed tracking-wide dark:text-[#0D0A06] text-base ">
                As a developer, I find myself most captivated by the power and
                flexibility of NEXT.js. I'm always eager to dive into new
                projects that leverage NEXT.js and discover innovative ways to
                create fast, scalable, and user-friendly applications.
              </p>
            </div>
            {/* app development details */}
            <div className="bg-[#F2F7FC] rounded-2xl p-3">
              {" "}
              <div className="flex items-center gap-2 pb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-crayola"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                  />
                </svg>

                <h5 className="font-normal text-xl">App Development</h5>
              </div>
              <p className="leading-relaxed tracking-wide text-base ">
                With a focus on user-centric design and cutting-edge
                technologies, I thrive on building intuitive and efficient apps
                that make a positive impact on people's lives. Let's turn ideas
                into reality and shape the future together.
              </p>
            </div>
            {/* UI/Ux Details */}
            <div className="bg-[#F2F7FC] rounded-2xl p-3">
              <div className="flex items-center gap-2 pb-1">
                <svg
                  class="w-6 h-6 text-red"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    d="M4.5 19A3.5 3.5 0 0 1 1 15.5V2a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v13.5A3.5 3.5 0 0 1 4.5 19Zm0 0H18a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-4.938a1 1 0 0 0-.697.283l-4.238 4.124a1.046 1.046 0 0 0-.164.208C6.986 18.228 6.184 18.705 4.5 19Zm0-4h.01m8.925-12.293 3.536 3.536a1 1 0 0 1 0 1.414L8 16.627v-9.9l4.02-4.02a1 1 0 0 1 1.415 0Z"
                  />
                </svg>
                <h5 className="font-normal text-xl">UX/UI Designing</h5>
              </div>
              <p className="leading-relaxed tracking-wide text-base ">
                Crafting visually appealing and intuitive user interfaces that
                offer a delightful user experience is something I'm truly
                fanatic about.
              </p>
            </div>
            {/* Mentorship Details */}
            <div className="bg-[#FFEBD1] rounded-2xl p-3">
              <div className="flex items-center gap-2 pb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_43_118)">
                    <path
                      d="M7.80006 13.5625C7.71044 13.5625 7.62081 13.5755 7.53531 13.6029C7.04931 13.7592 6.53819 13.8594 6.00006 13.8594C5.46194 13.8594 4.95081 13.7592 4.46444 13.6029C4.37894 13.5755 4.28969 13.5625 4.20006 13.5625C1.87281 13.5625 -0.0123144 15.4358 6.05805e-05 17.7418C0.00531058 18.7162 0.814935 19.5 1.80006 19.5H10.2001C11.1852 19.5 11.9948 18.7162 12.0001 17.7418C12.0124 15.4358 10.1273 13.5625 7.80006 13.5625ZM6.00006 12.375C7.98831 12.375 9.60006 10.78 9.60006 8.8125C9.60006 6.84496 7.98831 5.25 6.00006 5.25C4.01181 5.25 2.40006 6.84496 2.40006 8.8125C2.40006 10.78 4.01181 12.375 6.00006 12.375ZM22.2001 0.5H7.80006C6.80744 0.5 6.00006 1.32568 6.00006 2.34025V4.0625C6.87831 4.0625 7.69131 4.3141 8.40006 4.72305V2.875H21.6001V13.5625H19.2001V11.1875H14.4001V13.5625H11.5411C12.2573 14.1819 12.7831 14.9997 13.0294 15.9375H22.2001C23.1927 15.9375 24.0001 15.1118 24.0001 14.0972V2.34025C24.0001 1.32568 23.1927 0.5 22.2001 0.5Z"
                      fill="#E80505"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_43_118">
                      <rect
                        width="24"
                        height="19"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <h5 className="font-normal text-xl dark:text-[#0D0A06]">
                  Mentorship
                </h5>
              </div>
              <p className="leading-relaxed tracking-wide dark:text-[#0D0A06] text-base ">
                I have also found great joy in sharing my knowledge with others.
                Being a technical mentor allows me to give back to the community
                that has supported me throughout my career.
              </p>
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
