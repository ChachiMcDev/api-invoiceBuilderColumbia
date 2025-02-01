const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// app.use(
//   cors({
//     origin: "http://10.17.5.12:9001", // Replace with your React app's origin
//   })
// );

//test connection
app.get("/api/test", async (req, res) => {
  // res.setHeader('Access-Control-Allow-Methods', 'GET');
  try {
    const result = [
      {
        _id: "1",
        invoiceNumber: 1,
        companyName: "Test Company",
        address: "123 Test St",
        city: "Test City",
        state: "TS",
        zip: "12345",
        products: [
          {
            itemName: "koolaid",
            itemPrice: 500,
            deposit: 100,
            discount: 50,
            quantity: 5,
          },
          {
            itemName: "soda",
            itemPrice: 300,
            deposit: 0,
            discount: 0,
            quantity: 20,
          },
          {
            itemName: "green juice",
            itemPrice: 500,
            deposit: 0,
            discount: 0,
            quantity: 35,
          },
        ],
      },
      {
        _id: "2",
        invoiceNumber: 1,
        companyName: "Test Company",
        address: "123 Test St",
        city: "Test City",
        state: "TS",
        zip: "12345",
        products: [
          {
            itemName: "redbull",
            itemPrice: 500,
            deposit: 100,
            discount: 50,
            quantity: 5,
          },
          {
            itemName: "cider",
            itemPrice: 300,
            deposit: 0,
            discount: 0,
            quantity: 20,
          },
          {
            itemName: "ice tea",
            itemPrice: 500,
            deposit: 0,
            discount: 0,
            quantity: 35,
          },
        ],
      },
      {
        _id: "3",
        invoiceNumber: 1,
        companyName: "Test Company",
        address: "123 Test St",
        city: "Test City",
        state: "TS",
        zip: "12345",
        products: [
          {
            itemName: "maas",
            itemPrice: 500,
            deposit: 100,
            discount: 50,
            quantity: 5,
          },
          {
            itemName: "beer",
            itemPrice: 300,
            deposit: 0,
            discount: 0,
            quantity: 20,
          },
          {
            itemName: "wine",
            itemPrice: 500,
            deposit: 0,
            discount: 0,
            quantity: 35,
          },
        ],
      },
    ];
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Bad Request" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
