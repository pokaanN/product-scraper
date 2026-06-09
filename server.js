import express from "express";
import cors from "cors";

import { scrapeProducts } from "./scraper.js";
import { formatProduct } from "./formatter.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.get("/", (req, res) => {
res.json({
status: "running",
message: "Product Scraper API"
});
});

app.post("/scrape", async (req, res) => {
try {

```
const { urls } = req.body;

if (!urls || !Array.isArray(urls)) {
  return res.status(400).json({
    error: "urls array required"
  });
}

const products = [];

for (const url of urls) {

  try {

    const rawProduct =
      await scrapeProducts(url);

    const formatted =
      formatProduct(rawProduct);

    products.push(formatted);

  } catch (err) {

    products.push({
      url,
      error: err.message
    });

  }
}

res.json(products);
```

} catch (err) {

```
res.status(500).json({
  error: err.message
});
```

}
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log(
`Server running on port ${PORT}`
);
});

