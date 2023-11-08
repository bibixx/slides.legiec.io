import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipPortal,
} from "@/components/ui/tooltip";
import { FileTextIcon, PlayIcon } from "lucide-react";
import Head from "next/head";
import { useEffect, useState } from "react";

interface Talk {
  location: string;
  date: Date;
  url: string;
  img: string;
  file?: string;
  video?: string;
}
const TALKS: Talk[] = [
  {
    location: "Linux from Scratch",
    date: new Date(2023, 10, 8),
    url: "/linux-from-scratch",
    img: "/linux-from-scratch/poster.png",
    file: "/linux-from-scratch/linux-from-scratch.pdf",
  },
  {
    location: "Engineering Thesis Defense",
    date: new Date(2023, 8, 20),
    url: "/thesis-defence",
    img: "/thesis-defence/poster.png",
  },
  {
    location: "WarsawJS #107",
    date: new Date(2023, 8, 13),
    url: "/not-legal-advice",
    img: "/not-legal-advice/poster.png",
    file: "/not-legal-advice/not-legal-advice.pdf",
    video: "https://www.youtube.com/watch?v=PrvDNJw67Yw",
  },
  {
    location: "WarsawJS #106",
    date: new Date(2023, 7, 9),
    url: "/figma-tokens",
    img: "/figma-tokens/poster.png",
  },
  {
    location: "WarsawJS #65",
    date: new Date(2020, 0, 8),
    url: "/a-journey-of-a-single-request",
    img: "/a-journey-of-a-single-request/poster.png",
    video: "https://www.youtube.com/watch?v=D1wykjTstr4",
  },
  {
    location: "Meet.js Olsztyn #6",
    date: new Date(2019, 4, 9),
    url: "/deploying-js-app",
    img: "/deploying-js-app/poster.png",
  },
  {
    location: "WarsawJS #42",
    date: new Date(2018, 1, 14),
    url: "/wtf-js",
    img: "/wtf-js/poster.png",
    video: "https://www.youtube.com/watch?v=PpkXrqdJKJo",
  },
  {
    location: "WarsawJS #52",
    date: new Date(2018, 11, 12),
    url: "/ssr-made-easy",
    img: "/ssr-made-easy/poster.png",
    video: "https://www.youtube.com/watch?v=F2-I3FMreog",
  },
  {
    location: "WarsawJS #40",
    date: new Date(2017, 11, 13),
    url: "/roboty-i-javascript-czyli-jak-posypac-rane-sola",
    img: "/roboty-i-javascript-czyli-jak-posypac-rane-sola/poster.png",
    video: "https://www.youtube.com/watch?v=VR4YuuP3JHs",
  },
  {
    location: "Gamedev.js Warszawa #4",
    date: new Date(2017, 5, 20),
    url: "/jak-zrobic-prototyp-w-7-godzin-i-nie-zwariowac",
    img: "/jak-zrobic-prototyp-w-7-godzin-i-nie-zwariowac/poster.png",
    video: "https://www.youtube.com/watch?v=xZF4C2HgT_Q",
  },
].sort((a, b) => b.date.getTime() - a.date.getTime());

export default function Home() {
  const [showTags, setShowTags] = useState(false);
  useEffect(() => {
    setShowTags(true);
  }, []);

  return (
    <>
      <Head>
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link href="/fonts/satoshi.css" rel="stylesheet" />
      </Head>
      <div className="max-w-5xl 2xl:max-w-7xl mx-auto font-normal">
        <h1 className="text-3xl font-semibold tracking-tight my-5 sm:mt-16 text-center select-none">
          <a href="https://legiec.io" className="text-blue-500 hover:underline">
            @bibixx&rsquo;s
          </a>{" "}
          talk resources
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 sm:gap-5 my-4 items-start mx-2 sm:mx-5">
          {TALKS.map((talk) => (
            <Card key={talk.location} asChild>
              <a
                className="overflow-hidden transition-transform sm:hover:-translate-y-1 select-none"
                href={talk.url}
              >
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={talk.img} alt="" className="aspect-video" />
                  {showTags && (talk.file || talk.video) && (
                    <div className="absolute bottom-2 right-2 flex gap-2">
                      {talk.video && (
                        <Tooltip>
                          <TooltipPortal>
                            <TooltipContent>
                              {talk.video.includes("youtube")
                                ? "Watch on YouTube"
                                : "Watch recording"}
                            </TooltipContent>
                          </TooltipPortal>
                          <TooltipTrigger>
                            <Button variant="outline" size="icon" asChild>
                              <a href={talk.video}>
                                <PlayIcon className="h-[1.125rem] w-[1.125rem] fill-foreground" />
                              </a>
                            </Button>
                          </TooltipTrigger>
                        </Tooltip>
                      )}
                      {talk.file && (
                        <Tooltip>
                          <TooltipPortal>
                            <TooltipContent>
                              Download as {mapFilePathToExtension(talk.file)}
                            </TooltipContent>
                          </TooltipPortal>
                          <TooltipTrigger>
                            <Button variant="outline" size="icon" asChild>
                              <a href={talk.file}>
                                <FileTextIcon className="h-5 w-5" />
                              </a>
                            </Button>
                          </TooltipTrigger>
                        </Tooltip>
                      )}
                    </div>
                  )}
                </div>
                <div className="flex flex-col flex-1 items-center py-3 px-3 border-t">
                  <p className="select-none text-xl font-semibold leading-none tracking-tight text-center w-full">
                    <span>{talk.location}</span>
                  </p>
                  <p className="text-muted-foreground text-md font-semibold mt-1">
                    {new Intl.DateTimeFormat("en-GB", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }).format(talk.date)}
                  </p>
                </div>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

const extensionMap = {
  ".pdf": "PDF",
  ".pptx": "PowerPoint",
  ".ppt": "PowerPoint",
};

function mapFilePathToExtension(path: string) {
  for (const [extension, name] of Object.entries(extensionMap)) {
    if (path.endsWith(extension)) {
      return name;
    }
  }

  return "file";
}
