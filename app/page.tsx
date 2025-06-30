"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [scroll, setScroll] = useState(0);
  const [selected, setSelected] = useState("");
  const data = [
    {
      name: "경원",
      order: ['kw1','kw2','kw3']
    },
    {
      name: "수진",
      order: ['sj1','sj2','sj3','sj4', 'sj5']
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])
  
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] relative">
      <main className="flex flex-col p-4 items-center">
        <h1 className="text-[32px] underline-offset-4 white-space-nowrap" >전체차랩,<br/>전시 오디오 플레이어</h1>
        <div className="flex w-full justify-center">
          <div className="p-4 flex flex-col w-full">
            {data.map((item) => (
              <button key={item.name} className={`${selected === item.name ? "font-bold bg-black text-white" : "bg-gray-200"} text-[28px] mb-4 rounded-full`} onClick={() => setSelected(item.name)}>
                {item.name}
              </button>
            ))}            
            <div className="flex flex-col gap-12" >
              {
                data.find(item => item.name === selected)?.order.map((i) => (
                  <div key={i} className="flex flex-col gap-4 rounded-xl relative shadow-lg">
                    <Image
                      src={`/${i}.webp`}
                      alt={`${selected} ${i} 이미지`}
                      width={300}
                      height={300}
                      layout="responsive"
                      className="rounded-lg"
                    />
                    <div className="absolute bottom-0 bg-gray-100 pt-4 rounded-b-lg w-full">
                      <audio
                      key={i}
                      className="w-full"
                      controls
                      src={`/${i}.m4a`}
                      preload="metadata"
                      />
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </main>
      <button className={`fixed bottom-4 right-4 p-2 px-4 bg-black text-white font-bold text-[20px] rounded-full ${scroll > 100 ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
        aria-label="Scroll to top"
        title="위로 가기"
      >
        위로 가기 ↑
      </button>
      <footer className="flex mt-12 justify-center">
        <div className="flex flex-col text-[20px] w-full">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 w-full bg-gray-100 h-20 pl-8"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/insta.png"
            alt="Instagram icon"
            width={16}
            height={16}
          />
          전체차랩 인스타그램
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 w-full bg-gray-300 h-20 pl-8"
          href="https://youtube.com/@greentmosire"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/youtube.svg"
            alt="YouTube icon"
            width={24}
            height={24}
          />
          전체차랩 유튜브
        </a>
        </div>
      </footer>
    </div>
  );
}
