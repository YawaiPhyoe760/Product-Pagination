require('dotenv').config();
let express = require('express'),
    app = express();

/*const seeder = require('./database/seeder');

seeder.seedProduct();*/
/*
const cat = require('./database/cat');

cat.getPost("id", "cat_id", "products")
    .then(res => console.log(res))
    .catch(err => console.log(err));*/

const product = require('./database/product');
product.paginate(5, 50)
    .then(res => console.log(res))
    .catch(err => console.log(err));


app.listen(process.env.PORT, () => {
    console.log("Server is running at ", process.env.PORT);
})