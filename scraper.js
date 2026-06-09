
import puppeteer from "puppeteer";

export async function scrapeProducts(url) {

const browser =
await puppeteer.launch({
headless: true,
args: ["--no-sandbox"]
});

const page =
await browser.newPage();

await page.goto(url, {
waitUntil: "networkidle2",
timeout: 60000
});

const product =
await page.evaluate(() => {

```
  const title =
    document.querySelector("h1")
      ?.innerText || "";

  const images =
    [...document.querySelectorAll("img")]
      .map(img => img.src)
      .filter(Boolean)
      .slice(0, 4);

  return {
    name: title,
    description: title,
    price: "",
    mrp: "",
    images
  };
});
```

await browser.close();

return product;
}
                    
