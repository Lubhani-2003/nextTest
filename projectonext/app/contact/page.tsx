import { FaGithub,FaLinkedinIn,FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
export default function Contact(){
    return(
      <div className="min-h-screen bg-linear-to-br from-slate-100 via-blue-100 to-cyan-200 dark:from-slate-950 dark:via-blue-900 dark:to-cyan-500 px-6 py-10 text-slate-900 dark:text-white">
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-6xl font-bold"> Contact</h2>
          <p className="text-slate-600 dark:text-gray-300 mt-5 text-lg">Have a project in mind? Let’s connect and build something amazing together.</p>
        </div>
        <div className="flex gap-10 mt-8 item-center justify-center">
                 <button className="hover:scale-115"> <FaGithub className="w-10 h-10 text-[#181717] " /></button>
                 <button className="hover:scale-115"><FaLinkedinIn className="w-10 h-10 text-green-500 "/></button> 
                  <button className="hover:scale-115"><MdMessage className="w-10 h-10 text-[#25D366] " /></button>
                  <button className="hover:scale-115"><FaWhatsapp className="w-10 h-10 text-[#0A66C2] " /> </button>
         </div>
    <div className="mt-10 ml-22 tracking-wider leading-relaxed bg-white/70 dark:bg-slate-950/50 backdrop-blur-lg border border-cyan-700/20 dark:border-cyan-400/20 rounded-2xl p-6">
        <form>
        <label className="text-slate-900 dark:text-white text-xl">Full Name </label>
        <input type="text" placeholder="Enter your Full Name" className="w-full p-3 mb-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded border border-slate-300 dark:border-slate-700"/>
        <br></br>
        <label className="text-slate-900 dark:text-white text-xl">E-Mail </label>
        <input type="text" placeholder="Enter your Mail"className="w-full p-3 mb-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded border border-slate-300 dark:border-slate-700"/>
        <br></br>
        <label className="text-slate-900 dark:text-white text-xl">Message </label>
        <input type="text" placeholder="Enter your Message..."className="w-full p-3 mb-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded border border-slate-300 dark:border-slate-700"/>
    </form>
    <button type="submit" className="w-[10%] rounded-lg bg-linear-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:from-blue-500 hover:to-cyan-400">Submit</button>
    </div>
     
      
    </div>
    )
}