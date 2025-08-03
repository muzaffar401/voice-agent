import React, { useState } from "react";

import { AudioPlayback } from "@/components/AudioPlayback";
import ArrowUpIcon from "@/components/icons/ArrowUpIcon";
import MicIcon from "@/components/icons/MicIcon";
import { Button } from "@/components/ui/Button";
import { cn } from "@/components/ui/utils";

interface AudioChatProps {
  startRecording: () => Promise<void>;
  stopRecording: () => Promise<Int16Array<ArrayBuffer>>;
  sendAudioMessage: (audio: Int16Array<ArrayBuffer>) => void;
  isReady: boolean;
  frequencies: number[];
}

const AudioChat = ({
  isReady = true,
  startRecording,
  stopRecording,
  sendAudioMessage,
  frequencies,
}: AudioChatProps) => {
  const [isRecording, setIsRecording] = useState(false);

  async function toggleRecording() {
    if (isRecording) {
      const audio = await stopRecording();
      sendAudioMessage(audio);
      setIsRecording(false);
    } else {
      await startRecording();
      setIsRecording(true);
    }
  }

  return (
    <Button
      variant="outline"
      size="iconSmall"
      disabled={!isReady}
      aria-label={isRecording ? "Stop Recording" : "Start Recording"}
      className={cn(
        `mb-1 me-1 [&_svg]:size-5`,
        isRecording
          ? "mr-4 bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-xl w-full h-full absolute top-0 left-0 z-10 flex justify-end px-4 hover:from-red-500/30 hover:to-pink-500/30 border-2 border-red-400/30 shadow-2xl"
          : "mr-0 border-2 border-white/20 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:border-white/30 backdrop-blur-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
      )}
      onClick={toggleRecording}
    >
      {isRecording ? (
        <div className="flex w-full justify-between items-center gap-4 h-full">
          <AudioPlayback
            playbackFrequencies={frequencies}
            itemClassName="bg-gradient-to-t from-red-400 to-pink-500 w-[4px] sm:w-[6px] shadow-lg"
            className="gap-[3px] w-full"
            height={36}
          />
          <Button variant="stop" size="iconSmall" asChild className="mr-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 shadow-xl">
            <div className="!size-6 h-8 w-8 p-4">
              <ArrowUpIcon />
            </div>
          </Button>
        </div>
      ) : (
        <MicIcon />
      )}
    </Button>
  );
};

export default AudioChat;
