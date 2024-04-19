const mongoose = require("mongoose");

// Define the schema for the blog post
const blogPostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    publishingDate: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String, 
        required:true
    },
    imageUrl:{
        type:String,
    }
});

// Define the BlogPost model
const blogPostModel = mongoose.model('BlogPost', blogPostSchema);
module.exports = blogPostModel;
