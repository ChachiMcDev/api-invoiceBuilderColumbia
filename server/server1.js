const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const cors = require("cors");
const moment = require("moment");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// app.use(
//   cors({
//     origin: "http://10.17.5.12:9001", // Replace with your React app's origin
//   })
// );



const invoiceData = [
    {
        _id: "1",
        invoiceNumber: 3356431,
        description: "Holiday uptick",
        companyName: "Test Company",
        address: "123 Test St",
        city: "Test City",
        state: "TS",
        zip: "12345",
        createdAt: moment().day(-4),
        products: [
            {
                itemName: "koolaid",
                itemPrice: 50000,
                deposit: 100,
                discount: 50,
                quantity: 5,
            },
            {
                itemName: "soda",
                itemPrice: 30000,
                deposit: 0,
                discount: 0,
                quantity: 20,
            },
            {
                itemName: "green juice",
                itemPrice: 50000,
                deposit: 0,
                discount: 0,
                quantity: 35,
            },
        ],
    },
    {
        _id: "2",
        invoiceNumber: 3356792,
        description: "Standard re-order",
        companyName: "Test Company",
        address: "123 Test St",
        city: "Test City",
        state: "TS",
        zip: "12345",
        createdAt: moment(),
        products: [
            {
                itemName: "redbull",
                itemPrice: 50000,
                deposit: 100,
                discount: 50,
                quantity: 5,
            },
            {
                itemName: "cider",
                itemPrice: 30000,
                deposit: 0,
                discount: 0,
                quantity: 15,
            },
            {
                itemName: "ice tea",
                itemPrice: 50000,
                deposit: 0,
                discount: 0,
                quantity: 250,
            },
            {
                itemName: "soda",
                itemPrice: 30000,
                deposit: 0,
                discount: 0,
                quantity: 15,
            },
            {
                itemName: "maas",
                itemPrice: 50000,
                deposit: 0,
                discount: 0,
                quantity: 250,
            },
            {
                itemName: "spirit",
                itemPrice: 30000,
                deposit: 0,
                discount: 0,
                quantity: 15,
            },
            {
                itemName: "beer",
                itemPrice: 50000,
                deposit: 0,
                discount: 0,
                quantity: 250,
            },
            {
                itemName: "wine",
                itemPrice: 50000,
                deposit: 0,
                discount: 0,
                quantity: 250,
            },
            {
                itemName: "cider",
                itemPrice: 30000,
                deposit: 0,
                discount: 0,
                quantity: 15,
            },
            {
                itemName: "ice tea",
                itemPrice: 50000,
                deposit: 0,
                discount: 0,
                quantity: 250,
            },
            {
                itemName: "soda",
                itemPrice: 30000,
                deposit: 0,
                discount: 0,
                quantity: 15,
            },
            {
                itemName: "maas",
                itemPrice: 50000,
                deposit: 0,
                discount: 0,
                quantity: 250,
            },
            {
                itemName: "spirit",
                itemPrice: 30000,
                deposit: 0,
                discount: 0,
                quantity: 15,
            },
            {
                itemName: "beer",
                itemPrice: 50000,
                deposit: 0,
                discount: 0,
                quantity: 250,
            },
            {
                itemName: "wine",
                itemPrice: 50000,
                deposit: 0,
                discount: 0,
                quantity: 250,
            },
            {
                itemName: "soda",
                itemPrice: 30000,
                deposit: 0,
                discount: 0,
                quantity: 15,
            },
            {
                itemName: "maas",
                itemPrice: 50000,
                deposit: 0,
                discount: 0,
                quantity: 250,
            },
            {
                itemName: "spirit",
                itemPrice: 30000,
                deposit: 0,
                discount: 0,
                quantity: 15,
            },
            {
                itemName: "beer",
                itemPrice: 50000,
                deposit: 0,
                discount: 0,
                quantity: 250,
            },
            {
                itemName: "wine",
                itemPrice: 50000,
                deposit: 0,
                discount: 0,
                quantity: 250,
            }
        ],
    },
    {
        _id: "3",
        invoiceNumber: 3356894,
        description: "get down for the hodown",
        companyName: "Test Company",
        address: "123 Test St",
        city: "Test City",
        state: "TS",
        zip: "12345",
        createdAt: moment().day(-7),
        products: [
            {
                itemName: "maas",
                itemPrice: 50000,
                deposit: 100,
                discount: 50,
                quantity: 5,
            },
            {
                itemName: "beer",
                itemPrice: 30000,
                deposit: 0,
                discount: 0,
                quantity: 20,
            },
        ],
    },
    {
        _id: "1",
        invoiceNumber: 3356431,
        description: "Holiday uptick",
        companyName: "Test Company",
        address: "123 Test St",
        city: "Test City",
        state: "TS",
        zip: "12345",
        createdAt: moment().day(-6),
        products: [
            {
                itemName: "koolaid",
                itemPrice: 50000,
                deposit: 100,
                discount: 50,
                quantity: 5,
            },
            {
                itemName: "special soda",
                itemPrice: 30000000,
                deposit: 0,
                discount: 0,
                quantity: 20,
            },
            {
                itemName: "purple juice",
                itemPrice: 50000000,
                deposit: 0,
                discount: 0,
                quantity: 35,
            },
        ],
    }
];

//test connection
app.get("/api/test", async (req, res) => {
    // res.setHeader('Access-Control-Allow-Methods', 'GET');
    try {

        res.status(200).json(invoiceData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Bad Request" });
    }
});


app.get('/api/getinvoice/:id', async (req, res) => {
    // res.setHeader('Access-Control-Allow-Methods', 'GET');
    try {

        const paramId = req.params.id;
        //const singleInvoice = await dbconnect.findOne({ _id: new ObjectId(id) });
        const singleInvoice = invoiceData.find((invoice) => invoice._id === paramId);
        res.status(200).json(singleInvoice);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error getting document" });
    } finally {
        // await client.close();
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
