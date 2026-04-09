
const mongoose=require('mongoose');
const ProductAd = require('../../models/web/storage.js');
const loginAd=require('../../models/web/loginstorage.js');
const productAdInsert = (req, res) => {
  const {
    
    //password,
    brandName,
    price,
    username,
    location,
     condition,
  description,
  sellerName,
  sellerContact,
  sellerAddress
   /* category,
    condition,
    description,
    sellerName,
    sellerContact,
    sellerAddress*/
  } = req.body;

  
  
  const imagePath = req.file ? `/upload/${req.file.filename}` : null;
  // `req.files` will be an array of uploaded images (if using upload.array)
  //const imageFiles = req.files;

  //if (!imageFiles || imageFiles.length === 0) {
    //return res.status(400).json({ error: 'No images uploaded' });
  

  // Map filenames for saving to DB
  //const imageFilenames = imageFiles.map(file => file.filename);

  const newProductAd = new ProductAd({
   // username,
    //password,
    brandName,
    price,
    image:imagePath,
    username,
    location,
       condition,
  description,
  sellerName,
  sellerContact,
  sellerAddress
  //  adminRemark
   /* category,
    condition,
    description,
    images: imageFilenames, // Assuming images field is an array
    sellerName,
    sellerContact,
    sellerAddress*/
  });

  newProductAd.save()
    .then(() => res.send('Product Ad Saved with Images'))
    .catch(err => res.status(500).send(err));
};

const loginAdInsert = (req, res) => {
  const { username, password } = req.body;

  const newloginAd = new loginAd({ username, password });

  newloginAd.save()
    .then(() => res.send('Successfully logged in'))
    .catch(err => {
      console.error('Error saving login:', err);
      res.status(500).send('Error occurred');
    });
};

const ProductList = async (req, res) => {
  try {
    const products = await ProductAd.find();
    res.json(products); // Send as JSON
  } catch (err) {
    res.status(500).send("Error fetching product list");
  }
};

const verifyProduct=async(req,res)=>{
let itemid=req.params.id;
const product = await ProductAd.findByIdAndUpdate(
  itemid,
  { verify: true } ,
  {new:true}       // or { verified: 1 } if you store as Number
              
)
res.send({status:1,message:"sucessful",product})
}

const adminRemark=async(req,res)=>{
  try{
    const itemid=req.params.id;
    const { aremark } = req.body; 
    
     const productRemark = await ProductAd.findByIdAndUpdate(itemid,{adminRemark:aremark},{new:true});
     if(!productRemark)
     {
        res.send("Error Occurred");
     }else{
      res.send("Send sucessfully");
     }
  }
  catch(err){
    res.send(err)
  }
}

const siginDetails=async(req,res)=>{

 // let username=parseInt(req.params.username);
 let username = req.params.username; // keep as string

  
  const result=await loginAd.aggregate([{ 
    $match:{username:username}
  },{
    $lookup:{
      from:"productads",
      localField:"username",
        foreignField:"username",
        as:"userDetails"
    }  }])
    
    res.send(result);

  } 
  
const deletePersonalProduct=async(req,res)=>{
  const id=req.params.itemId;
   console.log("Deleting product with ID:", id);
  const result=await ProductAd.deleteOne({_id:id})
 
  res.send(result);
}

const editUserInfo=async(req,res)=>{
  const productId=req.params.itemId;
  const updatedData=req.body;
  const productEdit=await ProductAd.findByIdAndUpdate(
      productId,
      updatedData,
      { new: true } // return updated doc
    );
    if(!productEdit)
    {
      res.send("Product Not Found");
    }
    res.send("Product Updated");
}


module.exports = { productAdInsert ,loginAdInsert,ProductList,verifyProduct,adminRemark,siginDetails,deletePersonalProduct,editUserInfo};


