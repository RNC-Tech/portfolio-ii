'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

export const FloatingDockDaisyUI = ({
  className,
}: {
  className?: string;
}) => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

      if (currentScrollTop < lastScrollTop.current) {
        // Scrolling up
        setIsVisible(true);
      } else {
        // Scrolling down
        setIsVisible(false);
      }

      lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        // Fluidglass styling: glassmorphism, blur, border, shadow, rounded, semi-transparent, etc.
        "md:hidden transition-transform duration-300 fixed left-1/2 -translate-x-1/2 bottom-4 z-50 flex justify-center w-[95vw] max-w-md px-2 py-2 rounded-2xl bg-white/30 dark:bg-neutral-900/40 backdrop-blur-xl border border-white/30 dark:border-neutral-800/60 shadow-xl",
        isVisible ? "translate-y-0" : "translate-y-full",
        className
      )}
      style={{
        // For extra fluidglass effect, add a subtle box shadow and border
        WebkitBackdropFilter: "blur(16px)",
        backdropFilter: "blur(16px)",
      }}
    >
      <Link href="/" scroll={false} className="flex-1">
        <button
          className={cn(
            "flex flex-col items-center justify-center w-full gap-1 py-1 px-2 rounded-xl transition-all hover:bg-white/40 hover:backdrop-blur-lg hover:shadow-lg active:scale-95",
            pathname === "/" && "bg-white/60 dark:bg-neutral-800/70 shadow border border-white/40 dark:border-neutral-700"
          )}
        >
          <svg className="size-[1.4em] mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
              <polyline
                points="1 11 12 2 23 11"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="2"
              ></polyline>
              <path
                d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                strokeMiterlimit="10"
                strokeWidth="2"
              ></path>
              <line
                x1="12"
                y1="22"
                x2="12"
                y2="18"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                strokeMiterlimit="10"
                strokeWidth="2"
              ></line>
            </g>
          </svg>
          <span className="text-xs font-medium text-neutral-800 dark:text-neutral-100">Home</span>
        </button>
      </Link>
      <Link href="/about" scroll={false} className="flex-1">
        <button
          className={cn(
            "flex flex-col items-center justify-center w-full gap-1 py-1 px-2 rounded-xl transition-all hover:bg-white/40 hover:backdrop-blur-lg hover:shadow-lg active:scale-95",
            pathname === "/about" && "bg-white/60 dark:bg-neutral-800/70 shadow border border-white/40 dark:border-neutral-700"
          )}
        >
          <svg className="size-[1.4em] mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
              <polyline
                points="3 14 9 14 9 17 15 17 15 14 21 14"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="2"
              ></polyline>
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="2"
                ry="2"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                strokeMiterlimit="10"
                strokeWidth="2"
              ></rect>
            </g>
          </svg>
          <span className="text-xs font-medium text-neutral-800 dark:text-neutral-100">About</span>
        </button>
      </Link>
      <Link href="/projects" scroll={false} className="flex-1">
        <button
          className={cn(
            "flex flex-col items-center justify-center w-full gap-1 py-1 px-2 rounded-xl transition-all hover:bg-white/40 hover:backdrop-blur-lg hover:shadow-lg active:scale-95",
            pathname === "/projects" && "bg-white/60 dark:bg-neutral-800/70 shadow border border-white/40 dark:border-neutral-700"
          )}
        >
          <svg className="size-[1.4em] mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
              <circle
                cx="12"
                cy="12"
                r="3"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                strokeMiterlimit="10"
                strokeWidth="2"
              ></circle>
              <path
                d="m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                strokeMiterlimit="10"
                strokeWidth="2"
              ></path>
            </g>
          </svg>
          <span className="text-xs font-medium text-neutral-800 dark:text-neutral-100">Projects</span>
        </button>
      </Link>
    </div>
  );
};
