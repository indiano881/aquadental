"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface ButtonProps {
  text: string;
  url?: string;
  backgroundColor: string;
  hoverBackgroundColor: string;
  textColor: string;
  hoverTextColor?: string;
  extraWide?: boolean;
  type?: "button" | "submit";
}

const Button = ({
  text,
  url,
  backgroundColor,
  hoverBackgroundColor,
  textColor,
  hoverTextColor = textColor, // Optional hover text color, defaults to the same as the normal text color
  type,
  extraWide,
}: ButtonProps) => {
  const router = useRouter();

  const handleClick = (): void => {
    if (type !== "submit" && url) {
      router.push(url);
    }
  };

  return (
    <button
      {...(type ? { type } : {})}
      onClick={handleClick}
      className={`
        ${extraWide ? "md:w-[200px]" : "md:w-[160px]"}
        py-[15px]
        px-[32px]
        h-[48px]
        w-[300px]
        flex
        justify-center
        items-center
        text-nowrap
        rounded-full
        transition-colors duration-300
      `}
      style={{
        backgroundColor: backgroundColor, // Apply background color from props
        color: textColor, // Apply text color from props
      }}
      onMouseOver={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = hoverBackgroundColor;
        (e.currentTarget as HTMLElement).style.color = hoverTextColor;
      }}
      onMouseOut={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = backgroundColor;
        (e.currentTarget as HTMLElement).style.color = textColor;
      }}
    >
      {text}
    </button>
  );
};

export default Button;
