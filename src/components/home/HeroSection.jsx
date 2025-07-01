import React from "react";
import { ArrowRight, Globe, Shield } from "lucide-react";
import { motion } from "motion/react"

const Main = () => {
  return (
    <div className="min-h-[92vh] overflow-x-hidden flex items-center">
      <div className="container mx-auto flex flex-col items-center justify-between w-screen h-full md:flex-row">
        <motion.div
        initial={{
          x: -50,
          opacity: 0
        }}
        animate={{
          x:0,
          opacity: 1
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
        className="flex flex-col justify-center w-full space-y-6 mt-[7vh] ml-[10%] md:w-1/2 md:h-full md:mt-0 md:ml-0 md:space-y-10 pr-10">
          <div className="bg-toggleBg rounded-lg w-[12rem] flex items-center justify-center">
            <span className="text-foreground">Airdrop Maximize Tool</span>
          </div>
          <div className="text-foreground font-bold text-5xl md:text-7xl">
            <span className="min-w-[1vh]">Do Airdrop Farming with {""}</span>
            <span className="text-primary">Tools</span>
          </div>
          <span className="text-foreground text-lg md:text-xl mb-10 max-w-2xl">
            Join crypto airdrops, complete simple tasks, and grow your
            portfolio. Use our tools to make farming easy, efficient, and
            accessible to everyone.
          </span>
          <button className="flex items-center justify-center p-2 bg-gradient-to-r from-yellow-400  to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 w-[15vh] rounded-md">
            <span className="text-white text-lg font-thin">Explore</span>
            <ArrowRight className="ml-2 h-6 w-6 text-white" />
          </button>
          <div className="flex items-center gap-4 pt-5 space-x-4 text-zinc-400">
            <div className="flex items-center justify-center space-x-2">
              <div className="bg-toggleBg p-2 rounded-full">
                <Globe className="text-primary" />
              </div>
              <span>Security</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="bg-toggleBg p-2 rounded-full">
                <Shield className="text-primary" />
              </div>
              <span>Global Access</span>
            </div>
          </div>
        </motion.div>
        <motion.div
        initial={{
          opacity: 0,
          x:50
        }}
        animate={{
          opacity: 1,
          x:0
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
        className="flex items-center justify-center h-1/2 w-full md:w-1/2 md:h-full md:mt-10">
          <img
            className="h-[50vh] md:h-[80vh]"
            src="/image/bitcoin.svg"
            alt="crypto-img"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
