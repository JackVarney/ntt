require("isomorphic-fetch");
const express = require("express");
const cors = require("cors");

const fakeDataDrake = require("./TEST_DATA_DRAKE.json");
const fakeDataKanye = require("./TEST_DATA_KANYE.json");

const app = express();
app.use(cors());

app.get("/ping", (_, res) => {
  res.send("pong");
});

app.get("/api", async (req, res) => {
  const term = req.query.term;
  const limit = req.query.limit;

  const itunesResponse = await fetch(
    `https://itunes.apple.com/search?term=${term}&country=GB&limit=200&limit=${limit}`,
  );

  const data = await itunesResponse.json();

  res.status(200);
  res.json(data);
});

app.get("/fake-api", async (req, res) => {
  const limit = req.query.limit;
  const term = req.query.term;

  if (term === "Kanye") {
    var fakeData = fakeDataKanye;
  } else if (term === "Drake") {
    var fakeData = fakeDataDrake;
  }

  res.status(200);
  res.json({
    resultCount: limit,
    results: fakeData.results.slice(0, limit),
  });
});

const port = 8080;
app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`);
});
