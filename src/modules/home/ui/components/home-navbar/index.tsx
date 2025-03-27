import { AuthButton } from "@/modules/auth/ui/components/auth-button";
import Image from "next/image";
import Link from "next/link";

export const HomeNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 r-5">
      <div className="flex items-center justify-between w-full">
        {/* Logo and Menu */}
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center gap-1">
              <Image src="/logo.png" alt="Logo" width={32} height={32} />
              <p className="text-xl font-semibold tracking-tight">My_project</p>
            </div>
          </Link>
        </div>
        {/* Authbutton */}
        <div className="flex-shrink-0 items-center flex ">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};
