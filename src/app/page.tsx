'use client'
import Image from "next/image";
import { ReactTyped } from "react-typed";
import { useState, useEffect } from "react";
import "./globals.css"
export default function Home() {

  
  /*build cursor load handler*/
  const [cursor, cursorStatus] = useState(false);
  //prior to delay hideCursor, after delay show cursor
  useEffect(()=> {
    console.log("Cursor Show Effect Loading");
    const delay = 3510;
    const timeout = setTimeout(() =>{
      //showing cursor
      cursorStatus(true);
      console.log("Waiting for Cursor ...");
    }, delay)
    // now need to clear the timeout 
    return () => {
      clearTimeout(timeout);
    }
  },[]); //the array being empty means it only runs once
  const [hideCursor, setHideCursor] = useState(false);
  

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[12px] row-start-2 items-center sm:items-start">
        <h1 className="text-[39px] font-[family-name:var(--font-geist-mono)]">
          <div className={hideCursor ? "hide-cursor" : ""}>
            <ReactTyped
              startDelay={500}
              strings={["Aarya Vasantlal."]}
              typeSpeed={120}
              showCursor={true}
              cursorChar="|"
              onComplete={() => setHideCursor(true)}
            />
          </div>
        </h1>
        <h2 className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
           {/* ol - ordered list*/}
          <div className="mb-2 tracking-[-.01em]">
            <ReactTyped
            onStart={() => cursorStatus(true)}
            startDelay={3510}
            strings={["Welcome to my home."]}
            typeSpeed={100}
            showCursor={cursor}
            cursorChar="|"
            />
          </div>
        </h2>

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Resume
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Projects
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
