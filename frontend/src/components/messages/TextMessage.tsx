import clsx from "clsx";
import React from "react";
import ReactMarkdown from "react-markdown";

type CustomLinkProps = {
  href?: string;
  children?: React.ReactNode;
};

const CustomLink = ({ href, children, ...props }: CustomLinkProps) => (
  <a
    href={href}
    {...props}
    className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full py-1 px-2 text-sm font-medium hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
  >
    {children}
  </a>
);

type TextMessageProps = {
  text: string;
  isUser: boolean;
};

export function TextMessage({ text, isUser }: TextMessageProps) {
  return (
    <div
      className={clsx("flex flex-row gap-2", {
        "justify-end py-2": isUser,
      })}
    >
      <div
        className={clsx("rounded-[20px]", {
          "px-4 max-w-[90%] ml-4 text-gray-900 bg-gradient-to-r from-white to-gray-100 shadow-xl hover:shadow-blue-500/20 transition-all duration-300": isUser, 
          "px-4 max-w-[90%] mr-4 text-white bg-gradient-to-r from-gray-700/80 to-gray-600/80 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-purple-500/20 transition-all duration-300": !isUser, 
        })}
      >
        <ReactMarkdown components={{ a: CustomLink }}>{text}</ReactMarkdown>
      </div>
    </div>
  );
}
