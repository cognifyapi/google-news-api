# Google News API by CognifyAPI - Implementation Guide

A guide for integrating the **Google News API** an news api from [CognifyAPI](https://cognifyapi.com) to search articles by query, topic, or geographic region with structured JSON results.

#### Free trial. No credit card required.

[![Start Now](https://img.shields.io/badge/Start%20Now-🚀-blue?style=for-the-badge&logo=google-cloud)](https://cognifyapi.com/google-news?utm_source=github&utm_medium=repo&utm_campaign=google_news_api&utm_content=cta)

---

## 🔗 Official Resources
- **API Documentation:** [Google News API Docs](https://cognifyapi.com/docs/google-news-docs)
- **More Info:** [Google News API](https://cognifyapi.com/google-news)
- **Official Website:** [CognifyAPI.com](https://cognifyapi.com/)
- **CognifyAPI Studio:** [Get an API key](https://studio.cognifyapi.com/)

## 🛠 Features
- Search news articles with a query.
- Retrieve articles for a topic.
- Find top news for a geographic region.
- Receive structured JSON with article title, URL, timestamp, and source.

## 📊 Endpoints

| Endpoint | Description | Example parameters | Response example |
| --- | --- | --- | --- |
| `/google-news-search` | Search news articles by query. | `q=elon musk&geo=US&count=2` | [JSON sample](./responses/google-news-search.json) |
| `/google-news-search-topic` | Retrieve articles for a topic. | `topic=WORLD&geo=US&count=2` | [JSON sample](./responses/google-news-search-topic.json) |
| `/google-news-search-geo` | Retrieve top news for a region. | `geo=US&count=2` | [JSON sample](./responses/google-news-search-geo.json) |

Each linked file is an endpoint-specific JSON example for the request shown in its row.

## 🚀 Getting Started

Base URL: `https://api.cognifyapi.com`

Send your API key in the `x-cognifyapi-key` header. Install Axios with `npm install axios`, set `COGNIFY_API_KEY`, then run [`google-news-api.js`](./google-news-api.js).

```text
x-cognifyapi-key: YOUR_COGNIFY_API_KEY
```

### Response Preview

```json
{
  "status": "success",
  "query": "elon musk",
  "results": 2,
  "newsResults": [
    {
      "title": "Musk says Jensen Huang is irreplaceable, regrets midterm spending - CNBC",
      "url": "https://www.cnbc.com/2026/11/19/elon-musk-jensen-huang-midterms.html",
      "timeStamp": "Thu, 19 Nov 2026 02:37:00 GMT",
      "source": {
        "name": "CNBC",
        "url": "https://www.cnbc.com"
      }
    }
  ]
}
```
