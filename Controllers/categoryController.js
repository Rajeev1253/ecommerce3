import slugify from 'slugify';
import CategoryModel from   '../models/CategoryModel.js'
export const createCategoryController = async (req,res) =>{
    try{
        const {name}= req.body;
        if(!name){
            return
            res.status(401).send({message:"name is required"})
        }
        const existingCategory = await CategoryModel.findOne({name});
        if(existingCategory){
            return res.status(200).send({
                success:true,
                message:"category already existed"
            })
        }
        const category = await new CategoryModel({name,slug:slugify(name)}).save()
        res.status(201).send({
            success:true,
            message:"new category created successfully",
            category
        
        })   


    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            Message:"Error in category",
            error
        })
    }
    
}
export const updateCategoryController = async(req,res) =>{

    
    try{
        const {id} = req.params;    
        const {name}= req.body;
        const category = await CategoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true})
        res.status(200).send({
            success:true,
            message:"updated successfully",
            category

        })

    }
    catch(error){
        console.log(error),
        res.status(500).send({
            message:"error while updating",
            error

        })
    }

}
export const getAllCategoryController = async(req,res)=>{
    try{
        const category = await CategoryModel.find({})
        res.status(200).send({
            message:"All category",
            category
        })


    }
    catch(error){
        console.log(error)
        res.status(500).send({
            message:"Error in showing all category",
            error
        })

    }

}
export const getSingleCategoryController =async(req,res)=>{
    try{
        
        const category = await CategoryModel.findOne({slug:req.params.slug})
        res.status(200).send({
            message:"category",
            category
        })


    }
    catch(error){
        console.log(error)
        res.status(500).send({
            message:"Error in showing single category",
            error
        })

    }
}
export const DeleteController = async(req,res)=>{
    try{

        const {id}=req.params;
        await CategoryModel.findByIdAndDelete(id);
        res.status(200).send({
            message:"category deleted sucessfully",
    
        })
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            message:"error in deleting category",
            error
        })

    }

}