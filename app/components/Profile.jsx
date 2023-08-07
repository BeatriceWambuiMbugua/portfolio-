import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <div className=" col-span-12 lg:col-span-4 top-40 lg:h-screen lg:sticky mt-[220px]">
      <div className="bg-white rounded-[20px] relative w-full mb-6 lg:mb-0 text-center dark:bg-black px-6 pb-6">
        <Image
          src="/assets/images/profile-picture.jpg"
          width={200}
          height={200}
          alt="Profile Picture"
          className="rounded-[20px] mx-auto -mt-[140px] shadow-lg absolute left-[50%] transform -translate-x-[50%]"
        />

        {/* profile details */}
        <div className="pt-24">
          <h1 className="dark:text-white text-2xl tracking-wide">
            Beatrice Wambui
          </h1>
          <p className="text-gray-400  text-sm tracking-wide mt-1 dark:bg-gray-500 px-2 py-1 rounded-lg inline-block dark:text-gray-200">
            FullStack Developer
          </p>
        </div>
        <div className="flex justify-center gap-2 mt-2">
          <div className="socialmediaicons shadow-md ">
            <Link
              href="https://web.facebook.com/beatricewambuimbugua"
              target="_blank"
            >
              <Image
                src="/assets/images/facebook.svg"
                alt="Facebook"
                width={16}
                height={16}
              />
            </Link>
          </div>
          <div className=" socialmediaicons shadow-md ">
            <Link href="https://twitter.com/coding_diary" target="_blank">
              <Image
                src="/assets/images/twitter.svg"
                alt="Twitter"
                width={16}
                height={16}
              />
            </Link>
          </div>
          <div className="socialmediaicons shadow-md">
            <Link
              href="https://www.linkedin.com/in/beatricewambuimbugua/"
              target="_blank"
            >
              <Image
                src="/assets/images/linkedin.svg"
                alt="Linkedln"
                width={16}
                height={16}
              />
            </Link>
          </div>
          <div className="socialmediaicons shadow-md">
            <Link
              href="https://github.com/BeatriceWambuiMbugua"
              target="_blank"
            >
              <Image
                src="/assets/images/github.svg"
                alt="Github"
                width={16}
                height={16}
              />
            </Link>
          </div>
        </div>

        <div className="p-7 rounded-2xl mt-7 bg-cultured dark:bg-eerie-black">
          {/* phone details */}
          <div className=" flex  py-2.5 border-b border-[#E3E3E3] dark:border-[#464343]">
            <div className=" contacticons flex-shrink-0 bg-white px-3 py-2 rounded-md shadow-md max-w-xs transition duration-300 ease-in-out ">
              <Image
                src="/assets/images/phone.svg"
                width={12}
                height={16}
                className="hover:scale-110"
                alt="phone"
              />
            </div>
            <div className="text-left ml-4">
              <p className="text-xs text-gray-400 dark:text-[#A6A6A6]">Phone</p>
              <p className="dark:text-white text-black break-all font-normal text-sm">
                <Link href={"tel:0723909353"}>0723909353</Link>
              </p>
            </div>
          </div>
          {/* Email details */}
          <div className="flex  py-2.5 border-b border-[#E3E3E3] dark:border-[#464343]">
            <div className="contacticons flex-shrink-0 bg-white px-3 py-2 rounded-md shadow-md max-w-xs transition duration-300 ease-in-out ">
              <Image
                src="/assets/images/email.svg"
                width={16}
                height={16}
                className="hover:scale-110"
                alt="email"
              />
            </div>
            <div className="text-left ml-4">
              <p className="text-xs text-gray-400 dark:text-[#A6A6A6]">Email</p>
              <p className="dark:text-white text-black break-all font-normal text-sm">
                <Link href={"mailto:wambuimbeatrice@gmail.com"}>
                  wambuimbeatrice@gmail.com
                </Link>
              </p>
            </div>
          </div>
          {/* location details */}
          <div className="flex  py-2.5 border-b border-[#E3E3E3] dark:border-[#464343]">
            <div className="contacticons flex-shrink-0 bg-white px-3 py-2 rounded-md shadow-md max-w-xs transition duration-300 ease-in-out ">
              <Image
                src="/assets/images/location.svg"
                width={16}
                height={24}
                className="hover:scale-110"
                alt="Location"
              />
            </div>
            <div className="text-left ml-4">
              <p className="text-xs text-gray-500 dark:text-[#A6A6A6]">
                Location
              </p>
              <p className="dark:text-white text-black break-all font-normal text-sm">
                Nairobi, Kenya
              </p>
            </div>
          </div>

          <button className="mt-4 font-raleway inline-flex py-2 px-4 rounded-3xl justify-center align-middle gap-2 text-white bg-gradient-to-r from-crayola to-red">
            {" "}
            <Link href="/assets/resume.pdf" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99934 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H6Z"
                fill="#F2F7FC"
              />
            </svg>{" "}
            </Link>
           
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}
