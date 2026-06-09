
import { createMD5 } from "./md5.js";

export function formatProduct(product) {

const id =
Date.now().toString();

return {

```
id,
product_id: id,

name: product.name || "",

color: "Default",

size: "Free Size",

storage: "",

selling_price:
  product.price || "",

mrp:
  product.mrp || "",

fetaures:
  product.description || "",

from_csv: "1",

created_at:
  new Date()
    .toISOString()
    .replace("T", " ")
    .substring(0, 19),

md5_id:
  createMD5(id),

verients: [],

img1:
  product.images?.[0] || "",

img2:
  product.images?.[1] || "",

img3:
  product.images?.[2] || "",

img4:
  product.images?.[3] || "",

features: ""
```

};
}
