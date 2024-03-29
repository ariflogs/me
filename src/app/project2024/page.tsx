import { notFound } from "next/navigation";
import React from "react";

const weeklyGoals = [
  "Make website Live",
  "Get business email",
  "Create social accounts",
  "Analyse competitor's social profiles",
];

interface IWebsite {
  name: string;
  blogTitle: string;
  blogTopic: string;
  blogWebsite: string;
}

async function getWebsites() {
  const results = await fetch(
    "https://api.airtable.com/v0/appEV286bM417YeIN/Table%201?maxRecords=3&view=Grid%20view",
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_SECRET_API_TOKEN}`,
      },
    }
  );
  const data = await results.json();
  const websites: IWebsite[] = data.records.map(
    (record: { fields: { [x: string]: { toString: () => any } } }) => ({
      name: record.fields["Name"]?.toString() || "",
      blogTitle: record.fields["Blog Title"]?.toString() || "",
      blogTopic: record.fields["Blog Topic"]?.toString() || "",
      blogWebsite: record.fields["Blog Website"]?.toString() || "",
    })
  );

  return websites;
}

export default async function Page() {
  const websites = await getWebsites();

  if (!websites) {
    return notFound();
  }

  return (
    <div className="flex min-h-96">
      <div className="w-2/5">
        <h2 className="text-2xl mb-2 text-purple-400">
          This Week&apos;s Goals
        </h2>
        <ul>
          {weeklyGoals.map((goal) => (
            <li key={goal} className="mb-1">
              ✅ {goal}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/5">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl mb-2 text-purple-400">Community Websites</h2>
          <button
            data-tally-open="w4xozr"
            data-tally-layout="modal"
            data-tally-width="480"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
            className="bg-purple-600 rounded px-4 py-1"
          >
            Submit Your Site
          </button>
        </div>

        <ul className="space-y-4">
          {websites.map((website) => (
            <li key={website.blogWebsite}>
              <a href={website.blogWebsite} target="_blank" className="text-xl">
                {website.blogTitle}
              </a>
              <div className="flex space-x-4">
                <p className="text-zinc-400 text-sm">
                  Topic: {website.blogTopic}
                </p>
                <p className="text-zinc-400 text-sm">Author: {website.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
