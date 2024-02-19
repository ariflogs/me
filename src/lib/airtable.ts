import Airtable from "airtable";

export const airtable = new Airtable({
  apiKey: process.env.AIRTABLE_SECRET_API_TOKEN,
}).base("appEV286bM417YeIN");
