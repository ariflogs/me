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
    date: "December 2023",
    title: "Started creating content on YouTube",
  },
  {
    date: "To be continued...",
    title: "",
  },
];

export default function page() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <Image
          src="/arif-t.png"
          width={300}
          height={500}
          alt="arif profile"
          className="rouned"
        />
        <div>
          <h3 className="text-4xl mb-8">About Me</h3>

          <div className="text-md font-light text-gray-300">
            <p>I{"'"}m a Full-stack developer with focus on backend.</p>
            <p>
              Over the past four years, I have worked with variety of tools and
              technologies in the Web and App development space. My experience
              includes working with techlogies like Javascript, Typescript,
              Python, Flutter, ReactJS, NodeJS, NextJS, SQL, NoSQL, AWS...
            </p>
            <p>
              Currently focusing on building Open-source tools and getting good
              at Competitive Programming.
            </p>
            <br />
            <p>
              Besides building software products, I also have experience in
              being a teacher, running business and creating content.
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
