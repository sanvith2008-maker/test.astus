const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Dummy product price data
const dummyData = {
  "Milk 1L": [
    { app: "Zepto", price: 45, delivery: "8 min", link: "https://zepto.app" },
    { app: "Blinkit", price: 48, delivery: "7 min", link: "https://blinkit.com" },
    { app: "Instamart", price: 46, delivery: "10 min", link: "https://instamart.com" },
    { app: "BigBasket", price: 44, delivery: "20 min", link: "https://bigbasket.com" }
  ],
  "Colgate 100g": [
    { app: "Zepto", price: 45, delivery: "9 min", link: "https://zepto.app" },
    { app: "Blinkit", price: 47, delivery: "6 min", link: "https://blinkit.com" },
    { app: "Instamart", price: 46, delivery: "12 min", link: "https://instamart.com" },
    { app: "BigBasket", price: 43, delivery: "18 min", link: "https://bigbasket.com" }
  ]
};

// API endpoint: /search?item=Milk 1L
app.get("/search", (req, res) => {
  const item = req.query.item;
  if (dummyData[item]) {
    res.json(dummyData[item]);
  } else {
    res.json([]);
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
