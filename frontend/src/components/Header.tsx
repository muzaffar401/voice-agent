"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

import { AudioPlayback } from "@/components/AudioPlayback";
import PauseIcon from "@/components/icons/PauseIcon";
import WriteIcon from "@/components/icons/WriteIcon";
import { Button } from "@/components/ui/Button";

export function Header({
  agentName,
  playbackFrequencies,
  stopPlaying,
  resetConversation,
}: {
  agentName: string;
  playbackFrequencies: number[];
  stopPlaying: () => Promise<void>;
  resetConversation: () => void;
}) {
  const showAudioPlayback = playbackFrequencies.length === 5;

  return (
    <div className="flex flex-row gap-2 w-full relative justify-between items-center py-4 px-4 bg-gradient-to-r from-gray-900/80 via-purple-900/20 to-gray-900/80 backdrop-blur-xl text-white border-b border-white/10 shadow-2xl">
      <div className="flex flex-row gap-2 items-center px-5">
        <div className="relative">
          <Image src="/logo.svg" alt="OpenAI Logo" width={24} height={24} className="invert drop-shadow-lg" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
        </div>
      </div>
      {agentName && (
        <div
          className={clsx(
            "flex text-sm font-semibold border-2 border-white/20 rounded-full py-3 items-center overflow-hidden bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-xl text-white shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
          )}
        >
          <div className="ml-6 mr-4">
            <AnimatePresence initial={false}>
              {showAudioPlayback && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 8,
                    mass: 0.5,
                  }}
                  style={{ originX: 0 }}
                  className="flex items-center overflow-hidden"
                >
                  <AudioPlayback
                    playbackFrequencies={playbackFrequencies}
                    itemClassName="bg-gradient-to-t from-blue-400 to-purple-500 shadow-lg"
                    height={24}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <motion.div
            layout="size"
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 8,
              mass: 0.5,
            }}
            style={{ originX: 0.5 }}
            className="overflow-hidden whitespace-nowrap text-center"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={agentName}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {agentName}
              </motion.span>
            </AnimatePresence>
          </motion.div>
          <div className="mr-6 ml-4">
            <AnimatePresence initial={false}>
              {showAudioPlayback && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 8,
                    mass: 0.5,
                  }}
                  style={{ originX: 1 }}
                  className="flex items-center overflow-hidden -pr-2"
                >
                  <Button
                    variant="primary"
                    size="iconTiny"
                    onClick={stopPlaying}
                    className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 shadow-lg"
                  >
                    <PauseIcon />
                  </Button>
                  {/* <PauseButton stopPlaying={stopPlaying} isPlaying /> */}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
      <div className="flex flex-row gap-2 px-5 items-center">
        <Button
          onClick={resetConversation}
          aria-label="Start new conversation"
          size="icon"
          className="bg-gradient-to-r from-gray-700/80 to-gray-600/80 backdrop-blur-xl border border-white/10 hover:from-gray-600/80 hover:to-gray-500/80 shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
        >
          <WriteIcon width={24} height={24} />
        </Button>
      </div>
    </div>
  );
}
