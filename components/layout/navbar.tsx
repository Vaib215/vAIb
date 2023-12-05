import Link from "next/link";
import { Button } from "../ui/button";
import PageName from "../util/page-name";
import ThemeBtn from "./theme";

export default function Navbar() {
  return (
    <header className="py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
            <Link href="/">vAIb</Link><PageName />
        </h1>
        <nav className="flex space-x-4">
          <Link className="block" href="/">
            Home
          </Link>
        </nav>
        <div className="flex space-x-4">
          <ThemeBtn />
        </div>
      </div>
    </header>
  );
}
