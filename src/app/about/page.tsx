import React from "react";
import Image from "next/image";

const timeline = [
  { date: "October 1999", title: "Born in Dhaka, Bangladesh" },
  { date: "2015", title: "Got introduced to programming with C" },
  { date: "2017", title: "Had my first earning by teaching Math" },
  { date: "November 2018", title: "Started learning Web development" },
  { date: "August 2019", title: "Got my first job as Front-end Developer" },
  {
    date: "2020",
    title: "Sold printed T-shirts Online",
  },
  {
    date: "May 2020 - February 2021",
    title: "Teaching STEM to primary school students",
  },
  {
    date: "January 2024",
    title: "Quit Job to do Indie Hacking full-time",
  },
  {
    date: "To be continued...",
    title: "",
  },
];

export default function page() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-1/3">
          <Image
            src="/arif_new.png"
            width={300}
            height={300}
            alt="arif profile"
            className="rouned"
          />
        </div>

        <div className="wi-full lg:w-2/3">
          <h3 className="text-4xl mb-8">About Me</h3>

          <div className="text-md font-light text-zinc-300">
            <p>I{"'"}m a Full-stack developer with focus on backend.</p>
            <p>
              Over the past four years, I have worked with variety of tools and
              technologies in the Web and App development space to solve buiness
              and cunsumer related problems.
            </p>
            <br />
            <p>
              Besides building software, I&apos;m passionate about startups and
              small businesses. Over the past few years, I&apos;ve launched
              several side projects. Almost all of them failed, but I&apos;m
              hoping they will lead me to that one overnight success that
              everyone talks about! 🤞😬
            </p>
          </div>
        </div>
      </div>

      <div className="h-16"></div>
      <h3 className="text-4xl mb-12">Timeline</h3>
      <div className="flex justify-center max-w-2xl">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {timeline.map((item) => (
            <li className={`${item.title && "mb-10"} ms-4`} key={item.date}>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.date}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
