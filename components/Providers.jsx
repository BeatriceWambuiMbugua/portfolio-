"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

export default function Provider({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div
        className="dark:bg-eerie-black
      text-gray-700   duration-300 min-h-screen select-none"
      >
        {children}
      </div>
      


    </ThemeProvider>
  );
}
