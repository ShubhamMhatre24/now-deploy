/*let express=require('express');
const enquiryrouter = express.Router();
const  {productAdInsert}  = require('../../controlllers/web/upload');


enquiryrouter.post("/upload",productAdInsert);
module.exports = enquiryrouter; */



const express = require('express');
const enquiryrouter = express.Router();
const { productAdInsert,loginAdInsert, ProductList,verifyProduct,adminRemark,siginDetails,deletePersonalProduct,editUserInfo} = require('../../controlllers/web/upload');
const upload = require('../../../middleware/multer');


// Route to upload multiple images with other data
enquiryrouter.post('/upload',upload.single('image'), productAdInsert);
// `images` should match the name used in your form-data
enquiryrouter.post('/login',loginAdInsert);
enquiryrouter.get('/productlist',ProductList);
enquiryrouter.post('/verify/:id',verifyProduct);
enquiryrouter.post('/adminremark/:id',adminRemark);
enquiryrouter.get('/signin/:username',siginDetails);
enquiryrouter.delete('/deleteuserproduct/:itemId',deletePersonalProduct);
enquiryrouter.put('/edit/:itemId',editUserInfo);
module.exports = enquiryrouter;
