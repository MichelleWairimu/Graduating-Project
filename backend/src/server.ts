import express, { Express, Request, Response} from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { registerRoutes } from './Routes'

dotenv.config()

const PORT:string | number = process.env.PORT || 5000;

const app: Express = express();


app.use(express.json())
app.use(cors())

//routes
registerRoutes(app)

//connection to database
/* const uri:string = process.env.MONGO_URI || 'mongodb+srv://Graduating-project:HMut9cSQlnkiifjP@agrigrow.xxtjpnx.mongodb.net/?retryWrites=true&w=majority&appName=Agrigrow';  */

 const mongo:string = 'mongodb+srv://Graduating-project:HMut9cSQlnkiifjP@agrigrow.xxtjpnx.mongodb.net/?retryWrites=true&w=majority&appName=Agrigrow'; 

(async function connectToDb() {
    try{
        await mongoose.connect(  mongo )

        console.log('Connection to database successful')
    } catch (error) {
        console.error(error)
    }
}) ();

/* 
// MongoDB Connection
mongoose.connect( mongo,)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err)); */

// Schema and Model
const productSchema = new mongoose.Schema({
    description: String,
    location: String,
    harvestTime: String,
    price: String,
    contact: String,
});

const Product = mongoose.model('Product', productSchema);

/* // Replace with your OpenWeatherMap API key
const API_KEY = 'YOUR_API_KEY';

// Endpoint to get weather by location
app.get('/weather', async (req, res) => {
    const { lat, lon } = req.query;
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});
 */
app.post('/track', (req, res) => {
    const { harvestTime } = req.body;
    const currentDate = new Date();
    const harvestDate = new Date(harvestTime);
  
    if (harvestDate > currentDate) {
      res.json({ status: 'On Time' });
    } else {
      res.json({ status: 'Late' });
    }
  });

// Add Product
app.post('/addproducts', async (req, res) => {
    const product = new Product(req.body);
    try {
        await product.save();
        res.status(201).json({ message: 'Product added successfully!' });
    } catch (error) {
        res.status(400).json({ error: 'Failed to add product' });
    }
});

// Fetch Products
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

// Delete Product
app.delete('/products/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(productId);
        if (deletedProduct) {
            res.status(200).json({ message: 'Product removed successfully!' });
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to remove product' });
    }
});




app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})