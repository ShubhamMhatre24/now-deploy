/*const mongoose = require('mongoose');

const ProductAdSchema = new mongoose.Schema({
   brandName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  condition: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },

  // Images - can be file paths, URLs, or base64 strings
  images: {
    type: [String],
    default: []
  },

  // Seller Details (flattened)
  sellerName: {
    type: String,
    required: true
  },
  sellerContact: {
    type: String,
    required: true
  },
  sellerAddress: {
    type: String,
    required: true
  },

  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const ProductAd = mongoose.model('ProductAd', ProductAdSchema);

module.exports = ProductAd; */

const mongoose = require('mongoose');
const { adminRemark } = require('../../controlllers/web/upload');

const productAdSchema = new mongoose.Schema({
  //username:String,
  //password:String,
  brandName: String,
  price: Number,
  image:String,
  verify:{type:Boolean,default:false},
  username:{type:String},
  location:String,
  adminRemark:String,
  condition:String,
  description:String,
  sellerName:String,
  sellerContact:Number,
  sellerAddress:String
  /*category: String,
  condition: String,
  description: String,
  images: [String], // array of image filenames
  sellerName: String,
  sellerContact: String,
  sellerAddress: String,
  createdAt: {
    type: Date,
    default: Date.now
  }*/
});

module.exports = mongoose.model('ProductAd', productAdSchema);

