import { motion } from "framer-motion";
import { BarChart3, Flame, Timer } from "lucide-react";
import DragonLogo from "../dragon-logo";
import { SignedIn } from "@clerk/clerk-react";
import Link from "next/link";

const Stats = () => {
    return (  
      <motion.div
      className="relative mt-10 lg:mt-0"
      initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
    >
      <div className="relative z-10 bg-gradient-to-br from-gray-900 to-black p-2 rounded-3xl border border-white/10 shadow-2xl shadow-red-500/10 overflow-hidden max-h-[600px]">
        {/* <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-amber-500/20 backdrop-blur-3xl" /> */}

        <div className="relative z-10 bg-black rounded-2xl overflow-hidden aspect-[9/16] md:aspect-[9/19]">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
            {/* App UI mockup */}
            <div className="h-full flex flex-col">
              {/* App header */}
              <div className="p-2 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <DragonLogo className="h-6 w-6 text-red-500" />
                  <span className="font-bold text-white">DragonRunner</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-amber-500" />
              </div>

              {/* App content */}
              <div className="p-2 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-white font-bold">Hello, Runner!</h3>
                  <p className="text-white/60 text-sm">{"Let's track your progress"}</p>
                </div>

                <motion.div
                  className="bg-white/5 rounded-xl p-4 border border-white/10"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/80 text-sm">Total Distance</span>
                    <span className="text-white font-bold">142.5 km</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-red-500 to-amber-500"
                      initial={{ width: "0%" }}
                      animate={{ width: "65%" }}
                      transition={{ delay: 1.5, duration: 1 }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-white/60 mt-1">
                    <span>Goal: 200 km</span>
                    <span>65%</span>
                  </div>
                </motion.div>

                <div className="grid grid-cols-2 gap-3">
                  <motion.div
                    className="bg-white/5 rounded-xl p-3 border border-white/10"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.7, duration: 0.5 }}
                  >
                    <Flame className="h-5 w-5 text-red-500 mb-2" />
                    <div className="text-white font-bold text-lg">12,450</div>
                    <div className="text-white/60 text-xs">Calories</div>
                  </motion.div>

                  <motion.div
                    className="bg-white/5 rounded-xl p-3 border border-white/10"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.9, duration: 0.5 }}
                  >
                    <Timer className="h-5 w-5 text-amber-500 mb-2" />
                    <div className="text-white font-bold text-lg">5:24</div>
                    <div className="text-white/60 text-xs">Average Pace</div>
                  </motion.div>
                </div>

                <motion.div
                  className="bg-white/5 rounded-xl p-4 border border-white/10 h-40 flex items-center justify-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 2.1, duration: 0.5 }}
                >
                  <div className="w-full h-full relative">
                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between h-[80%]">
                      {[40, 65, 30, 80, 50, 90, 60].map((height, i) => (
                        <motion.div
                          key={i}
                          className="w-[8%] bg-gradient-to-t from-red-500 to-amber-500 rounded-t-sm"
                          style={{ height: `${height}%` }}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: 2.3 + i * 0.1, duration: 0.7 }}
                        />
                      ))}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />
                  </div>
                </motion.div>
              </div>

              {/* App footer */}
              <SignedIn>
                <Link href="/dashboard">
                  <div className="p-4 border-t border-white/10">
                    <motion.button
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 to-amber-500 text-white font-bold"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Start Race
                    </motion.button>
                  </div>
                </Link>
              </SignedIn>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl" />

      {/* Floating badges */}
      <motion.div
        className="absolute -left-2 bottom-52 bg-white/10 backdrop-blur-lg rounded-xl p-3 border border-white/10 shadow-xl z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        style={{ y: scrollY * 0.1 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
            <Flame className="h-4 w-4 text-red-500" />
          </div>
          <div>
            <div className="text-white font-bold">350</div>
            <div className="text-white/60 text-xs">kcal/hour</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -right-2 bottom-36 bg-white/10 backdrop-blur-lg rounded-xl p-3 border border-white/10 shadow-xl z-20"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.7, duration: 0.5 }}
        style={{ y: scrollY * -0.1 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
            <BarChart3 className="h-4 w-4 text-amber-500" />
          </div>
          <div>
            <div className="text-white font-bold">+15%</div>
            <div className="text-white/60 text-xs">this week</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
    );
}
 
export default Stats;