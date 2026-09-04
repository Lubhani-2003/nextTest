import { FaGithub,FaLinkedinIn,FaTwitter, FaWhatsapp } from "react-icons/fa";


export default function Page() {
    return (
      <div className="min-h-screen flex items-center justify-between flex-col lg:flex-row px-8 bg-linear-to-br from-slate-100 via-blue-100 to-cyan-200 dark:from-slate-950 dark:via-blue-900 dark:to-cyan-500">
        <div>
        <section className="flex flex-col lg:ml-20 mt-5 lg:text-left text-center px-2">
          <p className="text-5xl font-bold md:text-7xl text-slate-950 dark:text-white tracking-wide">Hi,I'm</p>
          <h2 className="text-5xl font-bold md:text-7xl ml-2.5 bg-linear-to-r from-blue-300 to-purple-800 text-transparent bg-clip-text">Lubhani</h2>
          
        </section>
        <p className="text-3xl font-semibold text-slate-950 dark:text-white lg:ml-22 mt-3 sm:text-2xl ">Frontend Developer</p>
        <p  className="text-sm sm:text-base font-normal tracking-wide text-slate-600 dark:text-gray-400 lg:ml-22 mt-3 leading-relaxed">I build exceptional digital experiences that are fast,<br></br>accessible and visually appealing.Let's create something <br></br>amazing together.
        </p>
        <button className="bg-linear-to-r from-blue-600 to-purple-800 dark:from-blue-300 dark:to-purple-800 text-white font-medium px-5 py-2.5 rounded-full mt-7 lg:ml-22 hover:scale-105 ">Hire Me</button>
        <button className="bg-transparent border border-blue-700 text-blue-700 dark:text-blue-300 dark:hover:bg-blue-300  dark:hover:text-blue-800  font-bold rounded-full px-4 ml-5 py-2 hover:scale-105">View Work</button>
        <div className="flex gap-10 mt-8 lg:ml-22">
          <FaGithub className="w-8 h-8 text-slate-700 dark:text-white" />
          <FaLinkedinIn className="w-8 h-8 text-slate-700 dark:text-white "/>
          <FaTwitter className="w-8 h-8 text-slate-700 dark:text-white " />
          <FaWhatsapp className="w-8 h-8 text-slate-700 dark:text-white " />
          </div>
         </div>
      <div>
        <div className="w-70 h-70 lg:w-95 lg:h-95 rounded-full overflow-hidden border border-slate-700 dark:border-white lg:mr-30">
        <img src="https://res.cloudinary.com/iefdl8yk/image/upload/f_auto,q_auto/PASSPORT_SIZE_PIC" alt="MY PIC" className="w-full h-full object-cover"
        />
      </div>
      

      </div>
      </div>
      
      
    
    );
}
