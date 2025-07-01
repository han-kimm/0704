"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [scroll, setScroll] = useState(0);
  const [selected, setSelected] = useState("");
  const data = [
    {
      name: "하늘",
      order: [
        ["hn1", "차차 생각해봐야겠다."],
        ["hn2", "차와 시를 좋아한다. 그리고 보성을."],
        ["hn3", "나에게는 마을이 필요하다."],
      ],
    },
    {
      name: "경원",
      order: [
        [
          "kw1",
          "발분망식(發憤忘食). 분발하여 무엇을 하는데 끼니까지 잊는다는 말로, 무엇에 열중하기를 좋아한다는 뜻.",
        ],
        ["kw2", "오래된 것들을 좋아합니다."],
        [
          "kw3",
          "넘을 수 없는 파도가 온다면 그저 흘러가는 대로 몸을 맡겨보는 건 어때",
        ],
      ],
    },
    {
      name: "수진",
      order: [
        ["sj1", "오솔길"],
        ["sj2", "아름다운 풍경을 함께 바라보며 감탄할 수 있는 매일을 마주하다"],
        [
          "sj3",
          "바다와 산이 공존하는, 잔잔한 울림이 있는, 그런 마을을 찾고 싶었다",
        ],
        ["sj4", "함께 산다는 것은, 함께 행복하다는 것이었다"],
        ["sj5", "누군가 삶을 들여다봐 준다는 것은, 꽤나 행복한 일이었다"],
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-dvh flex flex-col font-[family-name:var(--font-geist-sans)] pt-4">
      <main className="flex flex-col p-4">
        <h1 className="text-[32px] font-bold ml-6">
          전체차랩,
          <br />
          전시 오디오 플레이어
        </h1>
        <div className="flex w-full justify-center">
          <div className="p-4 flex flex-col w-full">
            {data.map((item) => (
              <button
                key={item.name}
                className={`${
                  selected === item.name
                    ? "font-bold bg-black text-white dark:bg-white dark:text-black"
                    : "bg-gray-200 text-black dark:bg-black dark:border dark:border-white dark:text-white"
                } text-[28px] mb-4 rounded-full`}
                onClick={() => setSelected(item.name)}
              >
                {item.name}
              </button>
            ))}
            <div className="flex flex-col gap-20 my-8 mb-24">
              {data
                .find((item) => item.name === selected)
                ?.order.map((v, i) => (
                  <div className="flex gap-4" key={v[0]}>
                    <div className="flex flex-col">
                      <span className="text-[22px]">{i + 1}.</span>
                      <div className="bg-black dark:bg-white w-[1px] ml-1 grow" />
                    </div>
                    <div className="flex flex-col gap-4">
                      <h2 className="text-[24px] font-normal">{v[1]}</h2>
                      <div className="shadow-[0px_5px_15px_rgba(0,0,0,0.2)] rounded-lg overflow-hidden">
                        <div className="relative">
                          <Image
                            src={`/${v[0]}.webp`}
                            alt={`${selected} ${v[1]} 이미지`}
                            width={300}
                            height={300}
                            layout="responsive"
                          />
                          <div
                            className="pointer-events-none absolute left-0 bottom-0 w-full h-1/5"
                            style={{
                              background:
                                "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
                            }}
                          />
                        </div>
                        <div className="w-full bg-gray-100 rounded-b-lg">
                          <audio
                            controls
                            src={`/${v[0]}.m4a`}
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            {!!scroll &&
              data.map((item) => (
                <button
                  key={item.name}
                  className={`${
                    selected === item.name
                      ? "font-bold bg-black text-white dark:bg-white dark:text-black"
                      : "bg-gray-200 text-black dark:bg-black dark:border dark:border-white dark:text-white"
                  } text-[28px] mb-4 rounded-full`}
                  onClick={() => (
                    setSelected(item.name),
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  )}
                >
                  {item.name}
                </button>
              ))}
          </div>
        </div>
      </main>
      <button
        className={`fixed bottom-4 right-4 p-2 px-4 bg-black text-white font-bold text-[20px] rounded-full ${
          scroll > 100 ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        title="위로 가기"
      >
        위로 가기 ↑
      </button>
      <footer className="flex mt-auto justify-center text-black">
        <div className="flex flex-col text-[20px] w-full">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 w-full bg-gray-100 h-20 pl-8"
            href="https://www.instagram.com/greent_mosire"
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
