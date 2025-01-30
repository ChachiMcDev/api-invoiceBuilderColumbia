const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());    // Enable CORS for all requests

// app.use(cors({
//     origin: 'http://192.168.1.5:9001' // Replace with your React app's origin
// }));


//test connection
app.get('/api/test', async (req, res) => {
    // res.setHeader('Access-Control-Allow-Methods', 'GET');
    try {

        const result = [{
            _id: "12345",
            invoiceNumber: 1,
            description: "aaaaahhhhh yeah",
            companyName: "Test Company",
            address: "123 Test St",
            city: "Test City",
            state: "TS",
            zip: "12345",
            products: [
                { itemName: 'Coors', itemPrice: 500 },
                { itemName: 'Red Bull', itemPrice: 1500 },
                { itemName: 'Mass', itemPrice: 150 }
            ],
            amount: 100,
            createdAt: 123457
        }, {
            _id: "12345a",
            invoiceNumber: 2,
            description: "blahb lbha blah",
            companyName: "Test Company2",
            address: "244 Test St",
            city: "Portland",
            state: "TS",
            zip: "98188",
            products: [
                { itemName: 'Red Drink', itemPrice: 500 },
                { itemName: 'Blue Drink', itemPrice: 500 },
                { itemName: 'Green Drink', itemPrice: 150 }
            ],
            amount: 5,
            createdAt: 122456
        }, {
            _id: "12345c",
            invoiceNumber: 2,
            description: "ccccccccc",
            companyName: "Test Company2",
            address: "244 Test St",
            city: "Portland",
            state: "TS",
            zip: "98188",
            products: [
                { itemName: 'Red Drink', itemPrice: 500 },
                { itemName: 'Blue Drink', itemPrice: 500 },
                { itemName: 'Green Drink', itemPrice: 150 }
            ],
            amount: 500,
            createdAt: 122456
        }];
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Bad Request" });
    }
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
