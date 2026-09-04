import { RiGraduationCapFill } from "react-icons/ri";
 import { PiStudentBold } from "react-icons/pi"; 
 import { IoBook } from "react-icons/io5"; 
 import { LuNotebookPen } from "react-icons/lu"; 
 import { LuFileSpreadsheet } from "react-icons/lu";
  import { TbWorldSearch } from "react-icons/tb";

export default function About() {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-100 via-blue-100 to-cyan-200 dark:from-slate-950 dark:via-blue-900 dark:to-cyan-500 text-slate-900 dark:text-white">
            <div className="grid md:grid-cols-2 gap-10  mt-20 mx-22">
                <div>
                    <RiGraduationCapFill className="text-blue-700 dark:text-white w-8 h-8" />
                    <h2 className="text-3xl font-bold">Academic Journey</h2>
                    <ul className="text-md leading-relaxed tracking-wider mt-5 space-y-5">
                         <li className="font-bold flex items-start gap-2">
                        <PiStudentBold className="text-blue-700 dark:text-white w-10 h-10" />
                        <span className="text-nowrap">Higher Secondary:</span>
                         <span className="font-light">D.A.V Centenary Public School (Panipat) </span>
                        </li>

                        <li className="flex items-center gap-2">
                         <IoBook className="text-blue-700 dark:text-white w-10 h-10 " />
                         <span>Bachelor of Computer Application (BCA)</span>
                        </li>

                        <li className="flex items-center gap-2">
                        <IoBook className="text-blue-700 dark:text-white w-10 h-10 " />
                        <span>Master's in Computer Application (MCA)</span>
                        </li>

                        <li className="font-bold flex items-start gap-2">
                         <LuNotebookPen className="text-blue-700 dark:text-white w-10 h-10" />
                        <span className="text-nowrap"> Key Coursework: </span>
                         <span className="font-light"> Data Structure, Web Technologies, Database Management</span>
                        </li>

                        <li className="font-bold flex items-start gap-2">
                        <LuFileSpreadsheet className="text-blue-700 dark:text-white w-10 h-10" />
                        <span className="text-nowrap">Relevant Projects: </span>
                         <span className="font-light"> Bus Tracking System (MCA final project) </span>
                        </li>

                    </ul>
                </div>
                <div>
                    <TbWorldSearch className="text-blue-700 dark:text-white w-10 h-10" />
                    <h2 className="text-3xl font-bold"> The Learning Path </h2>
                    <ul className="text-md leading-relaxed tracking-wider mt-5 space-y-5">
                    <li className="font-light">I believe education is an ongoing process. My time in academia instilled strong problem-solving skills and a passion for technology. I thrive in challenging environments and enjoy group studies and projects.</li>
                    <li className="font-light"> Currently focusing on mastering advanced React patterns and backend fundamentals.</li>

                    </ul>
                </div>

            </div>

            <button className="bg-transparent border border-blue-700 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900 font-bold rounded-full px-4 mx-22 py-2 mt-12"> Full Education Details </button>
        </div>
    );
}