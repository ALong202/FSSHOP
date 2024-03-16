import Product from "../models/product.js";

//viet cac bo dieu khien (controllers) hoac tat ca logic lien quan den product

// get products tu csdl
//Create new Product => /api/v1/products
export const getProducts = async (req, res) => {
    
    const products = await Product.find();
    
    
    
    res.status(200).json({
        products,
    }); 
};

//Create new Product => /api/v1/admin/products
export const newProduct = async (req, res) => { 
    
    const product = await Product.create(req.body);

    res.status(200).json({
        product,            
    });
};