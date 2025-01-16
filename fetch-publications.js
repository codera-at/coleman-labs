import { getJson } from "serpapi";
import fs from "fs";

let articles = [];
let articlesEmpty = false;

do {
  await getJson(
    {
      engine: "google_scholar_author",
      author_id: "x5HMEUEAAAAJ",
      api_key:
        "84131be32a4903a21a704819d5ce6052bf053051a3018ce0820ed0c4a9ab22ed",
      start: articles.length,
      num: 100,
    },
    (json) => {
      console.log("json:", json["articles"], "length:", articles.length);
      if (!json["articles"] || json["articles"].length === 0) {
        articlesEmpty = true;
      } else {
        articles.push(...json["articles"]);
      }
    },
  );
} while (!articlesEmpty);

fs.writeFileSync("api/publications.json", JSON.stringify(articles));
