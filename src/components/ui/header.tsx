import { motion } from "framer-motion";
import Link from "next/link";
import DragonLogo from "../dragon-logo";
import { Button } from "./button";
import { SignedOut, UserButton } from "@clerk/nextjs";
import { SignedIn, SignInButton, SignOutButton } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";

const Header = () => {
    return (  
      <header className="fixed w-full z-30 px-4 lg:px-6 py-4 flex items-center justify-between bg-gradient-to-br from-black via-gray-900 to-purple-950 backdrop-blur-sm">
        <motion.div
          className="flex items-center gap-2 text-white"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <DragonLogo className="h-10 w-10 text-red-500" />
          <span className="font-bold text-xl">
            <span className="text-red-500">Dragon</span>Runner
          </span>
        </motion.div>
        <motion.nav
          className="hidden md:flex gap-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="#features" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#about" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            About
          </Link>
          <Link href="#testimonials" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Testimonials
          </Link>
        </motion.nav>
        <motion.div
          className="flex items-center gap-4"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <SignedOut>
            <SignInButton>
              <div className="flex gap-4">
                <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10">
                  Login
                </Button>
                <Button className="bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600 text-white border-0">
                  Sign Up
                </Button>
              </div>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton showName={true} appearance={{
              baseTheme: dark,
            }} />
          </SignedIn>
        </motion.div>
      </header>
    );
}
 
export default Header;