const { Schema, model } = require("mongoose");

const orderSchema = new Schema ({
    products: [{ 
        type: Schema.type.ObjectId,
        ref: "Product"
    }],
     purchaseDate: {
        type: Date,
        default: Date.now
     }

})

const Order = model('Order', orderSchema);

module.exports = Order;