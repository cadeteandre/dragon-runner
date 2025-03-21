import Link from "next/link";
import { Button } from "./button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { SignedOut, SignInButton } from "@clerk/nextjs";

const Hero = () => {
    return (  
      <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-block"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm border border-white/10">
              🔥 New running app
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-amber-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Unleash the <span className="text-red-500">Dragon</span> in your race
          </motion.h1>

          <motion.p
            className="text-xl text-white/70 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Track, analyze and push your limits with the most powerful running app. Turn every step into an epic journey.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <SignedOut>
              <SignInButton>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600 text-white border-0 h-14 px-8 text-lg rounded-xl shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-all"
                >
                  Start Now <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </SignInButton>
            </SignedOut>
            <Link href="#demo">
              <Button
                size="lg"
                variant="outline"
                className="text-black border-white/20 hover:bg-white/10 hover:text-white h-14 px-8 text-lg rounded-xl"
              >
                View Demo
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="flex items-center gap-8 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full border-2 border-black/10 bg-gradient-to-br from-orange-100 to-red-100" />
              <div className="w-10 h-10 rounded-full border-2 border-black/10 bg-gradient-to-br from-orange-200 to-red-200" />
              <div className="w-10 h-10 rounded-full border-2 border-black/10 bg-gradient-to-br from-orange-300 to-red-300" />
              <div className="w-10 h-10 rounded-full border-2 border-black/10 bg-gradient-to-br from-orange-400 to-red-400" />
            </div>
            <div className="text-white/70 text-sm">
              <span className="font-bold text-white">1,000+</span> runners have already joined
            </div>
          </motion.div>
      </div>
    );
}
 
export default Hero;