import slugify from "slugify";
import ProductModel from "../models/ProductModel.js";
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
                
            case photo && photo.size>1000000 :
                return res.status(500).send({error:'photo is required and should be less then 1 mb'})
        }

        const product = new ProductModel({...req.fields,slug:slugify(name)});
        if(photo){
            product.photo.data=fs.readFileSync(photo.path)
            product.photo.contentType=photo.type;
        }
        await product.save();
        res.status(201).send({
            success:true,
            message:"Product created successfully",
            product
        })
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
export const getAllProductController = async(req,res)=>{

    try{
        const product = await ProductModel.find({}).select("-photo").populate("category").limit(12).sort({createdAt:-1});
        res.status(200).send({
            counTotal:product.length,
            success:true,
            message:"All products",
            product,
        })

    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in getting product",
            error
        })
    }
}
export const SingleProduct = async(req,res) =>{
    try{
        const product = await ProductModel.findOne({slug:req.params.slug}).select("-photo").populate("category")
        res.status(200).send({
            success:true,
            message:"",
            product
        })



    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in getting single product",
            error
        })

    }

}

export const productPhotoController = async(req,res) =>{
    try{
        const product =await ProductModel.findById(req.params.pid).select("photo");
        if(product.photo.data){
            res.set("Content-type",product.photo.contentType)
            return res.status(200).send(product.photo.data)
        }

    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Photo error",
            error
            
        })
        }
    }

