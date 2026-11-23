const axios = require("axios");

const API_KEY = process.env.COGNIFY_API_KEY;

if (!API_KEY) {
  throw new Error("Set the COGNIFY_API_KEY environment variable before running this example.");
}

const api = axios.create({
  baseURL: "https://api.cognifyapi.com",
  headers: {
    "x-cognifyapi-key": API_KEY,
  },
});

const requests = [
  {
    name: "Google News Search",
    path: "/google-news-search",
    params: {
      q: "elon musk",
      geo: "US",
      count: 2,
    },
  },
  {
    name: "Google News Search Topic",
    path: "/google-news-search-topic",
    params: {
      topic: "WORLD",
      geo: "US",
      count: 2,
    },
  },
  {
    name: "Google News Search Geo",
    path: "/google-news-search-geo",
    params: {
      geo: "US",
      count: 2,
    },
  },
];

async function runExamples() {
  for (const request of requests) {
    try {
      const response = await api.get(request.path, {
        params: request.params,
      });
      console.log(`${request.name}:`, response.data);
    } catch (error) {
      console.error(
        `${request.name} failed:`,
        error.response?.data || error.message
      );
    }
  }
}

runExamples();
