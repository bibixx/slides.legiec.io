import Head from "next/head";

interface Talk {
  location: string;
  date: Date;
  url: string;
  img: string;
}
const TALKS: Talk[] = [
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
  },
  {
    location: "WarsawJS #52",
    date: new Date(2018, 11, 12),
    url: "/ssr-made-easy",
    img: "/ssr-made-easy/poster.png",
  },
  {
    location: "WarsawJS #40",
    date: new Date(2017, 11, 13),
    url: "/roboty-i-javascript-czyli-jak-posypac-rane-sola",
    img: "/roboty-i-javascript-czyli-jak-posypac-rane-sola/poster.png",
  },
  {
    location: "Gamedev.js Warszawa #4",
    date: new Date(2017, 5, 20),
    url: "/jak-zrobic-prototyp-w-7-godzin-i-nie-zwariowac",
    img: "/jak-zrobic-prototyp-w-7-godzin-i-nie-zwariowac/poster.png",
  },
].sort((a, b) => b.date.getTime() - a.date.getTime());

export default function Home() {
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
            <a
              key={talk.location}
              className="flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-transform sm:hover:-translate-y-1 select-none"
              href={talk.url}
            >
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={talk.img} alt="" className="aspect-video" />
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
          ))}
        </div>
      </div>
    </>
  );
}
