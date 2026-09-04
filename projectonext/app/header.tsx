import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <header className="bg-background/80 text-foreground backdrop-blur-md p-4 flex flex-col sm:flex-row justify-between items-center border-b border-border">
      <h1 className="text-4xl sm:ml-30 font-extrabold bg-linear-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"> My Profile</h1>

      <nav className="space-x-4 sm:mr-8 ">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/skills" className="hover:underline">Skills</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
    
        <ThemeToggle />
      </nav>
    </header>
  );
}