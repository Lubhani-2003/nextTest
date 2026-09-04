
import { FaHtml5 } from "react-icons/fa";
import { SiCss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

export default function Skills() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-blue-100 to-cyan-200 dark:from-slate-950 dark:via-blue-900 dark:to-cyan-500 px-6 py-10 text-slate-900 dark:text-white">
      <div className="text-center mb-8">
        <h2 className="text-5xl md:text-6xl font-bold"> My Skills</h2>
          <p className="text-slate-600 dark:text-gray-300 mt-5 text-lg">Technologies and tools I use to build modern web applications</p>
         </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%] mx-auto">
        <div className="bg-white/60 dark:bg-slate-950/30 border border-cyan-700/30 dark:border-cyan-400/30 p-8 text-center rounded-2xl hover:scale-105 ">
          <div className="text-5xl text-orange-500"><FaHtml5 /></div>
          <h3 className="mt-4 text-2xl font-bold">HTML</h3>
          <p className="mt-3 text-slate-600 dark:text-gray-300"> Semantic markup, clean structure & accessibility </p>
        </div>
        <div className="bg-white/60 dark:bg-slate-950/30 border border-cyan-700/30 dark:border-cyan-400/30 p-8 text-center rounded-2xl  hover:scale-105">
          <div className="text-5xl text-blue-400"><SiCss /></div>
          <h3 className="mt-4 text-2xl font-bold">CSS</h3>
          <p className="mt-3 text-slate-600 dark:text-gray-300"> Responsive layouts, animations & modern styling</p>
        </div>
        <div className="bg-white/60 dark:bg-slate-950/30 border border-cyan-700/30 dark:border-cyan-400/30 p-8 text-center rounded-2xl  hover:scale-105 ">
          <div className="text-5xl text-yellow-400"> <IoLogoJavascript /></div>
          <h3 className="mt-4 text-2xl font-bold">JAVASCRIPT</h3>
          <p className="mt-3 text-slate-600 dark:text-gray-300"> Dynamic functionality, DOM manipulation & ES6+</p>
        </div>
        <div className="bg-white/60 dark:bg-slate-950/30 border border-cyan-700/30 dark:border-cyan-400/30 p-8 text-center rounded-2xl  hover:scale-105 ">
          <div className="text-5xl text-cyan-400"> <RiTailwindCssFill /></div>
          <h3 className="mt-4 text-2xl font-bold">TAILWIND</h3>
          <p className="mt-3 text-slate-600 dark:text-gray-300"> Responsive UI, utility-first styling & modern designs</p>
        </div>
        <div className="bg-white/60 dark:bg-slate-950/30 border border-cyan-700/30 dark:border-cyan-400/30 p-8 text-center rounded-2xl  hover:scale-105 ">
          <div className="text-5xl text-blue-600 dark:text-white"> <FaReact /></div>
          <h3 className="mt-4 text-2xl font-bold">REACT</h3>
          <p className="mt-3 text-slate-600 dark:text-gray-300">Reusable components, hooks & dynamic user interfaces</p>
        </div>
        <div className="bg-white/60 dark:bg-slate-950/30 border border-cyan-700/30 dark:border-cyan-400/30 p-8 text-center rounded-xl  hover:scale-105 ">
          <div className="text-5xl text-blue-700 dark:text-white"><SiTypescript /></div>
          <h3 className="mt-4 text-2xl font-bold">TYPESCRIPT</h3>
          <p className="mt-3 text-slate-600 dark:text-gray-300">Type-safe JavaScript, interfaces & scalable development</p>
        </div>

      </div>
    </div>
  );
}