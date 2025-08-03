import { useEffect, useRef } from "react";

import ArrowUpIcon from "@/components/icons/ArrowUpIcon";
import { Button } from "@/components/ui/Button";

interface ComposerProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
  audioChat?: React.ReactNode;
}

export function Composer({
  prompt,
  setPrompt,
  onSubmit,
  isLoading,
  audioChat,
}: ComposerProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [prompt]);

  return (
    <div className="flex flex-row relative px-5 py-6 w-full max-w-2xl">
      <div className="flex flex-row gap-2 w-full relative border-2 border-white/20 rounded-[32px] focus:outline-none pl-6 pr-1 bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:border-white/30">
        <textarea
          ref={textareaRef}
          value={prompt}
          rows={1}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask a question"
          className="py-3 flex-grow resize-none overflow-hidden focus:outline-none bg-transparent text-white placeholder-gray-300/70"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              if (prompt.trim() === "") {
                return;
              }
              onSubmit();
            }
          }}
        />
        <div className="flex flex-shrink-0 min-w-20 flex-row gap-2 items-center mt-1">
          {audioChat}
          <Button
            size="iconSmall"
            className="mb-1 me-1"
            variant="primary"
            onClick={onSubmit}
            disabled={isLoading || prompt.trim() === ""}
          >
            <ArrowUpIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
