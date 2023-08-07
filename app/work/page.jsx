
import Profile from '../components/Profile'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
        
        <div className="text-center pt-4">
        <Footer/>
        </div>
       
      </div>
      
    </div>
 
  </div>
  )
}
