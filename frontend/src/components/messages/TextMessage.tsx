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
    className="bg-gray-600 rounded-full py-1 px-2 text-sm font-medium hover:text-black hover:bg-white text-white"
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
          "px-4 max-w-[90%] ml-4 text-gray-900 bg-gray-300": isUser, 
          "px-4 max-w-[90%] mr-4 text-white bg-gray-700": !isUser, 
        })}
      >
        <ReactMarkdown components={{ a: CustomLink }}>{text}</ReactMarkdown>
      </div>
    </div>
  );
}
