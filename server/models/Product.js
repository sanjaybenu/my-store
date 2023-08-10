const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    price: {
      type: Number ,
      required: true,
      unique: true
    },
    quantity: {
      type: Number,
      required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
  });
  
  const Product = model ("Product", productSchema);

  module.exports = Product