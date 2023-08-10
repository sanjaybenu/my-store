const {Schema, model } =require ("mongoose");

const categorySchema = new Schema ({
    name: {
        type: String,
        unique: true,
        req: true
    }

})

const Category = model("Category", categorySchema)

module.exports = Category;