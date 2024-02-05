import slugify from "slugify";
import ProductModel from "../models/ProductModel";
import fs from 'fs';

export const createProductController=async(req,res)=>{
    try{
        const {photo}=req.files;
        const {name,slug,description,price,category,quantity,shipping}=req.fields;

        //validation 

        switch(true){
            case !name:
                return res.status(500).send({error:'Name is required'})
        
           
        
            case !description:
                return res.status(500).send({error:'description is required'})
        
            case !price:
                return res.status(500).send({error:'price is required'})
        
            case !category:
                return res.status(500).send({error:'category is required'})
        
            case !quantity:
                return res.status(500).send({error:'quantitiy is required'})
                
            case photo && photo.size(100000):
                return res.status(500).send({error:'photo is required and should be less then 1 mb'})
        }

        const product = new ProductModel({...req.fields,slug:slugify(name)});
        if(photo){
            product.photo.data=fs.readFileSync(photo.path)
        }


    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in creating product",
            error
        })
    }
}